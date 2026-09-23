'use client';

import Link from 'next/link';
import { Coffee, MapPin, Star, Phone, Navigation } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { BUSINESS_INFO, GOOGLE_MAPS } from '@/lib/data/business';

interface QuickInfoBarProps {
  locale: Locale;
}

export function QuickInfoBar({ locale }: QuickInfoBarProps) {
  const t = getDictionary(locale);

  const infoCards = [
    {
      icon: Coffee,
      label: t.home.quickInfo.coffeeLabel,
      value: t.home.quickInfo.coffeeValue,
      href: `/${locale}/menu`,
      external: false,
    },
    {
      icon: Star,
      label: t.home.quickInfo.ratingLabel,
      value: `${BUSINESS_INFO.rating} / 5`,
      href: `/${locale}/reviews`,
      external: false,
    },
    {
      icon: MapPin,
      label: t.home.quickInfo.locationLabel,
      value: t.home.quickInfo.locationValue,
      href: `/${locale}/location`,
      external: false,
    },
    {
      icon: Phone,
      label: t.common.callUs,
      value: BUSINESS_INFO.phone,
      href: BUSINESS_INFO.phoneHref,
      external: false,
    },
    {
      icon: Navigation,
      label: t.common.directions,
      value: t.home.quickInfo.directionsValue,
      href: GOOGLE_MAPS.directionsUrl,
      external: true,
    },
  ] as const;

  return (
    <Section variant="alternate" padding="sm" aria-label={t.common.quickInfo}>
      <Container size="lg" padding="md">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border divide-x divide-y divide-white/5 border-white/5">
          {infoCards.map(({ icon: Icon, label, value, href, external }, index) => (
            <Link
              key={index}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group p-6 sm:p-7 flex flex-col items-center justify-center text-center gap-3 min-h-28 hover:bg-white/[0.03] transition-colors"
            >
              <Icon className="w-5 h-5 text-gold-500" aria-hidden="true" />
              <span className="text-[0.6rem] uppercase tracking-[0.25em] text-cream-500">
                {label}
              </span>
              <span className="text-sm font-medium text-cream-100 group-hover:text-gold-500 transition-colors">
                {value}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}