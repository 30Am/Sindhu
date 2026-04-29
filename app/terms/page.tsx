import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — Sindhu Biswal",
  description:
    "Terms and conditions governing the use of Sindhu Biswal / Buzzlab growth audit services and the www.sindhubiswal.com website.",
};

export default function TermsAndConditions() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="29 April 2026">
      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of <a href="https://www.sindhubiswal.com">www.sindhubiswal.com</a>{" "}
        and the growth audit services offered by <strong>Sindhu Biswal</strong> (operating as <strong>Buzzlab</strong>,
        referred to as &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By booking an audit or using this website,
        you agree to be bound by these Terms.
      </p>

      <h2>1. Services offered</h2>
      <p>We provide personalised growth audits and strategy consultations for Instagram and YouTube creators, including:</p>
      <ul>
        <li><strong>Basic Audit</strong> — ₹2,999 (single platform, foundational review).</li>
        <li><strong>Advanced Audit</strong> — ₹6,999 (single platform, deep-dive analysis with action plan).</li>
        <li><strong>Both Platforms</strong> — ₹11,999 (Instagram + YouTube combined audit).</li>
      </ul>
      <p>
        Pricing is in Indian Rupees (INR) and inclusive of applicable taxes unless stated otherwise. We reserve the
        right to change pricing at any time; changes do not affect bookings already paid for.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old and legally capable of entering into a contract under Indian law to book an
        audit. By submitting the intake form you confirm you meet this requirement and that the information you
        provide is accurate.
      </p>

      <h2>3. Booking and payment</h2>
      <ul>
        <li>Bookings are confirmed only after payment is successfully captured by Razorpay.</li>
        <li>You will receive a confirmation email at the address provided in the intake form.</li>
        <li>Audit delivery typically begins within 48 hours of confirmed booking and is delivered within 5–10 business days, depending on tier.</li>
        <li>If we are unable to deliver an audit (e.g. profile is inactive, URL is invalid, scope is out of expertise), we will issue a full refund per the <a href="/refund">Refund Policy</a>.</li>
      </ul>

      <h2>4. Your responsibilities</h2>
      <ul>
        <li>Provide accurate, current information in the intake form, including a valid social profile / channel URL accessible to us.</li>
        <li>Cooperate in scheduling any required strategy call within 14 days of booking.</li>
        <li>Use any deliverables (reports, recommendations) for your own account or business only.</li>
      </ul>

      <h2>5. Intellectual property</h2>
      <p>
        All website content (text, images, branding) is owned by Sindhu Biswal / Buzzlab and protected by copyright
        and trademark laws. You receive a non-exclusive, non-transferable licence to use audit reports and
        recommendations delivered to you for your personal or business growth. You may not resell, redistribute, or
        publish them without written permission.
      </p>

      <h2>6. No guarantee of results</h2>
      <p>
        Growth on social platforms depends on many factors outside our control (algorithm changes, platform policy,
        execution, niche, market conditions). While our recommendations are based on professional experience and
        proven frameworks, <strong>we do not guarantee specific outcomes</strong> such as follower growth, engagement
        rates, monetisation, or brand deals.
      </p>

      <h2>7. Refunds and cancellations</h2>
      <p>
        Our refund and cancellation terms are set out in the <a href="/refund">Refund Policy</a>, which forms part of
        these Terms.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, our total liability for any claim arising out of or relating to your
        use of the website or services shall not exceed the amount you paid for the specific service giving rise to
        the claim. We are not liable for indirect, incidental, consequential, or punitive damages, including loss of
        revenue, profits, data, or goodwill.
      </p>

      <h2>9. Privacy</h2>
      <p>
        Your use of our services is also governed by our <a href="/privacy">Privacy Policy</a>, which describes how we
        collect, use, and protect your personal information.
      </p>

      <h2>10. Third-party links</h2>
      <p>
        Our website may contain links to third-party platforms (Instagram, LinkedIn, Topmate, etc.). We are not
        responsible for the content, policies, or practices of those external sites.
      </p>

      <h2>11. Termination</h2>
      <p>
        We may suspend or terminate access to our services if you breach these Terms, attempt to defraud us, behave
        abusively, or use the deliverables in violation of Section 5. In such cases, refunds may be withheld at our
        discretion.
      </p>

      <h2>12. Governing law and jurisdiction</h2>
      <p>
        These Terms are governed by the laws of India. Any dispute arising out of or in connection with these Terms
        shall be subject to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha, India.
      </p>

      <h2>13. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. The &quot;Last updated&quot; date at the top of this page
        indicates the latest revision. Continued use of the website or services after changes constitutes acceptance
        of the revised Terms.
      </p>

      <h2>14. Contact</h2>
      <p>
        For any questions about these Terms:
        <br />
        Email: <a href="mailto:hello@buzzlab.in">hello@buzzlab.in</a>
        <br />
        Website: <a href="https://www.sindhubiswal.com">www.sindhubiswal.com</a>
      </p>
    </LegalPage>
  );
}
