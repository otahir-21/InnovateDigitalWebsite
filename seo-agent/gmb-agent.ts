/**
 * Innovate Digital — GMB (Google Business Profile) Agent
 *
 * Runs Tuesday + Friday at 9AM Dubai:
 * 1. Reads latest blog post from the site
 * 2. Writes 2 GMB posts per week using Claude (one blog share, one service spotlight)
 * 3. Finds unanswered reviews and replies to all of them with Claude
 * 4. Emails a summary of what it did
 *
 * Setup checklist:
 * - Add service account as Manager on your GBP listing
 * - Add GMB_ACCOUNT_ID and GMB_LOCATION_ID to GitHub Secrets
 * - Run locally with --list-locations flag first to find your IDs
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  getUnansweredReviews,
  getRecentPosts,
  createPost,
  replyToReview,
  listLocations,
  type GmbReview,
} from "./gmb-client.js";
import { sendEmail } from "./email-client.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BLOG_DATA_FILE = path.join(ROOT, "lib", "blogPostsData.ts");

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ── Helpers ───────────────────────────────────────────────────────────────────

function getLatestBlogPost(): { title: string; slug: string; excerpt: string } | null {
  try {
    const content = fs.readFileSync(BLOG_DATA_FILE, "utf-8");
    // Get first post (they're prepended, so index 0 = newest)
    const titleMatch = content.match(/title:\s*'([^']+)'/);
    const slugMatch  = content.match(/slug:\s*'([^']+)'/);
    const excerptMatch = content.match(/excerpt:\s*'([^']+)'/);
    if (!titleMatch || !slugMatch) return null;
    return {
      title:   titleMatch[1],
      slug:    slugMatch[1],
      excerpt: excerptMatch?.[1] || "",
    };
  } catch {
    return null;
  }
}

function getDayOfWeek(): "tuesday" | "friday" | "other" {
  const day = new Date().getDay(); // 0=Sun, 2=Tue, 5=Fri
  if (day === 2) return "tuesday";
  if (day === 5) return "friday";
  return "other";
}

// ── Post generation ───────────────────────────────────────────────────────────

/** Tuesday post: share the latest blog post */
async function generateBlogSharePost(post: { title: string; slug: string; excerpt: string }): Promise<string> {
  const res = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 400,
    messages: [{
      role: "user",
      content: `Write a Google Business Profile post sharing this blog article.

Blog title: ${post.title}
Blog excerpt: ${post.excerpt}
URL: https://www.innovatedigital.ae/blog/${post.slug}

Requirements:
- 150-200 words max (GBP limit is 1,500 but shorter performs better)
- Start with a hook — a question or bold statement relevant to Dubai businesses
- 2-3 short paragraphs
- End with: "Read the full guide → innovatedigital.ae/blog/${post.slug}"
- Natural, not salesy
- No hashtags (GBP doesn't rank for them)
- Written for Dubai/UAE business owners

Return ONLY the post text, nothing else.`,
    }],
  });
  return (res.content[0] as any).text.trim();
}

/** Friday post: service spotlight (rotates weekly) */
async function generateServiceSpotlightPost(): Promise<string> {
  // Rotate through services by week number
  const services = [
    { name: "SEO Services",           url: "/services/seo",              hook: "Is your business invisible on Google?" },
    { name: "Google Ads / PPC",        url: "/services/ppc",              hook: "Getting clicks but no leads from Google Ads?" },
    { name: "Social Media Marketing",  url: "/services/social-media",     hook: "Dubai's market moves on Instagram and TikTok." },
    { name: "Web Development",         url: "/services/web-development",  hook: "Your website is your best salesperson — is it working?" },
    { name: "Branding & Design",       url: "/services/branding",         hook: "First impressions close deals before you say a word." },
    { name: "E-commerce Development",  url: "/services/ecommerce",        hook: "Ready to sell online in the UAE market?" },
    { name: "Mobile App Development",  url: "/services/mobile-app",       hook: "Your customers are on their phones 6+ hours a day." },
    { name: "Content Marketing",       url: "/services/content-marketing",hook: "Content that ranks AND converts — here's how." },
  ];

  const weekOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (7 * 24 * 60 * 60 * 1000)
  );
  const service = services[weekOfYear % services.length];

  const res = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 400,
    messages: [{
      role: "user",
      content: `Write a Google Business Profile post spotlighting this service for Dubai businesses.

Service: ${service.name}
Opening hook: "${service.hook}"
URL: https://www.innovatedigital.ae${service.url}
Company: Innovate Digital — Dubai digital marketing agency, 200+ clients, 5★ rated

Requirements:
- 150-200 words
- Use the opening hook as the first sentence
- Explain the specific problem Dubai businesses face and how this service solves it
- Include 1 specific result/outcome (e.g. "clients typically see 3x more enquiries in 90 days")
- End with: "Free consultation → innovatedigital.ae${service.url}"
- Conversational, not corporate
- No hashtags

Return ONLY the post text, nothing else.`,
    }],
  });
  return (res.content[0] as any).text.trim();
}

// ── Review responses ──────────────────────────────────────────────────────────

async function generateReviewReply(review: GmbReview): Promise<string> {
  const stars = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 }[review.starRating];
  const sentiment = stars >= 4 ? "positive" : stars === 3 ? "neutral" : "negative";

  const res = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 200,
    messages: [{
      role: "user",
      content: `Write a Google Business Profile review reply for Innovate Digital (Dubai digital marketing agency).

Reviewer: ${review.reviewer.displayName}
Star rating: ${stars}/5
Review text: "${review.comment || "(no text, just stars)"}"
Sentiment: ${sentiment}

Rules:
- Thank the reviewer by first name if available
- For positive: warm, genuine, specific to what they mentioned, invite them back
- For neutral: acknowledge, show commitment to improvement, offer to discuss
- For negative: apologise sincerely, take responsibility, offer to resolve privately (mention info@innovatedigital.ae)
- 2-4 sentences max
- Signed: "— Osama, Innovate Digital"
- Never defensive, never generic "Thank you for your feedback"

Return ONLY the reply text, nothing else.`,
    }],
  });
  return (res.content[0] as any).text.trim();
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  // Handle --list-locations flag for setup
  if (process.argv.includes("--list-locations")) {
    await listLocations();
    return;
  }

  console.log("🏢 GMB Agent starting...\n");

  if (!process.env.GMB_ACCOUNT_ID || !process.env.GMB_LOCATION_ID) {
    console.error("❌ GMB_ACCOUNT_ID and GMB_LOCATION_ID are required.");
    console.error("   Run: npx tsx gmb-agent.ts --list-locations");
    process.exit(1);
  }

  const actions: string[] = [];

  // ── 1. Create a post (if today is Tuesday or Friday) ──────────────────────
  const day = getDayOfWeek();
  const recentPosts = await getRecentPosts(5);
  const lastPostAge = recentPosts[0]?.createTime
    ? Math.floor((Date.now() - new Date(recentPosts[0].createTime).getTime()) / (1000 * 60 * 60 * 24))
    : 999;

  // Post if it's the right day OR if nothing has been posted in 4+ days
  if (day !== "other" || lastPostAge >= 4) {
    let postText: string;
    let postType: string;

    if (day === "tuesday") {
      const latestBlog = getLatestBlogPost();
      if (latestBlog) {
        console.log(`✍️  Writing blog share post for: "${latestBlog.title}"`);
        postText = await generateBlogSharePost(latestBlog);
        postType = `Blog share: "${latestBlog.title}"`;
      } else {
        console.log("✍️  No blog post found — writing service spotlight instead");
        postText = await generateServiceSpotlightPost();
        postType = "Service spotlight (fallback)";
      }
    } else {
      console.log("✍️  Writing service spotlight post...");
      postText = await generateServiceSpotlightPost();
      postType = "Service spotlight";
    }

    try {
      await createPost({
        topicType: "STANDARD",
        summary: postText,
        callToAction: {
          actionType: "LEARN_MORE",
          url: "https://www.innovatedigital.ae",
        },
      });
      console.log(`✅ GMB post published (${postType})`);
      actions.push(`Published GBP post: ${postType}`);
    } catch (err: any) {
      console.error("❌ Failed to create post:", err.message);
      actions.push(`⚠️ Post failed: ${err.message}`);
    }
  } else {
    console.log(`⏭️  Skipping post (last post was ${lastPostAge} day(s) ago, not Tuesday/Friday)`);
  }

  // ── 2. Reply to unanswered reviews ────────────────────────────────────────
  console.log("\n⭐ Checking for unanswered reviews...");
  let unanswered: GmbReview[] = [];
  try {
    unanswered = await getUnansweredReviews();
    console.log(`  ↳ Found ${unanswered.length} unanswered review(s)`);
  } catch (err: any) {
    console.error("  ↳ Could not fetch reviews:", err.message);
  }

  for (const review of unanswered) {
    const stars = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 }[review.starRating];
    console.log(`  Replying to ${review.reviewer.displayName} (${stars}★)...`);
    try {
      const reply = await generateReviewReply(review);
      await replyToReview(review.reviewId, reply);
      console.log(`  ✅ Replied to ${review.reviewer.displayName}`);
      actions.push(`Replied to ${stars}★ review from ${review.reviewer.displayName}`);
    } catch (err: any) {
      console.error(`  ❌ Failed to reply to review ${review.reviewId}:`, err.message);
      actions.push(`⚠️ Could not reply to ${review.reviewer.displayName}: ${err.message}`);
    }
  }

  // ── 3. Email summary ──────────────────────────────────────────────────────
  if (actions.length > 0) {
    await sendEmail({
      subject: `🏢 GMB Agent Report — ${new Date().toISOString().split("T")[0]}`,
      html: `
        <h2 style="color:white;margin:0 0 16px">GMB Agent ran successfully</h2>
        <p>Here's what was done today:</p>
        <ul style="padding-left:20px;margin:12px 0">
          ${actions.map((a) => `<li style="margin:8px 0">${a}</li>`).join("")}
        </ul>
        <p style="margin-top:20px;color:rgba(255,255,255,0.6)">View your listing: <a href="https://business.google.com" style="color:#60A5FA">business.google.com</a></p>
      `,
      priority: "info",
    });
  }

  console.log(`\n✅ GMB Agent done. ${actions.length} action(s) taken.`);
}

main().catch((err) => {
  console.error("❌ GMB Agent failed:", err);
  process.exit(1);
});
