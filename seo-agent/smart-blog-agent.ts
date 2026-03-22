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
import { getConvertingBlogPosts, getGA4SiteStats } from "./ga4-client.js";

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

// ── Services we offer — used for keyword research when GSC has no data ────────
const OUR_SERVICES = SERVICE_PAGES.map((s) => s.name);

// ── HTTP fetch helper ──────────────────────────────────────────────────────────
function fetchUrl(url: string, timeoutMs = 8000): Promise<string> {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const req = client.get(
      url,
      { headers: { "User-Agent": "Mozilla/5.0 (compatible; InnovateDigitalBot/1.0)" }, timeout: timeoutMs },
      (res) => {
        // Follow one redirect
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetchUrl(res.headers.location, timeoutMs).then(resolve).catch(reject);
        }
        if (res.statusCode && res.statusCode >= 400) return reject(new Error(`HTTP ${res.statusCode}`));
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => resolve(body));
      }
    );
    req.on("error", reject);
    req.on("timeout", () => { req.destroy(); reject(new Error("timeout")); });
  });
}

function decodeEntities(s: string): string {
  return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n))).trim();
}

// Strategy 1: RSS / Atom feed
async function tryRss(url: string): Promise<string[]> {
  try {
    const xml = await fetchUrl(url, 6000);
    if (!xml.includes("<rss") && !xml.includes("<feed") && !xml.includes("<channel")) return [];
    const titles: string[] = [];
    // RSS <item><title> and Atom <entry><title>
    for (const m of xml.matchAll(/<(?:item|entry)[\s\S]*?<\/(?:item|entry)>/gi)) {
      const t = m[0].match(/<title[^>]*>(?:<!\[CDATA\[)?\s*([\s\S]*?)\s*(?:\]\]>)?<\/title>/i);
      if (t) { const text = decodeEntities(t[1]); if (text.length > 20 && text.length < 200) titles.push(text); }
    }
    return titles.slice(0, 30);
  } catch { return []; }
}

// Strategy 2: XML sitemap (handles sitemap index too, one level deep)
async function trySitemap(url: string, depth = 0): Promise<string[]> {
  try {
    const xml = await fetchUrl(url, 6000);
    if (!xml.includes("<urlset") && !xml.includes("<sitemapindex")) return [];

    // Sitemap index — recurse into blog/post sub-sitemap
    if (xml.includes("<sitemapindex")) {
      if (depth > 0) return [];
      const locs = [...xml.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/gi)].map(m => m[1]);
      const blogSitemap = locs.find(u => /post|blog|article/i.test(u)) ?? locs[0];
      return blogSitemap ? trySitemap(blogSitemap, 1) : [];
    }

    const titles: string[] = [];
    // Prefer <news:title>
    for (const m of xml.matchAll(/<news:title>([\s\S]*?)<\/news:title>/gi))
      titles.push(decodeEntities(m[1]));

    // Fall back: humanise URL slugs
    if (titles.length === 0) {
      for (const m of xml.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/gi)) {
        const seg = m[1].replace(/\/$/, "").split("/").pop() ?? "";
        if (/\/(blog|post|article|insight)\//i.test(m[1]) && seg.length > 20) {
          titles.push(seg.replace(/-/g, " "));
        }
      }
    }
    return titles.slice(0, 30);
  } catch { return []; }
}

// Strategy 3: HTML scrape with improved regex (handles nested tags like <h2><a>Title</a></h2>)
async function tryHtml(url: string): Promise<string[]> {
  try {
    const html = await fetchUrl(url, 8000);
    const titles: string[] = [];
    // Strip inner tags to get text content of h1/h2
    for (const m of html.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/gi)) {
      const text = decodeEntities(m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
      if (text.length > 20 && text.length < 200) titles.push(text);
    }
    return titles.slice(0, 30);
  } catch { return []; }
}

// ── Smart competitor topic fetcher (RSS → sitemap → HTML) ─────────────────────
async function fetchCompetitorTopics(baseUrl: string): Promise<string[]> {
  const origin = new URL(baseUrl).origin;

  // Try RSS feeds
  for (const path of ["/feed", "/rss.xml", "/blog/feed", "/feed/rss", "/atom.xml"]) {
    const titles = await tryRss(`${origin}${path}`);
    if (titles.length > 0) { console.log(`    (via RSS: ${origin}${path})`); return titles; }
  }

  // Try sitemaps
  for (const path of ["/sitemap.xml", "/sitemap_index.xml", "/post-sitemap.xml", "/blog-sitemap.xml"]) {
    const titles = await trySitemap(`${origin}${path}`);
    if (titles.length > 0) { console.log(`    (via sitemap: ${origin}${path})`); return titles; }
  }

  // Fall back to HTML scraping
  const titles = await tryHtml(baseUrl);
  if (titles.length > 0) console.log(`    (via HTML scrape)`);
  return titles;
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

/**
 * When GSC/GA4 have no data (new site), use Claude to do real keyword research:
 * analyses our services, existing content, competitor topics, and Dubai market
 * demand to generate 20 specific long-tail keyword opportunities — then picks best.
 */
async function researchKeywordsFromScratch(
  existingTitles: string[],
  competitorTopics: string[]
): Promise<string> {
  console.log("  ↳ No GSC data — running Claude keyword research...");

  const response = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1500,
    messages: [{
      role: "user",
      content: `You are a senior SEO strategist. Innovate Digital is a full-service digital marketing agency based in Dubai, UAE (website: innovatedigital.ae).

OUR SERVICES:
${OUR_SERVICES.map((s) => `- ${s}`).join("\n")}

CONTENT WE HAVE ALREADY PUBLISHED (do NOT repeat these):
${existingTitles.length > 0 ? existingTitles.map((t) => `- ${t}`).join("\n") : "None yet"}

COMPETITOR TOPICS FOUND:
${competitorTopics.length > 0 ? competitorTopics.slice(0, 30).map((t) => `- ${t}`).join("\n") : "None found"}

TASK: Generate 20 specific, high-value blog post topics for the Dubai/UAE B2B market. Each topic must:
1. Target a real search query a Dubai business owner would Google
2. Map to one of our services (so it can convert readers into leads)
3. Be specific and long-tail (e.g. "How to run Google Ads for a restaurant in Dubai" not "Google Ads tips")
4. NOT duplicate any content we already have
5. Prioritise topics competitors haven't covered (content gaps)

Think about: industry-specific guides (real estate, F&B, healthcare, retail), UAE-specific regulations/platforms (VAT, Dubai DED, TikTok UAE, WhatsApp Business), cost/pricing questions, comparison posts, how-to guides with AED figures.

Return a JSON array of 20 objects, each with:
- "title": the exact blog post title
- "intent": "informational" | "commercial" (commercial = high lead intent)
- "service": which of our services it maps to
- "difficulty": "low" | "medium" | "high" (competition level)

Return ONLY valid JSON. No markdown, no explanation.`,
    }],
  });

  const raw = (response.content[0] as any).text.trim();
  const jsonMatch = raw.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error("No JSON array in keyword research response");

  const topics: { title: string; intent: string; service: string; difficulty: string }[] = JSON.parse(jsonMatch[0]);
  console.log(`  ↳ Generated ${topics.length} keyword opportunities`);

  // Prioritise: commercial intent first, then low difficulty
  const scored = topics.sort((a, b) => {
    const intentScore = (t: typeof a) => t.intent === "commercial" ? 2 : 1;
    const diffScore = (t: typeof a) => t.difficulty === "low" ? 3 : t.difficulty === "medium" ? 2 : 1;
    return (intentScore(b) + diffScore(b)) - (intentScore(a) + diffScore(a));
  });

  console.log(`  ↳ Top pick: "${scored[0].title}" (${scored[0].intent}, ${scored[0].difficulty} competition, maps to: ${scored[0].service})`);
  return scored[0].title;
}

/** Ask Claude to pick the best topic given all the data */
async function pickBestTopic(
  page2Keywords: { query: string; position: number; impressions: number }[],
  competitorTopics: string[],
  existingTitles: string[],
  topPages: { page: string; clicks: number }[],
  convertingPosts: { page: string; conversions: number; sessions: number }[]
): Promise<string> {
  const prompt = `You are an SEO strategist for Innovate Digital, a digital marketing agency in Dubai, UAE.

GOAL: Pick the single best blog topic to write today. Prioritise topics that will generate leads, not just traffic.

SIGNAL 1 — CONVERTING BLOG POSTS (highest priority — these formats actually generate leads)
${convertingPosts.length > 0
  ? convertingPosts.map((p) => `- ${p.page} → ${p.conversions} leads from ${p.sessions} sessions`).join("\n")
  : "No conversion data yet — site may be new"}

SIGNAL 2 — GSC RANKING KEYWORDS (real data from Google Search Console)
${page2Keywords.length > 0
  ? page2Keywords.map((k) => `- "${k.query}" pos:${k.position} impressions:${k.impressions} clicks:${k.clicks}`).join("\n")
  : "No GSC data available yet"}

HOW TO READ THE GSC DATA:
- pos 1-3 = already ranking well, don't need a new post
- pos 4-10 = page 1 but low — a better post could push to top 3
- pos 11-20 = page 2 — BEST opportunity, one strong post gets to page 1
- pos 21+ = early rankings — worth targeting if impressions > 0
- Low impressions on a relevant query = underserved topic, write it first
- High impressions + low clicks = title/meta needs fixing, not a new post

SIGNAL 3 — COMPETITOR CONTENT GAPS (topics competitors cover that we don't)
${competitorTopics.length > 0 ? competitorTopics.slice(0, 20).map((t) => `- ${t}`).join("\n") : "No competitor data"}

SIGNAL 4 — OUR TOP PAGES BY CLICKS
${topPages.map((p) => `- ${p.page} (${p.clicks} clicks)`).join("\n")}

TOPICS WE ALREADY COVERED — DO NOT REPEAT:
${existingTitles.slice(0, 30).map((t) => `- ${t}`).join("\n")}

DECISION RULES (in order):
1. If converting posts exist → pick a topic in the same category/format as the highest converter
2. Else if GSC has pos 11-20 keywords → pick highest impressions one and write a dedicated post
3. Else if GSC has pos 4-10 keywords → pick one and write a stronger, more comprehensive post
4. Else if GSC has any keywords at all → pick the most relevant and expand on it
5. Else → find the most valuable competitor gap for Dubai/UAE audience

CONSTRAINTS:
- Must target Dubai/UAE audience specifically
- Must not duplicate existing content
- Prefer topics with commercial intent (leads over traffic)

Return ONLY the blog post title. Nothing else.`;

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
  console.log("📊 Fetching GSC + GA4 data...");
  const [page2Keywords, topPages, siteStats, convertingPosts, ga4Stats] = await Promise.allSettled([
    getPage2Keywords(28),
    getTopPages(28),
    getSiteStats(7),
    getConvertingBlogPosts(90),
    getGA4SiteStats(7),
  ]);

  const keywords = page2Keywords.status === "fulfilled" ? page2Keywords.value : [];
  const pages = topPages.status === "fulfilled" ? topPages.value : [];
  const stats = siteStats.status === "fulfilled" ? siteStats.value : null;
  const converting = convertingPosts.status === "fulfilled" ? convertingPosts.value : [];
  const ga4 = ga4Stats.status === "fulfilled" ? ga4Stats.value : null;

  console.log(`  ↳ GSC keywords (all positions): ${keywords.length}`);
  if (keywords.length > 0) {
    const p2 = keywords.filter(k => k.position >= 11 && k.position <= 20);
    console.log(`    ↳ Page-2 opportunities (pos 11-20): ${p2.length}`);
    console.log(`    ↳ Top keyword: "${keywords[0]?.query}" at pos ${keywords[0]?.position} (${keywords[0]?.impressions} impressions)`);
  }
  console.log(`  ↳ Converting blog posts (last 90d): ${converting.length}`);
  if (stats) console.log(`  ↳ GSC last 7d: ${stats.totalClicks} clicks, ${stats.totalImpressions} impressions`);
  if (ga4) console.log(`  ↳ GA4 last 7d: ${ga4.totalSessions} sessions, ${ga4.totalConversions} conversions, top source: ${ga4.topSource}`);

  console.log("\n🔍 Scraping competitors...");
  const competitorTopics: string[] = [];
  for (const url of COMPETITOR_URLS) {
    const topics = await fetchCompetitorTopics(url);
    competitorTopics.push(...topics);
    console.log(`  ↳ ${url}: ${topics.length} topics found`);
  }

  // ── 2. Pick best topic ──────────────────────────────────────────────────────
  const existingTitles = getExistingTitles();
  const existingSlugs = getExistingSlugs();

  console.log("\n🧠 Picking best topic...");
  const hasRealData = keywords.length > 0 || converting.length > 0 || competitorTopics.length > 0;
  let topic: string;

  if (hasRealData || competitorTopics.length > 0) {
    // We have real signals — let Claude weigh them
    topic = await pickBestTopic(keywords, competitorTopics, existingTitles, pages, converting);
  } else {
    // No GSC/GA4 data yet — run proper keyword research instead of random fallback
    topic = await researchKeywordsFromScratch(existingTitles, competitorTopics);
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
