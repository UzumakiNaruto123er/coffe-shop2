import { Coffee, Bean, Users, CupSoda, ShoppingBag, Sparkles, Star } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SafeImage } from '@/components/ui/SafeImage';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { BUSINESS_INFO, GALLERY_IMAGES } from '@/lib/data/business';

interface AboutViewProps {
  locale: Locale;
}

const FEATURE_ICONS = {
  coffee: Coffee,
  beans: Bean,
  people: Users,
  mug: CupSoda,
  bag: ShoppingBag,
  sparkle: Sparkles,
} as const;

export function AboutView({ locale }: AboutViewProps) {
  const t = getDictionary(locale);
  const page = t.aboutPage;
  // g-1 café interior — the "space" the story is about.
  const interior = GALLERY_IMAGES.find((image) => image.id === 'g-1') ?? GALLERY_IMAGES[0];

  return (
    <Section id="about" padding="xl">
      <Container size="lg" padding="md">
        <Breadcrumbs locale={locale} title={t.nav.about} href="/about" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-7">
            <span className="text-azure-500 text-xs uppercase tracking-[0.4em] mb-4 block">
              {page.tagline}
            </span>
            <h1 className="font-display font-light text-5xl md:text-6xl text-cream-100">
              {page.title1} <span className="italic text-azure-500">{page.title2}</span>
            </h1>
          </div>

          <figure className="lg:col-span-5">
            <div
              className="relative overflow-hidden rounded-[1.5rem]"
              style={{ aspectRatio: `${interior.width} / ${interior.height}` }}
            >
              <SafeImage
                src={interior.src}
                alt={interior.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </figure>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-28">
          <div className="lg:col-span-7 space-y-6 text-cream-100/65 text-lg leading-relaxed measure">
            <p>{page.story1}</p>
            <p>{page.story2}</p>
          </div>

          <dl className="lg:col-span-5 grid grid-cols-2 gap-8 self-start border-t-2 border-navy-500 pt-8">
            <div>
              <dt className="sr-only">{page.ratingLabel}</dt>
              <dd className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-azure-500 text-azure-500" aria-hidden="true" />
                <span className="font-display text-4xl font-light text-azure-500">{page.ratingValue}</span>
              </dd>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream-100/60">{page.ratingLabel}</p>
            </div>
            <div>
              <dt className="sr-only">{page.reviewsLabel}</dt>
              <dd className="font-display text-4xl font-light text-cream-100">{page.reviewsValue}</dd>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream-100/60">{page.reviewsLabel}</p>
            </div>
          </dl>
        </div>

        <h2 className="font-display text-3xl text-cream-100 mb-10">{page.featuresLabel}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mb-20">
          {page.features.map((feature) => {
            const Icon = FEATURE_ICONS[feature.icon as keyof typeof FEATURE_ICONS] ?? Coffee;
            return (
              <div key={feature.title} className="border-t border-cream-200 pt-6">
                <Icon className="w-6 h-6 text-azure-500 mb-4" aria-hidden="true" />
                <h3 className="font-display text-xl text-cream-100 mb-2">{feature.title}</h3>
                <p className="text-cream-100/55 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="border-t border-cream-200 pt-16">
          <h2 className="font-display text-3xl text-cream-100 mb-3">{page.hoursTitle}</h2>
          <p className="text-cream-100/60 max-w-2xl measure">{page.hoursNote}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-3 px-8 py-4 bg-navy-500 text-white rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:bg-navy-600 transition-all w-full sm:w-auto justify-center"
            >
              {t.nav.call} — {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
