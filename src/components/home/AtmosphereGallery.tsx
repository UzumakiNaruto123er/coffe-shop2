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
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-navy-600 border-b border-cream-200 pb-1 hover:border-navy-500 transition-all"
          >
            {t.home.atmosphere.cta}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] sm:auto-rows-[240px] gap-4">
          {GALLERY_IMAGES.slice(0, 5).map((image, index) => (
            <div
              key={index}
              className={
                index === 0
                  ? 'col-span-2 row-span-2 md:col-span-1 md:row-span-2 rounded-[1.5rem] overflow-hidden'
                  : 'rounded-[1.5rem] overflow-hidden'
              }
            >
              <div className="relative w-full h-full group">
                <SafeImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
          <Link
            href={`/${locale}/gallery`}
            className="rounded-[1.5rem] bg-bloo-950 text-white flex flex-col items-center justify-center gap-3 text-center p-6 transition-colors hover:bg-bloo-800"
          >
            <span className="font-display text-lg font-bold">{t.home.atmosphere.cta}</span>
            <ArrowRight className="w-5 h-5 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}