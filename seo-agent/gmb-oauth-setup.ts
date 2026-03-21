/**
 * One-time GMB OAuth2 setup — uses localhost redirect (OOB is deprecated)
 *
 * Run: GMB_CLIENT_ID=xxx GMB_CLIENT_SECRET=xxx npx tsx gmb-oauth-setup.ts
 *
 * IMPORTANT: In Google Cloud Console → Credentials → your OAuth client:
 *   Add this to "Authorised redirect URIs":  http://localhost:4242/callback
 */

import https from "https";
import http from "http";
import { URL } from "url";

const CLIENT_ID     = process.env.GMB_CLIENT_ID     || "";
const CLIENT_SECRET = process.env.GMB_CLIENT_SECRET || "";
const REDIRECT_URI  = "http://localhost:4242/callback";
const PORT          = 4242;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("❌ Run with: GMB_CLIENT_ID=xxx GMB_CLIENT_SECRET=xxx npx tsx gmb-oauth-setup.ts");
  process.exit(1);
}

const authUrl =
  `https://accounts.google.com/o/oauth2/v2/auth` +
  `?client_id=${encodeURIComponent(CLIENT_ID)}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&response_type=code` +
  `&scope=${encodeURIComponent("https://www.googleapis.com/auth/business.manage")}` +
  `&access_type=offline` +
  `&prompt=consent`;

console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("STEP 1 — Make sure this redirect URI is added in Google Cloud Console:");
console.log("  Credentials → your OAuth client → Authorised redirect URIs:");
console.log(`  → http://localhost:4242/callback`);
console.log("\nSTEP 2 — Open this URL in your browser:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("\n" + authUrl + "\n");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Waiting for Google to redirect back...\n");

// Spin up a temporary local server to catch the redirect
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://localhost:${PORT}`);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (error) {
    res.end(`<h2>Error: ${error}</h2><p>Close this tab and check the terminal.</p>`);
    server.close();
    console.error(`\n❌ OAuth error: ${error}`);
    process.exit(1);
  }

  if (!code) { res.end("Waiting..."); return; }

  res.end(`<h2 style="font-family:sans-serif;color:#22c55e">✅ Authorised!</h2><p>Close this tab and check your terminal.</p>`);
  server.close();

  // Exchange code for tokens
  const payload = new URLSearchParams({
    code,
    client_id:     CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri:  REDIRECT_URI,
    grant_type:    "authorization_code",
  }).toString();

  const result = await new Promise<any>((resolve, reject) => {
    const r = https.request(
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
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => resolve(JSON.parse(d)));
      }
    );
    r.on("error", reject);
    r.write(payload);
    r.end();
  });

  if (result.refresh_token) {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("✅ SUCCESS! Add these 3 secrets to GitHub Secrets:");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`\nGMB_CLIENT_ID      = ${CLIENT_ID}`);
    console.log(`GMB_CLIENT_SECRET  = ${CLIENT_SECRET}`);
    console.log(`GMB_REFRESH_TOKEN  = ${result.refresh_token}`);
    console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
  } else {
    console.error("\n❌ No refresh token received:");
    console.error(JSON.stringify(result, null, 2));
  }
});

server.listen(PORT);
