import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — Sindhu Biswal",
  description:
    "Refund and cancellation policy for growth audits booked through Sindhu Biswal on www.sindhubiswal.com.",
};

export default function RefundPolicy() {
  return (
    <LegalPage title="Refund & Cancellation Policy" lastUpdated="29 April 2026">
      <p>
        We want every client to feel confident about booking an audit with us. This policy explains exactly when a
        refund is possible, when it is not, and how to request one.
      </p>
      <p>
        Throughout this policy, &quot;we&quot;, &quot;us&quot;, and &quot;our&quot; refer to <strong>Sindhu Biswal</strong>.
      </p>

      <h2>1. When you are eligible for a full refund</h2>
      <ul>
        <li><strong>Cancellation before work begins</strong> — if you request a refund within <strong>24 hours</strong> of payment and we have not yet started reviewing your profile, you are entitled to a 100% refund.</li>
        <li><strong>We are unable to deliver</strong> — if we determine that we cannot deliver the audit (e.g. your profile is inactive, the URL provided is invalid, the niche is outside our expertise), we will refund the full amount.</li>
        <li><strong>Duplicate or accidental payment</strong> — if you have been charged twice for the same audit due to a technical error, the duplicate amount will be refunded in full.</li>
      </ul>

      <h2>2. When refunds are partial or not available</h2>
      <ul>
        <li><strong>Audit work has already begun</strong> — once we have started reviewing your profile and preparing the report (typically within 48 hours of booking), refunds are at our discretion and may be partial, calculated based on work already completed.</li>
        <li><strong>Audit has been delivered</strong> — once the audit report or strategy call has been delivered, refunds are not available, as the service has been fulfilled. Dissatisfaction with the recommendations does not qualify for a refund (see Section 6 of our <a href="/terms">Terms &amp; Conditions</a> on no guarantee of results).</li>
        <li><strong>Failure to attend a scheduled call without notice</strong> — if you miss a scheduled strategy call without rescheduling at least 12 hours in advance, the call is considered delivered and is non-refundable.</li>
        <li><strong>Inaccurate information provided</strong> — if you provided incorrect contact information or an inactive profile and did not respond to our follow-ups within 14 days, the booking will be considered fulfilled and is non-refundable.</li>
      </ul>

      <h2>3. How to request a refund</h2>
      <p>To request a refund, email <a href="mailto:marketing@trythegrowthproject.com">marketing@trythegrowthproject.com</a> with:</p>
      <ul>
        <li>The email address used for the booking.</li>
        <li>The Razorpay payment ID or order ID from your confirmation email.</li>
        <li>A short reason for the refund request.</li>
      </ul>
      <p>We will acknowledge your request within 2 business days.</p>

      <h2>4. Refund processing time</h2>
      <p>
        Approved refunds are processed via Razorpay back to the original payment method. Once initiated, refunds
        typically reflect in your account within <strong>5 to 7 business days</strong>, though banks and card networks
        may take up to 10 business days.
      </p>
      <p>
        We will share the Razorpay refund reference ID with you when the refund is initiated, so you can track it from
        your end if needed.
      </p>

      <h2>5. Cancellation by us</h2>
      <p>
        In rare cases, we may cancel a booking — for example, if our schedule does not allow timely delivery, or if
        the requested scope is outside what we offer. In such cases, you will receive a 100% refund within 5–7 business
        days, with no questions asked.
      </p>

      <h2>6. Chargebacks</h2>
      <p>
        Please contact us first if you have a concern about a charge. Initiating a chargeback through your bank
        without first reaching out to us may delay resolution and could result in suspension of access to any pending
        deliverables until the chargeback is resolved.
      </p>

      <h2>7. Changes to this policy</h2>
      <p>
        We may update this Refund Policy occasionally. The &quot;Last updated&quot; date above indicates the latest
        revision. The version in effect at the time of your booking will apply to that booking.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about this policy or a refund request:
        <br />
        Email: <a href="mailto:marketing@trythegrowthproject.com">marketing@trythegrowthproject.com</a>
        <br />
        Website: <a href="https://www.sindhubiswal.com">www.sindhubiswal.com</a>
      </p>
    </LegalPage>
  );
}
