import Link from 'next/link';
import { Amiri } from 'next/font/google';
import { CupSoda, ArrowLeft } from 'lucide-react';
import '@/styles/globals.css';
import { defaultLocale } from '@/lib/i18n';

const amiri = Amiri({
  subsets: ['arabic'],
  variable: '--font-amiri',
  display: 'swap',
  weight: ['400', '700'],
  preload: true,
  fallback: ['serif'],
});

/**
 * Fallback 404 for the rare request that falls outside any locale segment.
 * In practice the locale proxy redirects most requests, so /en/not-found
 * handles 404s; this segment-less document is a self-contained safety net.
 */
export default function RootNotFound() {
  return (
    <html lang="en" dir="ltr" className={`${amiri.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-charcoal-950 text-cream-100">
        <div className="flex flex-1 items-center justify-center bg-charcoal-950 px-4" dir="ltr">
          <div className="text-center py-20">
            <span className="text-azure-500 text-xs uppercase tracking-[0.5em] mb-6 block">404</span>
            <div className="inline-flex items-center justify-center w-24 h-24 mb-8" aria-hidden="true">
              <CupSoda className="w-16 h-16 text-navy-500/40" />
            </div>
            <h1 className="font-display text-7xl font-extralight italic text-cream-100 mb-4">404</h1>
            <p className="font-display text-xl font-light text-cream-100/60 mb-10 max-w-md mx-auto">
              This page could not be found.
            </p>
            <Link
              href={`/${defaultLocale}`}
              className="inline-flex items-center gap-2 bg-navy-500 text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:bg-navy-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to BLOO COFFEE
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}