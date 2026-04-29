import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabase";
import { CURRENCY, TIER_PRICE_INR, isValidTier } from "@/lib/pricing";

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

    // 3. Signature OK → insert audit row, with payment metadata.
    const amountInr = TIER_PRICE_INR[tier];

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
      // Payment succeeded but DB write failed — log loudly, still return success
      // so the user isn't shown an error after they've paid. Manual reconciliation needed.
      console.error("DB insert failed AFTER successful payment", {
        razorpay_order_id,
        razorpay_payment_id,
        error: dbError,
      });
      return NextResponse.json({
        success: true,
        warning: "Payment captured but record save failed; we'll reconcile manually.",
        razorpay_payment_id,
      });
    }

    // 4. Fire-and-forget the welcome email. We don't block the response on it.
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
