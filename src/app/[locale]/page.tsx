import { Hero } from '@/components/home/Hero';
import { QuickInfoBar } from '@/components/home/QuickInfoBar';
import { AtmosphereGallery } from '@/components/home/AtmosphereGallery';
import { FeaturedMenu } from '@/components/home/FeaturedMenu';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { InstagramSection } from '@/components/home/InstagramSection';
import { MapSection } from '@/components/home/MapSection';
import { ContactCTA } from '@/components/home/ContactCTA';
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
      <QuickInfoBar locale={l} />
      <AtmosphereGallery locale={l} />
      <FeaturedMenu locale={l} />
      <ReviewsSection locale={l} />
      <InstagramSection locale={l} />
      <MapSection locale={l} />
      <ContactCTA locale={l} />
    </>
  );
}