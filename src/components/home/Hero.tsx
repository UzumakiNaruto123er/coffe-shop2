'use client';

import Link from 'next/link';
import { Navigation, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SafeImage } from '@/components/ui/SafeImage';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { GOOGLE_MAPS, BUSINESS_INFO } from '@/lib/data/business';

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const t = getDictionary(locale);

  return (
    <section
      className="relative w-full bg-white pt-28 sm:pt-32 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="bg-noise" aria-hidden="true" />
      <Container size="lg" padding="md">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 sm:py-20 lg:py-24">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] font-semibold text-terracotta-600 mb-8">
              <span className="w-10 h-px bg-terracotta-500" aria-hidden="true" />
              {t.home.hero.badge}
            </span>
            <h1
              id="hero-title"
              className="text-clamp-hero font-display font-extrabold text-bloo-950 max-w-xl text-balance tracking-[-0.02em]"
            >
              {t.home.hero.title1}{' '}
              <span className="italic font-medium text-terracotta-500">
                {t.home.hero.title2}
              </span>
            </h1>
            <p className="mt-7 text-clamp-body font-light text-cream-500 max-w-lg leading-relaxed text-balance">
              {t.home.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Button variant="primary" size="lg" asChild className="w-full sm:w-auto min-h-12 rounded-full">
                <Link href={`/${locale}/menu`}>{t.home.hero.ctaMenu}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto min-h-12 rounded-full">
                <a
                  href={GOOGLE_MAPS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  {t.home.hero.ctaDirections}
                </a>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.7rem] uppercase tracking-[0.25em] text-cream-500">
              <span>
                {t.home.hero.servicesHint.split('·').map((chip) => chip.trim()).join('  ·  ')}
              </span>
              <span className="inline-flex items-center gap-1.5 text-bloo-700">
                <Star className="w-3 h-3 fill-current" aria-hidden="true" />
                {BUSINESS_INFO.rating.toFixed(1)}
              </span>
              <span className="inline-flex items-center gap-1.5 text-bloo-700">
                <Clock className="w-3 h-3" aria-hidden="true" />
                {BUSINESS_INFO.hours.label}
              </span>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
              <SafeImage
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
                alt={t.home.hero.subtitle}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bloo-950/20 to-transparent" aria-hidden="true" />
            </div>
            <div className="absolute -bottom-6 start-6 bg-charcoal-950 border border-cream-200 rounded-3xl px-7 py-5 shadow-xl hidden sm:block">
              <p className="text-[0.6rem] uppercase tracking-[0.3em] font-semibold text-cream-400 mb-1">
                {t.home.quickInfo.ratingLabel}
              </p>
              <p className="font-display text-2xl font-extrabold text-bloo-950">
                {BUSINESS_INFO.rating.toFixed(1)}
                <span className="text-sm font-medium text-cream-400 ms-1.5">/ 5</span>
              </p>
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-cream-500 mt-0.5">
                {BUSINESS_INFO.reviewCount} · Google
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}