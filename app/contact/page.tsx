import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Contact — Sindhu Biswal",
  description:
    "Get in touch with Sindhu Biswal for questions about growth audits, refunds, partnerships, or anything else.",
};

export default function ContactPage() {
  return (
    <LegalPage title="Contact" lastUpdated="29 April 2026">
      <p>
        Have a question about an audit, a refund request, or want to discuss a custom engagement? We&apos;d love to
        hear from you.
      </p>

      <h2>Email us</h2>
      <p>
        For all enquiries — booking questions, refund requests, partnership opportunities, or media:
        <br />
        <a href="mailto:marketing@trythegrowthproject.com">marketing@trythegrowthproject.com</a>
      </p>
      <p>
        We typically reply within <strong>1 business day</strong> (Monday–Friday). Refund requests are acknowledged
        within 2 business days as per our <a href="/refund">Refund Policy</a>.
      </p>

      <h2>Find us online</h2>
      <ul>
        <li><a href="https://www.linkedin.com/in/sindhubiswal/" target="_blank" rel="noopener noreferrer">LinkedIn — Sindhu Biswal</a></li>
        <li><a href="https://www.instagram.com/sindhu.biswal/" target="_blank" rel="noopener noreferrer">Instagram — @sindhu.biswal</a></li>
        <li><a href="https://topmate.io/sindhubiswal" target="_blank" rel="noopener noreferrer">Topmate — Book a 1:1 call</a></li>
      </ul>

      <h2>Business details</h2>
      <p>
        <strong>Sindhu Biswal</strong>
        <br />
        Bhubaneswar, Odisha, India
        <br />
        Email: <a href="mailto:marketing@trythegrowthproject.com">marketing@trythegrowthproject.com</a>
        <br />
        Website: <a href="https://www.sindhubiswal.com">www.sindhubiswal.com</a>
      </p>

      <h2>Ready to book?</h2>
      <p>
        Skip the email and book your audit directly:{" "}
        <Link href="/#book">Get your audit →</Link>
      </p>
    </LegalPage>
  );
}
