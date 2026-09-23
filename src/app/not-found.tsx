import Link from 'next/link';
import { Dice6, ArrowLeft } from 'lucide-react';
import { defaultLocale } from '@/lib/i18n';

/**
 * Fallback 404 for paths outside any locale segment. In practice the
 * locale proxy redirects most requests, so /en/not-found handles 404s.
 */
export default function RootNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal-950 px-4" dir="ltr">
      <div className="text-center py-20">
        <span className="text-gold-500 text-xs uppercase tracking-[0.5em] mb-6 block">404</span>
        <div className="inline-flex items-center justify-center w-24 h-24 mb-8" aria-hidden="true">
          <Dice6 className="w-16 h-16 text-gold-500/40" />
        </div>
        <h1 className="font-display text-7xl font-extralight italic text-cream-100 mb-4">404</h1>
        <p className="font-display text-xl font-light text-cream-100/60 mb-10 max-w-md mx-auto">
          This page could not be found.
        </p>
        <Link
          href={`/${defaultLocale}`}
          className="inline-flex items-center gap-2 bg-gold-500 text-charcoal-950 px-8 py-4 text-xs uppercase tracking-[0.25em] font-bold hover:bg-gold-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Omega Coffe
        </Link>
      </div>
    </div>
  );
}