/**
 * Innovate Digital — Daily Blog Agent
 * Generates one SEO-optimized blog post per day at 9AM Dubai time.
 * Uses Claude claude-opus-4-6 with adaptive thinking for deep content.
 * Automatically generates DALL-E 3 images for each post.
 */

import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BLOG_DATA_FILE = path.join(ROOT, "lib", "blogPostsData.ts");
const BLOG_IMAGES_DIR = path.join(ROOT, "public", "blog");

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ── 7-Pillar content strategy (day of week rotation) ──────────────────────────
const PILLARS: Record<number, { pillar: string; topics: string[] }> = {
  1: { // Monday — Cost & ROI
    pillar: "Cost & ROI",
    topics: [
      "How much does digital marketing cost in Dubai 2026",
      "Google Ads budget guide for UAE small businesses",
      "SEO vs Google Ads: which delivers better ROI in UAE",
      "Cost of building a website in Dubai: complete breakdown",
      "Social media marketing pricing UAE: what agencies charge",
      "ROI benchmarks for digital marketing in UAE 2026",
      "How much to spend on SEO for a Dubai startup",
    ],
  },
  2: { // Tuesday — SEO & Organic
    pillar: "SEO & Organic Growth",
    topics: [
      "How to rank #1 on Google in Dubai: step by step guide",
      "Local SEO checklist for UAE businesses 2026",
      "Arabic SEO strategies for Dubai businesses",
      "Google Business Profile optimization Dubai guide",
      "Technical SEO audit checklist for UAE websites",
      "Link building strategies for Dubai businesses",
      "How to target expats and locals with SEO in UAE",
    ],
  },
  3: { // Wednesday — Comparisons
    pillar: "Comparisons & Alternatives",
    topics: [
      "Best digital marketing agencies in Dubai 2026: honest comparison",
      "WordPress vs Next.js for UAE business websites",
      "Instagram vs TikTok for Dubai businesses: which works better",
      "Google Ads vs Meta Ads for UAE ecommerce",
      "In-house marketing team vs hiring a Dubai agency",
      "Top SEO tools for UAE businesses: compared and ranked",
      "Shopify vs WooCommerce for UAE ecommerce stores",
    ],
  },
  4: { // Thursday — Industry-Specific
    pillar: "Industry Verticals",
    topics: [
      "Digital marketing for real estate agencies in Dubai",
      "Restaurant marketing on social media in UAE: complete guide",
      "Healthcare marketing strategies Dubai: compliance and growth",
      "E-commerce marketing for UAE online stores 2026",
      "Hotel and tourism digital marketing in Dubai",
      "Legal firm marketing online in UAE: what works",
      "Retail business digital marketing strategies UAE",
    ],
  },
  5: { // Friday — How-To Guides
    pillar: "How-To & Tutorials",
    topics: [
      "How to set up Google Analytics 4 for your UAE website",
      "How to run your first Google Ads campaign in Dubai",
      "How to create a content calendar for UAE social media",
      "How to optimize your website for mobile users in UAE",
      "How to build a landing page that converts in Dubai market",
      "How to do keyword research for UAE market in 2026",
      "How to track your digital marketing ROI in UAE",
    ],
  },
  6: { // Saturday — Seasonal & Trending
    pillar: "Seasonal & Trending",
    topics: [
      "Ramadan marketing strategies for UAE businesses 2026",
      "Dubai Shopping Festival marketing guide for brands",
      "UAE National Day campaign ideas for businesses",
      "Summer marketing strategies for Dubai businesses",
      "Back to school marketing campaigns UAE 2026",
      "Year-end marketing checklist for UAE businesses",
      "AI tools every Dubai marketer should use in 2026",
    ],
  },
  0: { // Sunday — Case Studies
    pillar: "Case Studies & Results",
    topics: [
      "How we grew a Dubai restaurant's Instagram by 400% in 3 months",
      "Case study: tripling organic traffic for a UAE real estate company",
      "How a Dubai startup got 500 leads in 30 days with Google Ads",
      "SEO case study: ranking #1 for competitive keywords in UAE",
      "Social media case study: building a luxury brand in Dubai",
      "How we reduced a UAE ecommerce store's cost per click by 60%",
      "Web development case study: 3x conversion rate for Dubai retailer",
    ],
  },
};

function getTodayTopic(): { pillar: string; topic: string } {
  const day = new Date().getDay();
  const { pillar, topics } = PILLARS[day];
  // Rotate through topics based on week number
  const weekNum = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const topic = topics[weekNum % topics.length];
  return { pillar, topic };
}

function getExistingSlugs(): string[] {
  const content = fs.readFileSync(BLOG_DATA_FILE, "utf-8");
  const slugMatches = content.match(/slug:\s*'([^']+)'/g) || [];
  return slugMatches.map((m) => m.replace(/slug:\s*'/, "").replace("'", ""));
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 60);
}

async function downloadImage(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function generateBlogImage(topic: string, slug: string): Promise<string> {
  console.log("🎨 Generating blog image with DALL-E 3...");

  try {
    const imagePrompt = `Professional digital marketing blog header image for article: "${topic}".
Style: Clean, modern, corporate. Dubai/UAE skyline or business context.
Colors: Deep blue and gold tones. No text overlay. High quality 16:9 format.
Suitable for a professional B2B digital marketing agency website.`;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: imagePrompt,
      n: 1,
      size: "1792x1024",
      quality: "standard",
      style: "vivid",
    });

    const imageUrl = response.data[0]?.url;
    if (!imageUrl) throw new Error("No image URL returned");

    fs.mkdirSync(BLOG_IMAGES_DIR, { recursive: true });
    const imagePath = path.join(BLOG_IMAGES_DIR, `${slug}.jpg`);
    await downloadImage(imageUrl, imagePath);

    console.log(`✅ Image saved: /blog/${slug}.jpg`);
    return `/blog/${slug}.jpg`;
  } catch (err) {
    console.warn("⚠️  Image generation failed, using placeholder:", err);
    return "/blog-placeholder.svg";
  }
}

async function generateBlogPost(topic: string, pillar: string): Promise<string> {
  console.log(`✍️  Generating blog post: "${topic}"`);

  const stream = anthropic.messages.stream({
    model: "claude-opus-4-6",
    max_tokens: 8000,
    thinking: { type: "adaptive" },
    messages: [
      {
        role: "user",
        content: `You are an expert digital marketing content writer for Innovate Digital,
a leading digital marketing agency in Dubai, UAE (innovatedigital.ae).

Write a comprehensive, SEO-optimized blog post for this topic:
TOPIC: ${topic}
PILLAR: ${pillar}

The post must:
- Target UAE/Dubai businesses specifically
- Be 1,500-2,000 words of ACTUAL content (not counting headings)
- Include exactly ONE H1 (the title), multiple H2s, and H3s where relevant
- Include UAE-specific statistics, examples, and AED pricing where relevant
- Be written in British English (used in UAE business context)
- Include a clear call-to-action at the end mentioning "Innovate Digital"
- Be formatted in HTML (use <h2>, <h3>, <p>, <ul>, <li>, <strong> tags)

Return ONLY a valid JSON object with this exact structure (no markdown, no code blocks):
{
  "title": "...",
  "excerpt": "...(150-160 chars)...",
  "content": "...(full HTML content)...",
  "metaDescription": "...(140-160 chars, different from excerpt)...",
  "keywords": ["keyword1", "keyword2", "...8 keywords total..."],
  "tags": ["tag1", "tag2", "...5 tags..."],
  "readTime": "X min read",
  "category": "${pillar}"
}`,
      },
    ],
  });

  let fullText = "";
  for await (const event of stream) {
    if (
      event.type === "content_block_delta" &&
      event.delta.type === "text_delta"
    ) {
      fullText += event.delta.text;
    }
  }

  return fullText;
}

async function appendToBlogData(post: {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  image: string;
  featured: boolean;
  metaDescription: string;
  keywords: string[];
}): Promise<void> {
  const content = fs.readFileSync(BLOG_DATA_FILE, "utf-8");

  const postEntry = `  {
    id: '${post.id}',
    slug: '${post.slug}',
    title: '${post.title.replace(/'/g, "\\'")}',
    excerpt: '${post.excerpt.replace(/'/g, "\\'")}',
    content: \`${post.content.replace(/`/g, "\\`")}\`,
    author: '${post.author}',
    authorRole: '${post.authorRole}',
    date: '${post.date}',
    category: '${post.category}',
    tags: ${JSON.stringify(post.tags)},
    readTime: '${post.readTime}',
    image: '${post.image}',
    featured: false,
    metaDescription: '${post.metaDescription.replace(/'/g, "\\'")}',
    keywords: ${JSON.stringify(post.keywords)},
  },`;

  // Insert after the opening of the blogPosts array
  const updated = content.replace(
    "export const blogPosts: BlogPost[] = [",
    `export const blogPosts: BlogPost[] = [\n${postEntry}`
  );

  fs.writeFileSync(BLOG_DATA_FILE, updated, "utf-8");
}

async function main() {
  console.log("🚀 Innovate Digital Blog Agent starting...\n");

  const { topic, pillar } = getTodayTopic();
  console.log(`📌 Today's topic: ${topic}`);
  console.log(`📂 Pillar: ${pillar}\n`);

  const existingSlugs = getExistingSlugs();
  const baseSlug = slugify(topic);
  const date = new Date().toISOString().split("T")[0];
  const slug = `${baseSlug}-${date}`;

  if (existingSlugs.includes(slug)) {
    console.log("⚠️  Post already exists for today. Skipping.");
    return;
  }

  // Generate content and image in parallel
  const [rawJson, imagePath] = await Promise.all([
    generateBlogPost(topic, pillar),
    generateBlogImage(topic, slug),
  ]);

  // Parse the JSON response
  let parsed: {
    title: string;
    excerpt: string;
    content: string;
    metaDescription: string;
    keywords: string[];
    tags: string[];
    readTime: string;
    category: string;
  };

  try {
    // Extract JSON from response (handles any surrounding text)
    const jsonMatch = rawJson.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON found in response");
    parsed = JSON.parse(jsonMatch[0]);
  } catch (err) {
    console.error("❌ Failed to parse blog post JSON:", err);
    console.error("Raw response:", rawJson.slice(0, 500));
    process.exit(1);
  }

  // Get next ID
  const existingIds = getExistingSlugs().length;
  const newId = String(existingIds + 1);

  const post = {
    id: newId,
    slug,
    title: parsed.title,
    excerpt: parsed.excerpt,
    content: parsed.content,
    author: "Osama Tahir",
    authorRole: "Founder, Innovate Digital",
    date,
    category: parsed.category || pillar,
    tags: parsed.tags || [],
    readTime: parsed.readTime || "8 min read",
    image: imagePath,
    featured: false,
    metaDescription: parsed.metaDescription,
    keywords: parsed.keywords || [],
  };

  await appendToBlogData(post);

  console.log(`\n✅ Blog post published!`);
  console.log(`   Title: ${post.title}`);
  console.log(`   Slug:  /blog/${post.slug}`);
  console.log(`   Image: ${post.image}`);
  console.log(`   Words: ~${post.content.split(" ").length}`);
}

main().catch((err) => {
  console.error("❌ Blog Agent failed:", err);
  process.exit(1);
});
