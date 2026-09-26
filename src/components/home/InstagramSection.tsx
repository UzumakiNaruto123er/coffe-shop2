import { SafeImage as Image } from '@/components/ui/SafeImage';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { Container, Section } from '@/components/ui/Container';
import { getDictionary } from '@/lib/dictionary';
import { BUSINESS_INFO, GALLERY_IMAGES, type GalleryImage } from '@/lib/data/business';
import type { Locale } from '@/lib/i18n';

interface InstagramSectionProps {
  locale: Locale;
}

/**
 * Illustrative café photography (not actual business posts) — see the
 * disclaimer above the grid. Drawn from the shared set so each tile can keep
 * its own aspect ratio and its own alt text; the previous square frames
 * cropped away ~56% of every source, and all six shared one alt string.
 */
const GRID_IMAGE_IDS = ['g-4', 'g-5', 'g-10', 'g-12', 'g-3', 'g-9'];

export function InstagramSection({ locale }: InstagramSectionProps) {
  const t = getDictionary(locale);
  const gridImages = GRID_IMAGE_IDS.map((id) => GALLERY_IMAGES.find((image) => image.id === id)).filter(
    (image): image is GalleryImage => Boolean(image)
  );

  return (
    <Section id="instagram" padding="lg" variant="alternate">
      <Container size="lg" padding="md">
        <div className="flex items-end justify-between mb-8 gap-6">
          <div>
            <span className="eyebrow mb-5">
              <InstagramIcon className="w-4 h-4" aria-hidden="true" />
              {BUSINESS_INFO.instagram}
            </span>
            <h2 className="display-title-sm font-display font-light text-cream-100">
              {t.home.instagram.title}
            </h2>
          </div>
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-navy-600 border-b border-cream-200 pb-1 hover:border-navy-500 transition-all"
          >
            {t.home.instagram.cta}
            <svg className="w-4 h-4 rtl:-scale-x-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <p className="text-cream-100/60 leading-relaxed mb-10 max-w-2xl measure">
          {t.home.instagram.subtitle}
        </p>

        <div className="columns-2 md:columns-3 lg:columns-6 gap-1">
          {gridImages.map((image) => (
            <article
              key={image.id}
              className="relative mb-1 break-inside-avoid overflow-hidden group bg-charcoal-950"
              style={{ aspectRatio: `${image.width} / ${image.height}` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 17vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bloo-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              <InstagramIcon className="absolute bottom-4 left-4 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-bloo-300 text-bloo-700 text-xs uppercase tracking-[0.25em] font-bold hover:bg-bloo-50 hover:border-bloo-500 transition-all"
          >
            <InstagramIcon className="w-5 h-5" />
            {t.home.instagram.cta}
          </a>
        </div>
      </Container>
    </Section>
  );
}