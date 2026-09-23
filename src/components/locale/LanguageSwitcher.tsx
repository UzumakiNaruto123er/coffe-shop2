'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Locale, locales, localeNativeNames, getLocalizedPath } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { getDictionary } from '@/lib/dictionary';

interface LanguageSwitcherProps {
  locale: Locale;
  variant?: 'pills' | 'list';
  onSelect?: () => void;
}

const STORAGE_KEY = 'dicebeans-locale';

/**
 * Real, working language switcher. Builds localized URLs that keep the
 * current page in the target language, and remembers the preference.
 */
export function LanguageSwitcher({
  locale,
  variant = 'pills',
  onSelect,
}: LanguageSwitcherProps) {
  const t = getDictionary(locale);
  const pathname = usePathname();

  const handleSelect = (target: Locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, target);
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
                  ? 'bg-bloo-50 text-bloo-800'
                  : 'text-cream-400 hover:bg-charcoal-900 hover:text-cream-100'
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
    <div role="group" aria-label={t.nav.language} className="inline-flex items-center gap-0.5">
      {locales.map((lang) => (
        <Link
          key={lang}
          href={getLocalizedPath(pathname, lang)}
          onClick={() => handleSelect(lang)}
          lang={lang}
          aria-current={lang === locale ? 'true' : undefined}
          className={cn(
            'px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-full transition-colors',
            lang === locale
              ? 'text-terracotta-500 underline decoration-terracotta-500 decoration-2 underline-offset-4'
              : 'text-cream-400 hover:text-bloo-800'
          )}
        >
          {lang === 'ar' ? 'ع' : lang.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}