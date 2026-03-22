/**
 * Innovate Digital — Master SEO Agent
 *
 * Primary goal: increase UAE commercial keyword rankings and qualified leads.
 * NOT a content machine — a strategic SEO operator.
 *
 * Every run:
 * 1. Gather real data (GSC + GA4 + codebase)
 * 2. Build scored opportunity list
 * 3. Choose ONE highest-value action
 * 4. Execute it deeply and correctly
 * 5. Log the change with full context
 */

import { query } from "@anthropic-ai/claude-agent-sdk";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { getLowCTRPages, getPage2Keywords, getSiteStats, getTopPages } from "./gsc-client.js";
import { getHighTrafficLowConversion, getHighBouncePages, getGA4SiteStats, getConvertingBlogPosts } from "./ga4-client.js";
import { KEYWORD_GOALS, SERVICE_GOALS, buildGoalsContext } from "./seo-goals.js";
import { sendActionRequired } from "./email-client.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CHANGES_LOG = path.join(__dirname, "seo-changes-log.json");

interface ChangeEntry {
  date: string;
  page: string;
  keyword_goal: string;
  action_type: string;
  summary: string;
  expected_impact: string;
}

function loadChangesLog(): ChangeEntry[] {
  try { return JSON.parse(fs.readFileSync(CHANGES_LOG, "utf-8")); }
  catch { return []; }
}

function saveChangesLog(entries: ChangeEntry[]) {
  fs.writeFileSync(CHANGES_LOG, JSON.stringify(entries.slice(-200), null, 2));
}

function buildGSCDataBlock(
  allKeywords: Awaited<ReturnType<typeof getPage2Keywords>>,
  lowCTRPages: Awaited<ReturnType<typeof getLowCTRPages>>,
  topPages: Awaited<ReturnType<typeof getTopPages>>,
  siteStats: Awaited<ReturnType<typeof getSiteStats>> | null
): string {
  if (allKeywords.length === 0 && lowCTRPages.length === 0) {
    return `GSC DATA: Not available yet — site may be new or secrets misconfigured.
Run codebase audit instead: read existing service page files and identify on-page gaps.`;
  }

  // Segment keywords by position
  const pos4to10   = allKeywords.filter(k => k.position >= 4  && k.position <= 10);
  const pos11to20  = allKeywords.filter(k => k.position >= 11 && k.position <= 20);
  const pos21plus  = allKeywords.filter(k => k.position > 20).slice(0, 20);

  return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GSC DATA (last 28 days)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${siteStats ? `Site-wide: ${siteStats.totalClicks} clicks | ${siteStats.totalImpressions} impressions | CTR ${siteStats.avgCTR}% | Avg pos ${siteStats.avgPosition}` : ""}

POSITIONS 4-10 — Close to top 3, high revenue potential if pushed up:
${pos4to10.length > 0 ? pos4to10.slice(0, 15).map(k => `  "${k.query}" pos:${k.position} impressions:${k.impressions} clicks:${k.clicks} CTR:${(k.ctr * 100).toFixed(1)}%`).join("\n") : "  None"}

POSITIONS 11-20 — Page 2, one strong page can reach page 1:
${pos11to20.length > 0 ? pos11to20.slice(0, 15).map(k => `  "${k.query}" pos:${k.position} impressions:${k.impressions} clicks:${k.clicks} CTR:${(k.ctr * 100).toFixed(1)}%`).join("\n") : "  None"}

POSITIONS 21+ — Early signals, lower priority:
${pos21plus.length > 0 ? pos21plus.slice(0, 10).map(k => `  "${k.query}" pos:${k.position} impressions:${k.impressions}`).join("\n") : "  None"}

LOW CTR PAGES — Getting impressions but not clicks (title/meta problem):
${lowCTRPages.length > 0 ? lowCTRPages.slice(0, 10).map(p => `  ${p.page} | impressions:${p.impressions} clicks:${p.clicks} CTR:${(p.ctr * 100).toFixed(1)}% pos:${p.position.toFixed(1)}`).join("\n") : "  None"}

TOP PAGES BY CLICKS:
${topPages.length > 0 ? topPages.slice(0, 5).map(p => `  ${p.page} — ${p.clicks} clicks pos:${p.position}`).join("\n") : "  None"}`;
}

function buildGA4DataBlock(
  highTrafficLowConversion: Awaited<ReturnType<typeof getHighTrafficLowConversion>>,
  highBouncePages: Awaited<ReturnType<typeof getHighBouncePages>>,
  convertingPosts: Awaited<ReturnType<typeof getConvertingBlogPosts>>,
  ga4Stats: Awaited<ReturnType<typeof getGA4SiteStats>> | null
): string {
  if (!ga4Stats && highTrafficLowConversion.length === 0) return "GA4 DATA: Not available.";

  return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GA4 DATA (last 28 days)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${ga4Stats ? `Sessions: ${ga4Stats.totalSessions} | Conversions: ${ga4Stats.totalConversions} | Engagement: ${ga4Stats.engagementRate}% | Top source: ${ga4Stats.topSource}` : ""}

HIGH TRAFFIC — ZERO LEADS (highest revenue impact to fix):
${highTrafficLowConversion.length > 0
  ? highTrafficLowConversion.slice(0, 8).map(p => `  ${p.page} | sessions:${p.sessions} conversions:${p.conversions} engagement:${Math.round(p.engagementRate * 100)}%`).join("\n")
  : "  None"}

HIGH BOUNCE PAGES (content/intent mismatch):
${highBouncePages.length > 0
  ? highBouncePages.slice(0, 8).map(p => `  ${p.page} | sessions:${p.sessions} engagement:${Math.round(p.engagementRate * 100)}% avg_time:${Math.round(p.avgSessionDuration)}s`).join("\n")
  : "  None"}

BLOG POSTS GENERATING LEADS:
${convertingPosts.length > 0
  ? convertingPosts.slice(0, 5).map(p => `  ${p.page} → ${p.conversions} leads from ${p.sessions} sessions`).join("\n")
  : "  None yet"}`;
}

async function main() {
  console.log("🚀 Master SEO Agent starting...\n");

  // ── 1. Gather all data ──────────────────────────────────────────────────────
  console.log("📊 Fetching GSC + GA4 data...");

  const [gscAll, gscCTR, gscTop, gscStats, ga4HiTraffic, ga4Bounce, ga4Overall, ga4Converting] = await Promise.allSettled([
    getPage2Keywords(28),
    getLowCTRPages(28),
    getTopPages(28),
    getSiteStats(7),
    getHighTrafficLowConversion(28),
    getHighBouncePages(28),
    getGA4SiteStats(7),
    getConvertingBlogPosts(30),
  ]);

  const allKeywords    = gscAll.status        === "fulfilled" ? gscAll.value        : [];
  const lowCTRPages    = gscCTR.status        === "fulfilled" ? gscCTR.value        : [];
  const topPages       = gscTop.status        === "fulfilled" ? gscTop.value        : [];
  const siteStats      = gscStats.status      === "fulfilled" ? gscStats.value      : null;
  const hiTraffic      = ga4HiTraffic.status  === "fulfilled" ? ga4HiTraffic.value  : [];
  const highBounce     = ga4Bounce.status     === "fulfilled" ? ga4Bounce.value     : [];
  const ga4Stats       = ga4Overall.status    === "fulfilled" ? ga4Overall.value    : null;
  const convertingPosts= ga4Converting.status === "fulfilled" ? ga4Converting.value : [];

  const p2count = allKeywords.filter(k => k.position >= 11 && k.position <= 20).length;
  console.log(`  ↳ GSC keywords total: ${allKeywords.length} (${p2count} on page 2)`);
  console.log(`  ↳ Low CTR pages: ${lowCTRPages.length}`);
  console.log(`  ↳ High traffic / zero leads: ${hiTraffic.length}`);
  console.log(`  ↳ High bounce pages: ${highBounce.length}`);
  if (siteStats) console.log(`  ↳ Site: ${siteStats.totalClicks} clicks | pos ${siteStats.avgPosition}`);
  if (ga4Stats)  console.log(`  ↳ GA4: ${ga4Stats.totalSessions} sessions | ${ga4Stats.totalConversions} conversions`);

  // ── 2. Build the strategic prompt ───────────────────────────────────────────
  const PROMPT = `You are the Master SEO Agent for Innovate Digital (innovatedigital.ae).
This is a UAE digital marketing agency website.

SITE ROOT: ${ROOT}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BUSINESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: Innovate Digital
Domain: https://www.innovatedigital.ae
Phone: +971 52 394 9010
Email: info@innovatedigital.ae
Address: Meydan Free Zone, Dubai, UAE
Trust signals: 5.0/5 (47 reviews) | Founded 2020 | 200+ clients

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIMARY GOAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Increase rankings for UAE commercial keywords and generate more qualified leads.
NOT to publish content for its own sake.
Your definition of success: better rankings, more leads, stronger service pages.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TARGET KEYWORDS (highest priority)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${buildGoalsContext()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LIVE DATA FROM GOOGLE SEARCH CONSOLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${buildGSCDataBlock(allKeywords, lowCTRPages, topPages, siteStats)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LIVE DATA FROM GOOGLE ANALYTICS 4
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${buildGA4DataBlock(hiTraffic, highBounce, convertingPosts, ga4Stats)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR TASK — 4 STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## STEP 1 — READ THE CODEBASE
Before deciding anything, read the actual files:
- Use Glob to find all service pages: app/**/page.tsx, components/services/**
- Read the pages that correspond to the GSC/GA4 data above
- Look at their metadata, H1, content, schema, internal links, CTAs
- Check what keywords they are targeting vs what they are actually ranking for

## STEP 2 — BUILD TOP 5 OPPORTUNITIES
You are acting as Head of SEO. List exactly 5 opportunities found in the data and codebase.
For each one:
- Action type — choose ONE of:
  A. service-page-optimization  (improve existing commercial page content/structure)
  B. page-2-expansion           (expand page ranking pos 11-20 to reach page 1)
  C. ctr-improvement            (rewrite title/meta for high-impression low-CTR page)
  D. internal-linking           (add links from supporting pages to money pages)
  E. conversion-cro             (fix CTA, trust signals, lead capture on commercial page)
  F. schema-fix                 (add/fix structured data on service or location page)
  G. new-supporting-content     (new blog/article, only if nothing else scores higher)
  H. no-action                  (no strong opportunity — report why)
- Page/URL affected
- Keyword goal it supports
- Current problem found in the codebase
- Proposed action
- Score (1-10): revenue potential × ranking potential × confidence × speed

## STEP 3 — CHOOSE ONE ACTION
Apply this exact decision rule in order — stop at the first rule that matches:

RULE 1: If a commercial page ranks positions 4-20 for a target keyword
  → Choose A (service-page-optimization) or B (page-2-expansion)
  → This is the highest-value move. One strong page improvement can mean 3-5 position jumps.

RULE 2: If a commercial page has high impressions but CTR below 3%
  → Choose C (ctr-improvement)
  → More clicks from existing impressions = free traffic. Title/meta fix is low-risk, high-speed.

RULE 3: If relevant blog/supporting pages exist but do not link to a money page
  → Choose D (internal-linking)
  → Internal links pass authority directly to service pages. Quick win, zero content needed.

RULE 4: If a commercial page receives traffic but shows weak conversion signals (no clear CTA, no trust block, no WhatsApp/form above fold)
  → Choose E (conversion-cro)
  → Traffic without leads is wasted. Fix the page to capture what is already coming.

RULE 5: If technical/schema issues exist on a service or location page
  → Choose F (schema-fix)

RULE 6: If no stronger opportunity exists and a supporting article clearly targets a keyword cluster that feeds a money page
  → Choose G (new-supporting-content)
  → Only valid if the article targets a specific commercial-intent keyword and includes internal links back to the service page.

RULE 7: If no opportunity has strong business value
  → Choose H (no-action) and explain why.

State clearly:
- Chosen action type (letter A–H)
- Target page
- Target keyword
- Why this is the highest-value move today (1-2 sentences referencing the rule that fired)
- Expected SEO outcome
- Risk level (low / medium / high)
- Exact files you will edit

Do NOT do 5 things. Do ONE thing deeply and correctly.

## STEP 4 — EXECUTE
Make the change. You can edit:
- title tag and meta description
- H1 and page headings
- intro and body content
- FAQ sections
- schema markup (JSON-LD)
- internal links (add links to service pages from supporting pages)
- CTA sections and conversion blocks
- image alt text
- canonical tags

After every file edit, run: cd ${ROOT} && npx tsc --noEmit 2>&1 | tail -5
Fix any TypeScript errors before moving on.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HARD RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NEVER publish a blog post unless it is clearly the highest-value action and no existing-page opportunity scores higher
- NEVER make scattered minor edits just to appear productive
- NEVER create location doorway pages
- NEVER create a new page that cannibalises an existing target page
- NEVER add Dubai/UAE modifiers in a spammy or unnatural way
- ALWAYS prefer one strong strategic improvement over many weak ones
- ALWAYS check that the page you are optimising actually exists in the codebase first

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT FORMAT (required at the end)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
After completing the work, output this exact block:

CHANGES_START
{
  "opportunity_analysis": [
    { "rank": 1, "action": "A", "page": "...", "keyword": "...", "score": 0, "reason": "..." },
    { "rank": 2, "action": "B", "page": "...", "keyword": "...", "score": 0, "reason": "..." },
    { "rank": 3, "action": "C", "page": "...", "keyword": "...", "score": 0, "reason": "..." },
    { "rank": 4, "action": "D", "page": "...", "keyword": "...", "score": 0, "reason": "..." },
    { "rank": 5, "action": "E", "page": "...", "keyword": "...", "score": 0, "reason": "..." }
  ],
  "decision": {
    "chosen_action": "A",
    "target_page": "...",
    "target_keyword": "...",
    "rule_fired": "RULE 1 — commercial page ranking pos X for target keyword",
    "reason": "...",
    "expected_outcome": "...",
    "risk": "low"
  },
  "changes": [
    {
      "page": "url or file path",
      "keyword_goal": "target keyword",
      "action_type": "letter and name e.g. A — service-page-optimization",
      "summary": "exactly what you changed",
      "expected_impact": "what ranking/conversion improvement you expect"
    }
  ]
}
CHANGES_END`;

  // ── 3. Run the agent ────────────────────────────────────────────────────────
  console.log("\n🧠 Agent thinking...\n");
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
      const resultText = message.result || "";
      const match = resultText.match(/CHANGES_START\s*([\s\S]*?)\s*CHANGES_END/);
      if (match) {
        try {
          const parsed = JSON.parse(match[1]);
          // Log opportunity analysis
          if (parsed.opportunity_analysis) {
            console.log("\n📋 Opportunity Analysis:");
            for (const opp of parsed.opportunity_analysis) {
              console.log(`  #${opp.rank} [score:${opp.score}] ${opp.action} — "${opp.keyword}" on ${opp.page}`);
            }
          }
          // Log the decision
          if (parsed.decision) {
            const d = parsed.decision;
            console.log(`\n🎯 Decision: Action ${d.chosen_action} — ${d.target_keyword} on ${d.target_page}`);
            console.log(`   Rule: ${d.rule_fired}`);
            console.log(`   Reason: ${d.reason}`);
            console.log(`   Expected: ${d.expected_outcome}`);
            console.log(`   Risk: ${d.risk}`);
          }
          changes.push(
            ...(parsed.changes || []).map((c: any) => ({
              date: new Date().toISOString(),
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
    console.log(`\n📝 Logged ${changes.length} change(s)`);
  } else {
    console.log("\nℹ️  No changes made today — agent found no strong enough opportunity");
  }

  // ── 5. Email alerts ─────────────────────────────────────────────────────────
  const actionItems: string[] = [];
  if (!siteStats) actionItems.push("GSC not returning data — check GSC_SERVICE_ACCOUNT_JSON secret");
  if (!ga4Stats)  actionItems.push("GA4 not returning data — check GA4_PROPERTY_ID secret");
  if (hiTraffic.length > 3 && changes.length === 0)
    actionItems.push(`${hiTraffic.length} high-traffic pages still have zero conversions — agent made no changes, manual review needed`);

  if (actionItems.length > 0) await sendActionRequired(actionItems);

  // ── 6. Report data for weekly report ────────────────────────────────────────
  console.log("\n📋 REPORT_DATA_START");
  console.log(JSON.stringify({
    date: new Date().toISOString().split("T")[0],
    gscKeywordsTotal: allKeywords.length,
    page2Keywords: allKeywords.filter(k => k.position >= 11 && k.position <= 20).slice(0, 5),
    siteStats,
    ga4Stats,
    changesCount: changes.length,
    changes: changes.slice(0, 10),
  }));
  console.log("REPORT_DATA_END");
}

main().catch((err) => {
  console.error("❌ Master SEO Agent failed:", err);
  process.exit(1);
});
