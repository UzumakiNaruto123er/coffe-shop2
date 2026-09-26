/**
 * BLOO COFFEE — Business Data
 *
 * Every value here is either verified business information or
 * owner-supplied content. Do not add fabricated details (hours,
 * coordinates, emails, menu items, reviews) without the owner.
 */

export const BUSINESS_INFO = {
  name: 'BLOO COFFEE',
  shortName: 'BLOO',
  tagline: 'Coffee • Craft • Comfort',
  description:
    'A specialty coffee shop in L\'Aouina, Tunis serving espresso, filter coffee, pour-over, signature blends and fresh pastries.',
  neighborhood: 'L\'Aouina · Tunis',
  address: 'Rés. Houssem, Avenue Mongi Slim, Tunis 2045, Tunisia',
  phone: '+216 54 472 945',
  phoneHref: 'tel:+21654472945',
  instagram: '@bloo.coffeeshop',
  instagramUrl: 'https://www.instagram.com/bloo.coffeeshop/',
  email: '',
  emailHref: '',
  whatsapp: '',
  whatsappHref: '',
  priceRange: 'TND 10–20',
  rating: 4.9,
  reviewCount: 25,
  hours: {
    label: '09:00 – 23:00',
    weekly: 'Sunday – Thursday 09:00 – 23:00',
    weekend: 'Friday – Saturday 09:00 – 23:00',
  },
  services: [
    'Espresso & Filter',
    'Pour-Over Rituals',
    'Signature Blends',
    'Fresh Pastries',
    'Cold Brew',
    'Takeaway',
  ],
} as const;

/**
 * Google Maps owner listing for BLOO COFFEE. These are the ONLY source
 * of truth for map links and embeds — do not replace them.
 */
export const GOOGLE_MAPS = {
  embedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.400706577331!2d10.252285011512054!3d36.85539976447004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb002ac5b805%3A0x7692391bd61273b7!2sBloo%20Coffee%20Shop!5e1!3m2!1sen!2stn!4v1790188579205!5m2!1sen!2stn',
  // Derived from the owner listing coordinates (36.8553997, 10.2522850)
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=36.8553997,10.2522850',
  viewUrl: 'https://maps.google.com/?q=36.8553997,10.2522850',
} as const;

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'interior' | 'coffee' | 'food' | 'desserts' | 'atmosphere' | 'events';
  /**
   * Measured intrinsic aspect ratio of `src`, normalised to a tidy ratio.
   * Layouts size their frames from this instead of forcing every image into
   * one fixed box, which previously cropped ~45% off the landscape sources.
   */
  width: number;
  height: number;
}

/**
 * Illustrative atmosphere photography (generic café imagery).
 * Not actual photos of BLOO COFFEE — UI labels them as such.
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g-1',
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop',
    alt: 'Café interior',
    category: 'interior',
    width: 1460,
    height: 1000,
  },
  {
    id: 'g-2',
    src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1935&auto=format&fit=crop',
    alt: 'Barista pouring latte art',
    category: 'coffee',
    width: 1500,
    height: 1000,
  },
  {
    id: 'g-3',
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop',
    alt: 'Espresso machine',
    category: 'coffee',
    width: 1200,
    height: 1800,
  },
  {
    id: 'g-4',
    src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop',
    alt: 'Cozy café seating',
    category: 'interior',
    width: 1500,
    height: 1000,
  },
  {
    id: 'g-5',
    src: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1964&auto=format&fit=crop',
    alt: 'Coffee beans',
    category: 'coffee',
    width: 800,
    height: 1000,
  },
  {
    id: 'g-6',
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop',
    alt: 'Café atmosphere',
    category: 'atmosphere',
    width: 1500,
    height: 1000,
  },
  {
    id: 'g-7',
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
    alt: 'Pour over coffee',
    category: 'coffee',
    width: 1500,
    height: 1000,
  },
  {
    id: 'g-8',
    src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop',
    alt: 'Latte art',
    category: 'coffee',
    width: 1200,
    height: 1800,
  },
  {
    id: 'g-9',
    src: 'https://images.unsplash.com/photo-1572286258217-40142c1c6a70?q=80&w=2070&auto=format&fit=crop',
    alt: 'Coffee served',
    category: 'coffee',
    width: 800,
    height: 1000,
  },
  {
    id: 'g-10',
    src: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=2070&auto=format&fit=crop',
    alt: 'Brewed coffee',
    category: 'atmosphere',
    width: 1500,
    height: 1000,
  },
  {
    id: 'g-11',
    src: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1974&auto=format&fit=crop',
    alt: 'Coffee drinks',
    category: 'coffee',
    width: 1200,
    height: 1800,
  },
  {
    id: 'g-12',
    src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2070&auto=format&fit=crop',
    alt: 'Desserts',
    category: 'desserts',
    width: 900,
    height: 1600,
  },
  {
    id: 'g-13',
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2070&auto=format&fit=crop',
    alt: 'Pastries',
    category: 'desserts',
    width: 1250,
    height: 1000,
  },
  {
    id: 'g-14',
    src: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2070&auto=format&fit=crop',
    alt: 'Sandwiches',
    category: 'food',
    width: 1500,
    height: 1000,
  },
] as const;