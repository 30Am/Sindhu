import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Link,
} from "@react-email/components";

interface WelcomeEmailProps {
  name: string;
  /** Google Form (or other intake form) URL the customer should fill out next. */
  formUrl: string;
}

export const WelcomeEmail = ({ name, formUrl }: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thanks for signing up. One last step before your audit begins.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Text style={logoText}>SINDHU BISWAL</Text>
          </Section>

          <Section style={contentSection}>
            <Heading style={h1}>Thanks for signing up!</Heading>
            <Text style={text}>Hi {name || "there"},</Text>
            <Text style={text}>
              Your payment has gone through and your audit slot is reserved. Before my team can begin, I need a few
              specific details about your account, your goals, and what&apos;s not working right now. This is how we
              tailor the audit to your situation instead of handing you a templated review.
            </Text>

            <Section style={ctaSection}>
              <Button href={formUrl} style={ctaButton}>
                Fill out the intake form →
              </Button>
              <Text style={ctaSubtext}>
                Takes about 3 minutes. Open the form here:{" "}
                <Link href={formUrl} style={ctaLink}>
                  {formUrl}
                </Link>
              </Text>
            </Section>

            <Section style={cardSection}>
              <Text style={cardText}>
                <strong>What happens after you submit the form:</strong>
                <br />
                My team reviews your profile against our internal framework and prepares your personalized written
                audit. You&apos;ll receive it in your inbox <strong>within 48 hours of form submission</strong>.
                Advanced and Both Platforms tier clients will also get a scheduling link for the 1-hour live strategy
                call with Sindhu.
              </Text>
            </Section>

            <Text style={smallText}>
              Heads up: the 48-hour clock starts when you submit the form, not when you paid. If you have any trouble
              with the form, just reply to this email and we&apos;ll sort it out.
            </Text>

            <Hr style={hr} />
            <Text style={footer}>
              Best regards,
              <br />
              Sindhu Biswal
            </Text>
            <Text style={footerLinks}>
              <Link href="https://www.sindhubiswal.com" style={link}>
                Website
              </Link>{" "}
              •{" "}
              <Link href="https://www.instagram.com/sindhu.biswal/" style={link}>
                Instagram
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;

const main = {
  backgroundColor: "#0a0a0a",
  fontFamily:
    "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
  padding: "40px 0",
};

const container = {
  margin: "0 auto",
  padding: "0 0 30px",
  width: "560px",
  backgroundColor: "#101020",
  borderRadius: "16px",
  overflow: "hidden",
  border: "1px solid #242440",
};

const headerSection = {
  backgroundColor: "#0a0a0a",
  padding: "30px",
  textAlign: "center" as const,
  borderBottom: "1px solid #242440",
};

const logoText = {
  color: "#eeeeff",
  fontSize: "24px",
  fontWeight: "bold",
  letterSpacing: "2px",
  margin: "0",
};

const contentSection = {
  padding: "30px",
};

const h1 = {
  color: "#eeeeff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 20px",
  padding: "0",
};

const text = {
  color: "#b0b0c0",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 20px",
};

const smallText = {
  color: "#9090a8",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "0 0 20px",
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "30px 0",
};

const ctaButton = {
  backgroundColor: "#4d32ff",
  backgroundImage: "linear-gradient(90deg, #002eff 0%, #7c3aed 100%)",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "bold",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "999px",
  display: "inline-block",
};

const ctaSubtext = {
  color: "#8888a8",
  fontSize: "12px",
  lineHeight: "18px",
  margin: "14px 0 0",
  wordBreak: "break-all" as const,
};

const ctaLink = {
  color: "#8888bb",
  textDecoration: "underline",
};

const cardSection = {
  backgroundColor: "#1a1a2e",
  padding: "20px",
  borderRadius: "12px",
  margin: "30px 0",
  border: "1px solid #242440",
};

const cardText = {
  color: "#eeeeff",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "0",
};

const hr = {
  borderColor: "#242440",
  margin: "30px 0",
};

const footer = {
  color: "#eeeeff",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 10px",
};

const footerLinks = {
  color: "#555566",
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
};

const link = {
  color: "#8888bb",
  textDecoration: "underline",
};
