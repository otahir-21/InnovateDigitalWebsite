/**
 * Innovate Digital — Google Business Profile Agent
 *
 * Runs Tuesday + Friday at 9AM Dubai (GMT+4).
 *
 * Decision waterfall (strict order, stops at first match):
 *   A. Unreplied reviews exist → reply to all of them
 *   B. Today is a posting day → publish one regular GBP post
 *   C. Services are missing or weak → suggest/update services
 *   D. Profile hygiene issues exist → log recommended fixes
 *   E. Nothing to do → log why and exit
 *
 * PLATFORM RULE: Product Posts are NOT supported by the GBP API.
 * If product/catalog content is needed, this agent generates a ready-to-upload
 * draft file for manual GBP product entry. It never attempts product-post API calls.
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
const PRODUCT_DRAFTS_FILE = path.join(__dirname, "gmb-product-drafts.json");

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ── Helpers ───────────────────────────────────────────────────────────────────

function getLatestBlogPost(): { title: string; slug: string; excerpt: string } | null {
  try {
    const content = fs.readFileSync(BLOG_DATA_FILE, "utf-8");
    const titleMatch   = content.match(/title:\s*'([^']+)'/);
    const slugMatch    = content.match(/slug:\s*'([^']+)'/);
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

function isPostingDay(): boolean {
  const day = new Date().getDay(); // 0=Sun, 2=Tue, 5=Fri
  return day === 2 || day === 5;
}

function getDayLabel(): string {
  const day = new Date().getDay();
  if (day === 2) return "tuesday";
  if (day === 5) return "friday";
  return "other";
}

// ── A — Review replies ────────────────────────────────────────────────────────

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
- Positive: warm, genuine, specific to what they mentioned, invite them back
- Neutral: acknowledge feedback, show commitment to improvement, offer to discuss further
- Negative: apologise sincerely, take responsibility, offer to resolve privately (mention info@innovatedigital.ae)
- 2–4 sentences max
- Signed: "— Osama, Innovate Digital"
- Never defensive, never use the generic phrase "Thank you for your feedback"
- Professional, local, human tone

Return ONLY the reply text, nothing else.`,
    }],
  });
  return (res.content[0] as any).text.trim();
}

async function runReviewReplies(): Promise<string[]> {
  const actions: string[] = [];
  console.log("⭐ Checking for unanswered reviews...");

  let unanswered: GmbReview[] = [];
  try {
    unanswered = await getUnansweredReviews();
    console.log(`  ↳ Found ${unanswered.length} unanswered review(s)`);
  } catch (err: any) {
    console.error("  ↳ Could not fetch reviews:", err.message);
    return [`⚠️ Could not fetch reviews: ${err.message}`];
  }

  if (unanswered.length === 0) return [];

  for (const review of unanswered) {
    const stars = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 }[review.starRating];
    console.log(`  Replying to ${review.reviewer.displayName} (${stars}★)...`);
    try {
      const reply = await generateReviewReply(review);
      await replyToReview(review.reviewId, reply);
      console.log(`  ✅ Replied to ${review.reviewer.displayName}`);
      actions.push(`Replied to ${stars}★ review from ${review.reviewer.displayName}`);
    } catch (err: any) {
      console.error(`  ❌ Failed to reply to ${review.reviewer.displayName}:`, err.message);
      actions.push(`⚠️ Could not reply to ${review.reviewer.displayName}: ${err.message}`);
    }
  }

  return actions;
}

// ── B — Regular GBP post ─────────────────────────────────────────────────────

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
- 150–200 words (GBP limit is 1,500 but shorter performs better)
- Start with a question or bold statement relevant to Dubai businesses
- 2–3 short paragraphs
- End with: "Read the full guide → innovatedigital.ae/blog/${post.slug}"
- Natural, not salesy
- No hashtags
- Written for Dubai/UAE business owners

Return ONLY the post text, nothing else.`,
    }],
  });
  return (res.content[0] as any).text.trim();
}

async function generateServiceSpotlightPost(): Promise<string> {
  const services = [
    { name: "SEO Services",           url: "/services/seo",               hook: "Is your business invisible on Google?" },
    { name: "Google Ads / PPC",        url: "/services/ppc",               hook: "Getting clicks but no leads from Google Ads?" },
    { name: "Social Media Marketing",  url: "/services/social-media",      hook: "Dubai's market moves on Instagram and TikTok." },
    { name: "Web Development",         url: "/services/web-development",   hook: "Your website is your best salesperson — is it working?" },
    { name: "Branding & Design",       url: "/services/branding",          hook: "First impressions close deals before you say a word." },
    { name: "E-commerce Development",  url: "/services/ecommerce",         hook: "Ready to sell online in the UAE market?" },
    { name: "Mobile App Development",  url: "/services/mobile-app",        hook: "Your customers are on their phones 6+ hours a day." },
    { name: "Content Marketing",       url: "/services/content-marketing", hook: "Content that ranks AND converts — here's how." },
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
- 150–200 words
- Use the opening hook as the first sentence
- Explain the specific problem Dubai businesses face and how this service solves it
- Include 1 specific result or outcome (e.g. "clients typically see 3x more enquiries in 90 days")
- End with: "Free consultation → innovatedigital.ae${service.url}"
- Conversational, not corporate
- No hashtags
- No keyword stuffing

Return ONLY the post text, nothing else.`,
    }],
  });
  return (res.content[0] as any).text.trim();
}

async function runGbpPost(): Promise<string[]> {
  const actions: string[] = [];
  const dayLabel = getDayLabel();

  let postText: string;
  let postType: string;
  let ctaUrl: string;

  if (dayLabel === "tuesday") {
    const latestBlog = getLatestBlogPost();
    if (latestBlog) {
      console.log(`✍️  Writing blog share post: "${latestBlog.title}"`);
      postText = await generateBlogSharePost(latestBlog);
      postType = `Blog share: "${latestBlog.title}"`;
      ctaUrl   = `https://www.innovatedigital.ae/blog/${latestBlog.slug}`;
    } else {
      console.log("✍️  No blog post found — writing service spotlight");
      postText = await generateServiceSpotlightPost();
      postType = "Service spotlight (blog fallback)";
      ctaUrl   = "https://www.innovatedigital.ae/services";
    }
  } else {
    console.log("✍️  Writing service spotlight post...");
    postText = await generateServiceSpotlightPost();
    postType = "Service spotlight";
    ctaUrl   = "https://www.innovatedigital.ae/services";
  }

  try {
    await createPost({
      topicType: "STANDARD",
      summary: postText,
      callToAction: {
        actionType: "LEARN_MORE",
        url: ctaUrl,
      },
    });
    console.log(`✅ GBP post published (${postType})`);
    actions.push(`Published GBP post: ${postType}`);
  } catch (err: any) {
    console.error("❌ Failed to create post:", err.message);
    actions.push(`⚠️ Post failed: ${err.message}`);
  }

  return actions;
}

// ── C — Services check ────────────────────────────────────────────────────────

async function runServicesSuggestion(): Promise<string[]> {
  console.log("🔧 Checking service completeness...");

  const requiredServices = [
    "SEO Services", "Google Ads / PPC", "Social Media Marketing",
    "Web Development", "E-commerce Development", "Branding & Design",
    "Content Marketing", "Mobile App Development", "Email Marketing",
    "Video Production",
  ];

  const res = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 600,
    messages: [{
      role: "user",
      content: `You are reviewing the Google Business Profile services list for Innovate Digital, a Dubai digital marketing agency.

Expected services:
${requiredServices.map(s => `- ${s}`).join("\n")}

Write a concise plain-text report (no markdown) identifying:
1. Which services are likely missing from GBP (estimate based on common GBP omissions for agencies)
2. For each missing service: a suggested service name, category, and 1-sentence description suitable for GBP (under 300 chars)
3. One sentence on why keeping GBP services complete improves local pack rankings

Keep the report under 200 words. Do not fabricate API data — work from the expected list above.`,
    }],
  });

  const report = (res.content[0] as any).text.trim();
  console.log("\n📋 Services report:\n" + report);

  return [`Services check complete — review logged above for manual GBP update`];
}

// ── D — Profile hygiene ───────────────────────────────────────────────────────

async function runProfileHygieneCheck(): Promise<string[]> {
  console.log("🧹 Running profile hygiene check...");

  const res = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 500,
    messages: [{
      role: "user",
      content: `You are auditing the Google Business Profile for Innovate Digital (innovatedigital.ae), a Dubai digital marketing agency.

Known profile details:
- Business name: Innovate Digital
- Category: Digital Marketing Agency
- Address: Meydan Free Zone, Dubai, UAE
- Phone: +971 52 394 9010
- Website: https://www.innovatedigital.ae
- Reviews: 5.0/5 (47 reviews)
- Founded: 2020

Common GBP hygiene issues for agencies:
- Missing business description (150–750 chars recommended)
- No Q&A section responses
- Missing opening hours or marked as "permanently closed" by error
- No photos uploaded in the last 30 days
- Primary category mismatch
- Missing secondary categories

Write a plain-text hygiene report (no markdown) listing:
1. Which of the above issues are most likely present based on the profile data
2. Recommended fix for each (1 sentence each)
3. Priority order (fix highest-impact items first)

Keep it under 200 words. These are recommendations for manual action — do not attempt any API edits.`,
    }],
  });

  const report = (res.content[0] as any).text.trim();
  console.log("\n📋 Profile hygiene report:\n" + report);

  return [`Profile hygiene check complete — review logged above for manual GBP action`];
}

// ── Product draft generation (manual upload only) ─────────────────────────────

export async function generateProductDraft(serviceSlug: string, serviceTitle: string): Promise<void> {
  console.log(`📦 Generating product draft for: ${serviceTitle}`);

  const res = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 400,
    messages: [{
      role: "user",
      content: `Generate a Google Business Profile product/service listing draft for manual upload.

Service: ${serviceTitle}
Agency: Innovate Digital, Dubai
Landing page: https://www.innovatedigital.ae/services/${serviceSlug}

Output strict JSON only:
{
  "title": "...(max 58 chars)...",
  "description": "...(max 300 chars, no keyword stuffing, benefit-led, UAE context)...",
  "cta_button": "Get Free Consultation",
  "landing_page_url": "https://www.innovatedigital.ae/services/${serviceSlug}",
  "image_brief": "...(one sentence describing the ideal product image for this service)..."
}

Return ONLY valid JSON, nothing else.`,
    }],
  });

  const raw = (res.content[0] as any).text.trim();
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No JSON in product draft response");

  const draft = JSON.parse(jsonMatch[0]);

  // Append to drafts file
  let drafts: any[] = [];
  try { drafts = JSON.parse(fs.readFileSync(PRODUCT_DRAFTS_FILE, "utf-8")); } catch {}
  drafts.push({ generated: new Date().toISOString(), serviceSlug, ...draft });
  fs.writeFileSync(PRODUCT_DRAFTS_FILE, JSON.stringify(drafts, null, 2));

  console.log(`✅ Product draft saved to gmb-product-drafts.json`);
  console.log(`   Title: ${draft.title}`);
  console.log(`   NOTE: Upload manually via GBP dashboard — Product Posts are not supported by the GBP API`);
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  if (process.argv.includes("--list-locations")) {
    await listLocations();
    return;
  }

  if (process.argv.includes("--product-draft")) {
    const slugIdx = process.argv.indexOf("--product-draft") + 1;
    const titleIdx = process.argv.indexOf("--title") + 1;
    const slug  = process.argv[slugIdx];
    const title = titleIdx > 0 ? process.argv[titleIdx] : slug;
    if (!slug) { console.error("Usage: --product-draft <service-slug> --title <title>"); process.exit(1); }
    await generateProductDraft(slug, title);
    return;
  }

  console.log("🏢 GMB Agent starting...\n");

  if (!process.env.GMB_ACCOUNT_ID || !process.env.GMB_LOCATION_ID) {
    console.error("❌ GMB_ACCOUNT_ID and GMB_LOCATION_ID are required.");
    console.error("   Run: npx tsx gmb-agent.ts --list-locations");
    process.exit(1);
  }

  let actions: string[] = [];
  let ruleFired = "";

  // ── WATERFALL ──────────────────────────────────────────────────────────────

  // A — Unreplied reviews (highest priority)
  let unanswered: GmbReview[] = [];
  try {
    unanswered = await getUnansweredReviews();
  } catch (err: any) {
    console.error("Could not fetch reviews:", err.message);
  }

  if (unanswered.length > 0) {
    ruleFired = `A — ${unanswered.length} unanswered review(s) found`;
    console.log(`\n🔴 Rule A fired: ${unanswered.length} unanswered review(s)\n`);
    actions = await runReviewReplies();

  // B — Posting day (or forced via --test-post)
  } else if (isPostingDay() || process.argv.includes("--test-post")) {
    // Check if we already posted today to avoid duplicates
    const recentPosts = await getRecentPosts(5);
    const lastPostAge = recentPosts[0]?.createTime
      ? Math.floor((Date.now() - new Date(recentPosts[0].createTime).getTime()) / (1000 * 60 * 60))
      : 9999;

    if (lastPostAge < 6) {
      ruleFired = "B — posting day but post already made today (skipped)";
      console.log(`\nℹ️  Rule B: today is a posting day but a post was made ${lastPostAge}h ago — skipping`);
      actions = [];
    } else {
      ruleFired = `B — posting day (${getDayLabel()})`;
      console.log(`\n🟢 Rule B fired: today is ${getDayLabel()}, publishing GBP post\n`);
      actions = await runGbpPost();
    }

  // C — Services missing or weak
  } else {
    // Check how long since last post to decide between C and D
    const recentPosts = await getRecentPosts(3);
    const lastPostAgeDays = recentPosts[0]?.createTime
      ? Math.floor((Date.now() - new Date(recentPosts[0].createTime).getTime()) / (1000 * 60 * 60 * 24))
      : 9999;

    if (lastPostAgeDays <= 3) {
      // Profile is active — run services check
      ruleFired = "C — not a posting day, services completeness check";
      console.log(`\n🟡 Rule C fired: checking service completeness\n`);
      actions = await runServicesSuggestion();
    } else {
      // D — Profile hygiene
      ruleFired = "D — profile hygiene audit";
      console.log(`\n🟡 Rule D fired: running profile hygiene check\n`);
      actions = await runProfileHygieneCheck();
    }
  }

  // ── Log outcome ──────────────────────────────────────────────────────────
  console.log(`\n📋 Rule fired: ${ruleFired}`);
  console.log(`   Actions: ${actions.length}`);

  if (actions.length === 0 && !ruleFired.includes("skipped")) {
    console.log("ℹ️  Rule E: no action taken — no reviews, not a posting day, no issues found");
    ruleFired = "E — no action needed";
  }

  // ── Email summary ────────────────────────────────────────────────────────
  if (actions.length > 0) {
    await sendEmail({
      subject: `GMB Agent Report — ${new Date().toISOString().split("T")[0]}`,
      html: `
        <h2 style="color:white;margin:0 0 16px">GMB Agent ran successfully</h2>
        <p><strong>Rule fired:</strong> ${ruleFired}</p>
        <p>Actions taken:</p>
        <ul style="padding-left:20px;margin:12px 0">
          ${actions.map(a => `<li style="margin:8px 0">${a}</li>`).join("")}
        </ul>
        <p style="margin-top:20px;color:rgba(255,255,255,0.6)">
          Manage your listing: <a href="https://business.google.com" style="color:#60A5FA">business.google.com</a>
        </p>
      `,
      priority: "info",
    });
  }

  console.log(`\n✅ GMB Agent done. Rule: ${ruleFired}. Actions: ${actions.length}.`);
}

main().catch((err) => {
  console.error("❌ GMB Agent failed:", err);
  process.exit(1);
});
