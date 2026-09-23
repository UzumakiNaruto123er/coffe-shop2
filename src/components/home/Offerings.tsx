'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { SafeImage } from '@/components/ui/SafeImage';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';

interface OfferingsProps {
  locale: Locale;
}

export function Offerings({ locale }: OfferingsProps) {
  const t = getDictionary(locale);
  const [featured, ...supporting] = t.home.offerings.cards;

  return (
    <Section id="offerings" padding="lg" variant="alternate" aria-labelledby="offerings-title">
      <Container size="lg" padding="md">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Editorial supporting list */}
          <div className="order-2 lg:order-1">
            <ol className="border-t border-cream-200">
              {supporting.map((card, index) => (
                <li key={card.title} className="flex gap-8 py-7 border-b border-cream-200">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-terracotta-500/30 w-12 shrink-0 leading-none pt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-2xl sm:text-[1.6rem] text-bloo-950 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-cream-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Intro + featured offering */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow mb-6">{t.home.offerings.eyebrow}</span>
            <h2 id="offerings-title" className="display-title font-display font-extrabold text-bloo-950 text-balance">
              {t.home.offerings.title1}{' '}
              <span className="italic font-medium text-terracotta-500">{t.home.offerings.title2}</span>
            </h2>

            <article className="relative overflow-hidden rounded-[2rem] bg-bloo-950 mt-10 shadow-lg min-h-[340px] sm:min-h-[400px] flex items-end">
              <SafeImage
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop"
                alt={featured.title}
                fill
                className="object-cover opacity-45"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-bloo-950 via-bloo-950/25 to-transparent"
                aria-hidden="true"
              />
              <div className="relative p-8 sm:p-10">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-bloo-200 mb-4">
                  {t.home.offerings.subtitle}
                </p>
                <h3 className="font-display text-3xl font-extrabold text-white text-balance">
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
                  <ArrowRight
                    className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </Section>
  );
}