import { SafeImage } from '@/components/ui/SafeImage';
import { GALLERY_IMAGES } from '@/lib/data/business';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';

interface StatsProps {
  locale: Locale;
}

/**
 * "Good to know" has been rebuilt three times, and each earlier attempt failed
 * in a way worth recording, because they fail in opposite directions.
 *
 * Originally a 384px band: a navy panel of two short stat rows beside a
 * landscape photo crushed into the same shallow box, so the photograph had no
 * presence and the panel had no weight.
 *
 * First attempt: the photograph was height-matched to the copy column. The
 * result was a tall photo beside a caption of almost identical height, which
 * reads as an accident rather than a composition.
 *
 * Second attempt: the photograph was released to its native 2:3 with no cap.
 * The asymmetry was right but the section measured 1224px at 1440px, taller
 * than the hero, and the copy was stranded beside a column of image. Capping it
 * at 600x900 kept the ratio exact but left the text 312px away from the picture
 * at 1440px and 752px away at 1920px, because the photograph was pinned to the
 * inline-start bleed while `ms-auto` pushed the text to the far edge. The wider
 * the viewport, the further apart they drifted. The picture and the words were
 * not reading as one composition at all.
 *
 * This version fixes both. The section is a normal band rather than a panel:
 * the section's own padding sets its height, and the photograph is a normal
 * photograph inside it rather than something stretched edge to edge. At 1440px
 * the image is 400x500 in a section 628px tall, so it occupies 80% of the band
 * and nothing is cropped to fill it.
 *
 * The photograph and the text are centred as a single pair, and because the
 * row is a plain flex row under `dir=rtl` the order reverses for Arabic with no
 * direction-specific classes: the picture sits on the reading-start side in
 * both languages. Vertical centring comes from `items-center`, so the shorter
 * text block sits centred against the photograph rather than being pushed to an
 * edge, and the gap between them is a fixed 64px at every viewport instead of
 * growing with the screen.
 *
 * The image is 4:5 rather than the source's 2:3. That is a deliberate, modest
 * side crop: a 2:3 frame at this width would be 400x600 and the band would be
 * a metre tall again, which is the mistake above. `object-cover` handles the
 * crop so the picture is never stretched.
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

      {/*
        A plain flex row, centred, so the pair reverses for Arabic under
        `dir=rtl` without a single direction-specific class. The cap stops the
        composition from becoming a small island in a very wide band.
      */}
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:justify-center lg:gap-16 lg:py-16">
        {/*
          Slightly wider between 640 and 1023px, where the pair is stacked and a
          400px photograph would sit as a small card in a wide band. At lg the
          two columns go side by side and the width comes back down so the pair
          still fits without overflowing.
        */}
        <figure className="relative w-full max-w-[400px] shrink-0 sm:max-w-[460px] lg:max-w-[400px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-charcoal-950">
            <SafeImage
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 400px"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-bloo-950/35 to-transparent"
              aria-hidden="true"
            />
          </div>
        </figure>

        <div className="relative w-full max-w-md">
          {/*
            This is the only homepage section that labels itself with a bare
            span, so it was the one section absent from the document heading
            outline and therefore skipped by anyone navigating by heading. It
            is an h2 like every other section; the eyebrow styling is set
            explicitly here, so the rendered result is unchanged.
          */}
          <h2
            id="stats-title"
            className="block text-azure-300 text-xs font-semibold uppercase tracking-[0.35em] mb-7"
          >
            {t.home.stats.eyebrow}
          </h2>

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
    </section>
  );
}
