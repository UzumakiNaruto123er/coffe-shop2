'use client';

import { useState, useEffect, useRef, Fragment, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MapPin, Phone, Globe, Clock } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { LanguageSwitcher } from '@/components/locale/LanguageSwitcher';
import { getDictionary } from '@/lib/dictionary';
import { type Locale, removeLocaleFromPath } from '@/lib/i18n';
import { BUSINESS_INFO, GOOGLE_MAPS } from '@/lib/data/business';

interface NavbarProps {
  locale: Locale;
}

const NAV_LINKS = [
  { href: '/', key: 'home' },
  { href: '/menu', key: 'menu' },
  { href: '/about', key: 'about' },
  { href: '/gallery', key: 'gallery' },
  { href: '/reviews', key: 'reviews' },
  { href: '/location', key: 'location' },
  { href: '/contact', key: 'contact' },
] as const;

export function Navbar({ locale }: NavbarProps) {
  const t = getDictionary(locale);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const pathname = usePathname();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeMenuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu: scroll lock + Escape to close + focus management
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeButton = closeMenuRef.current;
    const hamburgerButton = hamburgerRef.current;
    closeButton?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      hamburgerButton?.focus();
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const currentPath = removeLocaleFromPath(pathname) || '/';

  const isActive = (href: string) =>
    currentPath === href || (href !== '/' && currentPath.startsWith(href));

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        isScrolled ? 'glass-nav glass-nav--scrolled' : 'glass-nav'
      )}
      role="banner"
    >
      <nav className="relative" aria-label={t.nav.main}>
        <Container size="lg" padding="md">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6 min-h-16 sm:min-h-20">
            {/* Left links (desktop) */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {NAV_LINKS.slice(0, 3).map(({ href, key }) => (
                <Link
                  key={key}
                  href={`/${locale}${href}`}
                  className={cn('nav-link', isActive(href) && 'active')}
                >
                  {t.nav[key]}
                </Link>
              ))}
            </div>
            {/* Mobile spacer keeps logo centered */}
            <div aria-hidden="true" className="lg:hidden" />

            {/* Centered logo */}
            <div className="flex-shrink-0 min-w-0">
              <Link
                href={`/${locale}`}
                className="flex flex-col items-center justify-center text-center"
                aria-label={`${t.nav.home} — ${t.brand.name}`}
              >
                <span className="font-display font-extrabold tracking-tight whitespace-nowrap text-base sm:text-xl lg:text-2xl text-bloo-950">
                  BLOO{' '}
                  <span className="text-terracotta-500 font-light italic">Coffee</span>
                </span>
                <span className="text-[0.5rem] sm:text-[0.55rem] uppercase tracking-[0.35em] text-cream-400 mt-0.5 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1.5">
                    {BUSINESS_INFO.neighborhood}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-cream-300" aria-hidden="true" />
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" aria-hidden="true" />
                    {BUSINESS_INFO.hours.label}
                  </span>
                </span>
              </Link>
            </div>

            {/* Right links + CTA (desktop) */}
            <div className="hidden lg:flex items-center justify-end gap-5 xl:gap-6">
              {NAV_LINKS.slice(3).map(({ href, key }) => (
                <Link
                  key={key}
                  href={`/${locale}${href}`}
                  className={cn('nav-link', isActive(href) && 'active')}
                >
                  {t.nav[key]}
                </Link>
              ))}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-400 hover:text-terracotta-500 transition-colors"
                aria-label={`${t.nav.follow} Instagram`}
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <span className="w-px h-6 bg-cream-200" aria-hidden="true" />
              <LanguageSwitcher locale={locale} variant="pills" />
              <Button variant="outline" size="sm" asChild aria-label={t.nav.directions}>
                <a
                  href={GOOGLE_MAPS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  {t.nav.directions}
                </a>
              </Button>
            </div>

            {/* Mobile: language + hamburger */}
            <div className="flex lg:hidden items-center justify-end gap-3">
              <div className="relative" role="menubar">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsLanguageOpen((open) => !open)}
                  aria-expanded={isLanguageOpen}
                  aria-label={t.nav.language}
                  aria-haspopup="menu"
                  className="h-10 w-10 p-0 rounded-full text-bloo-800 hover:bg-bloo-50"
                >
                  <Globe className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">{locale.toUpperCase()}</span>
                </Button>
                {isLanguageOpen && (
                  <Fragment>
                    <button
                      className="fixed inset-0 z-40 cursor-default"
                      aria-label={t.nav.closeMenu}
                      onClick={() => setIsLanguageOpen(false)}
                    />
                    <div
                      className="absolute end-0 top-full mt-2 w-40 bg-charcoal-950 border border-cream-200 shadow-xl rounded-2xl py-2 z-50"
                      role="menu"
                      aria-label={t.nav.language}
                    >
                      <LanguageSwitcher locale={locale} variant="list" onSelect={() => setIsLanguageOpen(false)} />
                    </div>
                  </Fragment>
                )}
              </div>
              <button
                ref={hamburgerRef}
                className="p-2.5 -m-1.5 min-h-10 min-w-10 flex items-center justify-center text-bloo-950 hover:text-terracotta-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label={t.nav.openMenu}
                aria-expanded={isMobileMenuOpen}
                aria-haspopup="dialog"
                aria-controls="mobile-menu"
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {isMobileMenuOpen && (
        <Fragment>
          <div
            className="fixed inset-0 bg-black/40 z-[1199] lg:hidden menu-fade-in"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <aside
            id="mobile-menu"
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-charcoal-950 z-[1200] lg:hidden shadow-2xl border-l border-cream-200 mobile-menu-in"
            role="dialog"
            aria-label={t.nav.openMenu}
            aria-modal="true"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <Link
                    href={`/${locale}`}
                    onClick={closeMobileMenu}
                    className="font-display font-extrabold tracking-tight text-xl text-bloo-950 block"
                  >
                    BLOO{' '}
                    <span className="text-terracotta-500 font-light italic">Coffee</span>
                  </Link>
                  <span className="text-[0.5rem] uppercase tracking-[0.35em] text-cream-400 mt-1 flex items-center gap-1.5">
                    {BUSINESS_INFO.neighborhood}
                    <span className="w-1 h-1 rounded-full bg-cream-300" aria-hidden="true" />
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" aria-hidden="true" />
                      {BUSINESS_INFO.hours.label}
                    </span>
                  </span>
                </div>
                <button
                  ref={closeMenuRef}
                  onClick={closeMobileMenu}
                  className="min-h-10 min-w-10 flex items-center justify-center text-cream-400 hover:text-terracotta-500 transition-colors"
                  aria-label={t.nav.closeMenu}
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto" aria-label={t.nav.main}>
                <ul className="space-y-1 border-t border-cream-200 pt-4">
                  {NAV_LINKS.map(({ href, key }) => (
                    <li key={key}>
                      <Link
                        href={`/${locale}${href}`}
                        onClick={closeMobileMenu}
                        aria-current={isActive(href) ? 'page' : undefined}
                        className={cn(
                          'block px-4 py-3 min-h-11 text-sm uppercase tracking-[0.2em] transition-colors',
                          isActive(href)
                            ? 'text-terracotta-500'
                            : 'text-cream-300 hover:text-cream-100'
                        )}
                      >
                        {t.nav[key]}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-cream-200 pt-6">
                  <p className="px-4 mb-2 text-xs uppercase tracking-[0.25em] text-cream-500">
                    {t.nav.language}
                  </p>
                  <LanguageSwitcher locale={locale} variant="list" onSelect={closeMobileMenu} />
                </div>
              </nav>

              <div className="space-y-2 pt-6 border-t border-cream-200">
                <Button variant="primary" size="sm" fullWidth asChild>
                  <a
                    href={`/${locale}/contact`}
                    onClick={closeMobileMenu}
                    className="inline-flex items-center justify-center gap-3"
                  >
                    {t.nav.contact}
                  </a>
                </Button>
                <Button variant="outline" size="sm" fullWidth asChild>
                  <a
                    href={GOOGLE_MAPS.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="inline-flex items-center justify-center gap-3"
                  >
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    {t.nav.directions}
                  </a>
                </Button>
                <Button variant="secondary" size="sm" fullWidth asChild>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    onClick={closeMobileMenu}
                    className="inline-flex items-center justify-center gap-3"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    {t.nav.call}
                  </a>
                </Button>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 py-2.5 text-xs uppercase tracking-[0.2em] text-cream-400 hover:text-terracotta-500 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  {t.nav.follow} Instagram
                </a>
              </div>
            </div>
          </aside>
        </Fragment>
      )}
    </header>
  );
}