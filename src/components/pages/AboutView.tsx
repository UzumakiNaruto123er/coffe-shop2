'use client';

import { Coffee, Dices, Users, CupSoda, ShoppingBag, Mic, Star } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { BUSINESS_INFO } from '@/lib/data/business';

interface AboutViewProps {
  locale: Locale;
}

const FEATURE_ICONS = {
  coffee: Coffee,
  dice: Dices,
  people: Users,
  mug: CupSoda,
  bag: ShoppingBag,
  mic: Mic,
} as const;

export function AboutView({ locale }: AboutViewProps) {
  const t = getDictionary(locale);
  const page = t.aboutPage;

  return (
    <Section id="about" padding="xl">
      <Container size="lg" padding="md">
        <Breadcrumbs locale={locale} title={t.nav.about} href="/about" />
        <div className="max-w-3xl mb-16">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-4 block">
            {page.tagline}
          </span>
          <h1 className="font-display font-light text-5xl md:text-6xl text-cream-100 mb-8">
            {page.title1} <span className="italic text-gold-500">{page.title2}</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div className="space-y-6 text-cream-100/65 text-lg leading-relaxed measure">
            <p>{page.story1}</p>
            <p>{page.story2}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            <div className="border border-gold-500/30 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 fill-gold-500 text-gold-500" aria-hidden="true" />
                <span className="font-display text-4xl font-light text-gold-500">{page.ratingValue}</span>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-cream-100/60">{page.ratingLabel}</p>
            </div>
            <div className="border border-white/10 p-6 md:p-8">
              <p className="font-display text-4xl font-light text-cream-100 mb-2">{page.reviewsValue}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-cream-100/60">{page.reviewsLabel}</p>
            </div>
          </div>
        </div>

        <h2 className="font-display text-3xl text-cream-100 mb-10">{page.featuresLabel}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {page.features.map((feature) => {
            const Icon = FEATURE_ICONS[feature.icon as keyof typeof FEATURE_ICONS] ?? Coffee;
            return (
              <div key={feature.title} className="group border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-gold-500/40">
                <Icon className="w-8 h-8 text-gold-500 mb-6" aria-hidden="true" />
                <h3 className="font-display text-xl text-cream-100 mb-2">{feature.title}</h3>
                <p className="text-cream-100/55 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="border-t border-white/10 pt-16">
          <h2 className="font-display text-3xl text-cream-100 mb-3">{page.hoursTitle}</h2>
          <p className="text-cream-100/60 max-w-2xl measure">{page.hoursNote}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-charcoal-950 text-xs uppercase tracking-[0.25em] font-bold hover:bg-cream-100 transition-all w-full sm:w-auto justify-center"
            >
              {t.nav.call} — {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}