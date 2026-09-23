import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, isValidLocale } from '@/lib/i18n';
import { getOgLocale, getLocaleUrl } from '@/lib/site';
import { getDictionary } from '@/lib/dictionary';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HtmlLangSetter } from '@/components/locale/HtmlLangSetter';
import { JsonLd } from '@/components/seo/JsonLd';
import { BackToTop } from '@/components/ui/BackToTop';
import { CookieConsent } from '@/components/ui/CookieConsent';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

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
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    alternates: {
      canonical: homeUrl,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: getOgLocale(locale),
      siteName: 'BLOO COFFEE',
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      url: homeUrl,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <>
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
    </>
  );
}