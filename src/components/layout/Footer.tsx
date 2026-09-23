'use client';

import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { Container } from '@/components/ui/Container';
import { LanguageSwitcher } from '@/components/locale/LanguageSwitcher';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';
import { BUSINESS_INFO, GOOGLE_MAPS } from '@/lib/data/business';

interface FooterProps {
  locale: Locale;
}

const LEGAL_LINKS = [
  { href: '/terms', key: 'terms' },
  { href: '/privacy', key: 'privacy' },
  { href: '/cookies', key: 'cookies' },
  { href: '/legal', key: 'legal' },
] as const;

export function Footer({ locale }: FooterProps) {
  const t = getDictionary(locale);
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { href: `/${locale}`, key: 'home' },
    { href: `/${locale}/menu`, key: 'menu' },
    { href: `/${locale}/about`, key: 'about' },
    { href: `/${locale}/gallery`, key: 'gallery' },
    { href: `/${locale}/reviews`, key: 'reviews' },
    { href: `/${locale}/location`, key: 'location' },
    { href: `/${locale}/contact`, key: 'contact' },
  ] as const;

  return (
    <footer className="bg-charcoal-950 border-t border-cream-200" role="contentinfo">
      <Container size="lg" padding="md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 py-16">
          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="inline-block" aria-label={`${t.brand.name} — ${t.nav.home}`}>
              <span className="font-display font-extrabold tracking-tight text-2xl text-bloo-950">
                BLOO{' '}
                <span className="text-terracotta-500 font-light italic">Coffee</span>
              </span>
            </Link>
            <p className="text-sm text-cream-500 mt-5 mb-5 leading-relaxed measure">
              {t.footer.aboutText}
            </p>
            <p className="text-sm text-cream-400">{t.brand.tagline}</p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="eyebrow mb-6">{t.footer.exploreTitle}</h3>
            <nav aria-label={t.footer.exploreTitle}>
              <ul className="space-y-3">
                {exploreLinks.map(({ href, key }) => (
                  <li key={key}>
                    <Link
                      href={href}
                      className="text-xs uppercase tracking-[0.15em] text-cream-400 hover:text-terracotta-600 transition-colors"
                    >
                      {t.nav[key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact — verified information only */}
          <div>
            <h3 className="eyebrow mb-6">{t.footer.contactTitle}</h3>
            <div className="space-y-4 text-sm text-cream-400">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 text-terracotta-500 mt-0.5" aria-hidden="true" />
                <span className="break-words">{BUSINESS_INFO.address}</span>
              </p>
              <a href={BUSINESS_INFO.phoneHref} className="flex items-center gap-3 hover:text-terracotta-600 transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0 text-terracotta-500" aria-hidden="true" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-terracotta-600 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 flex-shrink-0 text-terracotta-500" aria-hidden="true" />
                <span>{BUSINESS_INFO.instagram}</span>
              </a>
              <a
                href={GOOGLE_MAPS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-terracotta-600 transition-colors"
              >
                <MapPin className="w-4 h-4 flex-shrink-0 text-terracotta-500" aria-hidden="true" />
                <span>{t.footer.directions}</span>
              </a>
            </div>
          </div>

          {/* Legal + languages */}
          <div>
            <h3 className="eyebrow mb-6">{t.footer.legalTitle}</h3>
            <nav aria-label={t.footer.legalTitle}>
              <ul className="space-y-3">
                {LEGAL_LINKS.map(({ href, key }) => (
                  <li key={key}>
                    <Link
                      href={`/${locale}${href}`}
                      className="text-xs uppercase tracking-[0.15em] text-cream-400 hover:text-terracotta-600 transition-colors"
                    >
                      {t.legal[key].title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <h4 className="eyebrow mt-10 mb-4">{t.footer.languagesTitle}</h4>
            <LanguageSwitcher locale={locale} variant="pills" />
          </div>
        </div>

        <div className="border-t border-cream-200 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-cream-500">
            © {currentYear} {BUSINESS_INFO.name}. {t.footer.rights}
          </p>
          <p className="text-xs text-cream-500">{t.brand.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}