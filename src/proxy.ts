import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const VALID_LOCALES = ['en', 'fr', 'ar'];
const DEFAULT_LOCALE = 'en';

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname already has a locale
  const pathnameHasLocale = VALID_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const locale = pathname.split('/')[1];
    const response = NextResponse.next();
    response.headers.set('x-locale', locale);
    return response;
  }

  // Redirect to default locale
  const locale = DEFAULT_LOCALE;
  const response = NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  response.headers.set('x-locale', locale);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static/_next/image (framework assets)
     * - favicon.ico and manifest.json
     * - public files: images, icons, sitemap, robots
     */
    '/((?!api|_next/static|_next/image|favicon.ico|favicon.svg|manifest.json|sitemap.xml|robots.txt|images|icons).*)',
  ],
};