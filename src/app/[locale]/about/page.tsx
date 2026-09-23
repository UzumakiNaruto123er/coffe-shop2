import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AboutView } from '@/components/pages/AboutView';
import { buildPageMetadata } from '@/lib/metadata';
import { isValidLocale, type Locale } from '@/lib/i18n';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale as Locale, 'about', '/about');
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <AboutView locale={locale as Locale} />;
}