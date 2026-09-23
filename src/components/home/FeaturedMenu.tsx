'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';

interface FeaturedMenuProps {
  locale: Locale;
}

/**
 * Menu teaser — truthful. No invented items or prices; the full menu
 * and prices are presented in-store.
 */
export function FeaturedMenu({ locale }: FeaturedMenuProps) {
  const t = getDictionary(locale);

  return (
    <Section id="menu-teaser" padding="lg" variant="alternate" aria-labelledby="featured-title">
      <Container size="lg" padding="md">
        <div className="max-w-2xl">
          <span className="eyebrow mb-6">{t.home.menu.eyebrow}</span>
          <h2 id="featured-title" className="display-title font-display font-light text-cream-100">
            {t.home.menu.title1}{' '}
            <span className="italic text-gold-500">{t.home.menu.title2}</span>
          </h2>
          <p className="mt-6 text-lg text-cream-100/65 leading-relaxed measure">
            {t.home.menu.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {t.home.menu.categories.map((category) => (
            <div
              key={category}
              className="bg-charcoal-900 px-6 py-6 flex items-center justify-center text-center min-h-24"
            >
              <span className="text-sm tracking-[0.15em] uppercase text-cream-200">
                {category}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
          <p className="text-sm text-cream-100/55 measure">{t.home.menu.note}</p>
          <Link
            href={`/${locale}/contact`}
            className="sm:ms-auto inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gold-500 border border-gold-500/40 px-6 py-4 min-h-11 hover:bg-gold-500 hover:text-charcoal-950 transition-all"
          >
            {t.home.menu.cta}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}