import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://www.sindhubiswal.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sindhu Biswal | Growth Auditor for Instagram & YouTube Creators",
    template: "%s | Sindhu Biswal",
  },
  description:
    "Sindhu Biswal is a growth advisor and coach to India's top Instagram and YouTube creators. Book a personalized 1-on-1 audit of your profile, content strategy, and growth systems.",
  applicationName: "Sindhu Biswal",
  authors: [{ name: "Sindhu Biswal", url: siteUrl }],
  creator: "Sindhu Biswal",
  publisher: "Sindhu Biswal",
  keywords: [
    "Sindhu Biswal",
    "Sindhu",
    "Growth Auditor",
    "Instagram growth audit",
    "YouTube growth audit",
    "creator coach India",
    "social media growth strategy",
    "content strategy audit",
    "Instagram coach",
    "YouTube coach",
    "personalized growth audit",
    "Breakdown by Sindhu",
  ],
  category: "Business",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Sindhu Biswal",
    title: "Sindhu Biswal | Growth Auditor for Instagram & YouTube Creators",
    description:
      "Personalized 1-on-1 growth audits for Instagram and YouTube creators. Advisor and coach to India's top creators.",
    images: [
      {
        url: "/sindhu-hero.png",
        width: 1200,
        height: 1200,
        alt: "Sindhu Biswal — Growth Auditor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sindhu Biswal | Growth Auditor",
    description:
      "Personalized 1-on-1 growth audits for Instagram and YouTube creators. Advisor and coach to India's top creators.",
    images: ["/sindhu-hero.png"],
    creator: "@sindhu.biswal",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when you have it:
    // google: "XXXXXXXXXXXXXXXXXXXXXXXX",
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#07070e" },
  ],
};

// JSON-LD structured data so search engines understand who Sindhu Biswal is
// and surface rich results for name queries.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sindhu Biswal",
  alternateName: "Breakdown by Sindhu",
  url: siteUrl,
  image: `${siteUrl}/sindhu-hero.png`,
  jobTitle: "Growth Auditor & Creator Coach",
  worksFor: {
    "@type": "Organization",
    name: "Sindhu Biswal",
    url: siteUrl,
  },
  description:
    "Growth advisor and coach to India's top Instagram and YouTube creators. Conducts personalized 1-on-1 audits of creator profiles, content strategy, and growth systems.",
  knowsAbout: [
    "Instagram growth",
    "YouTube growth",
    "Content strategy",
    "Creator economy",
    "Personal branding",
    "Social media monetization",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/sindhubiswal/",
    "https://www.instagram.com/sindhu.biswal/",
    "https://topmate.io/sindhubiswal",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sindhu Biswal",
  alternateName: "Breakdown by Sindhu",
  url: siteUrl,
  description:
    "Personalized 1-on-1 growth audits for Instagram and YouTube creators by Sindhu Biswal.",
  inLanguage: "en-IN",
  publisher: {
    "@type": "Person",
    name: "Sindhu Biswal",
    url: siteUrl,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sindhu Biswal — Growth Audits",
  alternateName: "Sindhu Biswal",
  url: siteUrl,
  image: `${siteUrl}/sindhu-hero.png`,
  logo: `${siteUrl}/icon.png`,
  description:
    "Personalized 1-on-1 growth audits and strategy consultations for Instagram and YouTube creators.",
  priceRange: "₹3,999 – ₹15,999",
  areaServed: { "@type": "Country", name: "India" },
  founder: { "@type": "Person", name: "Sindhu Biswal" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "marketing@trythegrowthproject.com",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.linkedin.com/in/sindhubiswal/",
    "https://www.instagram.com/sindhu.biswal/",
    "https://topmate.io/sindhubiswal",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FCWV7LB04K"} />
    </html>
  );
}
