import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { CURRENCY, TIER_PRICE_PAISE, isValidTier } from "@/lib/pricing";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tier } = body as { tier?: unknown };

    if (!isValidTier(tier)) {
      return NextResponse.json(
        { error: "Invalid tier. Must be one of: basic, advanced, both." },
        { status: 400 }
      );
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error("Razorpay keys missing in environment.");
      return NextResponse.json(
        { error: "Payment gateway is not configured." },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

    // Amount is computed server-side from the tier — the browser cannot tamper with it.
    const amountInPaise = TIER_PRICE_PAISE[tier];

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: CURRENCY,
      // receipt is a free-text label up to 40 chars, used by Razorpay for your own reference
      receipt: `audit_${tier}_${Date.now()}`,
      notes: { tier },
    });

    // Return only what the browser needs to open Razorpay Checkout.
    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId, // public; safe to expose to the browser
    });
  } catch (err: unknown) {
    console.error("create-order error:", err);
    const message = err instanceof Error ? err.message : "Failed to create order.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
