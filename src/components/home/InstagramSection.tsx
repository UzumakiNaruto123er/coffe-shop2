'use client';

import { SafeImage as Image } from '@/components/ui/SafeImage';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { Container, Section } from '@/components/ui/Container';
import { getDictionary } from '@/lib/dictionary';
import { BUSINESS_INFO } from '@/lib/data/business';
import { cn } from '@/lib/utils';
import type { Locale } from '@/lib/i18n';

interface InstagramSectionProps {
  locale: Locale;
}

/**
 * Illustrative café photography (not actual business posts).
 */
const GRID_IMAGES = [
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
];

export function InstagramSection({ locale }: InstagramSectionProps) {
  const t = getDictionary(locale);

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
            className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-terracotta-600 border-b border-cream-200 pb-1 hover:border-terracotta-500 transition-all"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {GRID_IMAGES.map((src, index) => (
            <article
              key={index}
              className={cn(
                'relative aspect-square overflow-hidden group',
                index === 0 && 'lg:col-span-2 lg:row-span-2',
                index === 1 && 'lg:col-span-2'
              )}
            >
              <Image
                src={src}
                alt={t.galleryPage.disclaimer}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
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