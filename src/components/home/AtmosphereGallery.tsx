import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { SafeImage } from '@/components/ui/SafeImage';
import { getDictionary } from '@/lib/dictionary';
import { GALLERY_IMAGES } from '@/lib/data/business';
import type { Locale } from '@/lib/i18n';

interface AtmosphereGalleryProps {
  locale: Locale;
}

/**
 * Hand-picked for the homepage strip with alternating orientation so the
 * masonry columns stay even. No image is reused elsewhere on the homepage
 * (Hero g-7, Offerings g-3, FeaturedMenu g-9, Stats g-6).
 */
const HOMEPAGE_GALLERY = ['g-1', 'g-8', 'g-2', 'g-13', 'g-11', 'g-14']
  .map((id) => GALLERY_IMAGES.find((image) => image.id === id))
  .filter((image): image is (typeof GALLERY_IMAGES)[number] => Boolean(image));

export function AtmosphereGallery({ locale }: AtmosphereGalleryProps) {
  const t = getDictionary(locale);

  return (
    <Section id="gallery" padding="lg" variant="alternate" aria-labelledby="atmosphere-title">
      <Container size="lg" padding="md">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow text-cream-500 mb-5">{t.home.atmosphere.eyebrow}</span>
            <h2 id="atmosphere-title" className="display-title-sm font-display font-extrabold text-bloo-950 text-balance">
              {t.home.atmosphere.title1}{' '}
              <span className="italic font-medium text-navy-500">{t.home.atmosphere.title2}</span>
            </h2>
            <p className="mt-5 text-cream-500 leading-relaxed max-w-xl measure">
              {t.home.atmosphere.subtitle}
            </p>
          </div>
          <Link
            href={`/${locale}/gallery`}
            className="inline-flex items-center gap-2 py-1 min-h-6 text-xs uppercase tracking-[0.25em] font-semibold text-navy-600 border-b border-cream-200 hover:border-navy-500 transition-all"
          >
            {t.home.atmosphere.cta}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>

        <div className="columns-2 lg:columns-3 gap-4">
          {HOMEPAGE_GALLERY.map((image) => (
            <div
              key={image.id}
              className="mb-4 break-inside-avoid overflow-hidden rounded-[1.5rem] bg-charcoal-950"
              style={{ aspectRatio: `${image.width} / ${image.height}` }}
            >
              <div className="relative w-full h-full group">
                <SafeImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}