import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LegalView } from '@/components/pages/LegalView';
import { buildPageMetadata } from '@/lib/metadata';
import { isValidLocale, type Locale } from '@/lib/i18n';

interface CookiesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: CookiesPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale as Locale, 'cookies', '/cookies');
}

export default async function CookiesPage({ params }: CookiesPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <LegalView locale={locale as Locale} legalKey="cookies" />;
}