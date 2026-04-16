import { google } from "googleapis";

const PROPERTY_ID = "520222539"; // innovatedigital.ae

const credentials = JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON!);
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
});

const analyticsdata = google.analyticsdata({ version: "v1beta", auth });

const [sessionsRes, pagesRes, sourcesRes] = await Promise.all([
  // Overall stats last 28 days
  analyticsdata.properties.runReport({
    property: `properties/${PROPERTY_ID}`,
    requestBody: {
      dateRanges: [{ startDate: "28daysAgo", endDate: "today" }],
      dimensions: [],
      metrics: [
        { name: "sessions" },
        { name: "activeUsers" },
        { name: "engagementRate" },
        { name: "conversions" },
        { name: "averageSessionDuration" },
      ],
    },
  }),
  // Top pages
  analyticsdata.properties.runReport({
    property: `properties/${PROPERTY_ID}`,
    requestBody: {
      dateRanges: [{ startDate: "28daysAgo", endDate: "today" }],
      dimensions: [{ name: "pagePath" }],
      metrics: [{ name: "sessions" }, { name: "engagementRate" }, { name: "conversions" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 10,
    },
  }),
  // Traffic sources
  analyticsdata.properties.runReport({
    property: `properties/${PROPERTY_ID}`,
    requestBody: {
      dateRanges: [{ startDate: "28daysAgo", endDate: "today" }],
      dimensions: [{ name: "sessionDefaultChannelGroup" }],
      metrics: [{ name: "sessions" }, { name: "conversions" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 10,
    },
  }),
]);

const stats = sessionsRes.data.rows?.[0]?.metricValues;
console.log("\n=== SITE STATS (last 28 days) ===");
console.log(`Sessions:          ${stats?.[0]?.value}`);
console.log(`Active Users:      ${stats?.[1]?.value}`);
console.log(`Engagement Rate:   ${(parseFloat(stats?.[2]?.value || "0") * 100).toFixed(1)}%`);
console.log(`Conversions:       ${stats?.[3]?.value}`);
console.log(`Avg Session Time:  ${Math.round(parseFloat(stats?.[4]?.value || "0"))}s`);

console.log("\n=== TOP PAGES ===");
for (const row of pagesRes.data.rows || []) {
  const [page] = row.dimensionValues!.map(d => d.value);
  const [sessions, eng, conv] = row.metricValues!.map(m => m.value);
  console.log(`${page?.padEnd(55)} sessions=${sessions}  engagement=${(parseFloat(eng||"0")*100).toFixed(0)}%  conversions=${conv}`);
}

console.log("\n=== TRAFFIC SOURCES ===");
for (const row of sourcesRes.data.rows || []) {
  const [source] = row.dimensionValues!.map(d => d.value);
  const [sessions, conv] = row.metricValues!.map(m => m.value);
  console.log(`${source?.padEnd(30)} sessions=${sessions}  conversions=${conv}`);
}
