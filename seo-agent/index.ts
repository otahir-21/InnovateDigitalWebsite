/**
 * Innovate Digital — On-Page SEO Agent
 *
 * Audits and fixes foundational SEO for innovatedigital.ae.
 * Aligned with Google Search Central: "Optimizing your website for generative
 * AI features on Google Search" (July 2026).
 * https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
 *
 * For Google Search (including AI Overviews and AI Mode), GEO/AEO is still SEO.
 * Unique, people-first content + crawlable technical structure matter.
 * llms.txt, content chunking, AI-only rewrites, and FAQPage-as-AI-hack do not.
 *
 * Coverage:
 *  1. Metadata — title, description, OG, Twitter, canonical on every indexable page
 *  2. Schema for rich results — Organization, LocalBusiness, Service, BreadcrumbList
 *  3. Headings — one H1 per page, logical H2/H3 hierarchy
 *  4. Alt text — every meaningful <img>/<Image> has a descriptive alt
 *  5. Internal linking — service pages link to related services
 *  6. Important copy in HTML — no answers or proof omitted until click/JS
 *  7. Duplicate / thin / scaled location content — flag, do not multiply
 *  8. Sitemap & robots — verify completeness and crawlability
 *  9. Page experience — do not add weight that hurts LCP/INP
 */

import { query } from "@anthropic-ai/claude-agent-sdk";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const PROMPT = `
You are an on-page SEO engineer for the Next.js 14 site of
"Innovate Digital" — a digital marketing agency in Dubai, UAE (innovatedigital.ae).

Follow official Google Search guidance, not third-party "AEO/GEO" hacks.
Primary source:
https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

Your job is to fix foundational SEO so pages are crawlable, indexable, and
useful to people. Do not optimize copy "for AI". Do not manufacture pages for
query fan-out.

SITE ROOT: ${ROOT}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BUSINESS DETAILS (use consistently)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: Innovate Digital
Domain: https://www.innovatedigital.ae
Phone: +971 52 394 9010
WhatsApp: +971523949010
Email: info@innovatedigital.ae
Address: Meydan Free Zone, Dubai, UAE
Rating: 5.0 / 5 (47 reviews)
Founded: 2020
Founder: Osama Tahir (LinkedIn: https://www.linkedin.com/in/otahir21)
Clients served: 200+

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DO NOT (Google Search ignores these or treats them as spam)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Do NOT create, expand, or "optimize" public/llms.txt for Google visibility.
  Google Search ignores llms.txt. Leave the file alone unless it is broken HTML
  on the site (it is not HTML). Other tools may read it; that is not a Google task.
- Do NOT add FAQPage schema as an AI Overview / rich-result tactic.
  Visible FAQ copy in HTML is fine. FAQPage rich results are not for this
  commercial site. Do not add new FAQ JSON-LD.
- Do NOT chunk content into AI-sized passages or rewrite pages "for generative AI".
- Do NOT create new location, neighbourhood, or keyword-variation pages
  (no DIFC, JVC, Deira, "SEO in Business Bay" clones, etc.).
  Existing location pages: /dubai /abu-dhabi /sharjah /business-bay
  /downtown-dubai /dubai-marina /jlt — do not add more.
- Do NOT pursue inauthentic mentions, guest-post farms, or citation schemes.
- Do NOT add special AI schema, Markdown-for-Google, or machine-only files.
- Do NOT use HowTo schema.
- Do NOT sacrifice site speed (heavy client JS, extra fonts, unoptimized images).
- Do NOT generate many AI pages, commodity "tips" posts, or query-variation articles.
  That is scaled content abuse. Google: https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
  Metadata (title, description, schema, alt) must be accurate — never invent stats.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 1 — METADATA & CANONICALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Every indexable page.tsx (or its layout.tsx if the page is a client component)
must export:
  title, description, openGraph, twitter, alternates.canonical

Canonical form: relative path is fine (metadataBase is set), e.g. canonical: "/services/seo"
Skip /login, /client-portal, /admin, /api.

Fix missing or duplicate titles. Do not keyword-stuff titles with "#1" unless
that claim is already proven on the page.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 2 — RICH-RESULT SCHEMA (not AI markup)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Keep and repair, if missing or invalid:
  Organization, LocalBusiness, WebSite (root layout / homepage)
  Service schema on service pages (lib/schema.ts generateServiceSchema)
  BreadcrumbList on inner pages
  BlogPosting on blog posts
  Person for the founder on /about (founderPersonSchema)

Do not add FAQPage, HowTo, or speculative schema.org types "for AI".
Structured data must match visible text.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 3 — HTML VISIBILITY OF IMPORTANT CONTENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Important copy (FAQ answers, pricing ranges, proof, founder bio) must be in
the server-rendered HTML. Do not omit it behind click-only React state.

The FAQ component in components/ui/FAQ.tsx must use native <details>/<summary>
so answers are in the document without JavaScript. If someone reverts it to
conditional render ({openIndex === i && ...}), restore the details pattern.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 4 — ALT TEXT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Search .tsx files for <img> / next/image <Image> missing alt or alt="".
Write descriptive alt. Decorative images may use alt="".
Founder photo: alt="Osama Tahir - Founder and CEO of Innovate Digital, Dubai"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 5 — HEADING STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
One H1 per page. No H3 before H2. H1 should describe the page for a person,
not a list of synonyms.

Pages: app/page.tsx, app/about/page.tsx, app/contact/page.tsx,
service pages, location pages, blog, portfolio.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 6 — SITEMAP & ROBOTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Read app/sitemap.ts and app/robots.ts.
Sitemap should include homepage, 12 services, 7 existing locations,
/portfolio, /blog, /about, /contact, and blog posts.
Do not add new URLs for pages that do not exist.
robots.txt must allow Googlebot on public content; keep /api/ and /admin/ disallowed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 7 — THIN / DUPLICATE / SCALED CONTENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Flag (do not auto-generate replacements for) location pages that only swap
the city name. Do not create more of them.
Prefer strengthening unique pages: /about, /portfolio/[slug], service pages
with first-hand proof, process, and results already in the codebase.

If a service page is generic commodity copy, add proof that already exists
in lib/caseStudiesData.ts or lib/faqData.ts — do not invent clients, metrics,
or reviews.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 8 — INTERNAL LINKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service pages should link to 2–4 related services with natural anchors.
About and homepage should link to /portfolio and /contact.
Do not add sitewide keyword-rich footer spam.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXECUTION ORDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Read lib/schema.ts, lib/config.ts, components/ui/FAQ.tsx, app/robots.ts, app/sitemap.ts.
2. Work through Tasks 1–8. Skip a task if already correct.
3. After edits: cd ${ROOT} && npx tsc --noEmit
4. Fix TypeScript errors before finishing.
5. Report what you fixed. If nothing needed fixing, say so.

Do not treat "100% on SEO audit tools" as the goal.
Do not spend the run on llms.txt or FAQ JSON-LD.
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
