import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";
import { BUSINESS, SITE_URL } from "@/lib/constants";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} | Oil Change & Auto Repair in Livonia, MI`,
    template: `%s | ${BUSINESS.shortName}`,
  },
  description:
    "Finish Line Oil Change and Repair in Livonia, MI — fast walk-in oil changes, tire rotation, brakes, and auto repair. No appointment needed. Call (734) 367-6457.",
  keywords: [
    "oil change Livonia MI",
    "oil change near me",
    "auto repair Livonia",
    "synthetic oil change Livonia",
    "Middlebelt Rd oil change",
    "Finish Line Oil Change",
    "walk-in oil change Michigan",
  ],
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  icons: {
    icon: `${BUSINESS.logoSrc}`,
    apple: `${BUSINESS.logoSrc}`,
  },
  openGraph: {
    title: `${BUSINESS.name} | Oil Change in Livonia, MI`,
    description:
      "Fast, trusted oil changes and auto repair in Livonia, MI. Walk in today — no appointment needed.",
    type: "website",
    locale: "en_US",
    siteName: BUSINESS.name,
    url: SITE_URL,
    images: [{ url: BUSINESS.logoSrc, alt: BUSINESS.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Oil Change in Livonia, MI`,
    description:
      "Fast walk-in oil changes and auto repair in Livonia, MI. No appointment needed.",
    images: [BUSINESS.logoSrc],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <LocalBusinessSchema />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
