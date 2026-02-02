# SEO Progress Tracker (Innovate Digital)

This is a **living checklist + changelog** for SEO work in this repo.

- Master plan: `SEO-MASTER-PLAN-SEMRUSH.md`
- Branch: `SEO-content-update`

---

## What we already did (implemented)

### 1) Created the full SEO master plan
- **File added**: `SEO-MASTER-PLAN-SEMRUSH.md`
- Includes: keyword map, tags/metadata plan, schema plan, SEMrush workflow, execution order.

### 2) Fixed broken SEO asset references (no missing OG/logo URLs)
Because `public/og-image.jpg` and `public/logo.png` were missing, we updated runtime code to use **existing** assets.

- **Updated** `lib/config.ts`
  - `siteConfig.ogImage` now points to an existing asset: `https://innovatedigital.ae/logo.svg`
  - This avoids broken OpenGraph/Twitter previews.
- **Updated** `app/layout.tsx`
  - OpenGraph and Twitter now use `siteConfig.ogImage` (not hard-coded `og-image.jpg`).
- **Updated** `lib/schema.ts`
  - Schema logo/image now uses `logo.svg` (not `logo.png`)
  - BlogPosting default image uses `siteConfig.ogImage`

### 3) Prevented broken portfolio OpenGraph images
Case studies referenced `/case-studies/*.jpg` files that don’t exist in `public/` yet.

- **Updated** `lib/caseStudiesData.ts`
  - Temporarily changed `image` to `/logo.svg` for all case studies.
  - TODO: replace with real images later (see next section).

### 4) Standardized SEO metadata on money pages + all service/city pages
We added **canonical + OpenGraph url/images + Twitter card** so each page has consistent indexing and sharing metadata.

**Updated pages (canonical + OG/Twitter):**
- Global: `app/layout.tsx`
- Services:
  - `app/services/page.tsx`
  - `app/services/seo/page.tsx`
  - `app/services/ppc/page.tsx`
  - `app/services/social-media/page.tsx`
  - `app/services/web-development/page.tsx`
  - `app/services/analytics/page.tsx`
  - `app/services/branding/page.tsx`
  - `app/services/content-marketing/page.tsx`
  - `app/services/ecommerce/page.tsx`
  - `app/services/email-marketing/page.tsx`
  - `app/services/marketing-automation/page.tsx`
  - `app/services/mobile-app/page.tsx`
  - `app/services/video-production/page.tsx`
- Cities:
  - `app/dubai/page.tsx`
  - `app/abu-dhabi/page.tsx`
  - `app/sharjah/page.tsx`
  - `app/business-bay/page.tsx`
  - `app/downtown-dubai/page.tsx`
  - `app/jlt/page.tsx`
  - `app/dubai-marina/page.tsx`

### 5) Homepage SEO copy alignment (Dubai/UAE + full-service)
We updated homepage section copy to reflect the full service list and bilingual UAE focus.

**Updated homepage components:**
- `components/home/Hero.tsx`
- `components/home/About.tsx`
- `components/home/Services.tsx`
- `components/home/WhyChooseUs.tsx`
- `components/home/ClientLogos.tsx`
- `components/home/CaseStudies.tsx`

### 6) Quality check
- Lints checked on edited SEO files: **no linter errors found**.

---

## What’s left (next actions)

### A) Create proper social sharing image (recommended)
Right now OG/Twitter uses `logo.svg` as a fallback to avoid broken previews.

- [ ] Create `public/og-image.jpg` (1200×630)
- [ ] Update `siteConfig.ogImage` in `lib/config.ts` back to:
  - `https://innovatedigital.ae/og-image.jpg`

### B) Add real case study images
Right now case studies use `/logo.svg` for safety.

- [ ] Add images under `public/case-studies/`:
  - `ecommerce.jpg`
  - `tech-startup.jpg`
  - `restaurant.jpg`
  - `real-estate.jpg`
  - `healthcare.jpg`
  - `fitness.jpg`
- [ ] Update `lib/caseStudiesData.ts` `image` values back to `/case-studies/<name>.jpg`

### C) SEMrush project execution (do this in SEMrush UI)
- [ ] Create Project for `innovatedigital.ae`
- [ ] Run **Site Audit**
- [ ] Configure **Position Tracking** (UAE + Dubai/Abu Dhabi/Sharjah keywords)
- [ ] Run **Keyword Gap** vs top competitors
- [ ] Run **On Page SEO Checker** for:
  - `/services/seo`, `/services/ppc`, `/services/social-media`, `/services/web-development`, `/dubai`
- [ ] Start **Backlink plan** (steady, quality links monthly)

### D) Search Console (Google)
- [ ] Verify domain + connect Search Console
- [ ] Submit sitemap: `/sitemap.xml`
- [ ] Monitor indexing, coverage, and queries weekly

### E) Optional: Arabic SEO rollout (`/ar/...`)
Only do this when you have proper Arabic copy ready.

- [ ] Add `/ar` pages for top money pages first
- [ ] Add `hreflang` between EN/AR pairs

---

## How to keep this file updated

When we complete something, add it to:
- **“What we already did”** (with file names)
- Mark the corresponding checkbox in **“What’s left”**
- Add a short entry to the changelog below

---

## Changelog (append-only)

### 2026-02-01
- Added `SEO-MASTER-PLAN-SEMRUSH.md` (full SEO plan).
- Standardized canonicals + OG/Twitter metadata across services + city pages.
- Fixed schema/logo/OG image references to avoid missing assets (fallback to `logo.svg`).
- Temporarily replaced missing case study images with `/logo.svg` to prevent broken OpenGraph on portfolio pages.

### 2026-02-02
- Updated `app/dubai/page.tsx` to include SEMrush “missing” keyword variants naturally (companies/consultant/online marketing firm).

