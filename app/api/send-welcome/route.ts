import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      // Return success anyway during development so the form flow doesn't break
      // but log it to the server console.
      console.warn("RESEND_API_KEY is not defined. Email was not sent.");
      return NextResponse.json({ success: true, warning: "Missing API Key" });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Resend allows testing with their "onboarding@resend.dev" domain
        // For production, you will need to verify your own domain and use e.g. "audit@yourdomain.com"
        from: "Sindhu's Audit <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to Sindhu's audit",
        html: `
          <div style="font-family: sans-serif; max-w-[600px] margin: 0 auto;">
            <h2>Welcome to Sindhu's Audit!</h2>
            <p>Hi ${name || "there"},</p>
            <p>Thanks for booking an audit. I'm excited to help you grow your digital presence, identify what's holding you back, and create an actionable strategy.</p>
            <p>We'll be in touch very soon with the next steps.</p>
            <br />
            <p>Best regards,<br/>Sindhu</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorMsg = await res.text();
      console.error("Resend error:", errorMsg);
      return NextResponse.json({ error: "Attempted to send, but provider failed." }, { status: res.status });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("send-welcome API Error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
