'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { BUSINESS_INFO } from '@/lib/data/business';

interface MenuViewProps {
  locale: Locale;
}

export function MenuView({ locale }: MenuViewProps) {
  const t = getDictionary(locale);
  const page = t.menuPage;

  return (
    <Section id="menu" padding="xl">
      <Container size="lg" padding="md">
        <Breadcrumbs locale={locale} title={t.nav.menu} href="/menu" />
        <div className="max-w-3xl mb-16">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-4 block">
            {page.tagline}
          </span>
          <h1 className="font-display font-light text-5xl md:text-6xl text-cream-100 mb-8">
            {page.title1} <span className="italic text-gold-500">{page.title2}</span>
          </h1>
          <p className="text-xl text-cream-100/60 leading-relaxed measure">
            {page.intro}
          </p>
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-cream-100/50 mb-8">
          {page.categoriesTitle}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {t.home.menu.categories.map((category) => (
            <div
              key={category}
              className="border border-white/10 bg-white/[0.03] px-6 py-8 flex items-center justify-center text-center transition-colors hover:border-gold-500/40"
            >
              <span className="text-sm tracking-[0.15em] uppercase text-cream-200">
                {category}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-cream-100/50">{page.note}</p>

        <div className="mt-20 border-t border-white/10 pt-16 text-center">
          <h2 className="font-display text-3xl text-cream-100 mb-3">{page.ctaTitle}</h2>
          <p className="text-cream-100/60 mb-8">{page.ctaBody}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" asChild>
              <a href={BUSINESS_INFO.phoneHref} className="inline-flex items-center gap-3">
                <Phone className="w-4 h-4" aria-hidden="true" />
                {BUSINESS_INFO.phone}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={`/${locale}/contact`} className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-charcoal-950">
                {t.nav.contact}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}