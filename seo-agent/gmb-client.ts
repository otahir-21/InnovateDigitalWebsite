/**
 * Google Business Profile API client — uses new v1 APIs (2024)
 *
 * APIs to enable in Google Cloud Console:
 *   - My Business Account Management API
 *   - My Business Business Information API
 *   - My Business Notifications API (optional)
 *
 * Auth: OAuth2 user credentials (GMB_CLIENT_ID / SECRET / REFRESH_TOKEN).
 * Service accounts cannot refresh GBP tokens; use gmb-oauth-setup.ts once, then store secrets in GitHub Actions.
 */

import https from "https";

const ACCOUNT_ID  = (process.env.GMB_ACCOUNT_ID  || "").trim();  // e.g. "accounts/302207200511455403"
const LOCATION_ID = (process.env.GMB_LOCATION_ID || "").trim();  // e.g. "locations/XXXXXXXXXXXXXXXX"

// ── Auth (OAuth2 refresh token — required for GBP API) ────────────────────────

function formatGmbAuthHelp(parsed: { error?: string; error_description?: string }): string {
  const err = parsed.error || "";
  const lines = [
    `Google token response: ${JSON.stringify(parsed)}`,
    "",
    "If you see invalid_grant, the refresh token no longer matches this OAuth client. Typical causes:",
    "  • GMB_CLIENT_SECRET was rotated in Google Cloud — create a new secret and re-run OAuth.",
    "  • GMB_REFRESH_TOKEN was revoked or is from a different OAuth client ID.",
    "  • Extra spaces/newlines when pasting secrets into GitHub Actions (re-save trimmed values).",
    "",
    "Fix (local machine, seo-agent folder):",
    "  1. Google Cloud → APIs & Services → Credentials → your OAuth client (same type as before, e.g. Desktop).",
    "  2. GMB_CLIENT_ID=... GMB_CLIENT_SECRET=... npx tsx gmb-oauth-setup.ts",
    "  3. Update GitHub → Settings → Secrets → GMB_REFRESH_TOKEN (and GMB_CLIENT_SECRET if it changed).",
  ];
  if (err === "invalid_grant") {
    lines.unshift("GBP OAuth: invalid_grant — refresh token exchange rejected.\n");
  }
  return lines.join("\n");
}

async function getAccessToken(): Promise<string> {
  const clientId     = (process.env.GMB_CLIENT_ID     || "").trim();
  const clientSecret = (process.env.GMB_CLIENT_SECRET || "").trim();
  const refreshToken = (process.env.GMB_REFRESH_TOKEN || "").trim();

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "GMB_CLIENT_ID, GMB_CLIENT_SECRET and GMB_REFRESH_TOKEN must be set.\n" +
      "Run: npx tsx gmb-oauth-setup.ts  to generate them."
    );
  }

  const payload = new URLSearchParams({
    client_id:     clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type:    "refresh_token",
  }).toString();

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "oauth2.googleapis.com",
        path: "/token",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": Buffer.byteLength(payload),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          let parsed: Record<string, unknown>;
          try {
            parsed = JSON.parse(data) as Record<string, unknown>;
          } catch {
            reject(
              new Error(
                `GBP auth: non-JSON response from oauth2.googleapis.com (HTTP ${res.statusCode}). Body starts with: ${data.slice(0, 200)}`
              )
            );
            return;
          }
          if (typeof parsed.access_token === "string") {
            resolve(parsed.access_token);
            return;
          }
          reject(new Error(formatGmbAuthHelp(parsed as { error?: string; error_description?: string })));
        });
      }
    );
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
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
          const status = res.statusCode ?? 0;
          // Non-2xx or HTML response = API error
          if (status < 200 || status >= 300 || data.trimStart().startsWith("<")) {
            reject(new Error(
              `GBP API ${method} ${path} → HTTP ${status}\n` +
              `Response: ${data.slice(0, 500)}\n\n` +
              `This usually means:\n` +
              `  • The v4 API path is deprecated — Google moved posts/reviews to new endpoints\n` +
              `  • GMB_ACCOUNT_ID or GMB_LOCATION_ID is wrong\n` +
              `  • The OAuth token lacks permission for this resource`
            ));
            return;
          }
          try { resolve(JSON.parse(data) as T); }
          catch { reject(new Error(`GBP API ${method} ${path} → non-JSON response: ${data.slice(0, 300)}`)); }
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
  const path = `/v4/${ACCOUNT_ID}/${LOCATION_ID}/reviews?orderBy=updateTime%20desc&pageSize=50`;
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

  // Step 0: Get user's Google ID from OAuth token
  const token = await getAccessToken();
  const userInfo = await new Promise<any>((resolve) => {
    const req = https.request(
      { hostname: "www.googleapis.com", path: "/oauth2/v3/userinfo", headers: { Authorization: `Bearer ${token}` } },
      (res) => { let d = ""; res.on("data", c => d += c); res.on("end", () => resolve(JSON.parse(d))); }
    );
    req.on("error", () => resolve({}));
    req.end();
  });
  console.log("  [DEBUG] OAuth user:", JSON.stringify(userInfo));
  const googleUserId = userInfo.sub || "";
  if (googleUserId) {
    console.log(`\n  ✅ Your Google User ID: ${googleUserId}`);
    console.log(`     Try setting: GMB_ACCOUNT_ID = accounts/${googleUserId}`);
  }

  // Attempt 1: List accounts
  const accountsRes = await apiRequest<any>(
    "mybusinessaccountmanagement.googleapis.com",
    "/v1/accounts"
  );
  console.log("  [DEBUG] accounts response:", JSON.stringify(accountsRes, null, 2));

  const accounts = accountsRes.accounts || [];

  if (accounts.length > 0) {
    for (const account of accounts) {
      console.log(`  Account: ${account.name}  (${account.accountName})`);
      const locRes = await apiRequest<any>(
        "mybusinessinformation.googleapis.com",
        `/v1/${account.name}/locations?readMask=name,title`
      );
      for (const loc of locRes.locations || []) {
        console.log(`\n  ✅ Location found!`);
        console.log(`     GMB_ACCOUNT_ID  = ${account.name}`);
        console.log(`     GMB_LOCATION_ID = ${loc.name}`);
      }
    }
    return;
  }

  // Attempt 2: Access location directly by known Business Profile ID
  console.log("\n  Trying direct location access...");
  const knownLocationId = "302207200511455403";
  const directRes = await apiRequest<any>(
    "mybusinessinformation.googleapis.com",
    `/v1/locations/${knownLocationId}?readMask=name,title`
  );
  console.log("  [DEBUG] direct location response:", JSON.stringify(directRes).slice(0, 300));

  if (directRes.name) {
    // Location found — now find its account
    const accountName = directRes.name.split("/locations/")[0]; // e.g. "accounts/123"
    console.log(`\n  ✅ Location found!`);
    console.log(`     Title: ${directRes.title}`);
    console.log(`\n  Add to GitHub Secrets:`);
    console.log(`     GMB_ACCOUNT_ID  = ${accountName}`);
    console.log(`     GMB_LOCATION_ID = ${directRes.name}`);
    return;
  }

  // Attempt 3: v4 accounts list
  console.log("\n  Trying v4 accounts API...");
  const v4Res = await apiRequest<any>("mybusiness.googleapis.com", "/v4/accounts");
  console.log("  [DEBUG] v4 accounts response:", JSON.stringify(v4Res).slice(0, 500));

  const v4Accounts = v4Res.accounts || [];
  for (const account of v4Accounts) {
    console.log(`  Account: ${account.name}`);
    const locRes = await apiRequest<any>(
      "mybusiness.googleapis.com",
      `/v4/${account.name}/locations?pageSize=20`
    );
    for (const loc of locRes.locations || []) {
      console.log(`\n  ✅ Location: ${loc.name} → ${loc.locationName}`);
      console.log(`     GMB_ACCOUNT_ID  = ${account.name}`);
      console.log(`     GMB_LOCATION_ID = ${loc.name}`);
    }
  }

  if (v4Accounts.length === 0) {
    console.log("\n  ⚠️  Could not find any accounts or locations.");
    console.log("  Full debug responses logged above — share with support.");
  }
}
