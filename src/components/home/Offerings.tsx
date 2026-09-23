'use client';

import Link from 'next/link';
import { Coffee, Droplets, Sparkles, CakeSlice, ArrowRight } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { SafeImage } from '@/components/ui/SafeImage';
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
  const [featured, ...supporting] = t.home.offerings.cards;

  return (
    <Section id="offerings" padding="lg" variant="alternate" aria-labelledby="offerings-title">
      <Container size="lg" padding="md">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Intro + supporting offerings */}
          <div className="lg:col-span-5">
            <span className="eyebrow mb-5">{t.home.offerings.eyebrow}</span>
            <h2 id="offerings-title" className="display-title-sm font-display font-extrabold text-bloo-950 text-balance">
              {t.home.offerings.title1}{' '}
              <span className="italic font-medium text-terracotta-500">{t.home.offerings.title2}</span>
            </h2>
            <p className="mt-5 text-cream-500 leading-relaxed max-w-xl measure">
              {t.home.offerings.subtitle}
            </p>

            <ul className="mt-10 border-t border-b border-cream-200">
              {supporting.map((card) => {
                const Icon = ICONS[card.icon as keyof typeof ICONS] ?? Coffee;
                return (
                  <li key={card.title} className="flex gap-5 py-6 items-start">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-white border border-cream-200 text-bloo-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-bloo-950">{card.title}</h3>
                      <p className="text-sm text-cream-500 leading-relaxed mt-1">{card.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Featured offering */}
          <div className="lg:col-span-7">
            <article className="relative overflow-hidden rounded-[2rem] bg-bloo-950 shadow-xl min-h-[420px] sm:min-h-[480px] flex items-end">
              <SafeImage
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop"
                alt={featured.title}
                fill
                className="object-cover opacity-45"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-bloo-950 via-bloo-950/25 to-transparent"
                aria-hidden="true"
              />
              <div className="relative p-8 sm:p-12">
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white text-balance">
                  {featured.title}
                </h3>
                <p className="mt-3 text-white/75 leading-relaxed max-w-md">
                  {featured.description}
                </p>
                <Link
                  href={`/${locale}/menu`}
                  className="group inline-flex items-center gap-2 mt-7 text-xs uppercase tracking-[0.25em] font-bold text-white border-b border-white/40 pb-1 hover:border-white transition-colors"
                >
                  {t.home.hero.ctaMenu}
                  <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </Section>
  );
}