import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContactView } from '@/components/pages/ContactView';
import { buildPageMetadata } from '@/lib/metadata';
import { isValidLocale, type Locale } from '@/lib/i18n';

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale as Locale, 'contact', '/contact');
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return (
    <ContactView
      locale={locale as Locale}
      contactEmail={process.env.CONTACT_EMAIL?.trim() || undefined}
    />
  );
}