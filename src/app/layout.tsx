import type { Metadata, Viewport } from "next";
import { Crimson_Pro, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import "@/styles/globals.css";
import { SITE_URL } from "@/lib/site";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
  style: ["normal", "italic"],
  preload: true,
  fallback: ["Georgia", "serif"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  style: ["normal"],
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

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
  applicationName: "Omega Coffe",
  title: {
    default: "Omega Coffe",
    template: "%s | Omega Coffe",
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
    siteName: "Omega Coffe",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
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
      className={`${crimsonPro.variable} ${plusJakartaSans.variable} ${amiri.variable} h-full antialiased`}
      dir="ltr"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <meta name="theme-color" content="#c5a059" />
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