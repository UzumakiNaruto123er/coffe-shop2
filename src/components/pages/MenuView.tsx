'use client';

import { Phone, Coffee, Droplets, Sparkles, CakeSlice } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { BUSINESS_INFO } from '@/lib/data/business';

interface MenuViewProps {
  locale: Locale;
}

const CATEGORY_ICONS = [Coffee, Droplets, Sparkles, CakeSlice];

export function MenuView({ locale }: MenuViewProps) {
  const t = getDictionary(locale);
  const page = t.menuPage;

  return (
    <Section id="menu" padding="xl">
      <Container size="lg" padding="md">
        <Breadcrumbs locale={locale} title={t.nav.menu} href="/menu" />
        <div className="max-w-3xl mb-16">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-4 block">
            {page.tagline}
          </span>
          <h1 className="font-display font-light text-5xl md:text-6xl text-cream-100 mb-8">
            {page.title1} <span className="italic text-gold-500">{page.title2}</span>
          </h1>
          <p className="text-xl text-cream-100/60 leading-relaxed measure">{page.intro}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6">{page.categoriesTitle}</p>
            <div className="rounded-[1.5rem] bg-bloo-950 text-white p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold">{page.ctaTitle}</h2>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{page.ctaBody}</p>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-3 mt-7 px-6 py-3 bg-white text-bloo-950 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-bloo-50 transition-all"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {BUSINESS_INFO.phone}
              </a>
              <p className="mt-6 text-xs text-white/50 leading-relaxed">{page.note}</p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ol className="border-y border-cream-200 divide-y divide-cream-200">
              {t.home.menu.categories.map((category, index) => {
                const Icon = CATEGORY_ICONS[index % CATEGORY_ICONS.length];
                return (
                  <li key={category} className="flex items-center gap-5 sm:gap-7 py-6">
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-cream-300 w-10 sm:w-12 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="w-11 h-11 shrink-0 rounded-xl bg-bloo-50 text-bloo-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-xl sm:text-2xl font-bold text-bloo-950">
                      {category}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}