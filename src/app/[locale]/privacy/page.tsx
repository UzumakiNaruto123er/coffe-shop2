import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LegalView } from '@/components/pages/LegalView';
import { buildPageMetadata } from '@/lib/metadata';
import { isValidLocale, type Locale } from '@/lib/i18n';

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale as Locale, 'privacy', '/privacy');
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <LegalView locale={locale as Locale} legalKey="privacy" />;
}