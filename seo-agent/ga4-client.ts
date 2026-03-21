/**
 * Google Analytics 4 Data API client
 * Uses same service account as GSC — just needs GA4_PROPERTY_ID
 */

import { google } from "googleapis";

const PROPERTY_ID = process.env.GA4_PROPERTY_ID || "";

function getAuth() {
  const json = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!json) throw new Error("GSC_SERVICE_ACCOUNT_JSON not set");
  const credentials = JSON.parse(json);
  return new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
  });
}

export interface PagePerformance {
  page: string;
  sessions: number;
  engagementRate: number; // 0-1
  conversions: number;    // contact form submissions
  avgSessionDuration: number; // seconds
}

export interface TrafficSource {
  source: string;
  sessions: number;
  conversions: number;
}

/** Pages with most sessions but fewest conversions — fix CTAs */
export async function getHighTrafficLowConversion(days = 28): Promise<PagePerformance[]> {
  const auth = getAuth();
  const analyticsdata = google.analyticsdata({ version: "v1beta", auth });

  const endDate = "today";
  const startDate = `${days}daysAgo`;

  const res = await analyticsdata.properties.runReport({
    property: `properties/${PROPERTY_ID}`,
    requestBody: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: "pagePath" }],
      metrics: [
        { name: "sessions" },
        { name: "engagementRate" },
        { name: "conversions" },
        { name: "averageSessionDuration" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 30,
    },
  });

  const rows = res.data.rows || [];
  return rows
    .map((r) => ({
      page: r.dimensionValues![0].value!,
      sessions: parseInt(r.metricValues![0].value! || "0"),
      engagementRate: parseFloat(r.metricValues![1].value! || "0"),
      conversions: parseFloat(r.metricValues![2].value! || "0"),
      avgSessionDuration: parseFloat(r.metricValues![3].value! || "0"),
    }))
    .filter((p) => p.sessions > 50 && p.conversions === 0) // Traffic but no leads
    .slice(0, 10);
}

/** Blog posts that actually generated conversions — write more like these */
export async function getConvertingBlogPosts(days = 90): Promise<PagePerformance[]> {
  const auth = getAuth();
  const analyticsdata = google.analyticsdata({ version: "v1beta", auth });

  const res = await analyticsdata.properties.runReport({
    property: `properties/${PROPERTY_ID}`,
    requestBody: {
      dateRanges: [{ startDate: `${days}daysAgo`, endDate: "today" }],
      dimensions: [{ name: "pagePath" }],
      metrics: [
        { name: "sessions" },
        { name: "engagementRate" },
        { name: "conversions" },
        { name: "averageSessionDuration" },
      ],
      dimensionFilter: {
        filter: {
          fieldName: "pagePath",
          stringFilter: { matchType: "BEGINS_WITH", value: "/blog/" },
        },
      },
      orderBys: [{ metric: { metricName: "conversions" }, desc: true }],
      limit: 10,
    },
  });

  const rows = res.data.rows || [];
  return rows
    .map((r) => ({
      page: r.dimensionValues![0].value!,
      sessions: parseInt(r.metricValues![0].value! || "0"),
      engagementRate: parseFloat(r.metricValues![1].value! || "0"),
      conversions: parseFloat(r.metricValues![2].value! || "0"),
      avgSessionDuration: parseFloat(r.metricValues![3].value! || "0"),
    }))
    .filter((p) => p.conversions > 0);
}

/** High bounce rate pages — content needs fixing not just metadata */
export async function getHighBouncePages(days = 28): Promise<PagePerformance[]> {
  const auth = getAuth();
  const analyticsdata = google.analyticsdata({ version: "v1beta", auth });

  const res = await analyticsdata.properties.runReport({
    property: `properties/${PROPERTY_ID}`,
    requestBody: {
      dateRanges: [{ startDate: `${days}daysAgo`, endDate: "today" }],
      dimensions: [{ name: "pagePath" }],
      metrics: [
        { name: "sessions" },
        { name: "bounceRate" },
        { name: "conversions" },
        { name: "averageSessionDuration" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 50,
    },
  });

  const rows = res.data.rows || [];
  return rows
    .map((r) => ({
      page: r.dimensionValues![0].value!,
      sessions: parseInt(r.metricValues![0].value! || "0"),
      engagementRate: 1 - parseFloat(r.metricValues![1].value! || "0"), // bounce → engagement
      conversions: parseFloat(r.metricValues![2].value! || "0"),
      avgSessionDuration: parseFloat(r.metricValues![3].value! || "0"),
    }))
    .filter((p) => p.sessions > 100 && p.engagementRate < 0.35) // >100 sessions, <35% engagement
    .slice(0, 10);
}

/** Overall site stats for weekly report */
export async function getGA4SiteStats(days = 7): Promise<{
  totalSessions: number;
  totalConversions: number;
  engagementRate: number;
  topSource: string;
}> {
  const auth = getAuth();
  const analyticsdata = google.analyticsdata({ version: "v1beta", auth });

  const [overallRes, sourceRes] = await Promise.all([
    analyticsdata.properties.runReport({
      property: `properties/${PROPERTY_ID}`,
      requestBody: {
        dateRanges: [{ startDate: `${days}daysAgo`, endDate: "today" }],
        dimensions: [],
        metrics: [
          { name: "sessions" },
          { name: "conversions" },
          { name: "engagementRate" },
        ],
        limit: 1,
      },
    }),
    analyticsdata.properties.runReport({
      property: `properties/${PROPERTY_ID}`,
      requestBody: {
        dateRanges: [{ startDate: `${days}daysAgo`, endDate: "today" }],
        dimensions: [{ name: "sessionDefaultChannelGroup" }],
        metrics: [{ name: "sessions" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 1,
      },
    }),
  ]);

  const row = (overallRes.data.rows || [])[0];
  const sourceRow = (sourceRes.data.rows || [])[0];

  return {
    totalSessions: parseInt(row?.metricValues?.[0]?.value || "0"),
    totalConversions: parseFloat(row?.metricValues?.[1]?.value || "0"),
    engagementRate: Math.round(parseFloat(row?.metricValues?.[2]?.value || "0") * 100),
    topSource: sourceRow?.dimensionValues?.[0]?.value || "Unknown",
  };
}
