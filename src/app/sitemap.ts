import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { locales, defaultLocale } from '@/lib/i18n';

const PAGES = [
  '/menu',
  '/about',
  '/gallery',
  '/reviews',
  '/location',
  '/contact',
  '/terms',
  '/privacy',
  '/cookies',
  '/legal',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const add = (path: string, priority: number) => {
    entries.push({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: priority === 1 ? 'weekly' : 'monthly',
      priority,
    });
  };

  add('/', 1);
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    add(`/${locale}`, 1);
  }

  for (const page of PAGES) {
    add(page, 0.7);
    for (const locale of locales) {
      if (locale === defaultLocale) continue;
      add(`/${locale}${page}`, 0.7);
    }
  }

  return entries;
}