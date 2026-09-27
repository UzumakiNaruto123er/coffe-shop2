'use client';

import { MapPin, Phone, Camera, Navigation, Clock } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MapEmbed } from '@/components/ui/MapEmbed';
import { SafeImage } from '@/components/ui/SafeImage';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { BUSINESS_INFO, GALLERY_IMAGES, GOOGLE_MAPS } from '@/lib/data/business';

interface MapSectionProps {
  locale: Locale;
}

/**
 * "Join us in L'Aouina" was 792px tall with no photography at all — a heading,
 * an address and a map. The address block now carries a landscape photograph
 * (g-4 "Cozy café seating") so the section reads as a place you can picture,
 * and the three contact channels dropped their card borders into a quiet
 * inline row so the section gains a photograph without becoming a stack of
 * boxes.
 */
export function MapSection({ locale }: MapSectionProps) {
  const t = getDictionary(locale);
  // g-4 "Cozy café seating" (1500x1000) — a seating shot, which is what a
  // visitor is actually deciding about when they ask where the place is.
  const photo = GALLERY_IMAGES.find((image) => image.id === 'g-4') ?? GALLERY_IMAGES[3];

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
              <span className="italic text-azure-500">{t.home.map.title2}</span>
            </h2>

            <figure
              className="mt-8 relative w-full overflow-hidden rounded-2xl"
              style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
            >
              <SafeImage
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>

            <address className="not-italic mt-8 text-lg text-cream-100/80 leading-relaxed">
              <span className="font-display text-2xl text-cream-100 block mb-2">
                {BUSINESS_INFO.name}
              </span>
              {BUSINESS_INFO.address}
            </address>

            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-cream-200 bg-charcoal-900 px-5 py-4">
              <Clock className="w-5 h-5 text-navy-500" aria-hidden="true" />
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-cream-400 mb-1">
                  {BUSINESS_INFO.hours.label}
                </p>
                <p className="text-sm font-semibold text-cream-100">{BUSINESS_INFO.hours.weekly}</p>
              </div>
            </div>

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
          </div>

          <div className="lg:sticky lg:top-28">
            <MapEmbed title={t.locationPage.mapTitle} eager />
          </div>
        </div>

        {/* Contact channels: a quiet inline row, not three bordered cards. */}
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-6 border-t border-cream-200 pt-8">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <li key={href}>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group flex items-start gap-4"
              >
                <Icon className="w-5 h-5 text-navy-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  <span className="block text-[0.6rem] uppercase tracking-[0.2em] text-cream-400 mb-1">
                    {label}
                  </span>
                  <span className="block text-sm text-cream-100 break-words group-hover:text-azure-500 transition-colors">
                    {value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
