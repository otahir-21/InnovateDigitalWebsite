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
import { createBlogPost } from "./blog-module.js";

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
  const PROMPT = `You are the Master SEO Agent operating in a production Next.js codebase.

Your goal is to improve organic rankings and generate leads for a UAE digital marketing agency.
You must act like a senior Head of SEO, not a content generator.

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
TARGET KEYWORDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${buildGoalsContext()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LIVE DATA — GOOGLE SEARCH CONSOLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${buildGSCDataBlock(allKeywords, lowCTRPages, topPages, siteStats)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LIVE DATA — GOOGLE ANALYTICS 4
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${buildGA4DataBlock(hiTraffic, highBounce, convertingPosts, ga4Stats)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CORE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You do NOT publish content daily.
You choose ONE highest-value SEO action per run.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1 — READ THE CODEBASE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Use Glob + Read to inspect the pages in the GSC/GA4 data above.
Check metadata, H1, content, schema, internal links, and CTAs.
Do not decide anything until you have read the actual files.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 — DECISION SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Build and evaluate opportunities, then apply this waterfall strictly in order.
Stop at the first rule that matches.

A. If a commercial keyword ranks pos 4–10
   → refine title, meta, H1, and on-page elements (no full rewrite)

B. If a commercial keyword ranks pos 11–20
   → expand content, add proof, and strengthen internal links

C. If a commercial page has high impressions + low CTR
   → rewrite title and meta to improve click-through rate
   (thresholds: < 3% for pos 1–5, < 2% for pos 6–10, < 1% for pos 11–20)

D. If supporting pages do not link to a money page
   → add 2–4 contextual internal links using natural anchors

E. If a commercial page gets traffic but no leads
   → improve CTA, trust signals, WhatsApp button, and conversion UX

F. If technical issues exist
   → fix schema, canonical, alt text, or metadata issues

G. ONLY if ALL three are true:
   - a keyword gap exists with no existing page targeting it
   - no cannibalization risk with existing service pages
   - SERP shows informational or comparison content (not just service pages)
   → create a new supporting blog post

H. If nothing meets the bar
   → do nothing and log clearly why (this is a valid outcome)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 — LOG YOUR DECISION (before executing)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Log clearly:
- Top 5 opportunities found (action A–H, page, keyword, score 1–10, reason)
- Selected action
- Target page and keyword
- Which rule fired
- Why this is the highest-value move today (1–2 sentences)
- Expected impact
- Risk level (low / medium / high)
- Exact files you will edit

Do ONE thing deeply and correctly. Do not make scattered edits.
Prefer service pages over blog pages.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4 — EXECUTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You may edit: title tag, meta description, H1, headings, intro and body content,
FAQ sections, schema markup (JSON-LD), internal links, CTA sections, image alt text,
canonical tags.

For Rule G only: write 1,500–2,000 words of HTML content targeting UAE audience.
Include internal links to the relevant service page. End with a CTA.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CODE SAFETY LOOP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
After every change:

1. Run: cd ${ROOT} && npx tsc --noEmit 2>&1
   - If errors: fix precisely, retry up to 5 times
   - If clean: proceed to build

2. Run: cd ${ROOT} && npm run build 2>&1 | tail -30
   - If errors: fix precisely, retry up to 3 times
   - If clean: changes are safe

3. If still failing after all retries:
   - Revert the breaking change
   - Set build_status "failed" in output
   - Stop

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEPLOYMENT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEVER push directly to main.
Your job is to edit files only. The GitHub Actions workflow handles git push to staging.
validate-and-deploy.yml handles the merge to main after build validation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HARD RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Do not publish content unless Rule G is triggered
- Do not create duplicate or competing pages
- Do not break the build
- Do not prioritise traffic over leads
- Do not make changes just to appear active
- Do not revert good SEO work when fixing build errors
- Always confirm a page exists in the codebase before editing it

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT FORMAT (required at end of every run)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
    "rule_fired": "A — pos 4-10 for target keyword",
    "reason": "...",
    "expected_outcome": "...",
    "risk": "low"
  },
  "build_status": "passed",
  "error_report": null,
  "changes": [
    {
      "page": "url or file path",
      "keyword_goal": "target keyword",
      "action_type": "e.g. A — ctr-snippet-refinement",
      "summary": "exactly what you changed",
      "expected_impact": "what ranking or conversion improvement you expect"
    }
  ]
}
CHANGES_END

If build failed:
CHANGES_START
{
  "opportunity_analysis": [...],
  "decision": {...},
  "build_status": "failed",
  "error_report": {
    "file": "path/to/file.tsx",
    "error_message": "exact error from tsc or build",
    "attempted_fixes": ["fix 1 description", "fix 2 description"],
    "reason_failed": "why it could not be resolved"
  },
  "changes": []
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

          // Rule G — create blog post via blog-module
          if (
            parsed.decision?.chosen_action === "G" &&
            parsed.build_status !== "failed" &&
            parsed.decision?.target_keyword
          ) {
            console.log(`\n📝 Rule G fired — delegating to blog-module: "${parsed.decision.target_keyword}"`);
            try {
              const blogResult = await createBlogPost(parsed.decision.target_keyword);
              changes.push({
                date: new Date().toISOString(),
                page: `/blog/${blogResult.slug}`,
                keyword_goal: parsed.decision.target_keyword,
                action_type: "G — new-supporting-content",
                summary: `Created blog post: "${blogResult.title}" (${blogResult.slug})`,
                expected_impact: parsed.decision.expected_outcome || "New page targeting keyword gap, supporting internal linking to service pages",
              });
              console.log(`✅ Blog post published: "${blogResult.title}"`);
              console.log(`   URL: /blog/${blogResult.slug}`);
              console.log(`   Image: ${blogResult.imagePath}`);
            } catch (blogErr: any) {
              console.error(`❌ Blog creation failed: ${blogErr.message}`);
            }
          }

          // Log build status
          if (parsed.build_status === "failed" && parsed.error_report) {
            const e = parsed.error_report;
            console.log(`\n❌ BUILD FAILED`);
            console.log(`   File: ${e.file}`);
            console.log(`   Error: ${e.error_message}`);
            console.log(`   Attempted: ${(e.attempted_fixes || []).join(", ")}`);
            console.log(`   Reason: ${e.reason_failed}`);
          } else if (parsed.build_status === "passed") {
            console.log(`\n✅ Build passed — changes are safe`);
          }

          // For non-G actions, push the agent's reported changes
          if (parsed.build_status !== "failed" && parsed.decision?.chosen_action !== "G") {
            changes.push(
              ...(parsed.changes || []).map((c: any) => ({
                date: new Date().toISOString(),
                ...c,
              }))
            );
          }
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
  if (changes.length === 0 && allKeywords.length > 0)
    actionItems.push("SEO agent found opportunities but made no changes — may have hit a build error. Check today's action logs.");

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
