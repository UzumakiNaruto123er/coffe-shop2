import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GalleryView } from '@/components/pages/GalleryView';
import { buildPageMetadata } from '@/lib/metadata';
import { isValidLocale, type Locale } from '@/lib/i18n';

interface GalleryPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale as Locale, 'gallery', '/gallery');
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <GalleryView locale={locale as Locale} />;
}