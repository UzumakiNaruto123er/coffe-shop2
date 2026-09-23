'use client';

import { MapPin, Phone, Camera, Navigation } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MapEmbed } from '@/components/ui/MapEmbed';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { BUSINESS_INFO, GOOGLE_MAPS } from '@/lib/data/business';

interface MapSectionProps {
  locale: Locale;
}

export function MapSection({ locale }: MapSectionProps) {
  const t = getDictionary(locale);

  const channels = [
    { icon: Phone, label: t.common.callUs, value: BUSINESS_INFO.phone, href: BUSINESS_INFO.phoneHref, external: false },
    { icon: Camera, label: t.nav.follow, value: BUSINESS_INFO.instagram, href: BUSINESS_INFO.instagramUrl, external: true },
    { icon: MapPin, label: t.common.viewOnGoogle, value: BUSINESS_INFO.address, href: GOOGLE_MAPS.viewUrl, external: true },
  ] as const;

  return (
    <Section padding="lg" aria-label={t.home.map.eyebrow}>
      <Container size="lg" padding="md">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="eyebrow mb-6">{t.home.map.eyebrow}</span>
            <h2 className="display-title font-display font-light text-cream-100">
              {t.home.map.title1}{' '}
              <span className="italic text-gold-500">{t.home.map.title2}</span>
            </h2>

            <address className="not-italic mt-8 text-lg text-cream-100/80 leading-relaxed">
              <span className="font-display text-2xl text-cream-100 block mb-2">
                {BUSINESS_INFO.name}
              </span>
              {BUSINESS_INFO.address}
            </address>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="md" asChild className="w-full sm:w-auto">
                <a
                  href={GOOGLE_MAPS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  {t.home.map.ctaDirections}
                </a>
              </Button>
              <Button variant="outline" size="md" asChild className="w-full sm:w-auto">
                <a
                  href={GOOGLE_MAPS.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.home.map.ctaViewMap}
                </a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {channels.map(({ icon: Icon, label, value, href, external }) => (
                <a
                  key={href}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group border border-white/10 bg-white/[0.03] px-5 py-5 transition-colors hover:border-gold-500/40 block"
                >
                  <Icon className="w-5 h-5 text-gold-500 mb-3" aria-hidden="true" />
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-cream-500 mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-cream-100 break-words">{value}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <MapEmbed title={t.locationPage.mapTitle} eager />
          </div>
        </div>
      </Container>
    </Section>
  );
}