'use client';

import { Coffee } from 'lucide-react';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-[#121212] text-cream-100">
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <Coffee className="w-12 h-12 text-gold-500 mx-auto mb-8" aria-hidden="true" />
            <h1 className="font-display font-light text-4xl text-cream-100 mb-4">
              Something went wrong
            </h1>
            <p className="text-cream-100/60 mb-10 max-w-md mx-auto">
              An unexpected error occurred. Please try again.
            </p>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center px-10 py-4 bg-gold-500 text-charcoal-950 text-xs uppercase tracking-[0.25em] font-bold hover:bg-cream-100 transition-all"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}