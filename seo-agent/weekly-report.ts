/**
 * Weekly Report Agent — runs every Monday
 * Posts a GitHub Issue summarising the week:
 * - What the blog agent published
 * - What the SEO agent fixed
 * - Real GSC stats (clicks, impressions, position)
 * - What it needs from you (if anything)
 */

import { getSiteStats, getTopPages, getPage2Keywords } from "./gsc-client.js";
import { getGA4SiteStats, getConvertingBlogPosts, getHighTrafficLowConversion } from "./ga4-client.js";
import https from "https";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CHANGES_LOG = path.join(__dirname, "seo-changes-log.json");
const BLOG_DATA_FILE = path.join(__dirname, "../lib/blogPostsData.ts");

function getRecentBlogPosts(days = 7): string[] {
  const content = fs.readFileSync(BLOG_DATA_FILE, "utf-8");
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);

  const posts: string[] = [];
  const blocks = content.match(/\{[^{}]*date:\s*'(\d{4}-\d{2}-\d{2})'[^{}]*title:\s*'([^']+)'[^{}]*\}/gs) || [];

  for (const block of blocks) {
    const dateMatch = block.match(/date:\s*'(\d{4}-\d{2}-\d{2})'/);
    const titleMatch = block.match(/title:\s*'([^']+)'/);
    if (dateMatch && titleMatch) {
      const postDate = new Date(dateMatch[1]);
      if (postDate >= cutoff) posts.push(titleMatch[1]);
    }
  }
  return posts;
}

function getRecentSEOChanges(days = 7): any[] {
  try {
    const log = JSON.parse(fs.readFileSync(CHANGES_LOG, "utf-8"));
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    return log.filter((c: any) => new Date(c.date) >= cutoff);
  } catch {
    return [];
  }
}

async function postGitHubIssue(title: string, body: string): Promise<void> {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPOSITORY; // e.g. "otahir-21/InnovateDigitalWebsite"
  if (!token || !repo) { console.log("GitHub token/repo not set — skipping issue creation"); return; }

  const data = JSON.stringify({ title, body, labels: ["weekly-report", "automated"] });
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: "api.github.com",
      path: `/repos/${repo}/issues`,
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "InnovateDigital-ReportBot",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }, (res) => {
      let body = "";
      res.on("data", (d) => (body += d));
      res.on("end", () => {
        const parsed = JSON.parse(body);
        if (parsed.html_url) console.log(`\n📋 Report issue created: ${parsed.html_url}`);
        resolve();
      });
    });
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

async function main() {
  console.log("📋 Weekly Report Agent starting...\n");

  // ── Gather data ─────────────────────────────────────────────────────────────
  const [statsResult, topPagesResult, page2Result, ga4Result, convertingResult, noLeadsResult] = await Promise.allSettled([
    getSiteStats(7),
    getTopPages(7),
    getPage2Keywords(28),
    getGA4SiteStats(7),
    getConvertingBlogPosts(30),
    getHighTrafficLowConversion(28),
  ]);

  const stats = statsResult.status === "fulfilled" ? statsResult.value : null;
  const topPages = topPagesResult.status === "fulfilled" ? topPagesResult.value : [];
  const page2 = page2Result.status === "fulfilled" ? page2Result.value : [];
  const ga4 = ga4Result.status === "fulfilled" ? ga4Result.value : null;
  const convertingPosts = convertingResult.status === "fulfilled" ? convertingResult.value : [];
  const noLeadsPages = noLeadsResult.status === "fulfilled" ? noLeadsResult.value : [];

  const recentPosts = getRecentBlogPosts(7);
  const recentFixes = getRecentSEOChanges(7);

  const weekOf = new Date().toISOString().split("T")[0];

  // ── Build issue body ────────────────────────────────────────────────────────
  const statsSection = (stats || ga4)
    ? `## 📊 Performance This Week
| Metric | Value |
|--------|-------|
${stats ? `| Google Clicks | ${stats.totalClicks.toLocaleString()} |
| Impressions | ${stats.totalImpressions.toLocaleString()} |
| Avg CTR | ${stats.avgCTR}% |
| Avg Position | ${stats.avgPosition} |` : ""}
${ga4 ? `| Sessions (GA4) | ${ga4.totalSessions.toLocaleString()} |
| Conversions / Leads | **${ga4.totalConversions}** |
| Engagement Rate | ${ga4.engagementRate}% |
| Top Traffic Source | ${ga4.topSource} |` : ""}`
    : `## 📊 Performance\n_Data unavailable — check secrets_`;

  const conversionSection = convertingPosts.length > 0
    ? `## 💰 Blog Posts Generating Leads (Last 30 Days)
${convertingPosts.map((p) => `- \`${p.page}\` → **${p.conversions} leads** from ${p.sessions} sessions`).join("\n")}
> These formats work. Blog agent will write more like these.`
    : "";

  const noLeadsSection = noLeadsPages.length > 0
    ? `## ⚡ High Traffic Pages With Zero Leads
${noLeadsPages.slice(0, 5).map((p) => `- \`${p.page}\` — ${p.sessions} sessions, 0 conversions`).join("\n")}
> SEO agent will add CTAs to these pages.`
    : "";

  const topPagesSection = topPages.length > 0
    ? `## 🏆 Top Pages This Week\n${topPages.slice(0, 5).map((p) =>
        `- \`${p.page.replace("https://www.innovatedigital.ae", "")}\` — **${p.clicks} clicks** (pos: ${p.position})`
      ).join("\n")}`
    : "";

  const page2Section = page2.length > 0
    ? `## 🎯 Page 2 Opportunities (Quick Wins)
These keywords rank 11-20 — worth targeting in next blog posts:
${page2.slice(0, 8).map((k) => `- "${k.query}" (pos ${k.position}, ${k.impressions} impressions/mo)`).join("\n")}`
    : "";

  const blogSection = recentPosts.length > 0
    ? `## ✍️ Blog Posts Published This Week (${recentPosts.length})\n${recentPosts.map((t) => `- ${t}`).join("\n")}`
    : `## ✍️ Blog Posts\n_No posts published this week_`;

  const seoSection = recentFixes.length > 0
    ? `## 🔧 SEO Fixes Made This Week (${recentFixes.length})\n${recentFixes.slice(0, 10).map((c) =>
        `- **${c.page}**: ${c.issue} → ${c.fixed}`
      ).join("\n")}`
    : `## 🔧 SEO Fixes\n_No changes logged this week_`;

  // What needs human input
  const needsInput: string[] = [];
  if (!stats) needsInput.push("GSC credentials not working — check `GSC_SERVICE_ACCOUNT_JSON` secret");
  if (recentPosts.length === 0) needsInput.push("Blog agent produced no posts — check `ANTHROPIC_API_KEY` and `OPENAI_API_KEY` secrets");
  if (page2.length > 5) needsInput.push(`${page2.length} keywords on page 2 — consider adding service pages for: ${page2.slice(0, 3).map(k => `"${k.query}"`).join(", ")}`);

  const needsSection = needsInput.length > 0
    ? `## ⚠️ Needs Your Attention\n${needsInput.map((n) => `- [ ] ${n}`).join("\n")}`
    : `## ✅ Nothing Needs Your Attention\nAll agents ran successfully this week.`;

  const body = `${statsSection}

${topPagesSection}

${page2Section}

${blogSection}

${seoSection}

${needsSection}

---
_Auto-generated by Innovate Digital Agent System • ${weekOf}_`;

  const title = `📊 Weekly SEO Report — ${weekOf}`;

  console.log(body);
  await postGitHubIssue(title, body);
}

main().catch((err) => {
  console.error("❌ Weekly report failed:", err);
  process.exit(1);
});
