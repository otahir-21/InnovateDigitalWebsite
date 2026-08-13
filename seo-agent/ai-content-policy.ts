/**
 * Google Search guidance on generative AI content (updated 2025-12-10).
 * https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
 *
 * AI may help research and structure original work. Generating many pages
 * without adding value can violate scaled content abuse. Metadata (title,
 * description, schema, alt text) must be accurate. Tell readers how
 * automated content was made.
 */

export const GOOGLE_AI_CONTENT_URL =
  "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content";

export const BLOG_WRITING_POLICY = `
GOOGLE SEARCH — GENERATIVE AI CONTENT POLICY
Source: ${GOOGLE_AI_CONTENT_URL}

You may use generative AI to research a topic and to structure original content.
You may NOT generate pages whose only purpose is to cover more queries.

This work is evaluated against:
- Search Essentials and Google spam policies (scaled content abuse)
- Quality Rater Guidelines 4.6.5 (scaled content abuse)
- Quality Rater Guidelines 4.6.6 (main content with little effort, originality, or added value)

HARD RULES:
- Do not invent statistics, studies, quotes, client names, rankings, or case results.
- If you use a number, name a real public source. If you cannot, omit the number.
- Do not write commodity posts ("7 tips", "ultimate guide", generic how-tos) that any model could produce.
- Original value is required: first-hand UAE process, published Innovate Digital case studies, or pricing/process we actually use. If you cannot add that, return JSON {"abort": true, "reason": "no original value"} and do not write the article.
- Title, excerpt, and meta description must be accurate. No "#1", "guaranteed", or unpublished metrics.
- Do not pad to hit a word count. Length follows the topic, not a quota.
- British English. Clean HTML: <h2>, <h3>, <p>, <ul>, <li>, <strong>, <a> only.
`;
