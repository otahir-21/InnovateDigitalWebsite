/**
 * Innovate Digital — On-Page SEO Agent
 * Runs daily to audit and fix 100% on-page SEO for innovatedigital.ae
 *
 * Coverage:
 *  1. Metadata — title, description, keywords, OG, Twitter on every page
 *  2. Schema — Organization, LocalBusiness, Service, FAQ, BreadcrumbList,
 *              AggregateRating, ContactPoint on correct pages
 *  3. Headings — one H1 per page, logical H2/H3 hierarchy
 *  4. Alt text — every <img> has a descriptive alt attribute
 *  5. Internal linking — service pages link to related services & location pages
 *  6. Blog listing page — convert to layout+page pattern for server metadata
 *  7. Location pages — add AggregateRating schema
 *  8. Contact page — add ContactPoint schema
 *  9. Portfolio pages — add metadata & CaseStudy schema
 * 10. FAQ schema — add to every service page
 * 11. Sitemap & robots — verify completeness
 * 12. llms.txt — create/update for AI search visibility
 */

import { query } from "@anthropic-ai/claude-agent-sdk";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const PROMPT = `
You are an expert on-page SEO engineer working on the Next.js 14 website for
"Innovate Digital" — a digital marketing agency in Dubai, UAE (innovatedigital.ae).

Your job is to audit every page and fix all on-page SEO issues so the site
scores 100% on any SEO audit tool. Work systematically through each category below.

SITE ROOT: ${ROOT}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BUSINESS DETAILS (use consistently across all files)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: Innovate Digital
Domain: https://www.innovatedigital.ae
Phone: +971 52 394 9010
WhatsApp: +971523949010
Email: info@innovatedigital.ae
Address: Meydan Free Zone, Dubai, UAE
Rating: 5.0 / 5  (based on 47 reviews)
Founded: 2020
Clients served: 200+

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 1 — BLOG LISTING PAGE METADATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The file app/blog/page.tsx is a 'use client' component — it CANNOT export metadata.
Fix: create app/blog/layout.tsx with proper metadata export.

app/blog/layout.tsx should export:
  title: "Digital Marketing Blog Dubai | Expert Insights | Innovate Digital"
  description: "Expert digital marketing insights for UAE businesses. SEO tips,
    Google Ads strategies, social media guides, and web development tutorials
    from Dubai's leading digital marketing agency."
  keywords: ["digital marketing blog Dubai", "SEO tips UAE", "Google Ads Dubai",
    "social media marketing blog", "web development tips UAE", "marketing insights UAE"]
  openGraph: { type: "website", url: "https://www.innovatedigital.ae/blog",
    title, description }
  alternates: { canonical: "https://www.innovatedigital.ae/blog" }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 2 — PORTFOLIO PAGE METADATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
app/portfolio/page.tsx is also 'use client'. Create app/portfolio/layout.tsx:
  title: "Our Portfolio | Digital Marketing Case Studies UAE | Innovate Digital"
  description: "See how Innovate Digital helped 200+ UAE businesses grow online.
    Real results: SEO rankings, Google Ads ROI, social media growth, and custom
    web development projects in Dubai, Abu Dhabi & Sharjah."
  keywords: ["digital marketing portfolio UAE", "SEO case studies Dubai",
    "web development portfolio UAE", "digital agency work Dubai"]
  alternates: { canonical: "https://www.innovatedigital.ae/portfolio" }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 3 — LOCATION PAGES: ADD AGGREGATERATING SCHEMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Read lib/schema.ts to understand generateAggregateRatingSchema().
Then read each location page and add the AggregateRating schema as a JSON-LD
script block if it's missing. Location pages:
  app/dubai/page.tsx
  app/abu-dhabi/page.tsx
  app/sharjah/page.tsx
  app/business-bay/page.tsx
  app/downtown-dubai/page.tsx
  app/dubai-marina/page.tsx
  app/jlt/page.tsx

Use: ratingValue: 5.0, reviewCount: 47, bestRating: 5, worstRating: 1.
Add as: <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAggregateRatingSchema(5.0, 47)) }} />

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 4 — SERVICE PAGES: ADD FAQ SCHEMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Read lib/faqData.ts to see what FAQ data exists.
For each service page that is missing a FAQ section + schema, add:
  - Import generateFAQSchema from lib/schema
  - Import relevant FAQs from lib/faqData (or create 4 relevant Q&A pairs)
  - Add <FAQ> component at bottom of page (before last CTA)
  - Add <script type="application/ld+json"> with FAQ schema

Service pages to check:
  app/services/seo/page.tsx
  app/services/ppc/page.tsx
  app/services/social-media/page.tsx
  app/services/web-development/page.tsx
  app/services/ecommerce/page.tsx
  app/services/content-marketing/page.tsx
  app/services/mobile-app/page.tsx
  app/services/branding/page.tsx
  app/services/email-marketing/page.tsx
  app/services/video-production/page.tsx
  app/services/analytics/page.tsx
  app/services/marketing-automation/page.tsx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 5 — CONTACT PAGE: ADD CONTACTPOINT SCHEMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Read app/contact/page.tsx.
Add a ContactPoint JSON-LD schema:
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Innovate Digital",
  "url": "https://www.innovatedigital.ae",
  "telephone": "+971523949010",
  "email": "info@innovatedigital.ae",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Meydan Free Zone",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971523949010",
    "contactType": "customer service",
    "availableLanguage": ["English", "Arabic"],
    "areaServed": "AE",
    "contactOption": "TollFree"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 6 — ALT TEXT AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Search all .tsx files for:
  - <img> tags missing alt attribute
  - <img alt=""> (empty alt)
  - Next.js <Image> missing alt

Fix every instance. Alt text should be descriptive and include relevant keywords.
Examples:
  logo: alt="Innovate Digital - Digital Marketing Agency Dubai Logo"
  founder: alt="Osama Tahir - Founder of Innovate Digital Dubai"
  service icons: alt="[Service Name] services Dubai - Innovate Digital"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 7 — HEADING STRUCTURE AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Check every page file for:
  - Multiple <h1> tags on same page (fix: keep only one)
  - Missing <h1> (fix: add one with primary keyword)
  - H3 appearing before H2 (fix: reorder)
  - Generic H1 text like "Welcome" (fix: use keyword-rich text)

Pages to check: app/page.tsx, app/about/page.tsx, app/contact/page.tsx,
and all service/location page files.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 8 — VERIFY & FIX CANONICAL URLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Every page should have:
  alternates: { canonical: "https://www.innovatedigital.ae/[path]" }

Check all service pages and location pages. Add where missing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 9 — SITEMAP COMPLETENESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Read app/sitemap.ts. Verify it includes:
  - All 12 service pages
  - All 7 location pages
  - /portfolio, /blog, /about, /contact
  - Dynamic blog posts
  - Priority values: homepage=1.0, services=0.9, locations=0.8, blog=0.7

Add any missing URLs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 10 — CREATE llms.txt FOR AI SEARCH VISIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Create public/llms.txt with the following structure:

# Innovate Digital
> Leading digital marketing agency in Dubai & UAE. Expert SEO, Google Ads,
> social media, web development, and mobile app services since 2020.
> 200+ clients served across Dubai, Abu Dhabi, Sharjah, and UAE.

## Services
- [SEO Services Dubai](https://www.innovatedigital.ae/services/seo)
- [Google Ads / PPC Management](https://www.innovatedigital.ae/services/ppc)
- [Social Media Marketing UAE](https://www.innovatedigital.ae/services/social-media)
- [Web Development Dubai](https://www.innovatedigital.ae/services/web-development)
- [E-commerce Solutions UAE](https://www.innovatedigital.ae/services/ecommerce)
- [Mobile App Development Dubai](https://www.innovatedigital.ae/services/mobile-app)
- [Content Marketing UAE](https://www.innovatedigital.ae/services/content-marketing)
- [Branding & Design Dubai](https://www.innovatedigital.ae/services/branding)
- [Email Marketing UAE](https://www.innovatedigital.ae/services/email-marketing)
- [Video Production Dubai](https://www.innovatedigital.ae/services/video-production)
- [Analytics & Reporting](https://www.innovatedigital.ae/services/analytics)
- [Marketing Automation UAE](https://www.innovatedigital.ae/services/marketing-automation)

## Locations Served
- [Dubai](https://www.innovatedigital.ae/dubai)
- [Abu Dhabi](https://www.innovatedigital.ae/abu-dhabi)
- [Sharjah](https://www.innovatedigital.ae/sharjah)
- [Business Bay](https://www.innovatedigital.ae/business-bay)
- [Downtown Dubai](https://www.innovatedigital.ae/downtown-dubai)
- [Dubai Marina](https://www.innovatedigital.ae/dubai-marina)
- [JLT](https://www.innovatedigital.ae/jlt)

## Blog
- [Digital Marketing Blog](https://www.innovatedigital.ae/blog)

## Contact
- Email: info@innovatedigital.ae
- Phone: +971 52 394 9010
- Address: Meydan Free Zone, Dubai, UAE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 11 — META DESCRIPTION LENGTH CHECK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Every page meta description must be 140-160 characters.
Search all page.tsx files for description strings shorter than 120 chars
or longer than 165 chars and rewrite them to the correct length.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 12 — OG IMAGE REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The current ogImage in lib/config.ts points to the logo SVG.
Update it to: 'https://www.innovatedigital.ae/og-image.png'
(We will create the actual image separately — just update the reference now.)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXECUTION ORDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Start by reading lib/schema.ts and lib/faqData.ts to understand existing helpers.
2. Work through Tasks 1-12 in order.
3. After each task, verify the file compiles by running: cd ${ROOT} && npx tsc --noEmit 2>&1 | tail -5
4. If TypeScript errors appear, fix them before moving to next task.
5. At the end, run a final TypeScript check and report what was fixed.

Do NOT skip any task. Do NOT stop early.
Report each completed task with a checkmark.
`;

async function runSeoAgent() {
  console.log("🚀 Innovate Digital SEO Agent starting...");
  console.log(`📁 Working directory: ${ROOT}\n`);

  for await (const message of query({
    prompt: PROMPT,
    options: {
      cwd: ROOT,
      allowedTools: ["Read", "Write", "Edit", "Bash", "Glob", "Grep"],
      permissionMode: "acceptEdits",
      maxTurns: 120,
      model: "claude-opus-4-6",
    },
  })) {
    if ("result" in message) {
      console.log("\n✅ SEO Agent complete.\n");
      console.log(message.result);
    } else if (
      message.type === "assistant" &&
      Array.isArray(message.message?.content)
    ) {
      for (const block of message.message.content) {
        if (block.type === "text" && block.text) {
          process.stdout.write(block.text);
        }
      }
    }
  }
}

runSeoAgent().catch((err) => {
  console.error("❌ SEO Agent failed:", err);
  process.exit(1);
});
