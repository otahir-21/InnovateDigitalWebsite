/**
 * Google Business Profile API client — uses new v1 APIs (2024)
 *
 * APIs to enable in Google Cloud Console:
 *   - My Business Account Management API
 *   - My Business Business Information API
 *   - My Business Notifications API (optional)
 *
 * Auth: same service account as GSC/GA4
 * Add service account as Manager on your GBP listing first.
 */

import { google } from "googleapis";
import https from "https";

const ACCOUNT_ID  = process.env.GMB_ACCOUNT_ID  || "";  // e.g. "accounts/302207200511455403"
const LOCATION_ID = process.env.GMB_LOCATION_ID || "";  // e.g. "locations/XXXXXXXXXXXXXXXX"

// ── Auth ──────────────────────────────────────────────────────────────────────
async function getAccessToken(): Promise<string> {
  const json = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!json) throw new Error("GSC_SERVICE_ACCOUNT_JSON not set");
  const credentials = JSON.parse(json);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/business.manage"],
  });
  const token = await auth.getAccessToken();
  if (!token) throw new Error("Could not get GBP access token");
  return token;
}

// ── Generic HTTPS helper ──────────────────────────────────────────────────────
async function apiRequest<T>(hostname: string, path: string, method = "GET", body?: object): Promise<T> {
  const token = await getAccessToken();
  const payload = body ? JSON.stringify(body) : undefined;

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname,
        path,
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          ...(payload ? { "Content-Length": Buffer.byteLength(payload) } : {}),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try { resolve(JSON.parse(data) as T); }
          catch { resolve(data as unknown as T); }
        });
      }
    );
    req.on("error", reject);
    if (payload) req.write(payload);
    req.end();
  });
}

// ── Types ─────────────────────────────────────────────────────────────────────
export interface GmbReview {
  reviewId: string;
  reviewer: { displayName: string };
  starRating: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
  comment?: string;
  createTime: string;
  reviewReply?: { comment: string; updateTime: string };
}

export interface GmbPost {
  name?: string;
  topicType: "STANDARD" | "OFFER" | "EVENT";
  summary: string;
  callToAction?: { actionType: string; url: string };
  createTime?: string;
  state?: string;
}

// ── Reviews (v4 — still active for reviews) ───────────────────────────────────
export async function getReviews(): Promise<GmbReview[]> {
  const path = `/v4/${ACCOUNT_ID}/${LOCATION_ID}/reviews?orderBy=updateTime+desc&pageSize=50`;
  const res = await apiRequest<{ reviews?: GmbReview[] }>("mybusiness.googleapis.com", path);
  return res.reviews || [];
}

export async function getUnansweredReviews(): Promise<GmbReview[]> {
  const all = await getReviews();
  return all.filter((r) => !r.reviewReply);
}

export async function replyToReview(reviewId: string, reply: string): Promise<void> {
  await apiRequest(
    "mybusiness.googleapis.com",
    `/v4/${ACCOUNT_ID}/${LOCATION_ID}/reviews/${reviewId}/reply`,
    "PUT",
    { comment: reply }
  );
}

// ── Posts (v4 — Local Posts API still active) ─────────────────────────────────
export async function getRecentPosts(limit = 10): Promise<GmbPost[]> {
  const res = await apiRequest<{ localPosts?: GmbPost[] }>(
    "mybusiness.googleapis.com",
    `/v4/${ACCOUNT_ID}/${LOCATION_ID}/localPosts?pageSize=${limit}`
  );
  return res.localPosts || [];
}

export async function createPost(post: GmbPost): Promise<GmbPost> {
  return apiRequest<GmbPost>(
    "mybusiness.googleapis.com",
    `/v4/${ACCOUNT_ID}/${LOCATION_ID}/localPosts`,
    "POST",
    post
  );
}

// ── List locations (setup helper) ─────────────────────────────────────────────
export async function listLocations(): Promise<void> {
  console.log("\n📍 Discovering your Google Business Profile IDs...\n");

  // Step 1: List accounts via new Account Management API
  const accountsRes = await apiRequest<any>(
    "mybusinessaccountmanagement.googleapis.com",
    "/v1/accounts"
  );

  const accounts = accountsRes.accounts || [];

  if (accounts.length > 0) {
    for (const account of accounts) {
      console.log(`  Account: ${account.name}  (${account.accountName})`);

      // Step 2: List locations via new Business Information API
      const locRes = await apiRequest<any>(
        "mybusinessinformation.googleapis.com",
        `/v1/${account.name}/locations?readMask=name,title`
      );

      for (const loc of locRes.locations || []) {
        console.log(`\n  ✅ Location found!`);
        console.log(`     Name:  ${loc.title || loc.name}`);
        console.log(`     ID:    ${loc.name}`);
        console.log(`\n  Add to GitHub Secrets:`);
        console.log(`     GMB_ACCOUNT_ID  = ${account.name}`);
        console.log(`     GMB_LOCATION_ID = ${loc.name}`);
      }
    }
  } else {
    // Try with known account ID directly
    console.log("  No accounts returned via API — trying direct location lookup...");
    const knownAccount = "accounts/302207200511455403";
    const locRes = await apiRequest<any>(
      "mybusinessinformation.googleapis.com",
      `/v1/${knownAccount}/locations?readMask=name,title`
    );

    if (locRes.locations?.length > 0) {
      for (const loc of locRes.locations) {
        console.log(`\n  ✅ Location found!`);
        console.log(`     GMB_ACCOUNT_ID  = ${knownAccount}`);
        console.log(`     GMB_LOCATION_ID = ${loc.name}`);
      }
    } else {
      console.log(`  API response: ${JSON.stringify(locRes, null, 2)}`);
      console.log(`\n  ⚠️  APIs not enabled yet. Go to:`);
      console.log(`     console.cloud.google.com → APIs & Services → Enable APIs`);
      console.log(`     Search and enable:`);
      console.log(`       1. "My Business Account Management API"`);
      console.log(`       2. "My Business Business Information API"`);
      console.log(`     Then run this command again.`);
    }
  }
}
