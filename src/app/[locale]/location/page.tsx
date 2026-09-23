import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocationView } from '@/components/pages/LocationView';
import { buildPageMetadata } from '@/lib/metadata';
import { isValidLocale, type Locale } from '@/lib/i18n';

interface LocationPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale as Locale, 'location', '/location');
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <LocationView locale={locale as Locale} />;
}