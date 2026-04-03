import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sindhu Biswal — Growth Auditor",
  description:
    "Specialized in Instagram, YouTube Growth Strategy, and Content Marketing. Get your personalized growth audit today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-white text-[#0a0a0a]" suppressHydrationWarning>{children}</body>
    </html>
  );
}
