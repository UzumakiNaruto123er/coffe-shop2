import { Hero } from '@/components/home/Hero';
import { Offerings } from '@/components/home/Offerings';
import { FeaturedMenu } from '@/components/home/FeaturedMenu';
import { Stats } from '@/components/home/Stats';
import { AtmosphereGallery } from '@/components/home/AtmosphereGallery';
import { MapSection } from '@/components/home/MapSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { InstagramSection } from '@/components/home/InstagramSection';
import { isValidLocale } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;

  const l = locale as Locale;

  return (
    <>
      <Hero locale={l} />
      <Offerings locale={l} />
      <FeaturedMenu locale={l} />
      <Stats locale={l} />
      <AtmosphereGallery locale={l} />
      <MapSection locale={l} />
      <ReviewsSection locale={l} />
      <InstagramSection locale={l} />
    </>
  );
}