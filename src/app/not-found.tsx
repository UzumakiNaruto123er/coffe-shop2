import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from 'next/link';
import { Amiri } from 'next/font/google';
import { CupSoda, ArrowLeft } from 'lucide-react';
import '@/styles/globals.css';
import { defaultLocale, isValidLocale, localeDirections, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionary';

const amiri = Amiri({
  subsets: ['arabic'],
  variable: '--font-amiri',
  display: 'swap',
  weight: ['400', '700'],
  preload: true,
  fallback: ['serif'],
});

async function resolveLocale(): Promise<Locale> {
  const requested = (await headers()).get('x-locale');
  return requested && isValidLocale(requested) ? requested : defaultLocale;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveLocale();
  const dict = getDictionary(locale);
  return {
    title: dict.meta.notFound.title,
    description: dict.meta.notFound.description,
    robots: { index: false, follow: true },
  };
}

export default async function RootNotFound() {
  const locale = await resolveLocale();
  const dict = getDictionary(locale);
  const dir = localeDirections[locale];

  return (
    <html lang={locale} dir={dir} className={`${amiri.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-charcoal-950 text-cream-100">
        <div className="flex flex-1 items-center justify-center bg-charcoal-950 px-4" dir={dir}>
          <div className="text-center py-20">
            <span className="text-azure-500 text-xs uppercase tracking-[0.5em] mb-6 block">404</span>
            <div className="inline-flex items-center justify-center w-24 h-24 mb-8" aria-hidden="true">
              <CupSoda className="w-16 h-16 text-navy-500/40" />
            </div>
            <h1 className="font-display text-7xl font-extralight italic text-cream-100 mb-4">404</h1>
            <p className="font-display text-xl font-light text-cream-100/60 mb-10 max-w-md mx-auto">
              {dict.notFound.message}
            </p>
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 bg-navy-500 text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:bg-navy-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
              {dict.notFound.backHome}
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
