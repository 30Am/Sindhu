import { NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "../../../components/emails/WelcomeEmail";
import React from 'react';

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

    const resend = new Resend(RESEND_API_KEY);

    const from = process.env.EMAIL_FROM || "Sindhu's Audit <onboarding@resend.dev>";
    const replyTo = process.env.EMAIL_REPLY_TO || undefined;

    // Using the official SDK and React Email
    const { data, error } = await resend.emails.send({
      from,
      to: [email],
      replyTo,
      subject: "Welcome to Sindhu's Audit!",
      react: React.createElement(WelcomeEmail, { name }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Attempted to send, but provider failed." }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("send-welcome API Error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
