/**
 * Google Business Profile API client
 *
 * Uses the same service account as GSC/GA4.
 * You must add the service account email as a Manager on your GBP listing:
 *   Google Business Profile → Manage → Users → Add User → Manager
 *
 * Secrets needed:
 *   GSC_SERVICE_ACCOUNT_JSON  (already set)
 *   GMB_ACCOUNT_ID            e.g. "accounts/123456789"
 *   GMB_LOCATION_ID           e.g. "locations/987654321"
 *
 * Finding your IDs:
 *   Run:  npx tsx gmb-agent.ts --list-locations
 *   Or check the URL when editing your listing in GBP dashboard
 */

import { google } from "googleapis";
import https from "https";

const ACCOUNT_ID  = process.env.GMB_ACCOUNT_ID  || "";   // "accounts/123456789"
const LOCATION_ID = process.env.GMB_LOCATION_ID || "";   // "locations/987654321"

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
  if (!token) throw new Error("Could not get access token for GMB");
  return token;
}

// ── Generic request helper ────────────────────────────────────────────────────
async function gmbRequest<T>(
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  path: string,
  body?: object
): Promise<T> {
  const token = await getAccessToken();
  const payload = body ? JSON.stringify(body) : undefined;

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "mybusiness.googleapis.com",
        path: `/v4/${path}`,
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          ...(payload ? { "Content-Length": Buffer.byteLength(payload) } : {}),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data) as T);
          } catch {
            resolve(data as unknown as T);
          }
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

// ── Reviews ───────────────────────────────────────────────────────────────────

/** Fetch all reviews, newest first */
export async function getReviews(): Promise<GmbReview[]> {
  const res = await gmbRequest<{ reviews?: GmbReview[] }>(
    "GET",
    `${ACCOUNT_ID}/${LOCATION_ID}/reviews?orderBy=updateTime+desc&pageSize=50`
  );
  return res.reviews || [];
}

/** Only reviews that haven't been replied to */
export async function getUnansweredReviews(): Promise<GmbReview[]> {
  const all = await getReviews();
  return all.filter((r) => !r.reviewReply);
}

/** Post a reply to a review */
export async function replyToReview(reviewId: string, reply: string): Promise<void> {
  await gmbRequest(
    "PUT",
    `${ACCOUNT_ID}/${LOCATION_ID}/reviews/${reviewId}/reply`,
    { comment: reply }
  );
}

// ── Posts ─────────────────────────────────────────────────────────────────────

/** List recent GMB posts */
export async function getRecentPosts(limit = 10): Promise<GmbPost[]> {
  const res = await gmbRequest<{ localPosts?: GmbPost[] }>(
    "GET",
    `${ACCOUNT_ID}/${LOCATION_ID}/localPosts?pageSize=${limit}`
  );
  return res.localPosts || [];
}

/** Create a new GMB post */
export async function createPost(post: GmbPost): Promise<GmbPost> {
  return gmbRequest<GmbPost>(
    "POST",
    `${ACCOUNT_ID}/${LOCATION_ID}/localPosts`,
    post
  );
}

// ── Utility: list locations (run once to find your IDs) ───────────────────────
export async function listLocations(): Promise<void> {
  const token = await getAccessToken();

  // First get accounts
  const accountsRes = await new Promise<any>((resolve, reject) => {
    const req = https.request(
      {
        hostname: "mybusinessaccountmanagement.googleapis.com",
        path: "/v1/accounts",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      },
      (res) => {
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => resolve(JSON.parse(d)));
      }
    );
    req.on("error", reject);
    req.end();
  });

  console.log("\n📍 Your Google Business Profile Accounts:\n");
  const accounts = accountsRes.accounts || [];
  for (const account of accounts) {
    console.log(`  Account: ${account.name}  (${account.accountName})`);

    // Get locations for this account
    const locRes = await gmbRequest<any>("GET", `${account.name}/locations?pageSize=20`);
    for (const loc of locRes.locations || []) {
      console.log(`    Location: ${loc.name}  →  ${loc.locationName}`);
    }
  }
  console.log("\nSet GMB_ACCOUNT_ID and GMB_LOCATION_ID in GitHub Secrets using the values above.");
}
