import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LegalView } from '@/components/pages/LegalView';
import { buildPageMetadata } from '@/lib/metadata';
import { isValidLocale, type Locale } from '@/lib/i18n';

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale as Locale, 'terms', '/terms');
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <LegalView locale={locale as Locale} legalKey="terms" />;
}