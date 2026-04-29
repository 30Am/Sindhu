import { NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";
import { CURRENCY, TIER_PRICE_INR, type Tier, isValidTier } from "@/lib/pricing";

interface VerifyBody {
  // From Razorpay Checkout
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  // From the intake form
  name: string;
  email: string;
  profile_url: string;
  tier: string;
  goal: string;
  challenges?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<VerifyBody>;

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      email,
      profile_url,
      tier,
      goal,
      challenges,
    } = body;

    // 1. Required fields
    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !name ||
      !email ||
      !profile_url ||
      !tier ||
      !goal
    ) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!isValidTier(tier)) {
      return NextResponse.json({ error: "Invalid tier." }, { status: 400 });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      console.error("RAZORPAY_KEY_SECRET missing in environment.");
      return NextResponse.json(
        { error: "Payment gateway is not configured." },
        { status: 500 }
      );
    }

    // 2. Verify the HMAC SHA256 signature.
    // Razorpay signs `<order_id>|<payment_id>` with the secret key.
    const expectedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const sigBuf = Buffer.from(razorpay_signature, "utf8");
    const expectedBuf = Buffer.from(expectedSignature, "utf8");
    const signatureValid =
      sigBuf.length === expectedBuf.length &&
      crypto.timingSafeEqual(sigBuf, expectedBuf);

    if (!signatureValid) {
      console.warn("Invalid Razorpay signature for order", razorpay_order_id);
      return NextResponse.json({ error: "Invalid payment signature." }, { status: 400 });
    }

    const amountInr = TIER_PRICE_INR[tier];

    // 3. Signature is valid → ALWAYS fire the welcome email.
    //    The customer paid; they deserve confirmation regardless of whether
    //    our internal DB write succeeds afterward. Fire-and-forget; we don't
    //    block the response on the email.
    const proto = request.headers.get("x-forwarded-proto") ?? "http";
    const host = request.headers.get("host");
    const origin = host ? `${proto}://${host}` : "";

    if (origin) {
      fetch(`${origin}/api/send-welcome`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      }).catch((e) => console.error("Welcome email trigger failed:", e));
    }

    // 4. Insert audit row with payment metadata.
    const { data: insertedRows, error: dbError } = await supabaseAdmin
      .from("Audits")
      .insert([
        {
          name,
          email,
          profile_url,
          tier,
          goal,
          challenges: challenges ?? "",
          razorpay_order_id,
          razorpay_payment_id,
          payment_status: "paid",
          amount: amountInr,
          currency: CURRENCY,
        },
      ])
      .select();

    if (dbError) {
      // Payment succeeded but DB write failed. Log loudly, alert the team via
      // email so they can manually reconcile, and still return success so the
      // customer (who has already paid) sees a coherent UI.
      console.error("DB insert failed AFTER successful payment", {
        razorpay_order_id,
        razorpay_payment_id,
        error: dbError,
      });

      sendAdminAlert({
        name,
        email,
        profile_url,
        tier,
        goal,
        challenges,
        amountInr,
        razorpay_order_id,
        razorpay_payment_id,
        dbError,
      });

      return NextResponse.json({
        success: true,
        warning: "Payment captured but record save failed; we'll reconcile manually.",
        razorpay_payment_id,
      });
    }

    return NextResponse.json({
      success: true,
      razorpay_payment_id,
      audit: insertedRows?.[0] ?? null,
    });
  } catch (err: unknown) {
    console.error("verify error:", err);
    const message = err instanceof Error ? err.message : "Verification failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

interface AdminAlertData {
  name: string;
  email: string;
  profile_url: string;
  tier: Tier;
  goal: string;
  challenges?: string;
  amountInr: number;
  razorpay_order_id: string;
  razorpay_payment_id: string;
  dbError: unknown;
}

/** Fire-and-forget email to the team when a payment was captured but the DB save failed. */
function sendAdminAlert(data: AdminAlertData): void {
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_ALERT_EMAIL || process.env.EMAIL_REPLY_TO;
  if (!apiKey || !adminEmail) {
    console.warn("Admin alert not sent: missing RESEND_API_KEY or ADMIN_ALERT_EMAIL/EMAIL_REPLY_TO");
    return;
  }

  const escape = (s: string): string =>
    s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

  const html = `
    <h2>⚠️ Manual reconciliation needed</h2>
    <p>A Razorpay payment was captured successfully, but the audit row could not be saved to Supabase. Please add it manually using the details below.</p>

    <h3>Customer details</h3>
    <table cellpadding="6" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
      <tr><td><strong>Name</strong></td><td>${escape(data.name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escape(data.email)}</td></tr>
      <tr><td><strong>Profile URL</strong></td><td>${escape(data.profile_url)}</td></tr>
      <tr><td><strong>Tier</strong></td><td>${escape(data.tier)} (₹${data.amountInr})</td></tr>
      <tr><td><strong>Goal</strong></td><td>${escape(data.goal)}</td></tr>
      <tr><td><strong>Challenges</strong></td><td>${escape(data.challenges ?? "—")}</td></tr>
    </table>

    <h3>Razorpay payment</h3>
    <table cellpadding="6" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
      <tr><td><strong>Payment ID</strong></td><td><code>${escape(data.razorpay_payment_id)}</code></td></tr>
      <tr><td><strong>Order ID</strong></td><td><code>${escape(data.razorpay_order_id)}</code></td></tr>
    </table>

    <h3>DB error</h3>
    <pre style="background:#f3f3f3;padding:12px;border-radius:8px;font-size:12px;overflow:auto">${escape(
      JSON.stringify(data.dbError, null, 2)
    )}</pre>

    <p style="font-size:12px;color:#666">The customer has already received the welcome email and seen a success state in the form. They are expecting follow-up.</p>
  `;

  const resend = new Resend(apiKey);
  const from = process.env.EMAIL_FROM || "Sindhu's Audit <audit@sindhubiswal.com>";

  resend.emails
    .send({
      from,
      to: [adminEmail],
      subject: `⚠️ Audit booking DB save failed — reconcile ${data.razorpay_payment_id}`,
      html,
    })
    .catch((e) => console.error("Admin alert email failed:", e));
}
