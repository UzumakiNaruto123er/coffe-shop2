'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { type Locale, locales, localeNativeNames, getLocalizedPath } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { getDictionary } from '@/lib/dictionary';

interface LanguageSwitcherProps {
  locale: Locale;
  variant?: 'pills' | 'list';
  onSelect?: () => void;
}

const STORAGE_KEY = 'bloo-locale';
/** Read by the first-paint splash so a locale change never replays it. */
const SWITCH_FLAG = 'bloo-lang-switch';

/**
 * Real, working language switcher. Builds localized URLs that keep the
 * current page in the target language, and remembers the preference.
 *
 * Every locale is prefetched once the page is idle. The locale layout is
 * dynamically rendered (it carries the per-request CSP nonce), so Next.js
 * cannot prebuild a static RSC payload for it and a switch otherwise waits on
 * a cold server round-trip. Warming all three up front turns a 400-1400ms
 * navigation into a cached one. On mobile the switcher lives inside a closed
 * drawer, so link-hover prefetching never fires and this is the only thing
 * making the switch feel instant.
 */
export function LanguageSwitcher({
  locale,
  variant = 'pills',
  onSelect,
}: LanguageSwitcherProps) {
  const t = getDictionary(locale);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const warm = () => {
      for (const lang of locales) {
        if (lang === locale) continue;
        router.prefetch(getLocalizedPath(pathname, lang));
      }
    };
    const ric = window.requestIdleCallback;
    if (ric) {
      const handle = ric(warm, { timeout: 2000 });
      return () => window.cancelIdleCallback(handle);
    }
    const handle = window.setTimeout(warm, 600);
    return () => window.clearTimeout(handle);
  }, [locale, pathname, router]);

  const handleSelect = (target: Locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, target);
      sessionStorage.setItem(SWITCH_FLAG, '1');
    } catch {
      // ignore
    }
    onSelect?.();
  };

  if (variant === 'list') {
    return (
      <ul className="space-y-1" role="list">
        {locales.map((lang) => (
          <li key={lang}>
            <Link
              href={getLocalizedPath(pathname, lang)}
              onClick={() => handleSelect(lang)}
              lang={lang}
              aria-current={lang === locale ? 'true' : undefined}
              className={cn(
                'block w-full px-4 py-2.5 text-start text-sm font-medium rounded-lg transition-colors',
                lang === locale
                  ? 'bg-bloo-100 text-bloo-800'
                  : 'text-cream-400 hover:bg-bloo-50 hover:text-bloo-700'
              )}
            >
              {localeNativeNames[lang]}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div role="group" aria-label={t.nav.language} className="inline-flex items-center gap-1">
      {locales.map((lang) => (
        <Link
          key={lang}
          href={getLocalizedPath(pathname, lang)}
          onClick={() => handleSelect(lang)}
          lang={lang}
          aria-current={lang === locale ? 'true' : undefined}
          className={cn(
            'px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-md transition-colors',
            lang === locale
              ? 'bg-bloo-100 text-bloo-800'
              : 'text-cream-400 hover:bg-bloo-50 hover:text-bloo-700'
          )}
        >
          {lang === 'ar' ? 'ع' : lang.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}