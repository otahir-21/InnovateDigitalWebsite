/**
 * Fix missing blog images — generates DALL-E 3 images for all posts with emoji placeholders
 */

import OpenAI from "openai";
import fs from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BLOG_DATA_FILE = path.join(ROOT, "lib", "blogPostsData.ts");
const BLOG_IMAGES_DIR = path.join(ROOT, "public", "blog");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const POSTS: { slug: string; title: string }[] = [
  { slug: "ultimate-seo-guide-uae-2026",           title: "The Ultimate Guide to SEO in UAE for 2026" },
  { slug: "social-media-trends-middle-east-2026",   title: "Social Media Trends Dominating Middle East in 2026" },
  { slug: "google-ads-ppc-guide-dubai-2026",        title: "Google Ads & PPC Mastery Guide for Dubai Businesses 2026" },
  { slug: "content-marketing-strategy-uae-2026",    title: "Content Marketing Strategy That Works in UAE 2026" },
  { slug: "email-marketing-best-practices-uae-2026",title: "Email Marketing Best Practices for UAE Businesses 2026" },
  { slug: "web-design-trends-dubai-2026",           title: "Web Design Trends Dominating Dubai in 2026" },
  { slug: "instagram-marketing-uae-2026",           title: "Instagram Marketing Mastery for UAE Businesses 2026" },
  { slug: "e-commerce-success-uae-2026",            title: "E-commerce Success Guide for UAE Market 2026" },
  { slug: "linkedin-marketing-b2b-uae-2026",        title: "LinkedIn Marketing for B2B Success in UAE 2026" },
  { slug: "video-marketing-dubai-2026",             title: "Video Marketing Strategies for Dubai Businesses 2026" },
  { slug: "seo-services-dubai",                     title: "SEO Services in Dubai: How to Rank Higher and Get More Leads" },
  { slug: "digital-marketing-agency-dubai",         title: "Digital Marketing Agency in Dubai: Driving Real Business Growth Online" },
  { slug: "social-media-marketing-dubai",           title: "Social Media Marketing in Dubai: How Brands Build Real Online Engagement" },
  { slug: "google-ads-agency-dubai",                title: "Google Ads Agency in Dubai: PPC Management Services for Quality Leads" },
];

function downloadImage(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
}

async function generateImage(title: string, slug: string): Promise<string> {
  const dest = path.join(BLOG_IMAGES_DIR, `${slug}.jpg`);

  // Skip if already exists
  if (fs.existsSync(dest)) {
    console.log(`  ↳ Already exists, skipping`);
    return `/blog/${slug}.jpg`;
  }

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `Professional blog header image for an article titled: "${title}". Dubai/UAE business context. Clean, modern, corporate design. Deep blue and gold colour tones. No text or words in the image. 16:9 widescreen format. High quality photography style.`,
    n: 1,
    size: "1792x1024",
    quality: "standard",
  });

  const imageUrl = response.data[0]?.url;
  if (!imageUrl) throw new Error("No URL returned from DALL-E");

  fs.mkdirSync(BLOG_IMAGES_DIR, { recursive: true });
  await downloadImage(imageUrl, dest);
  return `/blog/${slug}.jpg`;
}

function updateBlogData(slug: string, imagePath: string): void {
  let content = fs.readFileSync(BLOG_DATA_FILE, "utf-8");
  // Find the emoji image for this slug and replace with real path
  // Match slug followed eventually by image: 'emoji'
  const slugPattern = new RegExp(
    `(slug:\\s*'${slug}'[\\s\\S]*?image:\\s*')((?!\/)[^']+)(')`
  );
  if (slugPattern.test(content)) {
    content = content.replace(slugPattern, `$1${imagePath}$3`);
    fs.writeFileSync(BLOG_DATA_FILE, content, "utf-8");
    console.log(`  ↳ Updated blogPostsData.ts`);
  } else {
    console.log(`  ↳ Warning: could not find emoji image pattern for ${slug}`);
  }
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error("❌ OPENAI_API_KEY not set");
    process.exit(1);
  }

  console.log(`🎨 Generating images for ${POSTS.length} blog posts...\n`);

  let success = 0;
  let failed = 0;

  for (const post of POSTS) {
    console.log(`📸 ${post.title}`);
    try {
      const imagePath = await generateImage(post.title, post.slug);
      updateBlogData(post.slug, imagePath);
      console.log(`  ✅ ${imagePath}\n`);
      success++;
      // Small delay to avoid rate limits
      await new Promise(r => setTimeout(r, 1000));
    } catch (err: any) {
      console.error(`  ❌ Failed: ${err.message}\n`);
      failed++;
    }
  }

  console.log(`\n✅ Done: ${success} images generated, ${failed} failed`);
}

main().catch((err) => {
  console.error("❌ Script failed:", err);
  process.exit(1);
});
