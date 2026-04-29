import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Sindhu Biswal",
  description:
    "How Sindhu Biswal collects, uses, stores, and protects your personal information when you book a growth audit.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="29 April 2026">
      <p>
        This Privacy Policy explains how <strong>Sindhu Biswal</strong> (referred to as &quot;we&quot;, &quot;us&quot;,
        or &quot;our&quot;) collects, uses, and protects information you provide
        when you visit <a href="https://www.sindhubiswal.com">www.sindhubiswal.com</a> or book a growth audit.
      </p>
      <p>
        By using this website or our services, you consent to the practices described here. If you do not agree, please
        do not use the site.
      </p>

      <h2>1. Information we collect</h2>
      <p>We collect only what is needed to deliver your audit and run our business:</p>
      <ul>
        <li><strong>Information you provide</strong> when booking an audit: full name, email address, social profile / channel URL, primary growth goal, and any challenges you describe in the intake form.</li>
        <li><strong>Payment information</strong>: payments are processed by Razorpay. We never see or store your full card number, CVV, UPI PIN, or banking credentials. We receive only a payment ID, status, and amount from Razorpay for reconciliation.</li>
        <li><strong>Communications</strong>: any emails, replies, or messages you send us.</li>
        <li><strong>Usage data</strong>: anonymous analytics about pages visited, device, and approximate location, collected via Google Analytics.</li>
      </ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To prepare and deliver your personalised growth audit.</li>
        <li>To send the welcome email, follow-up communication, and any audit-related notifications.</li>
        <li>To process payments and issue refunds where applicable.</li>
        <li>To improve the website and our services through aggregated, anonymous analytics.</li>
        <li>To respond to your queries and support requests.</li>
      </ul>
      <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

      <h2>3. Third-party services we use</h2>
      <p>To deliver this service we share the minimum necessary information with these processors:</p>
      <ul>
        <li><strong>Supabase</strong> — secure storage of audit booking data.</li>
        <li><strong>Resend</strong> — sending transactional emails (e.g. your welcome email).</li>
        <li><strong>Razorpay</strong> — payment processing. Razorpay&apos;s privacy policy applies to all payment data.</li>
        <li><strong>Google Analytics</strong> — anonymous traffic and behaviour analytics. You can opt out using a browser extension or by enabling &quot;Do Not Track&quot;.</li>
        <li><strong>Vercel</strong> — website hosting infrastructure.</li>
      </ul>

      <h2>4. How long we keep your data</h2>
      <p>
        Audit booking and payment records are retained for up to 7 years to comply with Indian tax and accounting
        requirements. Marketing communications, if any, are kept until you unsubscribe. You can request deletion of
        non-statutory records at any time (see Section 7).
      </p>

      <h2>5. Data security</h2>
      <p>
        We use industry-standard safeguards: HTTPS/TLS for all data in transit, access-controlled databases, and
        reputable processors (Supabase, Resend, Razorpay, Vercel) that maintain their own security certifications.
        However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>6. Cookies and analytics</h2>
      <p>
        We use a small number of cookies to remember your theme preference (light/dark) and to power Google Analytics
        for anonymous usage measurement. You can clear cookies in your browser settings at any time without affecting
        your ability to use the site.
      </p>

      <h2>7. Your rights</h2>
      <p>Under India&apos;s Digital Personal Data Protection Act, 2023, you have the right to:</p>
      <ul>
        <li>Request a copy of the personal information we hold about you.</li>
        <li>Ask us to correct any inaccurate information.</li>
        <li>Ask us to delete your information (subject to statutory retention requirements).</li>
        <li>Withdraw consent for future communications.</li>
        <li>Lodge a grievance with the relevant data protection authority.</li>
      </ul>
      <p>
        To exercise any of these rights, email us at{" "}
        <a href="mailto:marketing@trythegrowthproject.com">marketing@trythegrowthproject.com</a>. We will respond within 30 days.
      </p>

      <h2>8. Children&apos;s privacy</h2>
      <p>
        Our services are intended for users 18 years or older. We do not knowingly collect personal information from
        children. If you believe a child has provided us with information, contact us and we will delete it.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top of the page
        indicates when the latest revision took effect. Material changes will be communicated via email where
        appropriate.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions, concerns, or requests about this Privacy Policy:
        <br />
        Email: <a href="mailto:marketing@trythegrowthproject.com">marketing@trythegrowthproject.com</a>
        <br />
        Website: <a href="https://www.sindhubiswal.com">www.sindhubiswal.com</a>
      </p>
    </LegalPage>
  );
}
