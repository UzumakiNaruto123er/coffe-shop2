/**
 * Site-wide constants.
 *
 * NEXT_PUBLIC_SITE_URL should point to the production domain once a
 * custom domain is configured. Until then, the Vercel deployment is used.
 * An empty or whitespace value is treated the same as unset.
 */
const DEFAULT_SITE_URL = 'https://coffe-shop-2.vercel.app';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL
).replace(/\/+$/, '');

export function getOgLocale(locale: string): string {
  const map: Record<string, string> = {
    en: 'en_TN',
    fr: 'fr_TN',
    ar: 'ar_TN',
  };
  return map[locale] ?? 'en_TN';
}

export const OG_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "BLOO COFFEE — Specialty Coffee Shop in L'Aouina, Tunis",
};

export function getLocaleUrl(locale: string, path = ''): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}/${locale}${clean === '/' ? '' : clean}`;
}