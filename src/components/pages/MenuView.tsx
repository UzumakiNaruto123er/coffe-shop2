import { Phone } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SafeImage } from '@/components/ui/SafeImage';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { BUSINESS_INFO, GALLERY_IMAGES } from '@/lib/data/business';

interface MenuViewProps {
  locale: Locale;
}

export function MenuView({ locale }: MenuViewProps) {
  const t = getDictionary(locale);
  const page = t.menuPage;
  // Masthead: g-2 "Barista pouring latte art" (1.50 landscape) — the previous
  // g-3 portrait was losing ~47% of its height inside a 5:4 frame.
  // Aside: g-13 "Pastries" (1.25 landscape) next to the category list.
  const masthead = GALLERY_IMAGES.find((image) => image.id === 'g-2') ?? GALLERY_IMAGES[1];
  const pastry = GALLERY_IMAGES.find((image) => image.id === 'g-13') ?? GALLERY_IMAGES[12];

  const categoryDescriptions = Object.fromEntries(
    t.home.offerings.cards.map((card) => [card.title, card.description])
  );

  return (
    <Section id="menu" padding="xl">
      <Container size="lg" padding="md">
        <Breadcrumbs locale={locale} title={t.nav.menu} href="/menu" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-7 max-w-3xl">
            <span className="text-navy-500 text-xs uppercase tracking-[0.4em] mb-4 block">
              {page.tagline}
            </span>
            <h1 className="font-display font-light text-5xl md:text-6xl text-cream-100 mb-8">
              {page.title1} <span className="italic text-navy-500">{page.title2}</span>
            </h1>
            <p className="text-xl text-cream-100/60 leading-relaxed measure">{page.intro}</p>
          </div>

          <figure className="lg:col-span-5">
            <div
              className="relative overflow-hidden rounded-[1.5rem]"
              style={{ aspectRatio: `${masthead.width} / ${masthead.height}` }}
            >
              <SafeImage
                src={masthead.src}
                alt={masthead.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </figure>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-8 order-2 lg:order-1">
            <ul className="border-t border-bloo-950/15">
              {t.home.menu.categories.map((category) => {
                const description = categoryDescriptions[category];
                return (
                  <li
                    key={category}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-7 border-b border-cream-200"
                  >
                    <span className="font-display text-2xl font-bold text-bloo-950 sm:w-72 shrink-0">
                      {category}
                    </span>
                    {description ? (
                      <span className="text-cream-500 leading-relaxed">{description}</span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>

          <aside className="lg:col-span-4 order-1 lg:order-2">
            <figure className="mb-10">
              <div
                className="relative overflow-hidden rounded-[1.5rem]"
                style={{ aspectRatio: `${pastry.width} / ${pastry.height}` }}
              >
                <SafeImage
                  src={pastry.src}
                  alt={pastry.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 32vw"
                />
              </div>
            </figure>

            <div className="border-t-2 border-navy-500 pt-8">
              <h2 className="font-display text-2xl font-bold text-cream-100">{page.ctaTitle}</h2>
              <p className="mt-3 text-cream-100/70 text-sm leading-relaxed">{page.ctaBody}</p>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-3 mt-7 px-6 py-3 bg-navy-500 text-white rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-navy-600 transition-all"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {BUSINESS_INFO.phone}
              </a>
              <p className="mt-6 text-xs text-cream-100/50 leading-relaxed">{page.note}</p>
            </div>

            <div className="mt-10 border-t border-cream-200 pt-8">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-semibold text-cream-500 mb-4">
                {page.alsoLabel}
              </p>
              <ul className="space-y-3">
                {page.extras.map((item) => (
                  <li key={item} className="font-display text-lg font-semibold text-bloo-950">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
