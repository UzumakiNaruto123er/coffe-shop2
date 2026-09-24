'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { getDictionary } from '@/lib/dictionary';
import { type Locale, isValidLocale } from '@/lib/i18n';

export default function LocaleError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const params = useParams();
  const locale = (typeof params.locale === 'string' ? params.locale : 'en') as Locale;
  const t = getDictionary(isValidLocale(locale) ? locale : 'en');

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-display text-7xl text-azure-500 mb-8" aria-hidden="true">
          !
        </p>
        <h1 className="font-display font-light text-4xl text-cream-100 mb-4">
          {t.common.errorTitle}
        </h1>
        <p className="text-cream-100/60 mb-10 max-w-md mx-auto">{t.common.errorMessage}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" onClick={reset} className="w-full sm:w-auto">
            {t.common.retry}
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
            <Link href={`/${locale}`}>{t.common.backHome}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}