import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { SafeImage } from '@/components/ui/SafeImage';
import { getDictionary } from '@/lib/dictionary';
import { GALLERY_IMAGES } from '@/lib/data/business';
import type { Locale } from '@/lib/i18n';

interface OfferingsProps {
  locale: Locale;
}

/**
 * This section measured 1301px tall for 16% image coverage: the featured
 * portrait sat under a column of copy, so the image pushed the page down
 * instead of shaping it.
 *
 * The masthead is now a single full-width row and the body is a 5/7 editorial
 * grid. The portrait (g-3 "Espresso machine", 0.67) is shown at its natural
 * ratio and becomes the anchor the copy sits against, which both shortens the
 * section and makes the photograph read at its intended size.
 */
export function Offerings({ locale }: OfferingsProps) {
  const t = getDictionary(locale);
  const [featured, ...supporting] = t.home.offerings.cards;
  // g-3 "Espresso machine" — the featured card is "Espresso & Filter", so this
  // is the one image that belongs here. It is 0.67 portrait, so the frame
  // follows the image rather than cropping half its height into a 4:3 box.
  const featuredImage = GALLERY_IMAGES.find((image) => image.id === 'g-3') ?? GALLERY_IMAGES[2];

  return (
    <Section id="offerings" padding="lg" variant="alternate" aria-labelledby="offerings-title">
      <Container size="lg" padding="md">
        <div className="max-w-2xl">
          <span className="eyebrow mb-6">{t.home.offerings.eyebrow}</span>
          <h2
            id="offerings-title"
            className="display-title font-display font-extrabold text-bloo-950 text-balance"
          >
            {t.home.offerings.title1}{' '}
            <span className="italic font-medium text-navy-500">{t.home.offerings.title2}</span>
          </h2>
          <p className="mt-6 text-cream-500 leading-relaxed">{t.home.offerings.subtitle}</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <figure className="lg:col-span-5">
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ aspectRatio: `${featuredImage.width} / ${featuredImage.height}` }}
            >
              <SafeImage
                src={featuredImage.src}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </figure>

          <div className="lg:col-span-7 lg:pt-2">
            <article>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-bloo-950 text-balance tracking-[-0.02em]">
                {featured.title}
              </h3>
              <p className="mt-4 text-cream-500 leading-relaxed max-w-lg">{featured.description}</p>
              <Link
                href={`/${locale}/menu`}
                className="group inline-flex items-center gap-2 mt-6 py-1 min-h-6 text-xs uppercase tracking-[0.25em] font-bold text-navy-500 border-b border-navy-500/40 hover:border-navy-500 transition-colors"
              >
                {t.home.hero.ctaMenu}
                <ArrowRight
                  className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </article>

            <ul className="mt-12 border-t border-cream-200">
              {supporting.map((card) => (
                <li key={card.title} className="py-6 border-b border-cream-200">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-bloo-950 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-cream-500 leading-relaxed max-w-xl">{card.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
