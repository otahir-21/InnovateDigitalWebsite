# Innovate Digital — SEO Master Plan (SEMrush + Next.js App Router)

This document is the **single source of truth** for:
- **Keyword mapping** (what page targets what keyword)
- **Tags/metadata plan** (title, description, canonical, OpenGraph/Twitter)
- **Schema plan** (Organization/LocalBusiness/WebSite/Service/FAQ/BlogPosting/Breadcrumbs)
- **SEMrush workflow** (Site Audit, Position Tracking, Keyword Gap, On-Page SEO Checker, Backlink tools)
- **Execution order** (what to do first so rankings can grow)

---

## 1) Current site structure (already in codebase)

You are using Next.js **App Router** with per-page metadata:
- Global metadata defaults: `app/layout.tsx`
- Per-page metadata: `app/**/page.tsx` (services, cities, legal pages, etc.)
- Sitemap/robots: `app/sitemap.ts`, `app/robots.ts`
- Schema helpers: `lib/schema.ts`

### Critical asset gaps to fix first (blocking quality)
Your metadata/schema references assets that are currently **missing** in `public/`:
- `public/og-image.jpg` (referenced in `app/layout.tsx`, `lib/config.ts`, `lib/schema.ts`)
- `public/logo.png` (referenced in `lib/schema.ts`)
- Case study images referenced by `lib/caseStudiesData.ts` such as `/case-studies/real-estate.jpg` are not present in `public/` right now.

**Rule:** Never ship broken URLs for OG images / schema logo / case study images.

---

## 2) SEO rules we will follow (non-negotiable)

### 2.1 One-page-one-intent
- Each page has **1 Primary Keyword**.
- Each page has **Secondary Keywords** (close variations, synonyms, “UAE” variants).
- We do **not** target the same primary keyword on multiple pages (avoid cannibalization).

### 2.2 Where keywords actually matter (in order)
1. **Title tag** (metadata title)
2. **H1**
3. **H2/H3 headings**
4. **Body copy** (answer the intent fully)
5. **Internal links + anchor text**
6. **Schema** (Service/FAQ/etc.)

> Note: Google largely ignores `<meta name="keywords">`. You can keep it, but rankings come from the items above.

### 2.3 Local UAE specifics to include across key pages
- Mention **Dubai + UAE** clearly (and cities on city pages)
- Mention platforms and services accurately: **Google Ads, Meta Ads, Instagram, Facebook, LinkedIn, TikTok**
- Include bilingual offering: **Arabic + English marketing** (where true)

---

## 3) Keyword Map (page-by-page)

Use this as the master mapping. Keep the wording natural—no keyword stuffing.

### 3.1 Homepage & core pages

| URL | Primary keyword | Secondary keywords (examples) | Notes |
|---|---|---|---|
| `/` | digital marketing agency Dubai | digital marketing UAE, full-service digital marketing Dubai, SEO PPC social media Dubai | Homepage is broad “brand + UAE”. Avoid making it identical to `/dubai`. |
| `/services` | digital marketing services UAE | SEO services Dubai, PPC UAE, social media marketing UAE | This is a hub page; link strongly to all service pages. |
| `/portfolio` | digital marketing case studies UAE | SEO results Dubai, PPC results UAE, social media case studies | Add filters, internal links to services + cities. |
| `/blog` | digital marketing blog UAE | SEO tips Dubai, Google Ads UAE, social media Dubai | Every post should support a service page. |
| `/contact` | digital marketing agency Dubai contact | free audit Dubai, marketing consultation UAE | Conversion page; keep trust signals. |

### 3.2 Service pages (existing routes)

| URL | Primary keyword (pick ONE) | Secondary keywords (examples) |
|---|---|---|
| `/services/seo` | SEO services Dubai | SEO agency Dubai, SEO company Dubai, search engine optimization UAE, Arabic SEO UAE, local SEO Dubai |
| `/services/ppc` | Google Ads agency Dubai | PPC agency Dubai, PPC management UAE, Meta Ads agency Dubai, Facebook Ads Dubai, Instagram Ads UAE |
| `/services/social-media` | social media marketing Dubai | Instagram marketing Dubai, TikTok marketing UAE, LinkedIn marketing UAE, social media agency Dubai |
| `/services/web-development` | web design Dubai *(or web development Dubai — choose one primary)* | website development UAE, ecommerce web design Dubai, conversion-focused web design UAE |
| `/services/branding` | branding agency Dubai | brand identity design Dubai, logo design Dubai, corporate branding UAE |
| `/services/content-marketing` | content marketing Dubai | blog writing Dubai, SEO content writing UAE, copywriting Dubai |
| `/services/email-marketing` | email marketing agency Dubai | email campaigns UAE, newsletter marketing Dubai, email automation UAE |
| `/services/marketing-automation` | marketing automation Dubai | lead nurturing UAE, CRM automation Dubai, automation workflows UAE |
| `/services/video-production` | video production Dubai | video marketing Dubai, social media video Dubai, corporate video UAE |
| `/services/ecommerce` | ecommerce website development Dubai | ecommerce development UAE, online store UAE, ecommerce web design Dubai |
| `/services/analytics` | marketing analytics Dubai | GA4 setup Dubai, conversion tracking UAE, marketing reporting Dubai |
| `/services/mobile-app` | mobile app development Dubai | iOS app development UAE, Android app development Dubai |

### 3.3 City pages (existing routes)

| URL | Primary keyword | Secondary keywords |
|---|---|---|
| `/dubai` | digital marketing agency Dubai | SEO Dubai, PPC Dubai, social media marketing Dubai, web design Dubai |
| `/abu-dhabi` | digital marketing agency Abu Dhabi | SEO Abu Dhabi, Google Ads Abu Dhabi, social media Abu Dhabi |
| `/sharjah` | digital marketing agency Sharjah | SEO Sharjah, PPC Sharjah, social media Sharjah |
| `/business-bay` | digital marketing agency Business Bay | SEO Business Bay, marketing agency Business Bay |
| `/downtown-dubai` | digital marketing agency Downtown Dubai | SEO Downtown Dubai, PPC Downtown Dubai |
| `/jlt` | digital marketing agency JLT | SEO JLT, marketing agency JLT |
| `/dubai-marina` | digital marketing agency Dubai Marina | SEO Dubai Marina, marketing agency Dubai Marina |

---

## 4) Tags/metadata standard (what we will use)

### 4.1 Global defaults (already present)
File: `app/layout.tsx`
- Default title template
- Default description
- Default OpenGraph + Twitter
- Robots
- Base canonical (site root)

### 4.2 Per-page metadata checklist (apply to all service + city pages)
For each `app/**/page.tsx`:
- **title**: Primary keyword first + brand
- **description**: primary keyword once + proof + CTA
- **alternates.canonical**: exact URL path without trailing slash
- **openGraph**:
  - title/description
  - url (optional but recommended)
  - images: use the shared `og-image.jpg` unless the page has a dedicated image
- **twitter**: same as OG or inherit from layout

### 4.3 Canonical rules
- Every page should have its own canonical.
- Use consistent trailing slash policy (your redirects already enforce no trailing slash for several routes).

---

## 5) Schema plan (what we will output)

Already available in `lib/schema.ts`:
- Organization / LocalBusiness / WebSite (global)
- Service schema generator (per service page)
- BlogPosting schema generator (per blog post)
- Breadcrumb schema generator (for breadcrumb UI)
- FAQ schema generator (for FAQ component)

### 5.1 Minimum schema by page type
- **All pages**: global Organization + LocalBusiness + WebSite (already injected in `app/layout.tsx`)
- **Service pages**: `Service` schema + FAQ schema
- **Blog posts**: `BlogPosting` schema (+ tags/keywords)
- **City pages**: `Service` schema (as “Digital Marketing Services in Dubai/Abu Dhabi…”) + FAQ schema + Breadcrumb schema

---

## 6) Content template (what each page must include to rank)

### 6.1 Service pages
Each service page should include:
- H1 (matches primary keyword intent)
- “What’s included” (deliverables)
- Process (steps)
- Platforms/tools (Google/Meta/LinkedIn/TikTok etc.)
- Reporting/KPIs
- Case study links (portfolio)
- FAQ (8–12)
- CTA (audit/consultation)

### 6.2 City pages
Each city page should include:
- City-specific proof (areas served, examples, results)
- A grid of core services linking to service pages
- Local FAQ (6–10)
- CTA

---

## 7) SEMrush workflow (exactly what to do)

### 7.1 Project setup
Create a SEMrush Project for: `innovatedigital.ae`
- Enable: **Site Audit**, **Position Tracking**, **On Page SEO Checker**, **Backlink Audit**, **Link Building Tool**

### 7.2 Site Audit (technical baseline)
Run Site Audit and fix in this priority:
1. **Crawlability / 4xx / broken internal links**
2. **Duplicate title/description**
3. **Missing canonical**
4. **Missing OG/Twitter images**
5. **Performance/Core Web Vitals**

Use Site Audit to verify:
- `/sitemap.xml` is accessible (from `app/sitemap.ts`)
- `robots.txt` is valid (from `app/robots.ts`)

### 7.3 Position Tracking (rank tracking)
Create a campaign for UAE with focus on:
- Dubai, Abu Dhabi, Sharjah keywords
- Track all **primary keywords** from Section 3
Add competitors (example set; replace with real):
- top local agencies + directories ranking for your terms

Measure weekly:
- Visibility %
- Average position
- Winners/Losers

### 7.4 Keyword Gap (find easy wins)
Run Keyword Gap vs competitors:
- Identify keywords where competitors rank and you don’t
- Assign each keyword to an existing page from the keyword map (do not create random new pages)

### 7.5 On Page SEO Checker (page-level tasks)
Run On Page SEO Checker for:
- `/services/seo`
- `/services/ppc`
- `/services/social-media`
- `/services/web-development`
- `/dubai`

Apply recommendations focusing on:
- semantically related keywords in headings
- internal linking opportunities
- content length/coverage gaps

### 7.6 Backlinks (authority)
Use Backlink Analytics/Audit:
- Clean toxic spam if present (only if necessary)
- Build links from:
  - UAE business directories
  - client testimonials (link back)
  - partner/vendor pages
  - relevant PR/guest articles

---

## 8) Execution order (what we do first)

### Phase A — Fix broken assets + tracking (Day 1)
- Add `public/og-image.jpg`
- Add `public/logo.png` (or change schema references to use `logo.svg` consistently)
- Add `public/case-studies/*.jpg` files referenced by `lib/caseStudiesData.ts`
- Create SEMrush project + run Site Audit + Position Tracking

### Phase B — Money pages metadata + canonicals (Days 1–2)
Apply the metadata standard to:
- `/services/seo`
- `/services/ppc`
- `/services/social-media`
- `/services/web-development`
- `/dubai`

### Phase C — Internal linking system (Days 2–4)
- Add links service ⇄ city ⇄ portfolio on all key pages
- Ensure anchor text is natural (not spam)

### Phase D — Expand to all services + all cities (Week 2)
- Apply same metadata + FAQ + schema approach across remaining routes

### Phase E — Content + authority (Ongoing)
- Publish 2–4 blog posts/month (each post supports one service page)
- Build 5–15 quality backlinks/month (steady, not spam)

---

## 9) “Definition of Done” (what success looks like)

Technical:
- No missing OG image/logo URLs
- No missing case study images
- Canonical present on all service + city pages
- Sitemap contains all important routes

SEO:
- Every page has a unique primary keyword
- Titles and H1s align with that keyword
- Strong internal linking between hubs (services, cities, portfolio)

Tracking:
- SEMrush Position Tracking active for all primary keywords
- Search Console submitted sitemap and is indexing all pages

