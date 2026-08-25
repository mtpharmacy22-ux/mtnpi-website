import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://www.mtnpi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mother Teresa Nursing & Paramedical Institute | Jaipur",
  description:
    "Mother Teresa Nursing & Paramedical Institute, Jaipur offers quality nursing education, practical clinical training, modern laboratories and student-focused learning.",
  keywords: [
    "Mother Teresa Nursing Institute Jaipur",
    "B.Sc Nursing Jaipur",
    "Nursing college Jaipur",
    "Paramedical Institute Jaipur",
    "INC RUHS RNC affiliated nursing college",
  ],
  openGraph: {
    title: "Mother Teresa Nursing & Paramedical Institute | Jaipur",
    description:
      "Quality nursing education, practical clinical training, modern laboratories and student-focused learning in Jaipur.",
    url: siteUrl,
    siteName: "Mother Teresa Nursing & Paramedical Institute",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-cream-100 font-body text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
