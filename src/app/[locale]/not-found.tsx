'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CupSoda, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { getDictionary } from '@/lib/dictionary';
import { isValidLocale, defaultLocale } from '@/lib/i18n';

export default function LocaleNotFound() {
  const params = useParams<{ locale: string }>();
  const locale = isValidLocale(params?.locale) ? params.locale : defaultLocale;
  const t = getDictionary(locale);

  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal-950 px-4">
      <Container size="sm" padding="md">
        <div className="text-center py-20">
          <span className="text-gold-500 text-xs uppercase tracking-[0.5em] mb-6 block">
            {t.notFound.badge}
          </span>

          <div className="inline-flex items-center justify-center w-24 h-24 mb-8" aria-hidden="true">
            <CupSoda className="w-16 h-16 text-terracotta-500/40" />
          </div>

          <h1 className="font-display text-7xl font-extralight italic text-cream-100 mb-4">
            404
          </h1>

          <p className="font-display text-xl font-light text-cream-100/60 mb-2 max-w-md mx-auto">
            {t.notFound.title1}
          </p>
          <p className="font-display text-lg font-light text-cream-100/40 mb-8 max-w-md mx-auto">
            {t.notFound.message}
          </p>

          <Button variant="primary" size="lg" asChild>
            <Link href={`/${locale}`}>
              <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
              {t.notFound.backHome}
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}