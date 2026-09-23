import type { Metadata, Viewport } from "next";
import { Amiri } from "next/font/google";
import "@/styles/globals.css";
import { SITE_URL } from "@/lib/site";

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-amiri",
  display: "swap",
  weight: ["400", "700"],
  preload: true,
  fallback: ["serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "BLOO COFFEE",
  title: {
    default: "BLOO COFFEE — Coffee Shop in L'Aouina, Tunis",
    template: "%s | BLOO COFFEE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "BLOO COFFEE",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a3a52",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${amiri.variable} h-full antialiased`}
      dir="ltr"
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <meta name="theme-color" content="#1a3a52" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-180x180.png" />
      </head>
      <body className="min-h-full flex flex-col bg-charcoal-950 text-cream-100">
        {children}
      </body>
    </html>
  );
}