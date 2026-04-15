/**
 * Blog Module — called ONLY by the Master SEO Agent when Rule G fires.
 *
 * Rule G conditions (all three must be true):
 *   1. A specific high-intent keyword has no existing page targeting it
 *   2. Writing this page will NOT compete with an existing service page
 *   3. The SERP for this keyword shows informational/comparison content
 *
 * This module is NOT a standalone agent and has NO schedule.
 * It exports a single function: createBlogPost(topic, competitorTopics)
 */

import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BLOG_DATA_FILE = path.join(ROOT, "lib", "blogPostsData.ts");
const BLOG_IMAGES_DIR = path.join(ROOT, "public", "blog");

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

let openaiClient: OpenAI | null = null;
function getOpenAI(): OpenAI {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    throw new Error(
      "OPENAI_API_KEY is missing. Set it in GitHub: Settings → Secrets and variables → Actions → OPENAI_API_KEY"
    );
  }
  if (!openaiClient) openaiClient = new OpenAI({ apiKey: key });
  return openaiClient;
}

export const SERVICE_PAGES = [
  { name: "SEO Services Dubai",        url: "/services/seo",                keywords: ["seo", "search engine", "ranking", "organic"] },
  { name: "Google Ads / PPC",          url: "/services/ppc",                keywords: ["google ads", "ppc", "paid ads", "advertising"] },
  { name: "Social Media Marketing",    url: "/services/social-media",       keywords: ["social media", "instagram", "facebook", "tiktok"] },
  { name: "Web Development",           url: "/services/web-development",    keywords: ["website", "web design", "web development"] },
  { name: "E-commerce",                url: "/services/ecommerce",          keywords: ["ecommerce", "online store", "shopify"] },
  { name: "Content Marketing",         url: "/services/content-marketing",  keywords: ["content", "blog", "copywriting"] },
  { name: "Branding & Design",         url: "/services/branding",           keywords: ["branding", "logo", "design", "identity"] },
  { name: "Email Marketing",           url: "/services/email-marketing",    keywords: ["email", "newsletter", "email marketing"] },
  { name: "Video Production",          url: "/services/video-production",   keywords: ["video", "production", "youtube"] },
  { name: "Mobile App Development",    url: "/services/mobile-app",         keywords: ["mobile app", "app development"] },
  { name: "Analytics & Reporting",     url: "/services/analytics",          keywords: ["analytics", "reporting", "data", "tracking"] },
  { name: "Marketing Automation",      url: "/services/marketing-automation",keywords: ["automation", "crm", "workflow"] },
];

export const COMPETITOR_URLS = (process.env.COMPETITOR_URLS || "")
  .split(",").map(u => u.trim()).filter(Boolean);

// ── HTTP fetch helper ──────────────────────────────────────────────────────────
function fetchUrl(url: string, timeoutMs = 8000): Promise<string> {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const req = client.get(url, { headers: { "User-Agent": "Mozilla/5.0 (compatible; InnovateDigitalBot/1.0)" }, timeout: timeoutMs }, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location)
        return fetchUrl(res.headers.location, timeoutMs).then(resolve).catch(reject);
      if (res.statusCode && res.statusCode >= 400) return reject(new Error(`HTTP ${res.statusCode}`));
      let body = ""; res.on("data", c => body += c); res.on("end", () => resolve(body));
    });
    req.on("error", reject);
    req.on("timeout", () => { req.destroy(); reject(new Error("timeout")); });
  });
}

function decodeEntities(s: string): string {
  return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n))).trim();
}

async function tryRss(url: string): Promise<string[]> {
  try {
    const xml = await fetchUrl(url, 6000);
    if (!xml.includes("<rss") && !xml.includes("<feed") && !xml.includes("<channel")) return [];
    const titles: string[] = [];
    for (const m of xml.matchAll(/<(?:item|entry)[\s\S]*?<\/(?:item|entry)>/gi)) {
      const t = m[0].match(/<title[^>]*>(?:<!\[CDATA\[)?\s*([\s\S]*?)\s*(?:\]\]>)?<\/title>/i);
      if (t) { const text = decodeEntities(t[1]); if (text.length > 20 && text.length < 200) titles.push(text); }
    }
    return titles.slice(0, 30);
  } catch { return []; }
}

async function trySitemap(url: string, depth = 0): Promise<string[]> {
  try {
    const xml = await fetchUrl(url, 6000);
    if (!xml.includes("<urlset") && !xml.includes("<sitemapindex")) return [];
    if (xml.includes("<sitemapindex")) {
      if (depth > 0) return [];
      const locs = [...xml.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/gi)].map(m => m[1]);
      const blogSitemap = locs.find(u => /post|blog|article/i.test(u)) ?? locs[0];
      return blogSitemap ? trySitemap(blogSitemap, 1) : [];
    }
    const titles: string[] = [];
    for (const m of xml.matchAll(/<news:title>([\s\S]*?)<\/news:title>/gi)) titles.push(decodeEntities(m[1]));
    if (titles.length === 0) {
      for (const m of xml.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/gi)) {
        const seg = m[1].replace(/\/$/, "").split("/").pop() ?? "";
        if (/\/(blog|post|article|insight)\//i.test(m[1]) && seg.length > 20) titles.push(seg.replace(/-/g, " "));
      }
    }
    return titles.slice(0, 30);
  } catch { return []; }
}

async function tryHtml(url: string): Promise<string[]> {
  try {
    const html = await fetchUrl(url, 8000);
    const titles: string[] = [];
    for (const m of html.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/gi)) {
      const text = decodeEntities(m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
      if (text.length > 20 && text.length < 200) titles.push(text);
    }
    return titles.slice(0, 30);
  } catch { return []; }
}

export async function fetchCompetitorTopics(baseUrl: string): Promise<string[]> {
  const origin = new URL(baseUrl).origin;
  for (const p of ["/feed", "/rss.xml", "/blog/feed", "/feed/rss", "/atom.xml"]) {
    const t = await tryRss(`${origin}${p}`);
    if (t.length > 0) { console.log(`    (via RSS: ${origin}${p})`); return t; }
  }
  for (const p of ["/sitemap.xml", "/sitemap_index.xml", "/post-sitemap.xml", "/blog-sitemap.xml"]) {
    const t = await trySitemap(`${origin}${p}`);
    if (t.length > 0) { console.log(`    (via sitemap: ${origin}${p})`); return t; }
  }
  const t = await tryHtml(baseUrl);
  if (t.length > 0) console.log(`    (via HTML scrape)`);
  return t;
}

export function getExistingSlugs(): string[] {
  const content = fs.readFileSync(BLOG_DATA_FILE, "utf-8");
  return (content.match(/slug:\s*'([^']+)'/g) || []).map(m => m.replace(/slug:\s*'/, "").replace("'", ""));
}

export function getExistingTitles(): string[] {
  const content = fs.readFileSync(BLOG_DATA_FILE, "utf-8");
  return (content.match(/title:\s*'([^']+)'/g) || []).map(m => m.replace(/title:\s*'/, "").replace(/'\s*$/, "").toLowerCase());
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 60);
}

async function downloadImage(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, res => { res.pipe(file); file.on("finish", () => { file.close(); resolve(); }); })
      .on("error", err => { fs.unlink(dest, () => {}); reject(err); });
  });
}

async function generateBlogImage(topic: string, slug: string): Promise<string> {
  console.log("🎨 Generating image...");
  try {
    const response = await getOpenAI().images.generate({
      model: "dall-e-3",
      prompt: `Professional blog header for: "${topic}". Dubai/UAE business context. Clean, modern, corporate. Deep blue and gold tones. No text. 16:9 format.`,
      n: 1, size: "1792x1024", quality: "standard",
    });
    const imageUrl = response.data[0]?.url;
    if (!imageUrl) throw new Error("No URL");
    fs.mkdirSync(BLOG_IMAGES_DIR, { recursive: true });
    const dest = path.join(BLOG_IMAGES_DIR, `${slug}.jpg`);
    await downloadImage(imageUrl, dest);
    return `/blog/${slug}.jpg`;
  } catch { return "/blog-placeholder.svg"; }
}

async function writeBlogContent(topic: string): Promise<string> {
  console.log(`✍️  Writing: "${topic}"`);
  const relevantLinks = SERVICE_PAGES.filter(s => s.keywords.some(kw => topic.toLowerCase().includes(kw)));
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
${relevantLinks.map(l => `  - [${l.name}](https://www.innovatedigital.ae${l.url})`).join("\n")}
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
    if (event.type === "content_block_delta" && event.delta.type === "text_delta") fullText += event.delta.text;
  }
  return fullText;
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
  const updated = content.replace("export const blogPosts: BlogPost[] = [", `export const blogPosts: BlogPost[] = [\n${entry}`);
  fs.writeFileSync(BLOG_DATA_FILE, updated, "utf-8");
}

export interface BlogPostResult {
  title: string;
  slug: string;
  imagePath: string;
  date: string;
}

/**
 * Main export — called ONLY when Master SEO Agent selects Rule G.
 * @param topic - The exact blog post title to write (already validated by SEO agent)
 * @returns BlogPostResult with title, slug, image path, date
 */
export async function createBlogPost(topic: string): Promise<BlogPostResult> {
  console.log(`\n📝 Rule G triggered — creating blog post: "${topic}"`);

  const existingSlugs = getExistingSlugs();
  const date = new Date().toISOString().split("T")[0];
  const baseSlug = slugify(topic);
  const slug = `${baseSlug}-${date}`;

  if (existingSlugs.includes(slug)) {
    throw new Error(`Post already published today with slug: ${slug}`);
  }

  const [rawJson, imagePath] = await Promise.all([
    writeBlogContent(topic),
    generateBlogImage(topic, slug),
  ]);

  const jsonMatch = rawJson.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No JSON in blog content response");
  const parsed = JSON.parse(jsonMatch[0]);

  const newId = String(existingSlugs.length + 1);
  await appendPost({ id: newId, slug, date, image: imagePath, ...parsed });

  console.log(`✅ Blog post created: "${parsed.title}"`);
  console.log(`   Slug: /blog/${slug}`);
  console.log(`   Image: ${imagePath}`);

  return { title: parsed.title, slug, imagePath, date };
}
