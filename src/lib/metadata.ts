import type { Metadata } from 'next';
import { getDictionary, type Dictionary } from '@/lib/dictionary';
import { type Locale, locales } from '@/lib/i18n';
import { getOgLocale, getLocaleUrl, getOgImage } from '@/lib/site';

export function getAlternates(
  locale: Locale,
  path: string
): NonNullable<Metadata['alternates']> {
  const languages: Record<string, string> = { 'x-default': getLocaleUrl('en', path) };
  for (const lang of locales) {
    languages[lang] = getLocaleUrl(lang, path);
  }
  return {
    canonical: getLocaleUrl(locale, path),
    languages,
  };
}

/**
 * Builds localized page metadata (title, description, canonical + hreflang,
 * open graph) for any page identified by a key in the dictionary `meta`.
 */
export function buildPageMetadata(
  locale: Locale,
  key: keyof Dictionary['meta'],
  path: string
): Metadata {
  const dict = getDictionary(locale);
  const meta = dict.meta[key];
  const url = getLocaleUrl(locale, path);
  return {
    title: meta.title,
    description: meta.description,
    alternates: getAlternates(locale, path),
    openGraph: {
      type: 'website',
      locale: getOgLocale(locale),
      siteName: 'BLOO COFFEE',
      title: meta.title,
      description: meta.description,
      url,
      images: [getOgImage(locale)],
    },
    twitter: {
      card: 'summary_large_image',
      images: [getOgImage(locale)],
    },
  };
}