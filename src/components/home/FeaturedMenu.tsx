'use client';

import Link from 'next/link';
import { Navigation, Coffee, Droplets, Sparkles, CakeSlice } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { getDictionary } from '@/lib/dictionary';
import { GOOGLE_MAPS } from '@/lib/data/business';
import type { Locale } from '@/lib/i18n';

interface FeaturedMenuProps {
  locale: Locale;
}

const CATEGORY_ICONS = [Coffee, Droplets, Sparkles, CakeSlice];

export function FeaturedMenu({ locale }: FeaturedMenuProps) {
  const t = getDictionary(locale);

  return (
    <Section padding="lg" aria-labelledby="featured-menu-title">
      <Container size="lg" padding="md">
        <div className="bg-bloo-950 rounded-[3rem] px-6 sm:px-12 lg:px-16 py-12 sm:py-16 relative overflow-hidden">
          <div className="bg-noise opacity-40" aria-hidden="true" />

          <div className="relative">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.35em] font-semibold text-bloo-200 mb-6 block">
                {t.home.menu.eyebrow}
              </span>
              <h2 id="featured-menu-title" className="font-display font-extrabold text-4xl sm:text-5xl text-white text-balance">
                {t.home.menu.title1}{' '}
                <span className="italic font-medium text-bloo-200">{t.home.menu.title2}</span>
              </h2>
              <p className="mt-6 text-white/70 leading-relaxed max-w-xl measure">
                {t.home.menu.subtitle}
              </p>
            </div>

            <div className="mt-12">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] font-semibold text-bloo-200 mb-6">
                {t.home.menu.categoriesTitle}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {t.home.menu.categories.map((category, index) => {
                  const Icon = CATEGORY_ICONS[index % CATEGORY_ICONS.length];
                  return (
                    <div
                      key={category}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 transition-colors hover:bg-white/[0.09]"
                    >
                      <Icon className="w-5 h-5 text-bloo-200 mb-4" aria-hidden="true" />
                      <p className="font-display font-semibold text-white text-sm leading-snug">
                        {category}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href={GOOGLE_MAPS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-bloo-950 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-bloo-50 transition-all"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                {t.home.hero.ctaDirections}
              </a>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/40 text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white/10 transition-all"
              >
                {t.home.menu.cta}
              </Link>
              <span className="text-sm italic text-white/60">{t.home.menu.note}</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}