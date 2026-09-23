# BLOO COFFEE — Coffee Shop Website

Production website for **BLOO COFFEE**, a specialty coffee shop at **Rés. Houssem, Avenue Mongi Slim, Tunis 2045, Tunisia** (L'Aouina).

Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Features

- **i18n**: English, French, Arabic with RTL support (`en` / `fr` / `ar` routes, language switcher persisted in localStorage, `x-default` hreflang).
- **Locale routing**: server-side redirects via `src/proxy.ts`; every page is statically prerendered per locale.
- **Verified content only**: all business facts (address `Rés. Houssem, Avenue Mongi Slim, Tunis 2045`, phone `+216 54 472 945`, Google rating 4.9/5 from 25 reviews, Instagram `@bloo.coffeeshop`, price range 10–20 TND, hours 09:00–23:00 daily) live in `src/lib/data/business.ts`. Nothing is fabricated.
- **Google Maps**: BLOO COFFEE embed + directions link, centralized in `GOOGLE_MAPS`.
- **Pages**: Home, Menu, About, Gallery (filterable grid + lightbox), Reviews, Location, Contact, and legal pages (Terms, Privacy, Cookies, Legal Notice) — all in 3 locales, plus localized 404/error/loading states.
- **SEO**: per-page metadata, canonical + hreflang, `sitemap.xml`, `robots.txt`, dynamic Open Graph image, JSON-LD (`CafeOrCoffeeShop`, `WebSite`, `BreadcrumbList`).
- **Security headers**: CSP (allowing the Google Maps embed + Unsplash images), `X-Frame-Options: DENY`, nosniff, Referrer-Policy, Permissions-Policy.
- **Accessibility**: skip link, semantic landmarks, localized aria-labels, keyboard-navigable menu/lightbox, full `prefers-reduced-motion` support.
- **UX niceties**: back-to-top button, cookie-consent notice, branded image fallbacks (`SafeImage`), print styles, PWA manifest with generated icons.
- **Cinematic responsive layout**: no horizontal overflow from 320px to 2560px (verified headlessly).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the proxy redirects `/` to `/en`.

## Environment variables

See `.env.example`. Only two are used:

- `NEXT_PUBLIC_SITE_URL` — canonical domain (defaults to `https://coffe-shop-2.vercel.app`). Empty/unset is treated as "use the default".
- `CONTACT_EMAIL` — optional. When set, the Contact page shows a form that opens the visitor's email app addressed to this address. When unset, the page directs visitors to phone/Instagram instead (nothing is ever collected or stored by the site).

## Scripts

- `npm run dev` / `npm run build` / `npm run start` — standard Next commands
- `npm run lint` — ESLint
- `npm run build` also runs the TypeScript check

## Project structure

```
src/
├── app/
│   ├── [locale]/          # Localized pages + layout, error/loading/not-found
│   ├── api/               # business, gallery, menu, reviews (cached JSON)
│   ├── layout.tsx         # Root layout (fonts, metadata, manifest link)
│   ├── global-error.tsx
│   ├── sitemap.ts / robots.ts / opengraph-image.tsx
├── components/
│   ├── home/ layout/ locale/ pages/ seo/ ui/
├── lib/
│   ├── dictionary.ts      # Single typed source (en/fr/ar) — adding a page requires a dict key
│   ├── i18n.ts            # Locale constants + helpers
│   ├── site.ts            # SITE_URL with empty-value-safe fallback
│   ├── metadata.ts        # buildPageMetadata + getAlternates (x-default)
│   └── data/business.ts   # All verified business data (the single source of truth)
├── proxy.ts               # Next 16 locale routing (replaces middleware)
└── styles/globals.css
```

## Content notes

- The **menu is intentionally directional**: prices and daily specials are confirmed in-store, so no items or prices are invented. Update `home.menu.categories` in `src/lib/dictionary.ts` and the `menuPage` intro when the owner supplies real menu data.
- **Gallery images are illustrative Unsplash photos** (see `IMAGE_SETUP_GUIDE.md` for how to swap in real photos). They fail-safe to a branded fallback via `SafeImage`.

## Deployment

Hosted on Vercel. `main` deploys automatically on push. Stability notes:

1. `output` is toggled off when building on Vercel (`VERCEL=1`) to avoid a Next 16.3 standalone `nft.json` ENOENT.
2. `SITE_URL` must never be empty — `NEXT_PUBLIC_SITE_URL` is trimmed and defaulted in `src/lib/site.ts`.

Verify after every deploy: the production site responds 200, `/en` contains localized hreflang, and the Google Maps embed URL is present.

## License

© 2026 BLOO COFFEE. All rights reserved.