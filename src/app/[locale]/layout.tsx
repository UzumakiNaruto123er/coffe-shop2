import type { Metadata, Viewport } from 'next';
import { Amiri } from 'next/font/google';
import { notFound } from 'next/navigation';
import { locales, isValidLocale, localeDirections, type Locale } from '@/lib/i18n';
import { getOgLocale, getLocaleUrl, SITE_URL, OG_IMAGE } from '@/lib/site';
import { getDictionary } from '@/lib/dictionary';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HtmlLangSetter } from '@/components/locale/HtmlLangSetter';
import { JsonLd } from '@/components/seo/JsonLd';
import { BackToTop } from '@/components/ui/BackToTop';
import { CookieConsent } from '@/components/ui/CookieConsent';
import '@/styles/globals.css';

const amiri = Amiri({
  subsets: ['arabic'],
  variable: '--font-amiri',
  display: 'swap',
  weight: ['400', '700'],
  preload: true,
  fallback: ['serif'],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const globalOG: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'BLOO COFFEE',
};

const globalTwitter: Metadata['twitter'] = {
  card: 'summary_large_image',
};

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const homeUrl = getLocaleUrl(locale);
  const languages: Record<string, string> = { 'x-default': getLocaleUrl('en') };
  for (const lang of locales) {
    languages[lang] = getLocaleUrl(lang);
  }

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: 'BLOO COFFEE',
    title: {
      default: dict.meta.home.title,
      template: '%s | BLOO COFFEE',
    },
    description: dict.meta.home.description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: homeUrl,
      languages,
    },
    openGraph: {
      ...globalOG,
      locale: getOgLocale(locale),
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      url: homeUrl,
      images: [OG_IMAGE],
    },
    twitter: {
      ...globalTwitter,
      images: [OG_IMAGE],
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#1a3a52',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dir = localeDirections[locale as Locale];
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${amiri.variable} h-full antialiased`}
      suppressHydrationWarning
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
        <HtmlLangSetter locale={locale} />
        <a href="#main-content" className="skip-link">
          {dict.common.skipToContent}
        </a>
        <Navbar locale={locale} />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer locale={locale} />
        <BackToTop locale={locale} />
        <CookieConsent locale={locale} />
        <JsonLd />
      </body>
    </html>
  );
}