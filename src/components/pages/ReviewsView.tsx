'use client';

import { Star } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { BUSINESS_INFO, GOOGLE_MAPS } from '@/lib/data/business';

interface ReviewsViewProps {
  locale: Locale;
}

export function ReviewsView({ locale }: ReviewsViewProps) {
  const t = getDictionary(locale);
  const page = t.reviewsPage;

  const fullStars = Math.floor(BUSINESS_INFO.rating);
  const hasHalfStar = BUSINESS_INFO.rating - fullStars >= 0.5;

  return (
    <Section id="reviews" padding="xl">
      <Container size="lg" padding="md">
        <Breadcrumbs locale={locale} title={t.nav.reviews} href="/reviews" />
        <div className="max-w-3xl mb-16">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-4 block">
            {page.tagline}
          </span>
          <h1 className="font-display font-light text-5xl md:text-6xl text-cream-100 mb-8">
            {page.title1} <span className="italic text-gold-500">{page.title2}</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 border border-cream-200 bg-charcoal-900 p-10 rounded-[1.5rem] flex flex-col items-start">
            <p className="text-xs uppercase tracking-[0.25em] text-cream-100/60 mb-4">
              {page.overallTitle}
            </p>
            <p className="font-display font-light text-7xl text-gold-500 mb-4">
              {BUSINESS_INFO.rating.toFixed(1)}
            </p>
            <div className="flex gap-1 mb-3" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => {
                const filled = i < fullStars;
                const half = !filled && i === fullStars && hasHalfStar;
                return (
                  <span key={i} className="relative inline-block">
                    <Star className="w-6 h-6 text-cream-300" aria-hidden="true" />
                    {(filled || half) && (
                      <span className="absolute inset-0 overflow-hidden" style={{ width: half ? '50%' : '100%' }}>
                        <Star className="w-6 h-6 fill-gold-500 text-gold-500" aria-hidden="true" />
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
            <p className="text-sm text-cream-100/60 mb-8">
              {BUSINESS_INFO.reviewCount} — {page.basedOn}
            </p>
            <Button variant="primary" size="lg" asChild className="w-full">
              <a href={GOOGLE_MAPS.directionsUrl} target="_blank" rel="noopener noreferrer">
                {page.allReviews}
              </a>
            </Button>
          </div>

          <div className="lg:col-span-2 flex items-end">
            <p className="text-cream-100/60 text-lg leading-relaxed measure border-l border-cream-300 pl-6">
              {page.note}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}