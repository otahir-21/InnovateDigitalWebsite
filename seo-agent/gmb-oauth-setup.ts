/**
 * One-time GMB OAuth2 setup
 *
 * Run this once to get a refresh token for the GMB agent.
 * The refresh token never expires unless you revoke it.
 *
 * Steps:
 * 1. Create OAuth2 credentials in Google Cloud Console (see instructions below)
 * 2. Run: GMB_CLIENT_ID=xxx GMB_CLIENT_SECRET=xxx npx tsx gmb-oauth-setup.ts
 * 3. Visit the URL it prints, approve access
 * 4. Paste the code back into the terminal
 * 5. Add the printed refresh token to GitHub Secrets as GMB_REFRESH_TOKEN
 *
 * Creating OAuth2 credentials:
 * - console.cloud.google.com → APIs & Services → Credentials
 * - Create Credentials → OAuth 2.0 Client ID
 * - Application type: Desktop app
 * - Name: GMB Agent
 * - Download the JSON (or copy Client ID and Client Secret)
 */

import https from "https";
import readline from "readline";

const CLIENT_ID     = process.env.GMB_CLIENT_ID     || "";
const CLIENT_SECRET = process.env.GMB_CLIENT_SECRET || "";
const REDIRECT_URI  = "urn:ietf:wg:oauth:2.0:oob"; // desktop flow — no redirect server needed

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("❌ Missing credentials. Run with:");
  console.error("   GMB_CLIENT_ID=xxx GMB_CLIENT_SECRET=xxx npx tsx gmb-oauth-setup.ts");
  process.exit(1);
}

const SCOPES = ["https://www.googleapis.com/auth/business.manage"];

const authUrl =
  `https://accounts.google.com/o/oauth2/v2/auth` +
  `?client_id=${encodeURIComponent(CLIENT_ID)}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&response_type=code` +
  `&scope=${encodeURIComponent(SCOPES.join(" "))}` +
  `&access_type=offline` +
  `&prompt=consent`;

console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("STEP 1 — Open this URL in your browser and approve access:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("\n" + authUrl + "\n");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("\nSTEP 2 — Paste the code from Google here: ", async (code) => {
  rl.close();
  code = code.trim();

  // Exchange code for tokens
  const payload = new URLSearchParams({
    code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: "authorization_code",
  }).toString();

  const result = await new Promise<any>((resolve, reject) => {
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
        res.on("end", () => resolve(JSON.parse(data)));
      }
    );
    req.on("error", reject);
    req.write(payload);
    req.end();
  });

  if (result.refresh_token) {
    console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("✅ SUCCESS! Add these 3 secrets to GitHub:");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`\n  GMB_CLIENT_ID      = ${CLIENT_ID}`);
    console.log(`  GMB_CLIENT_SECRET  = ${CLIENT_SECRET}`);
    console.log(`  GMB_REFRESH_TOKEN  = ${result.refresh_token}`);
    console.log("\n  Then run: npx tsx gmb-agent.ts --list-locations");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
  } else {
    console.error("\n❌ Failed to get refresh token:");
    console.error(JSON.stringify(result, null, 2));
  }
});
