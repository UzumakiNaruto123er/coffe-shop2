'use client';

import { SafeImage as Image } from '@/components/ui/SafeImage';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { BUSINESS_INFO, GOOGLE_MAPS } from '@/lib/data/business';

interface AtmosphereGalleryProps {
  locale: Locale;
}

export function AtmosphereGallery({ locale }: AtmosphereGalleryProps) {
  const t = getDictionary(locale);

  return (
    <Section id="about" padding="lg" aria-labelledby="ambiance-title">
      <Container size="lg" padding="md">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop"
              alt={t.home.atmosphere.subtitle}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="eyebrow mb-6">{t.home.atmosphere.eyebrow}</span>
            <h2 id="ambiance-title" className="display-title font-display font-light text-cream-100">
              {t.home.atmosphere.title1}{' '}
              <span className="italic text-gold-500">{t.home.atmosphere.title2}</span>
            </h2>
            <p className="mt-6 text-lg text-cream-100/65 leading-relaxed measure">
              {t.home.atmosphere.subtitle}
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-cream-100/60">
              <MapPin className="w-4 h-4 text-gold-500" aria-hidden="true" />
              <a
                href={GOOGLE_MAPS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-500 transition-colors"
              >
                {BUSINESS_INFO.address}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="outline" size="md" asChild>
                <Link href={`/${locale}/gallery`}>{t.home.atmosphere.cta}</Link>
              </Button>
              <Button variant="secondary" size="md" asChild>
                <Link href={`/${locale}/about`}>{t.home.contact.ctaCall}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}