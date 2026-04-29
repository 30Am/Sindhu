import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Link
} from "@react-email/components";

interface WelcomeEmailProps {
  name: string;
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Sindhu&apos;s Audit!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Text style={logoText}>SINDHU BISWAL</Text>
          </Section>
          
          <Section style={contentSection}>
            <Heading style={h1}>Welcome to the Audit!</Heading>
            <Text style={text}>Hi {name || "there"},</Text>
            <Text style={text}>
              Thanks for booking an audit. I&apos;m excited to help you grow your digital presence, identify what&apos;s holding you back, and create an actionable strategy.
            </Text>
            
            <Section style={cardSection}>
              <Text style={cardText}>
                <strong>What happens next?</strong><br/>
                My team and I will review the profile and challenges you shared. We will reach out within the next 48 hours to schedule your strategy session or provide the personalized action plan.
              </Text>
            </Section>

            <Text style={text}>
              In the meantime, make sure you keep posting and stay consistent!
            </Text>
            
            <Hr style={hr} />
            <Text style={footer}>
              Best regards,<br/>Sindhu Biswal
            </Text>
            <Text style={footerLinks}>
              <Link href="https://sindhubiswal.com" style={link}>Website</Link> •{" "}
              <Link href="https://instagram.com/sindhubiswal" style={link}>Instagram</Link>
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
