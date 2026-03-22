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
  A. ctr-snippet-refinement     (pos 4-10: tighten on-page + improve CTR without full rewrite)
  B. page-2-expansion           (pos 11-20: expand content + proof + internal links to reach page 1)
  C. ctr-improvement            (high impressions + low CTR: rewrite title/meta for SERP appeal)
  D. internal-linking           (supporting pages not passing authority to money pages)
  E. conversion-cro             (commercial page gets traffic but weak CTA/trust/form)
  F. technical-schema-fix       (schema, canonical, alt text, indexability issues)
  G. new-supporting-content     (clear keyword gap, no cannibalization, SERP supports new page)
  H. no-action                  (no opportunity meets the bar — explain why)
- Page/URL affected
- Keyword goal it supports
- Current problem found in the codebase
- Proposed action
- Score (1-10): revenue potential × ranking potential × confidence × speed

## STEP 3 — CHOOSE ONE ACTION
Work through this waterfall in strict order. Stop at the first rule that matches.

RULE 1 — pos 4-10 for a target keyword?
  → Action A: CTR + snippet + on-page refinement
  → Goal: push from page-1 mid to page-1 top. Improve title for CTR, tighten H1/intro to
    match query intent more precisely, improve meta description snippet appeal.
    Do NOT rewrite the whole page — surgical improvements only.

RULE 2 — pos 11-20 for a target keyword?
  → Action B: expand content + add proof + add internal links
  → Goal: break onto page 1. Add a missing section targeting the keyword, add UAE-specific
    proof (stats, case studies, pricing context), strengthen internal links TO this page
    from relevant supporting content.

RULE 3 — commercial page has high impressions + CTR below threshold (< 3% for pos 1-5, < 2% for pos 6-10, < 1% for pos 11-20)?
  → Action C: rewrite title/meta and improve SERP appeal
  → Goal: more clicks from existing rankings without touching rankings themselves.
    Title should include primary keyword, clear benefit, and UAE/Dubai signal where natural.
    Meta description should create curiosity or urgency in 140-160 chars.

RULE 4 — relevant supporting pages (blog posts, guides, location pages) exist but do NOT link to a money page?
  → Action D: internal link optimisation
  → Goal: pass link authority from supporting content to service pages.
    Use natural anchor text. Add 2-4 contextual links per supporting page.
    Do not over-optimise anchors.

RULE 5 — commercial page gets traffic but shows weak conversion signals (no CTA above fold, no WhatsApp button, no trust block, no form)?
  → Action E: improve CTA / trust / form / WhatsApp UX
  → Goal: convert existing traffic into leads. Add or improve:
    WhatsApp click-to-chat button, free audit CTA, trust signals (reviews, client count),
    or contact form visibility. Keep it natural — do not add spammy urgency.

RULE 6 — technical or schema issues on service or location pages (missing schema, broken canonical, missing alt text on key images)?
  → Action F: fix technical SEO blockers
  → Goal: remove indexability or trust signals that hold rankings back.

RULE 7 — clear keyword gap AND no cannibalization risk AND the SERP supports a new page?
  → Action G: create supporting content or new page
  → Only choose this if ALL three conditions are true:
    1. A specific high-intent keyword has no existing page targeting it
    2. Writing this page will NOT compete with an existing service page
    3. The SERP for this keyword shows informational or comparison content, not just service pages
  → New content must include internal links to the relevant service page.

RULE 8 — none of the above fire with confidence?
  → Action H: no change
  → Explain exactly why no opportunity met the bar. This is a valid and correct outcome.

State clearly:
- Chosen action letter (A through H)
- Target page
- Target keyword
- Which rule fired
- Why this is the highest-value move today (1-2 sentences)
- Expected SEO outcome
- Risk level (low / medium / high)
- Exact files you will edit

Do NOT do multiple actions. Do ONE thing deeply and correctly.

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
    "current_position": 0,
    "rule_fired": "RULE 1 — pos 4-10 for target keyword",
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
            console.log(`\n🎯 Decision: Action ${d.chosen_action} — "${d.target_keyword}" (pos ${d.current_position}) on ${d.target_page}`);
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
