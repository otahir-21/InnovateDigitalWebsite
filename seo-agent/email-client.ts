/**
 * Email client via Resend API
 * Free tier: 3,000 emails / month — no extra npm packages
 * Setup: Add RESEND_API_KEY and ALERT_EMAIL to GitHub secrets
 *
 * Get free API key → https://resend.com (sign up with GitHub)
 */

import https from "https";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const FROM_EMAIL = "agent@innovatedigital.ae"; // must match a verified domain in Resend
const TO_EMAIL = process.env.ALERT_EMAIL || "";

export type EmailPriority = "info" | "action_required" | "urgent";

export interface EmailOptions {
  subject: string;
  html: string;
  priority?: EmailPriority;
}

function priorityBadge(p: EmailPriority) {
  const map = {
    info: { color: "#3B82F6", label: "INFO" },
    action_required: { color: "#F59E0B", label: "ACTION REQUIRED" },
    urgent: { color: "#EF4444", label: "URGENT" },
  };
  return map[p] || map.info;
}

function buildHtml(subject: string, body: string, priority: EmailPriority): string {
  const badge = priorityBadge(priority);
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0f172a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:640px;margin:40px auto;background:#1e293b;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.08)">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#1e3a5f,#2d1b69);padding:32px;display:flex;align-items:center;gap:16px">
      <div style="width:48px;height:48px;border-radius:12px;background:linear-gradient(135deg,#3B82F6,#8B5CF6);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;color:white;flex-shrink:0">ID</div>
      <div>
        <div style="color:white;font-size:18px;font-weight:700">Innovate Digital Agent</div>
        <div style="color:rgba(255,255,255,0.5);font-size:13px">innovatedigital.ae · Automated Report</div>
      </div>
      <div style="margin-left:auto;background:${badge.color};color:white;font-size:11px;font-weight:700;letter-spacing:0.08em;padding:4px 12px;border-radius:100px">${badge.label}</div>
    </div>

    <!-- Subject -->
    <div style="padding:24px 32px 0">
      <h1 style="margin:0;color:white;font-size:22px;font-weight:700;line-height:1.3">${subject}</h1>
    </div>

    <!-- Body -->
    <div style="padding:24px 32px;color:rgba(255,255,255,0.75);font-size:15px;line-height:1.7">
      ${body}
    </div>

    <!-- Footer -->
    <div style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.3);font-size:12px">
      Sent automatically by Innovate Digital Agent System · ${new Date().toUTCString()}
    </div>
  </div>
</body>
</html>`;
}

export async function sendEmail(options: EmailOptions): Promise<void> {
  if (!RESEND_API_KEY || !TO_EMAIL) {
    console.log("📧 Email skipped — RESEND_API_KEY or ALERT_EMAIL not set");
    return;
  }

  const priority = options.priority || "info";
  const fullHtml = buildHtml(options.subject, options.html, priority);

  const payload = JSON.stringify({
    from: `Innovate Digital Agent <${FROM_EMAIL}>`,
    to: [TO_EMAIL],
    subject: options.subject,
    html: fullHtml,
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "api.resend.com",
        path: "/emails",
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
        },
      },
      (res) => {
        let body = "";
        res.on("data", (d) => (body += d));
        res.on("end", () => {
          const parsed = JSON.parse(body);
          if (parsed.id) {
            console.log(`📧 Email sent → ${TO_EMAIL} (id: ${parsed.id})`);
          } else {
            console.warn("📧 Email API response:", body);
          }
          resolve();
        });
      }
    );
    req.on("error", (err) => {
      console.warn("📧 Email send failed:", err.message);
      resolve(); // non-fatal — agent continues
    });
    req.write(payload);
    req.end();
  });
}

/** Convenience: send a weekly report email */
export async function sendWeeklyReportEmail(reportMarkdown: string, weekOf: string): Promise<void> {
  const htmlBody = reportMarkdown
    .replace(/^## (.+)$/gm, "<h2 style='color:white;margin:24px 0 8px;font-size:17px'>$1</h2>")
    .replace(/^### (.+)$/gm, "<h3 style='color:rgba(255,255,255,0.85);margin:16px 0 6px;font-size:15px'>$1</h3>")
    .replace(/\*\*(.+?)\*\*/g, "<strong style='color:white'>$1</strong>")
    .replace(/`(.+?)`/g, "<code style='background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:4px;font-size:13px'>$1</code>")
    .replace(/^- (.+)$/gm, "<li style='margin:4px 0'>$1</li>")
    .replace(/(<li.*<\/li>\n?)+/g, "<ul style='padding-left:20px;margin:8px 0'>$&</ul>")
    .replace(/^---$/gm, "<hr style='border:none;border-top:1px solid rgba(255,255,255,0.1);margin:20px 0'>")
    .replace(/\n\n/g, "<br><br>");

  await sendEmail({
    subject: `📊 Weekly SEO Report — ${weekOf}`,
    html: htmlBody,
    priority: "info",
  });
}

/** Convenience: send an action-required alert */
export async function sendActionRequired(items: string[]): Promise<void> {
  const html = `
    <p>The agent found <strong style='color:white'>${items.length} item${items.length !== 1 ? "s" : ""}</strong> that need your attention:</p>
    <ul style="padding-left:20px;margin:16px 0">
      ${items.map((i) => `<li style="margin:8px 0;color:rgba(255,255,255,0.85)">${i}</li>`).join("")}
    </ul>
    <p>Log into GitHub Issues to see the full report, or reply to this email with any instructions.</p>
    <a href="https://github.com/otahir-21/InnovateDigitalWebsite/issues" style="display:inline-block;margin-top:16px;background:linear-gradient(135deg,#3B82F6,#8B5CF6);color:white;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:600;font-size:14px">View GitHub Issues →</a>
  `;

  await sendEmail({
    subject: `⚠️ Agent Needs Your Attention (${items.length} item${items.length !== 1 ? "s" : ""})`,
    html,
    priority: "action_required",
  });
}
