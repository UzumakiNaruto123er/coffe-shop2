'use client';

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';

const STORAGE_KEY = 'bloo-cookie-consent';
const EXIT_MS = 280;

const listeners = new Set<() => void>();

function getConsent(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'accepted';
  } catch {
    return true;
  }
}

function notify() {
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

export function CookieConsent({ locale }: { locale: Locale }) {
  // Server snapshot is "accepted" so the strip is never in the SSR HTML and
  // hydration can never mismatch; it mounts client-side straight into its
  // entrance animation.
  const accepted = useSyncExternalStore(subscribe, getConsent, () => true);
  const [closing, setClosing] = useState(false);
  const [gone, setGone] = useState(false);
  const t = getDictionary(locale);

  // Unmount only after the exit animation has played out.
  useEffect(() => {
    if (!closing) return;
    const timer = window.setTimeout(() => setGone(true), EXIT_MS);
    return () => window.clearTimeout(timer);
  }, [closing]);

  const accept = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      // storage unavailable — dismiss for this page view only
    }
    setClosing(true);
    notify();
  }, []);

  const show = !gone && (!accepted || closing);
  if (!show) return null;

  return (
    <aside
      className="cookie-strip no-print"
      data-state={closing ? 'exit' : 'enter'}
      role="region"
      aria-label={t.common.cookieBanner.title}
      data-testid="cookie-strip"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:gap-8 md:py-5">
        <div className="min-w-0 flex-1">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-bloo-200">
            {t.common.cookieBanner.title}
          </p>
          <p className="mt-1.5 max-w-2xl text-[0.8125rem] leading-relaxed text-white/80">
            {t.common.cookieBanner.message}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-4 md:gap-6">
          <Link
            href={`/${locale}/cookies`}
            className="nav-link text-bloo-200 hover:text-white"
          >
            {t.common.cookieBanner.learnMore}
          </Link>
          <button
            type="button"
            onClick={accept}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-6 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-bloo-950 transition-colors hover:bg-bloo-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {t.common.cookieBanner.accept}
          </button>
        </div>
      </div>
    </aside>
  );
}
