import { getSiteStats, getPage2Keywords, getTopPages, getLowCTRPages } from "./gsc-client.js";

const [stats, keywords, top, ctr] = await Promise.all([
  getSiteStats(28),
  getPage2Keywords(28),
  getTopPages(28),
  getLowCTRPages(28),
]);

console.log("STATS:", JSON.stringify(stats));
console.log("TOP_PAGES:", JSON.stringify(top.slice(0, 10)));
console.log("ALL_KEYWORDS:", JSON.stringify(keywords.slice(0, 30)));
console.log("LOW_CTR:", JSON.stringify(ctr.slice(0, 10)));
