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
 * It is now an asymmetric editorial split with a real photograph beside the
 * information column. Two earlier attempts are worth recording, because both
 * were wrong in opposite directions.
 *
 * Height-matching the image to the copy column left a tall photo and a short
 * caption of almost identical height, which reads as an accident rather than a
 * composition. Letting the photograph run at its native 2:3 with no cap fixed
 * the composition but made the section 1224px tall at 1440px, which is simply
 * too much page: the band was taller than the hero text and the copy was left
 * stranded beside a column of image.
 *
 * So the photograph is capped. It is held to 600x900 at desktop by capping the
 * width, which preserves the 2:3 ratio exactly rather than cropping a tall
 * frame down to a squat one, and `object-cover` absorbs any mismatch between
 * the declared ratio and the delivered asset so the picture is never stretched.
 * At 1440px that is about 1.55x the height of the copy column, so the
 * asymmetry still reads as deliberate without the section dominating the page,
 * and the height stays constant from 1440px upward instead of growing with the
 * viewport. The copy is centred against it, and the figure is now five columns
 * wide with the copy starting at the sixth so the narrower image does not leave
 * a void between itself and the text.
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
        {/* Photograph: 2:3 capped to 600x900, bleeding off the inline-start edge */}
        <figure className="relative lg:col-span-5 lg:-ms-16 xl:-ms-24">
          {/*
            The height cap applies at every width so a tablet never renders a
            full-bleed 2:3 panel over a metre tall. On desktop the width is
            capped too, which keeps the ratio exactly 2:3 instead of cropping a
            portrait down to a squat one; below that the box simply goes
            full-bleed and the 900px ceiling crops the sides. object-cover
            absorbs either case so the picture is never stretched.
          */}
          <div className="relative w-full aspect-[2/3] max-h-[900px] lg:max-w-[600px] overflow-hidden lg:rounded-e-[2rem] rtl:rounded-e-none rtl:rounded-s-[2rem] bg-charcoal-950">
            <SafeImage
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-bloo-950/45 to-transparent lg:bg-gradient-to-r rtl:lg:bg-gradient-to-l"
              aria-hidden="true"
            />
          </div>
        </figure>

        {/* Copy: inset to the far side, centred against the taller image */}
        <div className="relative lg:col-span-6 lg:col-start-6 px-4 sm:px-6 lg:px-0 lg:py-24 xl:py-28 lg:pe-14 rtl:lg:pe-0 rtl:lg:ps-14">
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
