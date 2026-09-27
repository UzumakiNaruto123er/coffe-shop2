import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SafeImage } from '@/components/ui/SafeImage';
import { getDictionary } from '@/lib/dictionary';
import { GALLERY_IMAGES } from '@/lib/data/business';
import type { Locale } from '@/lib/i18n';

interface FeaturedMenuProps {
  locale: Locale;
}

/**
 * "Signature Tastes" was a white section with one inset portrait, which made
 * the page read as light slabs stacked on light slabs. The original design
 * mockup called for a full-bleed navy band here, so this restores that beat and
 * makes the photograph the surface of the section rather than a card inside it.
 *
 * The scrim is asymmetric on purpose: heavy under the type, clearing toward the
 * inline-end so the espresso machine stays visible. This is the one place on
 * the page that is allowed to be a dark photographic moment, which is what
 * gives the surrounding cream sections somewhere to breathe.
 */
export function FeaturedMenu({ locale }: FeaturedMenuProps) {
  const t = getDictionary(locale);
  // g-1 "Café interior" (1460x1000) — wide enough to sit behind a full-bleed
  // band without the crop turning into a close-up of nothing.
  const backdrop = GALLERY_IMAGES.find((image) => image.id === 'g-1') ?? GALLERY_IMAGES[0];

  return (
    <section
      className="relative w-full isolate bg-bloo-950 text-white overflow-hidden"
      aria-labelledby="featured-menu-title"
    >
      <div className="absolute inset-0 -z-10">
        <SafeImage
          src={backdrop.src}
          alt=""
          fill
          className="object-cover object-center opacity-70"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-bloo-950/70" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-bloo-950 via-bloo-950/85 to-bloo-950/55 lg:bg-gradient-to-r lg:from-bloo-950 lg:via-bloo-950/80 lg:to-bloo-950/40 rtl:lg:bg-gradient-to-l"
        aria-hidden="true"
      />
      <div className="bg-noise absolute inset-0 -z-10 opacity-20" aria-hidden="true" />

      <Container size="lg" padding="md" className="py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="block text-azure-300 text-xs font-semibold uppercase tracking-[0.35em] mb-6">
              {t.home.menu.eyebrow}
            </span>
            <h2
              id="featured-menu-title"
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white text-balance tracking-[-0.02em]"
            >
              {t.home.menu.title1}{' '}
              <span className="italic font-medium text-azure-300">{t.home.menu.title2}</span>
            </h2>
            <p className="mt-6 text-white/80 leading-relaxed max-w-lg measure">
              {t.home.menu.subtitle}
            </p>
            <p className="mt-6 text-sm italic text-bloo-200/85 max-w-lg">{t.home.menu.note}</p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/menu`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-bloo-950 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-azure-300 transition-colors min-h-12"
              >
                {t.nav.menu}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/40 text-white text-xs uppercase tracking-[0.2em] font-semibold hover:border-white hover:bg-white/10 transition-colors min-h-12"
              >
                {t.home.menu.cta}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] font-semibold text-bloo-200/85 mb-5">
              {t.home.menu.categoriesTitle}
            </p>
            <ul className="border-t border-white/20 sm:grid sm:grid-cols-2 sm:gap-x-12">
              {t.home.menu.categories.map((category) => (
                <li key={category} className="py-5 border-b border-white/20">
                  <span className="font-display text-lg sm:text-xl font-semibold text-white leading-snug">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
