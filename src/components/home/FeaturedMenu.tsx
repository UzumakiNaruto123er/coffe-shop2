import Link from 'next/link';
import { Container, Section } from '@/components/ui/Container';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';

interface FeaturedMenuProps {
  locale: Locale;
}

export function FeaturedMenu({ locale }: FeaturedMenuProps) {
  const t = getDictionary(locale);

  return (
    <Section padding="lg" aria-labelledby="featured-menu-title">
      <Container size="lg" padding="md">
        <div className="border-t border-b border-cream-200 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.35em] font-semibold text-navy-500 mb-6 block">
                {t.home.menu.eyebrow}
              </span>
              <h2
                id="featured-menu-title"
                className="font-display font-extrabold text-4xl sm:text-5xl text-bloo-950 text-balance"
              >
                {t.home.menu.title1}{' '}
                <span className="italic font-medium text-navy-500">{t.home.menu.title2}</span>
              </h2>
              <p className="mt-6 text-cream-500 leading-relaxed max-w-xl measure">
                {t.home.menu.subtitle}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/menu`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-navy-500 text-white rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-navy-600 transition-colors"
              >
                {t.nav.menu}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-cream-200 text-bloo-950 text-xs uppercase tracking-[0.2em] font-semibold hover:border-navy-500 hover:text-navy-500 transition-colors"
              >
                {t.home.menu.cta}
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] font-semibold text-cream-500 mb-6">
              {t.home.menu.categoriesTitle}
            </p>
            <ul className="border-t border-cream-200 sm:grid sm:grid-cols-2 sm:gap-x-14">
              {t.home.menu.categories.map((category) => (
                <li
                  key={category}
                  className="py-6 border-b border-cream-200"
                >
                  <span className="font-display text-lg sm:text-xl font-semibold text-bloo-950 leading-snug">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-sm italic text-cream-500">{t.home.menu.note}</p>
        </div>
      </Container>
    </Section>
  );
}