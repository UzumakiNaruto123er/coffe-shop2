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

/**
 * The hero used to be a white two-column block with the photograph inset in a
 * rounded card on the right, which measured 19% image coverage and read as a
 * generic landing page. The photograph is now the full-bleed surface of the
 * section and the type sits on top of it, so the first screen is photographic
 * rather than typographic.
 *
 * Legibility is handled with two stacked scrims rather than one flat wash: a
 * light all-over tint that guarantees a floor, plus a directional gradient
 * that is strong on the text side and clears on the image side. The gradient
 * flips in RTL. Contrast is verified by measurement, not by eye.
 */
export function Hero({ locale }: HeroProps) {
  const t = getDictionary(locale);
  // g-6 "Café atmosphere" — a wide 3:2 interior that survives a full-bleed
  // crop at every viewport far better than the tighter pour-over frame.
  const heroImage = GALLERY_IMAGES.find((image) => image.id === 'g-6') ?? GALLERY_IMAGES[5];

  return (
    <section
      className="relative w-full isolate bg-bloo-950 overflow-hidden min-h-[88svh] flex items-end lg:items-center"
      aria-labelledby="hero-title"
    >
      {/* Photographic surface */}
      <div className="absolute inset-0 -z-10">
        <SafeImage
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Scrim 1: floor of darkness everywhere, keeps the photo readable. */}
      <div className="absolute inset-0 -z-10 bg-bloo-950/45" aria-hidden="true" />
      {/* Scrim 2: directional. Vertical on small screens (type sits on the
          photo), horizontal from lg (type sits beside it). The stops are set
          so that every glyph of small text lands on a background dark enough
          to clear 4.5:1 against the brightest pixel of the photograph, while
          the inline-end third stays open so the photo is still a photo. */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-bloo-950 via-bloo-950/92 to-bloo-950/55 lg:bg-gradient-to-r lg:from-bloo-950 lg:via-bloo-950/92 lg:via-35% lg:to-bloo-950/25 rtl:lg:bg-gradient-to-l"
        aria-hidden="true"
      />
      {/* Grain is kept very light on purpose: at high opacity the turbulence
          speckles sit directly under small type and measurably erode its
          contrast, so it reads as film grain here rather than as texture. */}
      <div className="bg-noise absolute inset-0 -z-10 opacity-20" aria-hidden="true" />

      <Container size="lg" padding="md" className="relative py-20 sm:py-24 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] font-semibold text-bloo-200 mb-7">
            <span className="w-10 h-px bg-bloo-200/70 rtl:order-first" aria-hidden="true" />
            {t.home.hero.badge}
          </span>

          <h1
            id="hero-title"
            className="text-clamp-hero font-display font-extrabold text-white max-w-3xl text-balance tracking-[-0.02em] drop-shadow-[0_2px_18px_rgba(15,35,52,0.45)]"
          >
            {t.home.hero.title1}{' '}
            <span className="italic font-medium text-azure-300">{t.home.hero.title2}</span>
          </h1>

          <p className="mt-7 text-clamp-body font-light text-white max-w-xl leading-relaxed text-balance">
            {t.home.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button variant="primary" size="lg" asChild className="w-full sm:w-auto min-h-12 rounded-full">
              <Link href={`/${locale}/menu`}>{t.home.hero.ctaMenu}</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto min-h-12 rounded-full border-white/40 text-white hover:bg-white hover:text-bloo-950 hover:border-white"
            >
              <a href={GOOGLE_MAPS.directionsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-4 h-4" aria-hidden="true" />
                {t.home.hero.ctaDirections}
              </a>
            </Button>
          </div>

          <p className="mt-11 text-[0.7rem] uppercase tracking-[0.25em] text-bloo-200">
            {t.home.hero.servicesHint}
          </p>
        </div>
      </Container>
    </section>
  );
}
