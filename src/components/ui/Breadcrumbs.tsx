import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { getLocaleUrl } from '@/lib/site';

interface BreadcrumbsProps {
  locale: Locale;
  title: string;
  href: string;
}

/**
 * Visible breadcrumb trail plus a matching BreadcrumbList JSON-LD schema.
 * `href` is the locale-relative path of the current page (e.g. "/menu").
 */
export function Breadcrumbs({ locale, title, href }: BreadcrumbsProps) {
  const t = getDictionary(locale);
  const homeUrl = getLocaleUrl(locale);
  const currentUrl = getLocaleUrl(locale, href);

  const items = [
    { label: t.nav.home, url: homeUrl },
    { label: title, url: currentUrl },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.url,
    })),
  };

  return (
    <nav aria-label={t.common.breadcrumbs} className="mb-10 print-hidden">
      <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em]">
        {items.map((item, index) => (
          <li key={item.url} className="flex items-center gap-2 min-w-0">
            {index > 0 && (
              <ChevronRight
                className="w-3.5 h-3.5 text-cream-300 shrink-0 rtl:-scale-x-100"
                aria-hidden="true"
              />
            )}
            {index < items.length - 1 ? (
              <Link
                href={item.url}
                className="text-cream-100/50 hover:text-gold-500 transition-colors truncate"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gold-500 truncate" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}