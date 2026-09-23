import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MenuView } from '@/components/pages/MenuView';
import { buildPageMetadata } from '@/lib/metadata';
import { isValidLocale, type Locale } from '@/lib/i18n';

interface MenuPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: MenuPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale as Locale, 'menu', '/menu');
}

export default async function MenuPage({ params }: MenuPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <MenuView locale={locale as Locale} />;
}