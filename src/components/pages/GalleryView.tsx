'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SafeImage as Image } from '@/components/ui/SafeImage';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { GALLERY_IMAGES, type GalleryImage } from '@/lib/data/business';
import { cn } from '@/lib/utils';

interface GalleryViewProps {
  locale: Locale;
}

type CategoryKey = Exclude<GalleryImage['category'], 'events'> | 'all';

export function GalleryView({ locale }: GalleryViewProps) {
  const t = getDictionary(locale);
  const page = t.galleryPage;

  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const filters: Array<{ key: CategoryKey; label: string }> = [
    { key: 'all', label: page.all },
    { key: 'interior', label: page.categories.interior },
    { key: 'coffee', label: page.categories.coffee },
    { key: 'food', label: page.categories.food },
    { key: 'desserts', label: page.categories.desserts },
    { key: 'atmosphere', label: page.categories.atmosphere },
  ];

  const visible = useMemo(
    () => (activeCategory === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === activeCategory)),
    [activeCategory]
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length]
  );
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [lightboxIndex]);

  const active = lightboxIndex !== null ? visible[lightboxIndex] : null;

  return (
    <Section id="gallery" padding="xl">
      <Container size="lg" padding="md">
        <Breadcrumbs locale={locale} title={t.nav.gallery} href="/gallery" />
        <div className="max-w-3xl mb-12">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-4 block">
            {page.tagline}
          </span>
          <h1 className="font-display font-light text-5xl md:text-6xl text-cream-100 mb-8">
            {page.title1} <span className="italic text-gold-500">{page.title2}</span>
          </h1>
          <p className="text-cream-100/50">{page.disclaimer}</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label={page.title2}>
          {filters.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setActiveCategory(key);
                setLightboxIndex(null);
              }}
              aria-pressed={activeCategory === key}
              className={cn(
                'px-4 py-2 text-xs uppercase tracking-[0.2em] rounded-full transition-colors',
                activeCategory === key
                  ? 'bg-bloo-50 text-bloo-800 font-semibold'
                  : 'text-cream-500 hover:text-bloo-800'
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {visible.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`${page.open} — ${image.alt}`}
              className={cn(
                'relative aspect-[4/5] overflow-hidden group text-left',
                image.span
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <span className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-bloo-950/80 to-transparent text-xs uppercase tracking-[0.2em] text-white">
                {image.alt}
              </span>
            </button>
          ))}
        </div>
      </Container>

      {active && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={page.title1}
          className="no-print fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/95 p-4 sm:p-8"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={closeLightbox}
            aria-label={page.close}
            className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-11 h-11 border border-white/25 text-white hover:border-gold-500 hover:text-gold-500 transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={prevImage}
            aria-label={page.prev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-11 h-11 border border-white/25 text-white hover:border-gold-500 hover:text-gold-500 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 rtl:-scale-x-100" aria-hidden="true" />
          </button>

          <figure className="max-w-4xl w-full">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] w-full overflow-hidden">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-sm uppercase tracking-[0.2em] text-white/70 text-center">
              {active.alt}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={nextImage}
            aria-label={page.next}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-11 h-11 border border-white/25 text-white hover:border-gold-500 hover:text-gold-500 transition-colors"
          >
            <ChevronRight className="w-5 h-5 rtl:-scale-x-100" aria-hidden="true" />
          </button>

          <p className="absolute bottom-4 right-4 text-xs tracking-[0.2em] text-white/60">
            {lightboxIndex + 1} / {visible.length}
          </p>
        </div>
      )}
    </Section>
  );
}