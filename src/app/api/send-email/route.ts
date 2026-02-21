import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// ─── Config ──────────────────────────────────────────────────────────────────

const resend = new Resend(process.env.RESEND_API_KEY);

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

const TO_EMAIL = requireEnv("EMAIL_TO");
const FROM_EMAIL = requireEnv("RESEND_FROM_EMAIL");

const ALLOWED_ORIGIN = "https://babypillars.com";

// ─── Rate limiting (in-memory, per serverless instance) ───────────────────────
// For cross-instance rate limiting, replace with @upstash/ratelimit + Redis.

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;       // requests per window per IP
const RATE_LIMIT_WINDOW = 60_000; // 1 minute in ms

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
}

// Clean up expired entries periodically to prevent memory growth
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(ip);
  }
}, 5 * 60_000);

// ─── Input limits ─────────────────────────────────────────────────────────────

const MAX_BODY_BYTES = 10_000;   // 10 KB
const MAX_FIELD_LENGTH = 1_000;  // chars per field value
const MAX_FIELDS = 10;

// ─── HTML escaping (CRIT-3) ───────────────────────────────────────────────────

function escapeHtml(str: string): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeSiteUrl(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.origin === ALLOWED_ORIGIN) return url;
  } catch {
    // not a valid URL
  }
  return ALLOWED_ORIGIN;
}

// ─── Email builder ────────────────────────────────────────────────────────────

function buildEmailHtml(
  formTitle: string,
  pageUrl: string,
  fields: Record<string, string>,
  submittedAt: string
): string {
  const safeTitle = escapeHtml(formTitle);
  const safeUrl = safeSiteUrl(pageUrl);
  const safeUrlText = escapeHtml(safeUrl);
  const safeDate = escapeHtml(submittedAt);

  const fieldRows = Object.entries(fields)
    .map(([label, value]) => {
      const safeLabel = escapeHtml(label);
      const safeValue = value
        ? escapeHtml(String(value).slice(0, MAX_FIELD_LENGTH))
        : "<em style='color:#94a3b8'>Not provided</em>";
      return `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#475569;width:38%;vertical-align:top;">${safeLabel}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;word-break:break-word;">${safeValue}</td>
        </tr>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#54A388;padding:28px 32px;border-radius:12px 12px 0 0;">
            <p style="margin:0 0 4px;color:rgba(255,255,255,0.75);font-size:13px;letter-spacing:0.08em;text-transform:uppercase;">BabyPillars: New Form Submission</p>
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">${safeTitle}</h1>
          </td>
        </tr>

        <!-- Meta info -->
        <tr>
          <td style="background:#ffffff;padding:0;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#475569;width:38%;">Page URL</td>
                <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;"><a href="${safeUrl}" style="color:#54A388;">${safeUrlText}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#475569;">Date &amp; Time</td>
                <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeDate}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="background:#f8fafc;padding:10px 12px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#94a3b8;">Form Fields</p>
          </td>
        </tr>

        <!-- Fields -->
        <tr>
          <td style="background:#ffffff;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${fieldRows}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:16px 24px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none;text-align:center;">
            <p style="margin:0;font-size:12px;color:#94a3b8;">This email was sent automatically from the BabyPillars website contact system.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    // CRIT-2: Body size guard
    const contentLength = Number(req.headers.get("content-length") ?? 0);
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    }

    // CRIT-2: Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const {
      formTitle,
      pageUrl,
      fields,
      submittedAt,
    }: {
      formTitle: string;
      pageUrl: string;
      fields: Record<string, string>;
      submittedAt: string;
    } = body;

    // CRIT-2: Input validation
    if (!formTitle || typeof formTitle !== "string") {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }
    if (!fields || typeof fields !== "object" || Array.isArray(fields)) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }
    if (Object.keys(fields).length > MAX_FIELDS) {
      return NextResponse.json({ error: "Too many fields" }, { status: 400 });
    }

    const senderEmail =
      fields["Email"] || fields["Email Address"] || "unknown";

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `[BabyPillars] ${escapeHtml(formTitle)}: ${escapeHtml(senderEmail)}`,
      html: buildEmailHtml(formTitle, pageUrl ?? "", fields, submittedAt ?? ""),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("send-email route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
