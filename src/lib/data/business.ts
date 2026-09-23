/**
 * Omega Coffe — Business Data
 *
 * Every value here is either verified business information or
 * owner-supplied content. Do not add fabricated details (hours,
 * coordinates, emails, menu items, reviews) without the owner.
 */

export const BUSINESS_INFO = {
  name: 'Omega Coffe',
  tagline: 'Coffee • Games • Good Moments',
  description:
    'A neighborhood café in L\'Aouina, Tunis serving coffee, pastries, sandwiches, pizza and salads, with board games, karaoke nights and takeaway.',
  address: 'Résidence Bel Azure, L\'Aouina, Tunis, Tunisia',
  phone: '+216 22 101 785',
  phoneHref: 'tel:+21622101785',
  instagram: '@dice.and.beans',
  instagramUrl: 'https://www.instagram.com/dice.and.beans/',
  priceRange: '1–10 TND',
  rating: 4.7,
  reviewCount: 47,
  services: [
    'Coffee',
    'Croissants',
    'Sandwiches',
    'Pizza',
    'Salads',
    'Breakfast & brunch',
    'Takeaway',
    'Delivery',
    'Karaoke',
  ],
} as const;

/**
 * Owner-supplied Google Maps URLs. These are the ONLY source of truth
 * for map links and embeds — do not replace them.
 */
export const GOOGLE_MAPS = {
  embedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341.91750797396816!2d10.256617423711498!3d36.854702345014346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cbfbbd6383ab%3A0x69780cc42f44c0b6!2sDice%20%26%20Beans!5e1!3m2!1sen!2stn!4v1789162983676!5m2!1sen!2stn',
  directionsUrl: 'https://maps.app.goo.gl/HDnBjRrtQA6R43FA8',
  viewUrl: 'https://maps.app.goo.gl/HDnBjRrtQA6R43FA8',
} as const;

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'interior' | 'coffee' | 'food' | 'desserts' | 'atmosphere' | 'events';
  span?: string;
}

/**
 * Illustrative atmosphere photography (generic café imagery).
 * Not actual photos of Omega Coffe — UI labels them as such.
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g-1',
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop',
    alt: 'Café interior',
    category: 'interior',
    span: 'lg:col-span-2 xl:col-span-2',
  },
  {
    id: 'g-2',
    src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1935&auto=format&fit=crop',
    alt: 'Barista pouring latte art',
    category: 'coffee',
    span: '',
  },
  {
    id: 'g-3',
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop',
    alt: 'Espresso machine',
    category: 'coffee',
    span: '',
  },
  {
    id: 'g-4',
    src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop',
    alt: 'Cozy café seating',
    category: 'interior',
    span: 'md:col-span-2 lg:col-span-1 xl:col-span-1',
  },
  {
    id: 'g-5',
    src: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1964&auto=format&fit=crop',
    alt: 'Coffee beans',
    category: 'coffee',
    span: '',
  },
  {
    id: 'g-6',
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop',
    alt: 'Café atmosphere',
    category: 'atmosphere',
    span: 'md:col-span-2 lg:col-span-2 xl:col-span-2',
  },
  {
    id: 'g-7',
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
    alt: 'Pour over coffee',
    category: 'coffee',
    span: '',
  },
  {
    id: 'g-8',
    src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop',
    alt: 'Latte art',
    category: 'coffee',
    span: '',
  },
  {
    id: 'g-9',
    src: 'https://images.unsplash.com/photo-1572286258217-40142c1c6a70?q=80&w=2070&auto=format&fit=crop',
    alt: 'Coffee served',
    category: 'coffee',
    span: '',
  },
  {
    id: 'g-10',
    src: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=2070&auto=format&fit=crop',
    alt: 'Brewed coffee',
    category: 'atmosphere',
    span: 'md:col-span-2 xl:col-span-2',
  },
  {
    id: 'g-11',
    src: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1974&auto=format&fit=crop',
    alt: 'Coffee drinks',
    category: 'coffee',
    span: '',
  },
  {
    id: 'g-12',
    src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2070&auto=format&fit=crop',
    alt: 'Desserts',
    category: 'desserts',
    span: '',
  },
  {
    id: 'g-13',
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2070&auto=format&fit=crop',
    alt: 'Pastries',
    category: 'desserts',
    span: '',
  },
  {
    id: 'g-14',
    src: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2070&auto=format&fit=crop',
    alt: 'Sandwiches',
    category: 'food',
    span: '',
  },
] as const;

export const DICE_PHRASES = [
  'Coffee time.',
  'Roll for coffee.',
  'One more game.',
  'Another cup?',
  'Your turn.',
  'Natural 20.',
  'Critical hit.',
  'Game on.',
] as const;