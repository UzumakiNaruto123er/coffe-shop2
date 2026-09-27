import { SafeImage } from '@/components/ui/SafeImage';
import { GALLERY_IMAGES } from '@/lib/data/business';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';

interface StatsProps {
  locale: Locale;
}

/**
 * "Good to know" was a 384px band: a navy panel of two short stat rows beside
 * a landscape photo forced into the same shallow box, so the photograph had no
 * presence and the panel had no weight.
 *
 * It is now an asymmetric editorial split, but deliberately not a
 * height-matched one. The earlier attempt capped the image with `max-h` and
 * centred the copy against it, which left the two boxes almost exactly the
 * same height — a tall photo and a short caption side by side, which is not a
 * composition. Here the photograph is rendered at its native 2:3 ratio (g-11
 * is 1200x1800), so it is not cropped or stretched at all, and no cap is
 * applied. Measured at 1440px the image box is 816x1224 against a 577px copy
 * column, so the photograph runs to about 2.1x the height of the text and the
 * asymmetry reads as deliberate. The copy column is inset to the far side of
 * the grid so it never competes with the image edge, and the image bleeds off
 * the inline-start gutter to reach the viewport.
 *
 * Content is limited to facts already in the dictionary. No new claims.
 */
export function Stats({ locale }: StatsProps) {
  const t = getDictionary(locale);
  const photo = GALLERY_IMAGES.find((image) => image.id === 'g-11') ?? GALLERY_IMAGES[10];

  const items = [
    { value: t.home.stats.priceValue, label: t.home.stats.priceLabel },
    { value: t.home.stats.hoursValue, label: t.home.stats.hoursLabel },
  ];

  return (
    <section
      className="relative w-full bg-bloo-950 text-white overflow-hidden"
      aria-labelledby="stats-title"
    >
      <div className="bg-noise absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="relative lg:grid lg:grid-cols-12 lg:items-center">
        {/* Photograph: native 2:3, uncapped, bleeds off the inline-start edge */}
        <figure className="relative lg:col-span-6 lg:-ms-16 xl:-ms-24">
          <div className="relative w-full aspect-[2/3] overflow-hidden lg:rounded-e-[2rem] rtl:rounded-e-none rtl:rounded-s-[2rem] bg-charcoal-950">
            <SafeImage
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-bloo-950/45 to-transparent lg:bg-gradient-to-r rtl:lg:bg-gradient-to-l"
              aria-hidden="true"
            />
          </div>
        </figure>

        {/* Copy: inset to the far side, centred against the taller image */}
        <div className="relative lg:col-span-5 lg:col-start-8 px-4 sm:px-6 lg:px-0 lg:py-24 xl:py-28 lg:pe-14 rtl:lg:pe-0 rtl:lg:ps-14">
          <div className="lg:max-w-md lg:ms-auto rtl:lg:ms-0 rtl:lg:me-auto">
            <span
              id="stats-title"
              className="block text-azure-300 text-xs font-semibold uppercase tracking-[0.35em] mb-7"
            >
              {t.home.stats.eyebrow}
            </span>

            <dl className="grid gap-7">
              {items.map((item) => (
                <div key={item.label} className="border-t border-white/15 pt-6">
                  <dt className="text-[0.65rem] uppercase tracking-[0.25em] font-semibold text-bloo-200/80 mb-2">
                    {item.label}
                  </dt>
                  <dd className="font-display text-4xl sm:text-5xl font-extrabold text-white text-balance">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-9 text-sm sm:text-base text-white/75 leading-relaxed max-w-sm">
              {t.home.stats.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
