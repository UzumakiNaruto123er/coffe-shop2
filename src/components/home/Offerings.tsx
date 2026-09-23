'use client';

import { Coffee, Droplets, Sparkles, CakeSlice } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';

interface OfferingsProps {
  locale: Locale;
}

const ICONS = {
  espresso: Coffee,
  pour: Droplets,
  blend: Sparkles,
  pastry: CakeSlice,
} as const;

export function Offerings({ locale }: OfferingsProps) {
  const t = getDictionary(locale);

  return (
    <Section id="offerings" padding="lg" variant="alternate" aria-labelledby="offerings-title">
      <Container size="lg" padding="md">
        <div className="max-w-2xl">
          <span className="eyebrow text-terracotta-600 mb-5">{t.home.offerings.eyebrow}</span>
          <h2 id="offerings-title" className="display-title-sm font-display font-extrabold text-bloo-950 text-balance">
            {t.home.offerings.title1}{' '}
            <span className="italic font-medium text-terracotta-500">{t.home.offerings.title2}</span>
          </h2>
          <p className="mt-5 text-cream-500 leading-relaxed max-w-xl measure">
            {t.home.offerings.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {t.home.offerings.cards.map((card) => {
            const Icon = ICONS[card.icon as keyof typeof ICONS] ?? Coffee;
            return (
              <article
                key={card.title}
                className="group bg-white border border-cream-200 rounded-[2rem] p-8 transition-all hover:border-bloo-100 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-bloo-950 text-white flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold text-bloo-950">{card.title}</h3>
                <p className="mt-3 text-sm text-cream-500 leading-relaxed">{card.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}