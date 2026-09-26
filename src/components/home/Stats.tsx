import { Container } from '@/components/ui/Container';
import { SafeImage } from '@/components/ui/SafeImage';
import { GALLERY_IMAGES } from '@/lib/data/business';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';

interface StatsProps {
  locale: Locale;
}

/**
 * Two figures do not justify a 378px block of empty ivory. This used to be a
 * full-bleed letterbox band, but a 1.5 landscape stretched across 1440px kept
 * only 14.5% of the frame in view. It is now a dark split: the page still
 * gets its navy beat, and the photograph is shown at its own 3:2 ratio.
 */
export function Stats({ locale }: StatsProps) {
  const t = getDictionary(locale);
  // g-6 — wide café atmosphere, 3:2 landscape.
  const photo = GALLERY_IMAGES.find((image) => image.id === 'g-6') ?? GALLERY_IMAGES[5];
  const items = [
    { value: t.home.stats.priceValue, label: t.home.stats.priceLabel },
    { value: t.home.stats.hoursValue, label: t.home.stats.hoursLabel },
  ];

  return (
    <section className="relative w-full bg-bloo-950 overflow-hidden" aria-labelledby="stats-title">
      <div className="bg-noise" aria-hidden="true" />
      <Container size="lg" padding="md">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <figure
            className="relative overflow-hidden rounded-[1.5rem]"
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

          <div>
            <span
              id="stats-title"
              className="block text-bloo-200 text-xs font-semibold uppercase tracking-[0.35em] mb-8"
            >
              {t.home.stats.eyebrow}
            </span>
            <dl className="grid gap-8">
              {items.map((item) => (
                <div key={item.label} className="border-t border-bloo-300/25 pt-6">
                  <dt className="text-[0.65rem] uppercase tracking-[0.25em] font-semibold text-bloo-200/80 mb-3">
                    {item.label}
                  </dt>
                  <dd className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
