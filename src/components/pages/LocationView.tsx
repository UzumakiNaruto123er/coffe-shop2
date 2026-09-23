'use client';

import { MapPin, Phone, Camera, ArrowRight } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { MapEmbed } from '@/components/ui/MapEmbed';
import { Button } from '@/components/ui/Button';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { BUSINESS_INFO, GOOGLE_MAPS } from '@/lib/data/business';

interface LocationViewProps {
  locale: Locale;
}

export function LocationView({ locale }: LocationViewProps) {
  const t = getDictionary(locale);
  const page = t.locationPage;

  const details = [
    {
      icon: MapPin,
      label: page.addressLabel,
      value: BUSINESS_INFO.address,
      href: GOOGLE_MAPS.directionsUrl,
      external: true,
    },
    {
      icon: Phone,
      label: page.callLabel,
      value: BUSINESS_INFO.phone,
      href: BUSINESS_INFO.phoneHref,
      external: false,
    },
    {
      icon: Camera,
      label: page.followLabel,
      value: BUSINESS_INFO.instagram,
      href: BUSINESS_INFO.instagramUrl,
      external: true,
    },
  ] as const;

  return (
    <Section id="location" padding="xl">
      <Container size="lg" padding="md">
        <Breadcrumbs locale={locale} title={t.nav.location} href="/location" />
        <div className="max-w-3xl mb-16">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-4 block">
            {page.tagline}
          </span>
          <h1 className="font-display font-light text-5xl md:text-6xl text-cream-100 mb-8">
            {page.title1} <span className="italic text-gold-500">{page.title2}</span>
          </h1>
          <p className="text-xl text-cream-100/60 leading-relaxed measure">{page.arrivalDesc}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {details.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={href}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group border border-cream-200 bg-charcoal-900 p-8 rounded-[1.5rem] transition-colors hover:border-gold-500/40 block"
            >
              <Icon className="w-8 h-8 text-terracotta-500 mb-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <p className="text-xs uppercase tracking-[0.25em] text-cream-500 mb-2">{label}</p>
              <p className="text-cream-100 break-words">{value}</p>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display text-3xl text-cream-100 mb-2">{page.hoursTitle}</h2>
            <p className="text-cream-100/60 max-w-2xl measure">{page.hoursNote}</p>
          </div>
          <Button variant="primary" size="lg" asChild className="w-full sm:w-auto">
            <a href={GOOGLE_MAPS.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3">
              {page.ctaDirections}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <MapEmbed title={page.mapTitle} />
      </Container>
    </Section>
  );
}