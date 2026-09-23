'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function BackToTop({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);
  const t = getDictionary(locale);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t.common.backToTop}
      className={cn(
        'no-print fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-12 h-12 rounded-full',
        'border border-terracotta-500 bg-terracotta-500 text-white shadow-lg backdrop-blur',
        'transition-all duration-300 hover:bg-terracotta-600 hover:border-terracotta-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500',
        visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-2'
      )}
    >
      <ArrowUp className="w-5 h-5" aria-hidden="true" />
    </button>
  );
}