'use client';

import Link from 'next/link';
import { Navigation } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SafeImage } from '@/components/ui/SafeImage';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { GOOGLE_MAPS } from '@/lib/data/business';

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const t = getDictionary(locale);

  return (
    <section
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
          alt=""
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-[#121212]/50 to-[#121212]" />
      </div>

      <Container size="lg" padding="md">
        <div className="relative z-10 text-center py-28 sm:py-32">
          <p className="text-gold-500 text-xs sm:text-sm uppercase tracking-[0.4em] font-semibold mb-6">
            {t.brand.name} {t.home.hero.badge}
          </p>
          <h1
            id="hero-title"
            className="hero-title font-display font-light text-cream-100 max-w-5xl mx-auto text-balance"
          >
            {t.home.hero.title1}{' '}
            <span className="italic text-gold-500">{t.home.hero.title2}</span>
          </h1>
          <p className="mt-6 text-base sm:text-xl font-light text-cream-100/75 max-w-2xl mx-auto leading-relaxed text-balance measure">
            {t.home.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" asChild className="w-full sm:w-auto min-h-12">
              <Link href={`/${locale}/menu`}>{t.home.hero.ctaMenu}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto min-h-12">
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

          <p className="mt-10 text-[0.65rem] sm:text-xs uppercase tracking-[0.3em] text-cream-100/45">
            {t.home.hero.servicesHint}
          </p>
        </div>
      </Container>
    </section>
  );
}