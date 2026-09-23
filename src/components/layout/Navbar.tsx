'use client';

import { useState, useEffect, useRef, Fragment, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MapPin, Phone, Globe } from 'lucide-react';
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
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        isScrolled
          ? 'bg-charcoal-950/95 border-b border-gold-500/25 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent'
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
                <span
                  className={cn(
                    'font-display font-light tracking-[0.25em] whitespace-nowrap',
                    'text-base sm:text-lg lg:text-xl text-cream-100'
                  )}
                >
                  DICE <span className="text-terracotta-500">&amp;</span> BEANS
                </span>
                <span className="text-[0.55rem] uppercase tracking-[0.4em] text-cream-500 mt-1 hidden sm:block">
                  L&apos;Aouina &bull; Tunis
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
                className="text-cream-400 hover:text-terracotta-400 transition-colors"
                aria-label={`${t.nav.follow} Instagram`}
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <span className="w-px h-6 bg-white/10" aria-hidden="true" />
              <LanguageSwitcher locale={locale} variant="pills" />
              <Button variant="primary" size="sm" asChild aria-label={t.nav.directions}>
                <a
                  href={GOOGLE_MAPS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                  className="h-11 w-11 p-0 rounded-full border border-white/15 bg-white/5"
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
                      className="absolute end-0 top-full mt-2 w-40 bg-charcoal-900 border border-white/10 shadow-xl rounded-sm py-2 z-50"
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
                className="p-3 -m-1 min-h-11 min-w-11 flex items-center justify-center text-cream-100 hover:text-terracotta-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label={t.nav.openMenu}
                aria-expanded={isMobileMenuOpen}
                aria-haspopup="dialog"
                aria-controls="mobile-menu"
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {isMobileMenuOpen && (
        <Fragment>
          <div
            className="fixed inset-0 bg-black/60 z-[1199] lg:hidden menu-fade-in"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <aside
            id="mobile-menu"
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-charcoal-950 z-[1200] lg:hidden shadow-2xl border-l border-white/10 mobile-menu-in"
            role="dialog"
            aria-label={t.nav.openMenu}
            aria-modal="true"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex items-center justify-between mb-10">
                <Link
                  href={`/${locale}`}
                  onClick={closeMobileMenu}
                  className="font-display text-2xl font-light tracking-[0.25em] text-cream-100"
                >
                  DICE <span className="text-terracotta-500">&amp;</span> BEANS
                </Link>
                <button
                  ref={closeMenuRef}
                  onClick={closeMobileMenu}
                  className="min-h-11 min-w-11 flex items-center justify-center text-cream-400 hover:text-terracotta-400 transition-colors"
                  aria-label={t.nav.closeMenu}
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto" aria-label={t.nav.main}>
                <ul className="space-y-1 border-t border-white/10 pt-4">
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

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="px-4 mb-2 text-xs uppercase tracking-[0.25em] text-cream-500">
                    {t.nav.language}
                  </p>
                  <LanguageSwitcher locale={locale} variant="list" onSelect={closeMobileMenu} />
                </div>
              </nav>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <Button variant="secondary" size="lg" fullWidth asChild>
                  <a
                    href={GOOGLE_MAPS.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="inline-flex items-center justify-center gap-3"
                  >
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                    {t.nav.directions}
                  </a>
                </Button>
                <Button variant="ghost" size="lg" fullWidth asChild>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    onClick={closeMobileMenu}
                    className="inline-flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    {t.nav.call}
                  </a>
                </Button>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm uppercase tracking-[0.2em] text-cream-300 hover:text-terracotta-400 transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
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