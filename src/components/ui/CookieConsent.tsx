'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';

const STORAGE_KEY = 'dicebeans-cookie-consent';

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
  const accepted = useSyncExternalStore(subscribe, getConsent, () => true);
  const t = getDictionary(locale);

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      // ignore
    }
    notify();
  };

  if (accepted) return null;

  return (
    <aside
      role="dialog"
      aria-label={t.common.cookieBanner.title}
      aria-live="polite"
      className="no-print fixed bottom-0 inset-x-0 z-50 border-t border-white/10 bg-bloo-950/95 backdrop-blur p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center">
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <Cookie className="w-5 h-5 text-bloo-200 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-display text-lg text-white mb-1">{t.common.cookieBanner.title}</p>
            <p className="text-sm text-white/70">{t.common.cookieBanner.message}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href={`/${locale}/cookies`}
            className="text-bloo-200 text-xs uppercase tracking-[0.2em] hover:underline"
          >
            {t.common.cookieBanner.learnMore}
          </Link>
          <button
            type="button"
            onClick={accept}
            className="px-6 py-3 bg-white text-bloo-950 text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-bloo-100 transition-colors"
          >
            {t.common.cookieBanner.accept}
          </button>
        </div>
      </div>
    </aside>
  );
}