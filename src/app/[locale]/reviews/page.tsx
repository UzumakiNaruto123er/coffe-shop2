import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ReviewsView } from '@/components/pages/ReviewsView';
import { buildPageMetadata } from '@/lib/metadata';
import { isValidLocale, type Locale } from '@/lib/i18n';

interface ReviewsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ReviewsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale as Locale, 'reviews', '/reviews');
}

export default async function ReviewsPage({ params }: ReviewsPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <ReviewsView locale={locale as Locale} />;
}