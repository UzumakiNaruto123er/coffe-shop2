'use client';

import Link from 'next/link';
import { Phone, MapPin, Camera, ArrowRight } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { BUSINESS_INFO, GOOGLE_MAPS } from '@/lib/data/business';

interface ContactCTAProps {
  locale: Locale;
}

export function ContactCTA({ locale }: ContactCTAProps) {
  const t = getDictionary(locale);
  const c = t.home.contact;

  const contactLinks = [
    {
      icon: Phone,
      label: c.ctaCall,
      value: t.common.callUs,
      href: BUSINESS_INFO.phoneHref,
      external: false,
    },
    {
      icon: MapPin,
      label: c.ctaDirections,
      value: t.common.directions,
      href: GOOGLE_MAPS.directionsUrl,
      external: true,
    },
    {
      icon: Camera,
      label: c.ctaInstagram,
      value: BUSINESS_INFO.instagram,
      href: BUSINESS_INFO.instagramUrl,
      external: true,
    },
  ] as const;

  return (
    <Section padding="lg" variant="alternate">
      <Container size="lg" padding="md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactLinks.map(({ icon: Icon, label, value, href, external }) => (
            <Link
              key={href}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group border border-white/10 bg-white/[0.03] p-8 flex items-center gap-5 min-h-28 transition-all hover:border-gold-500/40"
            >
              <Icon className="w-7 h-7 text-gold-500 flex-shrink-0" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block font-display text-xl text-cream-100 mb-1">{label}</span>
                <span className="block text-xs uppercase tracking-widest text-cream-100/50 break-words">
                  {value}
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h2 className="display-title-sm font-display font-light text-cream-100">
            {c.title1} <span className="italic text-gold-500">{c.title2}</span>
          </h2>
          <p className="mt-4 text-lg text-cream-100/60 measure mx-auto">{c.subtitle}</p>
          <Link
            href={`/${locale}/contact`}
            className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-charcoal-950 text-xs uppercase tracking-[0.25em] font-bold hover:bg-cream-100 transition-all"
          >
            {t.nav.contact}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}