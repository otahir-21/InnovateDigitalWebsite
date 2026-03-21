/**
 * Innovate Digital — Smart Blog Agent
 *
 * Thinks for itself:
 * 1. Pulls page-2 keywords from Google Search Console (real ranking data)
 * 2. Scrapes competitor blogs to find content gaps
 * 3. Picks the highest-opportunity topic automatically
 * 4. Writes 1,500-2,000 word SEO post with internal links to service pages
 * 5. Generates DALL-E 3 header image
 * 6. Appends to blogPostsData.ts
 * 7. Opens a GitHub issue with what it did + what it needs
 */

import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";
import { getPage2Keywords, getTopPages, getSiteStats } from "./gsc-client.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BLOG_DATA_FILE = path.join(ROOT, "lib", "blogPostsData.ts");
const BLOG_IMAGES_DIR = path.join(ROOT, "public", "blog");

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ── Service pages for internal linking ────────────────────────────────────────
const SERVICE_PAGES = [
  { name: "SEO Services Dubai", url: "/services/seo", keywords: ["seo", "search engine", "ranking", "organic"] },
  { name: "Google Ads / PPC", url: "/services/ppc", keywords: ["google ads", "ppc", "paid ads", "advertising"] },
  { name: "Social Media Marketing", url: "/services/social-media", keywords: ["social media", "instagram", "facebook", "tiktok"] },
  { name: "Web Development", url: "/services/web-development", keywords: ["website", "web design", "web development"] },
  { name: "E-commerce", url: "/services/ecommerce", keywords: ["ecommerce", "online store", "shopify"] },
  { name: "Content Marketing", url: "/services/content-marketing", keywords: ["content", "blog", "copywriting"] },
  { name: "Branding & Design", url: "/services/branding", keywords: ["branding", "logo", "design", "identity"] },
  { name: "Email Marketing", url: "/services/email-marketing", keywords: ["email", "newsletter", "email marketing"] },
  { name: "Video Production", url: "/services/video-production", keywords: ["video", "production", "youtube"] },
  { name: "Mobile App Development", url: "/services/mobile-app", keywords: ["mobile app", "app development"] },
  { name: "Analytics & Reporting", url: "/services/analytics", keywords: ["analytics", "reporting", "data", "tracking"] },
  { name: "Marketing Automation", url: "/services/marketing-automation", keywords: ["automation", "crm", "workflow"] },
];

// ── Competitor URLs from env ───────────────────────────────────────────────────
const COMPETITOR_URLS = (process.env.COMPETITOR_URLS || "")
  .split(",")
  .map((u) => u.trim())
  .filter(Boolean);

// ── Fallback topics if GSC + competitors return nothing useful ─────────────────
const FALLBACK_TOPICS = [
  "Digital marketing trends UAE 2026: what every business needs to know",
  "How to choose the right digital marketing agency in Dubai",
  "WhatsApp marketing for Dubai businesses: complete guide 2026",
  "Google Business Profile optimisation Dubai: step by step guide",
  "Content marketing ROI for UAE businesses: how to measure and improve",
];

// ── Scrape competitor blog titles (lightweight, no heavy libs) ─────────────────
async function fetchCompetitorTopics(url: string): Promise<string[]> {
  return new Promise((resolve) => {
    const client = url.startsWith("https") ? https : http;
    const req = client.get(
      url,
      { headers: { "User-Agent": "Mozilla/5.0 (compatible; InnovateDigitalBot/1.0)" }, timeout: 8000 },
      (res) => {
        let html = "";
        res.on("data", (chunk) => (html += chunk));
        res.on("end", () => {
          // Extract <title>, <h1>, <h2> tags as topic signals
          const titles: string[] = [];
          const matches = html.matchAll(/<(?:h1|h2|title)[^>]*>([^<]{20,120})<\/(?:h1|h2|title)>/gi);
          for (const m of matches) {
            const text = m[1].replace(/&amp;/g, "&").replace(/&#\d+;/g, "").trim();
            if (text.length > 20) titles.push(text);
          }
          resolve(titles.slice(0, 30));
        });
      }
    );
    req.on("error", () => resolve([]));
    req.on("timeout", () => { req.destroy(); resolve([]); });
  });
}

function getExistingSlugs(): string[] {
  const content = fs.readFileSync(BLOG_DATA_FILE, "utf-8");
  const slugMatches = content.match(/slug:\s*'([^']+)'/g) || [];
  return slugMatches.map((m) => m.replace(/slug:\s*'/, "").replace("'", ""));
}

function getExistingTitles(): string[] {
  const content = fs.readFileSync(BLOG_DATA_FILE, "utf-8");
  const titleMatches = content.match(/title:\s*'([^']+)'/g) || [];
  return titleMatches.map((m) => m.replace(/title:\s*'/, "").replace(/'\s*$/, "").toLowerCase());
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 60);
}

async function downloadImage(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
}

/** Ask Claude to pick the best topic given all the data */
async function pickBestTopic(
  page2Keywords: { query: string; position: number; impressions: number }[],
  competitorTopics: string[],
  existingTitles: string[],
  topPages: { page: string; clicks: number }[]
): Promise<string> {
  const prompt = `You are an SEO strategist for Innovate Digital, a digital marketing agency in Dubai, UAE.

GOAL: Pick the single best blog topic to write today for maximum organic traffic growth.

DATA AVAILABLE:

## Page 2 Keywords (our site ranks 11-20 — one good post can push to page 1)
${page2Keywords.length > 0 ? page2Keywords.map((k) => `- "${k.query}" (position ${k.position}, ${k.impressions} impressions/month)`).join("\n") : "No GSC data available yet"}

## Competitor Topics (what competitors cover that we might be missing)
${competitorTopics.length > 0 ? competitorTopics.slice(0, 20).map((t) => `- ${t}`).join("\n") : "No competitor data available"}

## Our Top Performing Pages (what works for us)
${topPages.map((p) => `- ${p.page} (${p.clicks} clicks)`).join("\n")}

## Topics We Already Covered (do NOT repeat these)
${existingTitles.slice(0, 30).map((t) => `- ${t}`).join("\n")}

RULES:
- Must target Dubai/UAE audience specifically
- Must be a topic people actually search for (commercial or informational intent)
- Must be something we haven't written about yet
- Prefer page-2 keywords if available — they have the fastest path to page 1
- If no GSC data, find a gap competitors cover that we don't

Return ONLY the blog post title. Nothing else. No explanation. Just the title.`;

  const response = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 100,
    messages: [{ role: "user", content: prompt }],
  });

  return (response.content[0] as any).text.trim().replace(/^["']|["']$/g, "");
}

async function generateBlogPost(topic: string, internalLinks: typeof SERVICE_PAGES): Promise<string> {
  console.log(`✍️  Writing: "${topic}"`);

  const relevantLinks = internalLinks.filter((s) =>
    s.keywords.some((kw) => topic.toLowerCase().includes(kw))
  );

  const stream = anthropic.messages.stream({
    model: "claude-opus-4-6",
    max_tokens: 8000,
    thinking: { type: "enabled", budgetTokens: 2000 },
    messages: [{
      role: "user",
      content: `You are a senior content strategist at Innovate Digital, Dubai's leading digital marketing agency (innovatedigital.ae).

Write a comprehensive SEO blog post on this topic:
TOPIC: ${topic}

REQUIREMENTS:
- 1,500–2,000 words of ACTUAL content (not counting headings)
- Targets UAE/Dubai businesses specifically
- Uses UAE-relevant statistics, AED pricing where applicable
- Written in British English
- One H1 (the title), clear H2s and H3s
- Natural internal links to our services where relevant:
${relevantLinks.map((l) => `  - [${l.name}](https://www.innovatedigital.ae${l.url})`).join("\n")}
- Ends with a CTA mentioning Innovate Digital and linking to /contact
- Formatted in clean HTML using <h2>, <h3>, <p>, <ul>, <li>, <strong>, <a> tags

Return ONLY valid JSON (no markdown, no code blocks):
{
  "title": "...",
  "excerpt": "...(150-160 chars)...",
  "content": "...(full HTML)...",
  "metaDescription": "...(140-160 chars)...",
  "keywords": ["...8 keywords..."],
  "tags": ["...5 tags..."],
  "readTime": "X min read",
  "category": "..."
}`,
    }],
  });

  let fullText = "";
  for await (const event of stream) {
    if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
      fullText += event.delta.text;
    }
  }
  return fullText;
}

async function generateBlogImage(topic: string, slug: string): Promise<string> {
  console.log("🎨 Generating image...");
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Professional blog header for: "${topic}". Dubai/UAE business context. Clean, modern, corporate. Deep blue and gold tones. No text. 16:9 format.`,
      n: 1,
      size: "1792x1024",
      quality: "standard",
    });
    const imageUrl = response.data[0]?.url;
    if (!imageUrl) throw new Error("No URL");
    fs.mkdirSync(BLOG_IMAGES_DIR, { recursive: true });
    const dest = path.join(BLOG_IMAGES_DIR, `${slug}.jpg`);
    await downloadImage(imageUrl, dest);
    return `/blog/${slug}.jpg`;
  } catch {
    return "/blog-placeholder.svg";
  }
}

async function appendPost(post: Record<string, any>): Promise<void> {
  const content = fs.readFileSync(BLOG_DATA_FILE, "utf-8");
  const entry = `  {
    id: '${post.id}',
    slug: '${post.slug}',
    title: '${post.title.replace(/'/g, "\\'")}',
    excerpt: '${post.excerpt.replace(/'/g, "\\'")}',
    content: \`${post.content.replace(/`/g, "\\`")}\`,
    author: 'Osama Tahir',
    authorRole: 'Founder, Innovate Digital',
    date: '${post.date}',
    category: '${post.category}',
    tags: ${JSON.stringify(post.tags)},
    readTime: '${post.readTime}',
    image: '${post.image}',
    featured: false,
    metaDescription: '${post.metaDescription.replace(/'/g, "\\'")}',
    keywords: ${JSON.stringify(post.keywords)},
  },`;

  const updated = content.replace(
    "export const blogPosts: BlogPost[] = [",
    `export const blogPosts: BlogPost[] = [\n${entry}`
  );
  fs.writeFileSync(BLOG_DATA_FILE, updated, "utf-8");
}

async function main() {
  console.log("🚀 Smart Blog Agent starting...\n");

  // ── 1. Gather intelligence ──────────────────────────────────────────────────
  console.log("📊 Fetching GSC data...");
  const [page2Keywords, topPages, siteStats] = await Promise.allSettled([
    getPage2Keywords(28),
    getTopPages(28),
    getSiteStats(7),
  ]);

  const keywords = page2Keywords.status === "fulfilled" ? page2Keywords.value : [];
  const pages = topPages.status === "fulfilled" ? topPages.value : [];
  const stats = siteStats.status === "fulfilled" ? siteStats.value : null;

  console.log(`  ↳ Page-2 keywords found: ${keywords.length}`);
  console.log(`  ↳ Top pages: ${pages.length}`);
  if (stats) console.log(`  ↳ Last 7 days: ${stats.totalClicks} clicks, ${stats.totalImpressions} impressions`);

  console.log("\n🔍 Scraping competitors...");
  const competitorTopics: string[] = [];
  for (const url of COMPETITOR_URLS) {
    const topics = await fetchCompetitorTopics(url + "/blog");
    competitorTopics.push(...topics);
    console.log(`  ↳ ${url}: ${topics.length} topics found`);
  }

  // ── 2. Pick best topic ──────────────────────────────────────────────────────
  const existingTitles = getExistingTitles();
  const existingSlugs = getExistingSlugs();

  console.log("\n🧠 Picking best topic...");
  let topic: string;
  try {
    topic = await pickBestTopic(keywords, competitorTopics, existingTitles, pages);
  } catch {
    topic = FALLBACK_TOPICS[Math.floor(Math.random() * FALLBACK_TOPICS.length)];
    console.log("  ↳ GSC unavailable, using fallback topic");
  }
  console.log(`  ↳ Topic selected: "${topic}"`);

  // ── 3. Generate content + image ─────────────────────────────────────────────
  const date = new Date().toISOString().split("T")[0];
  const baseSlug = slugify(topic);
  const slug = `${baseSlug}-${date}`;

  if (existingSlugs.includes(slug)) {
    console.log("⚠️  Already published today. Exiting.");
    return;
  }

  const [rawJson, imagePath] = await Promise.all([
    generateBlogPost(topic, SERVICE_PAGES),
    generateBlogImage(topic, slug),
  ]);

  // ── 4. Parse + save ─────────────────────────────────────────────────────────
  const jsonMatch = rawJson.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No JSON in response");
  const parsed = JSON.parse(jsonMatch[0]);

  const newId = String(existingSlugs.length + 1);
  await appendPost({
    id: newId,
    slug,
    date,
    image: imagePath,
    ...parsed,
  });

  console.log(`\n✅ Published: "${parsed.title}"`);
  console.log(`   Slug:  /blog/${slug}`);
  console.log(`   Image: ${imagePath}`);

  // ── 5. Print weekly report data for GitHub Issue ────────────────────────────
  console.log("\n📋 REPORT_DATA_START");
  console.log(JSON.stringify({
    topic,
    slug,
    date,
    page2Keywords: keywords.slice(0, 5),
    siteStats: stats,
    competitorTopicsFound: competitorTopics.length,
  }));
  console.log("REPORT_DATA_END");
}

main().catch((err) => {
  console.error("❌ Smart Blog Agent failed:", err);
  process.exit(1);
});
