export const locales = ['en', 'fr', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
};

export const localeNativeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
};

export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  fr: 'ltr',
  ar: 'rtl',
};

export const defaultLocale: Locale = 'en';

export const SUPPORTED_LOCALES: Locale[] = ['en', 'fr', 'ar'];

export const LOCALE_NATIVE: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
};

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments[0] as Locale;
  return ['en', 'fr', 'ar'].includes(locale) ? locale : 'en';
}

export function getPathWithLocale(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}

export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (['en', 'fr', 'ar'].includes(segments[0])) {
    return '/' + segments.slice(1).join('/');
  }
  return pathname;
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const cleanPath = removeLocaleFromPath(pathname);
  return locale === 'en' ? cleanPath : `/${locale}${cleanPath}`;
}

export function isValidLocale(locale: string): locale is Locale {
  return ['en', 'fr', 'ar'].includes(locale);
}