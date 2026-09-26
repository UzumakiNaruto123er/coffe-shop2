import Link from 'next/link';
import { Navigation } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SafeImage } from '@/components/ui/SafeImage';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { GOOGLE_MAPS, GALLERY_IMAGES } from '@/lib/data/business';

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const t = getDictionary(locale);
  // g-7 "Pour over coffee" — the LCP image, served through the shared set so
  // its frame matches the source instead of cropping into a fixed 4:3 box.
  const heroImage = GALLERY_IMAGES.find((image) => image.id === 'g-7') ?? GALLERY_IMAGES[6];

  return (
    <section
      className="relative w-full bg-white pt-28 sm:pt-32 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="bg-noise" aria-hidden="true" />
      <Container size="lg" padding="md">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 sm:py-20 lg:py-24">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] font-semibold text-navy-600 mb-8">
              <span className="w-10 h-px bg-navy-500" aria-hidden="true" />
              {t.home.hero.badge}
            </span>
            <h1
              id="hero-title"
              className="text-clamp-hero font-display font-extrabold text-bloo-950 max-w-xl text-balance tracking-[-0.02em]"
            >
              {t.home.hero.title1}{' '}
              <span className="italic font-medium text-navy-500">
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

            <div className="mt-12 text-[0.7rem] uppercase tracking-[0.25em] text-cream-500">
              {t.home.hero.servicesHint}
            </div>
          </div>

          <div className="relative z-10">
            <div
              className="relative rounded-[2rem] overflow-hidden shadow-xl"
              style={{ aspectRatio: `${heroImage.width} / ${heroImage.height}` }}
            >
              <SafeImage
                src={heroImage.src}
                alt={t.home.hero.subtitle}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bloo-950/20 to-transparent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}