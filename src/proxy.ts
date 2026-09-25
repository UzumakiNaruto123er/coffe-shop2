import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const VALID_LOCALES = ['en', 'fr', 'ar'];
const DEFAULT_LOCALE = 'en';

function buildCsp(nonce: string): string {
  const isDev = process.env.NODE_ENV === 'development';
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ''}`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.fontshare.com",
    "font-src 'self' https://fonts.gstatic.com https://api.fontshare.com https://cdn.fontshare.com data:",
    "img-src 'self' blob: data: https://images.unsplash.com https://www.google.com",
    "media-src 'self'",
    "connect-src 'self'",
    "frame-src https://www.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join('; ');
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const csp = buildCsp(nonce);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('content-security-policy', csp);

  const localePrefix = VALID_LOCALES.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  requestHeaders.set('x-locale', localePrefix ?? DEFAULT_LOCALE);

  const locale = localePrefix ?? DEFAULT_LOCALE;

  const response = localePrefix
    ? NextResponse.next({ request: { headers: requestHeaders } })
    : NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));

  response.headers.set('content-security-policy', csp);
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
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|favicon.svg|manifest.json|sitemap.xml|robots.txt|images|icons).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
