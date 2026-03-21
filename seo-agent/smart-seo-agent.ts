/**
 * Innovate Digital — Smart SEO Agent
 *
 * Thinks for itself:
 * 1. Pulls low-CTR pages from GSC (real data, not guesswork)
 * 2. Only fixes pages that actually need fixing
 * 3. Uses Claude Agent SDK to read + rewrite metadata intelligently
 * 4. Logs every change made for the weekly report
 * 5. Opens a GitHub issue if it finds something it can't fix alone
 */

import { query } from "@anthropic-ai/claude-agent-sdk";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { getLowCTRPages, getPage2Keywords, getSiteStats } from "./gsc-client.js";
import { getHighTrafficLowConversion, getHighBouncePages, getGA4SiteStats } from "./ga4-client.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CHANGES_LOG = path.join(__dirname, "seo-changes-log.json");

interface ChangeEntry {
  date: string;
  page: string;
  issue: string;
  fixed: string;
}

function loadChangesLog(): ChangeEntry[] {
  try {
    return JSON.parse(fs.readFileSync(CHANGES_LOG, "utf-8"));
  } catch {
    return [];
  }
}

function saveChangesLog(entries: ChangeEntry[]) {
  fs.writeFileSync(CHANGES_LOG, JSON.stringify(entries.slice(-200), null, 2));
}

async function main() {
  console.log("🚀 Smart SEO Agent starting...\n");

  // ── 1. Get real data from GSC ───────────────────────────────────────────────
  console.log("📊 Fetching GSC intelligence...");

  let lowCTRPages: Awaited<ReturnType<typeof getLowCTRPages>> = [];
  let page2Keywords: Awaited<ReturnType<typeof getPage2Keywords>> = [];
  let siteStats: Awaited<ReturnType<typeof getSiteStats>> | null = null;
  let highTrafficLowConversion: Awaited<ReturnType<typeof getHighTrafficLowConversion>> = [];
  let highBouncePages: Awaited<ReturnType<typeof getHighBouncePages>> = [];
  let ga4Stats: Awaited<ReturnType<typeof getGA4SiteStats>> | null = null;

  const [gscCTR, gscP2, gscStats, ga4HiTraffic, ga4Bounce, ga4Overall] = await Promise.allSettled([
    getLowCTRPages(28),
    getPage2Keywords(28),
    getSiteStats(7),
    getHighTrafficLowConversion(28),
    getHighBouncePages(28),
    getGA4SiteStats(7),
  ]);

  if (gscCTR.status === "fulfilled") lowCTRPages = gscCTR.value;
  if (gscP2.status === "fulfilled") page2Keywords = gscP2.value;
  if (gscStats.status === "fulfilled") siteStats = gscStats.value;
  if (ga4HiTraffic.status === "fulfilled") highTrafficLowConversion = ga4HiTraffic.value;
  if (ga4Bounce.status === "fulfilled") highBouncePages = ga4Bounce.value;
  if (ga4Overall.status === "fulfilled") ga4Stats = ga4Overall.value;

  console.log(`  ↳ Low CTR pages (GSC): ${lowCTRPages.length}`);
  console.log(`  ↳ High traffic, zero leads (GA4): ${highTrafficLowConversion.length}`);
  console.log(`  ↳ High bounce pages (GA4): ${highBouncePages.length}`);
  console.log(`  ↳ Page-2 keywords: ${page2Keywords.length}`);
  if (siteStats) console.log(`  ↳ GSC: ${siteStats.totalClicks} clicks | pos ${siteStats.avgPosition}`);
  if (ga4Stats) console.log(`  ↳ GA4: ${ga4Stats.totalSessions} sessions | ${ga4Stats.totalConversions} conversions`);

  // ── 2. Build targeted prompt based on real data ─────────────────────────────
  const ga4Context = highTrafficLowConversion.length > 0 || highBouncePages.length > 0 ? `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIORITY 1 — HIGH TRAFFIC BUT ZERO LEADS (from Google Analytics)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
These pages get real visitors but nobody converts. Fix CTAs first — this is the highest revenue impact.

${highTrafficLowConversion.map((p) => `Page: ${p.page}
  Sessions: ${p.sessions} | Conversions: ${p.conversions} | Engagement: ${Math.round(p.engagementRate * 100)}%
  Fix: Add a prominent CTA section (WhatsApp button, free audit offer, or contact form) above the fold.
  Make the value proposition clear — what do they get by contacting you?`).join("\n\n")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIORITY 2 — HIGH BOUNCE RATE PAGES (from Google Analytics)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
People land and immediately leave. The content doesn't match what they expected.

${highBouncePages.map((p) => `Page: ${p.page}
  Sessions: ${p.sessions} | Engagement rate: ${Math.round(p.engagementRate * 100)}% | Avg time: ${Math.round(p.avgSessionDuration)}s
  Fix: Check the H1 matches the keyword bringing traffic. Improve the opening paragraph.
  Add internal links to keep people on the site longer.`).join("\n\n")}
` : "";

  const gscContext = lowCTRPages.length > 0
    ? `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIORITY TASK — FIX LOW CTR PAGES (from Google Search Console)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
These pages get impressions on Google but people don't click.
The title and meta description need to be more compelling.

${lowCTRPages.map((p) => `Page: ${p.page}
  Impressions: ${p.impressions} | Clicks: ${p.clicks} | CTR: ${(p.ctr * 100).toFixed(1)}% | Position: ${p.position.toFixed(1)}
  Fix: Rewrite the metadata export in the corresponding page.tsx file.
  The title should be specific, benefit-driven, and include the primary keyword.
  The description should create urgency or curiosity (140-160 chars).`
).join("\n\n")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAGE-2 KEYWORDS (ranking 11-20 — add content to push to page 1)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
These keywords are close to page 1. Find the page ranking for each
and add a section or paragraph targeting it more specifically.

${page2Keywords.slice(0, 10).map((k) => `- "${k.query}" (position ${k.position.toFixed(1)}, ${k.impressions} impressions)`).join("\n")}
`
    : `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GSC DATA UNAVAILABLE — RUN STANDARD AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Run the standard 12-task audit covering metadata, schema,
headings, alt text, canonicals, and sitemap.
`;

  const PROMPT = `You are an expert SEO engineer for Innovate Digital (innovatedigital.ae),
a digital marketing agency in Dubai, UAE.

SITE ROOT: ${ROOT}

${ga4Context}

BUSINESS:
- Name: Innovate Digital
- Domain: https://www.innovatedigital.ae
- Phone: +971 52 394 9010
- Email: info@innovatedigital.ae
- Address: Meydan Free Zone, Dubai, UAE
- Rating: 5.0/5 (47 reviews) | Founded: 2020 | 200+ clients

${gscContext}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STANDARD CHECKS (run after priority tasks)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Every page has a unique, keyword-rich title (50-60 chars)
2. Every page has a meta description (140-160 chars)
3. Every page has a canonical URL
4. All service pages have FAQ schema
5. All location pages have AggregateRating schema
6. No images missing alt text
7. Sitemap includes all pages with correct priorities
8. llms.txt exists at public/llms.txt and is up to date

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXECUTION RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Fix priority (low CTR) pages FIRST
- After EVERY file edit, run: cd ${ROOT} && npx tsc --noEmit 2>&1 | tail -3
- If TypeScript errors appear, fix them immediately
- Do NOT add dummy data — if real content is needed, note it in output
- At the end, output a JSON summary:

CHANGES_START
{ "changes": [ { "page": "url", "issue": "what was wrong", "fixed": "what you changed" } ] }
CHANGES_END`;

  // ── 3. Run the agent ────────────────────────────────────────────────────────
  const changes: ChangeEntry[] = [];

  for await (const message of query({
    prompt: PROMPT,
    options: {
      cwd: ROOT,
      allowedTools: ["Read", "Write", "Edit", "Bash", "Glob", "Grep"],
      permissionMode: "acceptEdits",
      maxTurns: 80,
      model: "claude-opus-4-6",
    },
  })) {
    if ("result" in message) {
      // Parse changes from agent output
      const resultText = message.result || "";
      const match = resultText.match(/CHANGES_START\s*([\s\S]*?)\s*CHANGES_END/);
      if (match) {
        try {
          const parsed = JSON.parse(match[1]);
          changes.push(
            ...(parsed.changes || []).map((c: any) => ({
              date: new Date().toISOString().split("T")[0],
              ...c,
            }))
          );
        } catch {}
      }
      console.log("\n✅ SEO Agent complete");
    } else if (message.type === "assistant" && Array.isArray(message.message?.content)) {
      for (const block of message.message.content) {
        if (block.type === "text" && block.text) process.stdout.write(block.text);
      }
    }
  }

  // ── 4. Save changes log ─────────────────────────────────────────────────────
  if (changes.length > 0) {
    const log = loadChangesLog();
    log.push(...changes);
    saveChangesLog(log);
    console.log(`\n📝 Logged ${changes.length} changes`);
  }

  // ── 5. Output report for GitHub Issue ──────────────────────────────────────
  console.log("\n📋 REPORT_DATA_START");
  console.log(JSON.stringify({
    date: new Date().toISOString().split("T")[0],
    lowCTRPagesFixed: lowCTRPages.length,
    page2Keywords: page2Keywords.slice(0, 5),
    siteStats,
    changesCount: changes.length,
    changes: changes.slice(0, 10),
  }));
  console.log("REPORT_DATA_END");
}

main().catch((err) => {
  console.error("❌ Smart SEO Agent failed:", err);
  process.exit(1);
});
