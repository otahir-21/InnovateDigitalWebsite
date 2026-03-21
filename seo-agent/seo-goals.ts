/**
 * SEO Goals — Innovate Digital
 *
 * These are the targets every agent works towards.
 * The agents read this file at the start of each run to:
 *  - Know which keywords are highest priority
 *  - Report on goal progress in the weekly report
 *  - Prioritise blog topics that target off-goal keywords
 *  - Prioritise SEO fixes on pages that are ranking but not converting
 */

export interface KeywordGoal {
  keyword: string;
  targetPosition: number;   // we want to rank at or above this
  currentPosition?: number; // filled in at runtime from GSC
  service: string;
  url: string;              // the page on the site that should rank
  intent: "commercial" | "informational" | "navigational";
  monthlySearchVolume: "high" | "medium" | "low"; // rough tier
}

export interface ServiceGoal {
  service: string;
  url: string;
  targetLeadsPerMonth: number;
  targetPosition: number;   // for the primary keyword
  primaryKeyword: string;
  supportingKeywords: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// RANKING GOALS — every keyword we want to own
// Target: top 3 for primary terms, top 5 for secondary
// ─────────────────────────────────────────────────────────────────────────────
export const KEYWORD_GOALS: KeywordGoal[] = [

  // ── SEO ─────────────────────────────────────────────────────────────────
  { keyword: "SEO agency Dubai",              targetPosition: 3,  service: "SEO",     url: "/services/seo",              intent: "commercial",    monthlySearchVolume: "high" },
  { keyword: "SEO services Dubai",            targetPosition: 3,  service: "SEO",     url: "/services/seo",              intent: "commercial",    monthlySearchVolume: "high" },
  { keyword: "local SEO Dubai",               targetPosition: 3,  service: "SEO",     url: "/services/seo",              intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "SEO company UAE",               targetPosition: 5,  service: "SEO",     url: "/services/seo",              intent: "commercial",    monthlySearchVolume: "high" },
  { keyword: "best SEO agency Dubai",         targetPosition: 3,  service: "SEO",     url: "/services/seo",              intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "ecommerce SEO Dubai",           targetPosition: 5,  service: "SEO",     url: "/services/ecommerce",        intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "SEO consultant Dubai",          targetPosition: 5,  service: "SEO",     url: "/services/seo",              intent: "commercial",    monthlySearchVolume: "medium" },

  // ── PPC / Google Ads ────────────────────────────────────────────────────
  { keyword: "Google Ads agency Dubai",       targetPosition: 3,  service: "PPC",     url: "/services/ppc",              intent: "commercial",    monthlySearchVolume: "high" },
  { keyword: "PPC management Dubai",          targetPosition: 3,  service: "PPC",     url: "/services/ppc",              intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "Google Ads management UAE",     targetPosition: 5,  service: "PPC",     url: "/services/ppc",              intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "paid advertising Dubai",        targetPosition: 5,  service: "PPC",     url: "/services/ppc",              intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "performance marketing Dubai",   targetPosition: 5,  service: "PPC",     url: "/services/ppc",              intent: "commercial",    monthlySearchVolume: "medium" },

  // ── Social Media ────────────────────────────────────────────────────────
  { keyword: "social media marketing Dubai",  targetPosition: 3,  service: "Social",  url: "/services/social-media",     intent: "commercial",    monthlySearchVolume: "high" },
  { keyword: "social media agency Dubai",     targetPosition: 3,  service: "Social",  url: "/services/social-media",     intent: "commercial",    monthlySearchVolume: "high" },
  { keyword: "Instagram marketing Dubai",     targetPosition: 5,  service: "Social",  url: "/services/social-media",     intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "TikTok marketing UAE",          targetPosition: 5,  service: "Social",  url: "/services/social-media",     intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "social media management UAE",   targetPosition: 5,  service: "Social",  url: "/services/social-media",     intent: "commercial",    monthlySearchVolume: "medium" },

  // ── Web Development ─────────────────────────────────────────────────────
  { keyword: "web development Dubai",         targetPosition: 3,  service: "WebDev",  url: "/services/web-development",  intent: "commercial",    monthlySearchVolume: "high" },
  { keyword: "web design Dubai",              targetPosition: 3,  service: "WebDev",  url: "/services/web-development",  intent: "commercial",    monthlySearchVolume: "high" },
  { keyword: "website development company Dubai", targetPosition: 5, service: "WebDev", url: "/services/web-development", intent: "commercial", monthlySearchVolume: "medium" },
  { keyword: "Next.js development Dubai",     targetPosition: 5,  service: "WebDev",  url: "/services/web-development",  intent: "commercial",    monthlySearchVolume: "low" },

  // ── E-commerce ──────────────────────────────────────────────────────────
  { keyword: "ecommerce development Dubai",   targetPosition: 3,  service: "Ecom",    url: "/services/ecommerce",        intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "Shopify development Dubai",     targetPosition: 3,  service: "Ecom",    url: "/services/ecommerce",        intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "online store development UAE",  targetPosition: 5,  service: "Ecom",    url: "/services/ecommerce",        intent: "commercial",    monthlySearchVolume: "medium" },

  // ── Branding ────────────────────────────────────────────────────────────
  { keyword: "branding agency Dubai",         targetPosition: 3,  service: "Brand",   url: "/services/branding",         intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "logo design Dubai",             targetPosition: 5,  service: "Brand",   url: "/services/branding",         intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "brand identity Dubai",          targetPosition: 5,  service: "Brand",   url: "/services/branding",         intent: "commercial",    monthlySearchVolume: "medium" },

  // ── Content Marketing ───────────────────────────────────────────────────
  { keyword: "content marketing agency Dubai",targetPosition: 3,  service: "Content", url: "/services/content-marketing",intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "content writing Dubai",         targetPosition: 5,  service: "Content", url: "/services/content-marketing",intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "blog writing services Dubai",   targetPosition: 5,  service: "Content", url: "/services/content-marketing",intent: "commercial",    monthlySearchVolume: "low" },

  // ── Email Marketing ─────────────────────────────────────────────────────
  { keyword: "email marketing agency Dubai",  targetPosition: 3,  service: "Email",   url: "/services/email-marketing",  intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "email marketing UAE",           targetPosition: 5,  service: "Email",   url: "/services/email-marketing",  intent: "commercial",    monthlySearchVolume: "medium" },

  // ── Video Production ────────────────────────────────────────────────────
  { keyword: "video production company Dubai",targetPosition: 3,  service: "Video",   url: "/services/video-production", intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "corporate video Dubai",         targetPosition: 5,  service: "Video",   url: "/services/video-production", intent: "commercial",    monthlySearchVolume: "medium" },

  // ── Mobile App ──────────────────────────────────────────────────────────
  { keyword: "mobile app development Dubai",  targetPosition: 3,  service: "App",     url: "/services/mobile-app",       intent: "commercial",    monthlySearchVolume: "high" },
  { keyword: "app development company Dubai", targetPosition: 5,  service: "App",     url: "/services/mobile-app",       intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "iOS Android app Dubai",         targetPosition: 5,  service: "App",     url: "/services/mobile-app",       intent: "commercial",    monthlySearchVolume: "medium" },

  // ── Location pages ──────────────────────────────────────────────────────
  { keyword: "digital marketing agency Dubai",targetPosition: 1,  service: "Core",    url: "/dubai",                     intent: "commercial",    monthlySearchVolume: "high" },
  { keyword: "digital marketing agency Abu Dhabi", targetPosition: 3, service: "Core", url: "/abu-dhabi",               intent: "commercial",    monthlySearchVolume: "high" },
  { keyword: "digital marketing agency Sharjah",   targetPosition: 3, service: "Core", url: "/sharjah",                 intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "digital marketing Dubai Marina",     targetPosition: 3, service: "Core", url: "/dubai-marina",            intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "digital marketing Business Bay",     targetPosition: 3, service: "Core", url: "/business-bay",            intent: "commercial",    monthlySearchVolume: "medium" },
  { keyword: "digital marketing Downtown Dubai",   targetPosition: 3, service: "Core", url: "/downtown-dubai",          intent: "commercial",    monthlySearchVolume: "medium" },
];

// ─────────────────────────────────────────────────────────────────────────────
// LEAD GOALS — monthly targets per service
// ─────────────────────────────────────────────────────────────────────────────
export const SERVICE_GOALS: ServiceGoal[] = [
  { service: "SEO",            url: "/services/seo",              targetLeadsPerMonth: 8,  targetPosition: 3, primaryKeyword: "SEO agency Dubai",           supportingKeywords: ["SEO services Dubai", "SEO company UAE"] },
  { service: "Google Ads/PPC", url: "/services/ppc",              targetLeadsPerMonth: 6,  targetPosition: 3, primaryKeyword: "Google Ads agency Dubai",     supportingKeywords: ["PPC management Dubai"] },
  { service: "Social Media",   url: "/services/social-media",     targetLeadsPerMonth: 6,  targetPosition: 3, primaryKeyword: "social media agency Dubai",   supportingKeywords: ["Instagram marketing Dubai"] },
  { service: "Web Development",url: "/services/web-development",  targetLeadsPerMonth: 5,  targetPosition: 3, primaryKeyword: "web development Dubai",       supportingKeywords: ["web design Dubai"] },
  { service: "E-commerce",     url: "/services/ecommerce",        targetLeadsPerMonth: 4,  targetPosition: 3, primaryKeyword: "ecommerce development Dubai", supportingKeywords: ["Shopify development Dubai"] },
  { service: "Branding",       url: "/services/branding",         targetLeadsPerMonth: 3,  targetPosition: 3, primaryKeyword: "branding agency Dubai",       supportingKeywords: ["logo design Dubai"] },
  { service: "Mobile App",     url: "/services/mobile-app",       targetLeadsPerMonth: 4,  targetPosition: 3, primaryKeyword: "mobile app development Dubai",supportingKeywords: ["app development company Dubai"] },
  { service: "Content",        url: "/services/content-marketing",targetLeadsPerMonth: 2,  targetPosition: 3, primaryKeyword: "content marketing agency Dubai",supportingKeywords: ["content writing Dubai"] },
];

// ─────────────────────────────────────────────────────────────────────────────
// OVERALL TARGETS (checked in weekly report)
// ─────────────────────────────────────────────────────────────────────────────
export const OVERALL_GOALS = {
  monthlyOrganicLeads: 40,          // total contact form submissions from organic
  monthlyOrganicSessions: 5000,     // sessions from Google search
  avgPositionTarget: 15,            // site-wide average position (lower = better)
  top3KeywordsTarget: 15,           // number of keywords in positions 1-3
  blogPostsPerMonth: 8,             // posts the blog agent should publish
  backlinksPerMonth: 5,             // outreach / directory submissions
};

// ─────────────────────────────────────────────────────────────────────────────
// HELPER — build the goals section for agent prompts
// ─────────────────────────────────────────────────────────────────────────────
export function buildGoalsContext(): string {
  const highPriority = KEYWORD_GOALS.filter(
    (k) => k.targetPosition <= 3 && k.monthlySearchVolume === "high"
  );

  return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEO GOALS — WHAT WE ARE WORKING TOWARDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OVERALL TARGETS:
- ${OVERALL_GOALS.monthlyOrganicLeads} leads/month from organic search
- ${OVERALL_GOALS.monthlyOrganicSessions.toLocaleString()} organic sessions/month
- Site-wide average position ≤ ${OVERALL_GOALS.avgPositionTarget}
- ${OVERALL_GOALS.top3KeywordsTarget} keywords in positions 1-3

HIGHEST PRIORITY KEYWORDS (top 3, high volume — fix these first):
${highPriority.map((k) => `- "${k.keyword}" → target position ${k.targetPosition} on ${k.url}`).join("\n")}

LEAD TARGETS PER SERVICE:
${SERVICE_GOALS.map((s) => `- ${s.service}: ${s.targetLeadsPerMonth} leads/month from "${s.primaryKeyword}"`).join("\n")}

When fixing pages, always ask: "Does this page have a clear CTA targeting the primary keyword above?"
When picking blog topics, prefer topics that can earn backlinks to the high-priority service pages.
`;
}
