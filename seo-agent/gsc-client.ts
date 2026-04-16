/**
 * Google Search Console API client
 * Authenticates via service account JSON stored in GSC_SERVICE_ACCOUNT_JSON env var
 */

import { google } from "googleapis";

const SITE_URL = process.env.GSC_SITE_URL || "sc-domain:innovatedigital.ae";

function getAuth() {
  const json = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!json) throw new Error("GSC_SERVICE_ACCOUNT_JSON env var not set");

  const credentials = JSON.parse(json);
  return new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
}

export interface GSCRow {
  query: string;
  page: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

/** Pages with high impressions but low CTR — title/description needs fixing */
export async function getLowCTRPages(days = 28): Promise<GSCRow[]> {
  const auth = getAuth();
  const sc = google.searchconsole({ version: "v1", auth });

  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const res = await sc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
      dimensions: ["page"],
      rowLimit: 50,
      orderBy: [{ fieldName: "impressions", sortOrder: "DESCENDING" }],
    },
  });

  const rows = (res.data.rows || []) as any[];
  return rows
    .filter((r) => r.impressions > 100 && r.ctr < 0.04) // >100 impressions, <4% CTR
    .map((r) => ({
      query: "",
      page: r.keys[0],
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: r.ctr,
      position: r.position,
    }));
}

/** All ranking queries — works for new sites with low impressions too.
 *  Includes page-2 quick wins, low-CTR opportunities, and any branded queries to exclude. */
export async function getPage2Keywords(days = 28): Promise<GSCRow[]> {
  const auth = getAuth();
  const sc = google.searchconsole({ version: "v1", auth });

  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const res = await sc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
      dimensions: ["query"],
      rowLimit: 200,
      orderBy: [{ fieldName: "impressions", sortOrder: "DESCENDING" }],
    },
  });

  const rows = (res.data.rows || []) as any[];
  // No impression floor — return everything GSC has, let Claude decide what's valuable
  return rows
    .map((r) => ({
      query: r.keys[0],
      page: "",
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: r.ctr,
      position: Math.round(r.position * 10) / 10,
    }))
    .slice(0, 100);
}

/** Top performing pages — understand what's already working */
export async function getTopPages(days = 28): Promise<GSCRow[]> {
  const auth = getAuth();
  const sc = google.searchconsole({ version: "v1", auth });

  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const res = await sc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
      dimensions: ["page"],
      rowLimit: 10,
      orderBy: [{ fieldName: "clicks", sortOrder: "DESCENDING" }],
    },
  });

  const rows = (res.data.rows || []) as any[];
  return rows.map((r) => ({
    query: "",
    page: r.keys[0],
    clicks: r.clicks,
    impressions: r.impressions,
    ctr: r.ctr,
    position: Math.round(r.position * 10) / 10,
  }));
}

/** Overall site stats for weekly report */
export async function getSiteStats(days = 7): Promise<{
  totalClicks: number;
  totalImpressions: number;
  avgCTR: number;
  avgPosition: number;
}> {
  const auth = getAuth();
  const sc = google.searchconsole({ version: "v1", auth });

  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const res = await sc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
      dimensions: [],
      rowLimit: 1,
    },
  });

  const row = (res.data.rows || [])[0] as any;
  if (!row) return { totalClicks: 0, totalImpressions: 0, avgCTR: 0, avgPosition: 0 };

  return {
    totalClicks: row.clicks,
    totalImpressions: row.impressions,
    avgCTR: Math.round(row.ctr * 1000) / 10,
    avgPosition: Math.round(row.position * 10) / 10,
  };
}
