/**
 * LinkedIn Profile SEO Agent
 * Generates keyword-optimized content for every LinkedIn profile section
 * to rank #1 when recruiters/clients search "mobile application developer".
 *
 * LinkedIn algorithm factors:
 *  1. Headline — highest weight, must contain exact keywords
 *  2. About section — keyword density + call-to-action
 *  3. Skills — top 3 skills get most weight, endorsements matter
 *  4. Experience titles + descriptions — keyword repetition
 *  5. Featured section — signals active engagement
 *  6. Connection count + activity score (SSI)
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_FILE = path.join(__dirname, "linkedin-profile-optimized.md");

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ── Your profile details — update these ──────────────────────────────────────
const PROFILE = {
  name: "Ali Husnain",
  targetKeyword: "Mobile Application Developer",
  secondaryKeywords: [
    "Flutter Developer",
    "React Native Developer",
    "iOS Developer",
    "Android Developer",
    "Cross-Platform App Development",
    "Mobile App Developer Dubai",
    "App Development UAE",
  ],
  location: "Dubai, UAE",
  company: "Innovate Digital",
  companyUrl: "https://www.innovatedigital.ae",
  yearsExperience: 5,
  techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Dart", "Firebase", "REST APIs"],
  industries: ["Fintech", "E-commerce", "Real Estate", "Healthcare", "Logistics"],
  appCount: "20+",
  email: "ae.metatech@gmail.com",
};

const PROMPT = `You are a LinkedIn SEO expert who specializes in optimizing profiles to rank #1 in LinkedIn search results.

Your task: Create a complete, keyword-optimized LinkedIn profile for a mobile application developer to rank at the top when recruiters or clients search for "${PROFILE.targetKeyword}" on LinkedIn.

PROFILE DETAILS:
- Name: ${PROFILE.name}
- Location: ${PROFILE.location}
- Company: ${PROFILE.company} (${PROFILE.companyUrl})
- Years of Experience: ${PROFILE.yearsExperience}+
- Tech Stack: ${PROFILE.techStack.join(", ")}
- Industries Served: ${PROFILE.industries.join(", ")}
- Apps Built: ${PROFILE.appCount}
- Primary Target Keyword: "${PROFILE.targetKeyword}"
- Secondary Keywords: ${PROFILE.secondaryKeywords.join(", ")}

HOW LINKEDIN SEARCH RANKING WORKS:
1. Headline is the #1 ranking factor — must include the exact phrase "Mobile Application Developer"
2. About section — LinkedIn indexes first 300 chars heavily; use keywords naturally 3-5 times
3. Current job title — must match the target keyword exactly
4. Skills section — top 3 pinned skills must be the most searched
5. Experience descriptions — use keywords in bullet points, not just the title
6. Profile completeness (All-Star status) boosts ranking significantly
7. Activity score — regular posts about mobile development boost visibility

Generate ALL of the following sections. Be specific, keyword-rich, and professional:

---

## SECTION 1: HEADLINE (220 chars max)
Write 3 headline variations, ranked best to worst.
Rules:
- Must contain "Mobile Application Developer" as the first phrase
- Include Flutter or React Native (most searched)
- Add location signal "Dubai" or "UAE"
- Include a value proposition (e.g., "20+ Apps Published")
- Use | or • as separators

## SECTION 2: ABOUT / SUMMARY (2,600 chars max)
Write the full About section.
Rules:
- First line (before "see more") must hook and contain primary keyword
- Use "Mobile Application Developer" exactly 3-4 times throughout
- Include all secondary keywords naturally
- Add social proof: number of apps, clients, industries
- End with a clear CTA: how to contact for projects/opportunities
- Use emojis sparingly for scannability (📱 🚀 ✅)
- Write in first person, conversational but professional

## SECTION 3: CURRENT JOB TITLE & EXPERIENCE DESCRIPTION
Write:
a) Optimized job title (max 100 chars) — must include "Mobile Application Developer"
b) Experience description for current role at Innovate Digital (use bullet points with •)
   - 5-7 bullet points
   - Each bullet should naturally include a keyword
   - Include metrics where possible (download counts, ratings, performance gains)

## SECTION 4: TOP 50 SKILLS TO ADD
List exactly 50 skills in priority order (most searched first).
Group them:
- Core Mobile (top 10)
- Frameworks & Languages (next 15)
- Backend & APIs (next 10)
- Tools & Platforms (next 10)
- Soft skills & Business (last 5)

## SECTION 5: FEATURED SECTION IDEAS
Write 3 featured post ideas that will:
- Rank for mobile development searches
- Showcase technical expertise
- Get engagement (likes/comments boost profile visibility)

Each idea: title + 3-sentence description of what to write

## SECTION 6: POSTS STRATEGY (Weekly Content Calendar)
Write a 4-week LinkedIn post calendar with:
- Day of week + topic
- First line of the post (hook — most important for algorithm)
- Type: text / image / carousel / video

## SECTION 7: PROFILE URL
Suggest the ideal custom LinkedIn URL to set at linkedin.com/in/[your-url]
Explain why.

## SECTION 8: CONNECTION & ENGAGEMENT STRATEGY
Write 5 specific actions to take this week to boost LinkedIn SSI score and profile views for "mobile application developer" searches. Be very specific.

## SECTION 9: RECOMMENDATIONS SCRIPT
Write a template the user can send to colleagues asking for a recommendation.
The template should subtly guide them to mention "mobile application developer" and specific skills.

---

Format the entire output as clean Markdown.
At the top, add a "Quick Wins" section: the 5 changes to make in the next 30 minutes that will have the biggest immediate ranking impact.`;

async function generateLinkedInOptimization(): Promise<void> {
  console.log("🚀 LinkedIn Profile SEO Agent starting...");
  console.log(`🎯 Target keyword: "${PROFILE.targetKeyword}"`);
  console.log(`📍 Location: ${PROFILE.location}\n`);

  const stream = anthropic.messages.stream({
    model: "claude-opus-4-6",
    max_tokens: 8000,
    thinking: { type: "adaptive" },
    messages: [
      {
        role: "user",
        content: PROMPT,
      },
    ],
  });

  let fullText = "";
  process.stdout.write("Generating optimized LinkedIn profile content...\n\n");

  for await (const event of stream) {
    if (
      event.type === "content_block_delta" &&
      event.delta.type === "text_delta"
    ) {
      fullText += event.delta.text;
      process.stdout.write(event.delta.text);
    }
  }

  const header = `# LinkedIn Profile SEO Optimization
**Target Keyword:** ${PROFILE.targetKeyword}
**Generated:** ${new Date().toISOString().split("T")[0]}
**Profile:** ${PROFILE.name} — ${PROFILE.company}

---

`;

  fs.writeFileSync(OUTPUT_FILE, header + fullText, "utf-8");

  console.log(`\n\n✅ Done! Full optimization plan saved to:`);
  console.log(`   ${OUTPUT_FILE}`);
  console.log(`\n📋 Next steps:`);
  console.log(`   1. Open the file and apply "Quick Wins" changes first`);
  console.log(`   2. Update your LinkedIn headline (biggest ranking factor)`);
  console.log(`   3. Rewrite your About section with the generated text`);
  console.log(`   4. Add all 50 skills listed`);
  console.log(`   5. Run this agent monthly to refresh content`);
}

generateLinkedInOptimization().catch((err) => {
  console.error("❌ LinkedIn Agent failed:", err);
  process.exit(1);
});
