import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "babypillars@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "BabyPillars <onboarding@resend.dev>";

function buildEmailHtml(
  formTitle: string,
  pageUrl: string,
  fields: Record<string, string>,
  submittedAt: string
): string {
  const fieldRows = Object.entries(fields)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#475569;width:38%;vertical-align:top;">${label}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;word-break:break-word;">${value || "<em style='color:#94a3b8'>Not provided</em>"}</td>
        </tr>`
    )
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
            <p style="margin:0 0 4px;color:rgba(255,255,255,0.75);font-size:13px;letter-spacing:0.08em;text-transform:uppercase;">BabyPillars — New Form Submission</p>
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">${formTitle}</h1>
          </td>
        </tr>

        <!-- Meta info -->
        <tr>
          <td style="background:#ffffff;padding:0;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#475569;width:38%;">Page URL</td>
                <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;"><a href="${pageUrl}" style="color:#54A388;">${pageUrl}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#475569;">Date &amp; Time</td>
                <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${submittedAt}</td>
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

export async function POST(req: NextRequest) {
  try {
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

    if (!formTitle || !fields || typeof fields !== "object") {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const senderEmail =
      fields["Email"] || fields["Email Address"] || "unknown";

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `[BabyPillars] ${formTitle} — ${senderEmail}`,
      html: buildEmailHtml(formTitle, pageUrl, fields, submittedAt),
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
