# Omega Coffe — Image Guide

Everything you need to know about the images currently on the site and how to replace them with real photos.

## Current state

- All photos on the site are **illustrative Unsplash photos** used to convey atmosphere. They are never presented as "real" shots of the café — pages say the photos are illustrative.
- Every image renders through `SafeImage` (`src/components/ui/SafeImage.tsx`), so if a remote image ever fails to load, visitors see a branded fallback instead of a broken image.
- The Google Maps embed uses the **owner-provided embed URL** — no API keys are needed for maps.

## Where images are defined

**`src/lib/data/business.ts`** — the single source of truth. The `GALLERY_IMAGES` array (14 entries) drives:

- The Gallery page grid + lightbox
- The homepage "Atmosphere" section
- The homepage Instagram-style grid

Each entry has `id`, `src`, `alt`, `category` (`interior | coffee | food | desserts | atmosphere`), and `span` (grid span hint).

The **hero, about, and atmosphere backgrounds** are hard-coded `SafeImage` usages inside:

- `src/components/home/Hero.tsx`
- `src/components/home/AtmosphereGallery.tsx`
- `src/components/home/AboutSection.tsx`
- `src/components/home/InstagramSection.tsx`

## How to swap in real photos

1. Get real, owner-approved photos (see the shot list below).
2. Upload them to a public host (the site repo's `public/`, Cloudinary, etc.) and update the `src` (and `alt`) fields. Next/Image handles resizing and caching automatically.
3. Recommended: keep aspect ratios — gallery images are shown as 4:5, hero/atmosphere as wide landscape crops.

No other code changes are required; the layout is data-driven.

## Suggested shot list for the owner

### Priority 1
- [ ] Hero: café exterior or wide interior (landscape)
- [ ] Espresso/cappuccino close-ups with crema/latte art
- [ ] Croissant or pastry on the counter
- [ ] A table with board games + coffee (this is the core of the brand)

### Priority 2
- [ ] Interior wide shots (2–4 different angles)
- [ ] Food — sandwiches, pizza, salads
- [ ] Desserts display
- [ ] Takeaway/delivery packaging

### Priority 3
- [ ] Karaoke night setup
- [ ] Detail shots — dice, cups, beans, signage
- [ ] Playing-people candids (with consent)

## Image specs

| Use case | Notes |
|----------|-------|
| Gallery thumbnails | 4:5 portrait crop; any resolution (Optimize: `?q=80&auto=format&fit=crop`) |
| Hero / atmosphere | Wide landscape (≈16:9 or 3:2) |
| Open Graph image | Auto-generated at 1200×630 by `src/app/opengraph-image.tsx` |

## Verification after a change

```bash
npm run lint
npm run build
```

Then check the gallery and home sections locally (`npm run dev`), including the Arabic RTL view.

## Helpful commands

```bash
npm install
npm run dev      # local dev at http://localhost:3000/en
npm run build    # production build + type check
npm run lint     # eslint
```