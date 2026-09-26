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

export function Offerings({ locale }: OfferingsProps) {
  const t = getDictionary(locale);
  const [featured, ...supporting] = t.home.offerings.cards;
  // g-3 "Espresso machine" — the featured card is "Espresso & Filter", so this
  // is the one image that belongs here. It is 0.67 portrait, so the frame
  // follows the image rather than cropping half its height into a 4:3 box;
  // max-w-md keeps it from towering over the column.
  const featuredImage = GALLERY_IMAGES.find((image) => image.id === 'g-3') ?? GALLERY_IMAGES[2];

  return (
    <Section id="offerings" padding="lg" variant="alternate" aria-labelledby="offerings-title">
      <Container size="lg" padding="md">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <ul className="border-t border-cream-200">
              {supporting.map((card) => (
                <li key={card.title} className="py-7 border-b border-cream-200">
                  <h3 className="font-display font-bold text-2xl sm:text-[1.6rem] text-bloo-950 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-cream-500 leading-relaxed">{card.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <span className="eyebrow mb-6">{t.home.offerings.eyebrow}</span>
            <h2
              id="offerings-title"
              className="display-title font-display font-extrabold text-bloo-950 text-balance"
            >
              {t.home.offerings.title1}{' '}
              <span className="italic font-medium text-navy-500">{t.home.offerings.title2}</span>
            </h2>

            <article className="mt-10">
              <div
                className="relative mx-auto max-w-md lg:mx-0 rounded-2xl overflow-hidden"
                style={{ aspectRatio: `${featuredImage.width} / ${featuredImage.height}` }}
              >
                <SafeImage
                  src={featuredImage.src}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-6">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream-500 mb-2">
                  {t.home.offerings.subtitle}
                </p>
                <h3 className="font-display text-3xl font-extrabold text-bloo-950 text-balance">
                  {featured.title}
                </h3>
                <p className="mt-3 text-cream-500 leading-relaxed max-w-md">{featured.description}</p>
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
              </div>
            </article>
          </div>
        </div>
      </Container>
    </Section>
  );
}