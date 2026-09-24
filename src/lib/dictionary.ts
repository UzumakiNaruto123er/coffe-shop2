import type { Locale } from '@/lib/i18n';

export interface LegalSection {
  heading: string;
  body: string;
}

const en = {
  brand: {
    name: 'BLOO COFFEE',
    tagline: 'Coffee • Craft • Comfort',
  },
  meta: {
    home: {
      title: "BLOO COFFEE — Coffee Shop in L'Aouina, Tunis",
      description:
        "Specialty coffee shop in L'Aouina, Tunis — espresso, filter, pour-over and fresh pastries. Rated 4.9 on Google. Open daily 09:00–23:00.",
    },
    menu: {
      title: 'Menu — BLOO COFFEE',
      description:
        "Espresso, filter and pour-over coffee, signature blends and fresh pastries at BLOO COFFEE in L'Aouina, Tunis. Discover today's selection in-store.",
    },
    about: {
      title: 'About — BLOO COFFEE',
      description:
        "BLOO COFFEE is a specialty coffee shop in L'Aouina, Tunis. Find us at Rés. Houssem, Avenue Mongi Slim, Tunis 2045.",
    },
    gallery: {
      title: 'Gallery — BLOO COFFEE',
      description:
        "A glimpse of the atmosphere at BLOO COFFEE, our specialty coffee shop in L'Aouina, Tunis.",
    },
    reviews: {
      title: 'Reviews — BLOO COFFEE',
      description:
        'BLOO COFFEE is rated 4.9 out of 5 on Google, from 25 reviews. Read what guests say about our coffee shop in L\'Aouina, Tunis.',
    },
    location: {
      title: 'Location & Directions — BLOO COFFEE',
      description:
        'Find BLOO COFFEE at Rés. Houssem, Avenue Mongi Slim, Tunis 2045. Call +216 54 472 945 or get directions.',
    },
    contact: {
      title: 'Contact — BLOO COFFEE',
      description:
        'Contact BLOO COFFEE in L\'Aouina, Tunis by phone (+216 54 472 945) or on Instagram @bloo.coffeeshop.',
    },
    terms: {
      title: 'Terms of Service — BLOO COFFEE',
      description: 'Terms of service for the BLOO COFFEE website.',
    },
    privacy: {
      title: 'Privacy Policy — BLOO COFFEE',
      description: 'Privacy policy for the BLOO COFFEE website.',
    },
    cookies: {
      title: 'Cookie Policy — BLOO COFFEE',
      description: 'Cookie policy for the BLOO COFFEE website.',
    },
    legal: {
      title: 'Legal Notice — BLOO COFFEE',
      description: "Legal information about BLOO COFFEE, L'Aouina, Tunis.",
    },
    notFound: {
      title: 'Page not found — BLOO COFFEE',
      description: 'This page could not be found.',
    },
  },
  nav: {
    home: 'Home',
    menu: 'Menu',
    about: 'About',
    gallery: 'Gallery',
    reviews: 'Reviews',
    location: 'Location',
    contact: 'Contact',
    call: 'Call us',
    directions: 'Get directions',
    follow: 'Follow us',
    language: 'Change language',
    openMenu: 'Open main menu',
    closeMenu: 'Close main menu',
    main: 'Main navigation',
  },
  common: {
    skipToContent: 'Skip to content',
    loading: 'Loading…',
    quickInfo: 'Quick information',
    errorTitle: 'Something went wrong',
    errorMessage: 'An unexpected error occurred. Please try again.',
    retry: 'Try again',
    backHome: 'Back home',
    disclaimer:
      'Menu, prices and opening hours may change from time to time. Please confirm with us before visiting.',
    openedInNewTab: 'Opens in a new tab',
    viewOnGoogle: 'View on Google Maps',
    directions: 'Get directions',
    callUs: 'Call us',
    backToTop: 'Back to top',
    breadcrumbs: 'Breadcrumb',
    cookieBanner: {
      title: 'Cookies & privacy',
      message:
        'We only use a few necessary cookies to remember your language preference and keep the site working. No tracking or advertising cookies.',
      accept: 'Got it',
      learnMore: 'Learn more',
    },
  },
  home: {
    hero: {
      badge: 'L\'Aouina · Tunis',
      title1: 'A Fresh',
      title2: 'Moment',
      subtitle:
        'Specialty coffee in L\'Aouina — espresso, filter and pour-over brewed to order, with fresh pastries to match.',
      ctaMenu: 'Our menu',
      ctaDirections: 'Get directions',
      servicesHint: 'Coffee · Baked Goods · Fresh Daily',
    },
    offerings: {
      eyebrow: 'Our offerings',
      title1: 'Crafted with',
      title2: 'Precision',
      subtitle:
        'Every cup starts with care — from the weight of the dose to the temperature of the water. Here is what we pour.',
      cards: [
        {
          icon: 'espresso',
          title: 'Espresso & Filter',
          description: 'Daily espresso, americano, flat white and filter coffee, pulled with care.',
        },
        {
          icon: 'pour',
          title: 'Pour-Over Rituals',
          description: 'Slow-brewed filter coffee prepared in front of you.',
        },
        {
          icon: 'blend',
          title: 'Signature Blends',
          description: 'House signatures, served hot or iced.',
        },
        {
          icon: 'pastry',
          title: 'Fresh Pastries',
          description: 'Baked goods to pair with your cup — check the counter for today.',
        },
      ],
    },
    menu: {
      eyebrow: 'Menu preview',
      title1: 'Signature',
      title2: 'Tastes',
      subtitle:
        'A focused menu of espresso drinks, slow-brews and baked goods. Our selection varies, so ask our team about today\'s specials.',
      categoriesTitle: 'You\'ll usually find',
      categories: [
        'Espresso & Filter',
        'Pour-Over Rituals',
        'Signature Blends',
        'Fresh Pastries',
      ],
      note: 'Full menu and prices are available in-store.',
      cta: 'Contact us',
    },
    stats: {
      priceValue: '10–20 TND',
      priceLabel: 'per person',
      hoursValue: '09:00 – 23:00',
      hoursLabel: 'open daily',
    },
    atmosphere: {
      eyebrow: 'Visual stories',
      title1: 'The Space,',
      title2: 'In Detail',
      subtitle:
        'A calm corner for your first coffee, a table for a slow silent session, a window spot to watch L\'Aouina wake up.',
      cta: 'See the gallery',
    },
    reviews: {
      eyebrow: 'Reviews',
      title1: 'What Guests',
      title2: 'Say',
      subtitle: 'See what visitors share about us on Google.',
      ratingSub: 'based on Google reviews',
      cta: 'Read reviews on Google',
    },
    instagram: {
      eyebrow: 'Instagram',
      title: '@bloo.coffeeshop',
      subtitle: 'Follow along for the latest cups, pastries and moments at the bar.',
      cta: 'Follow us',
    },
    about: {
      eyebrow: 'Our story',
      title1: 'More Than',
      title2: 'A Coffee Shop',
      subtitle:
        'A neighborhood specialty coffee shop in L\'Aouina where the bar, the pastries and the conversation come together.',
      cta: 'Our story',
    },
    contact: {
      eyebrow: 'Say hello',
      title1: 'Come &',
      title2: 'Visit Us',
      subtitle:
        'We\'d love to meet you. Find us in L\'Aouina, or reach us by phone and Instagram.',
      ctaCall: 'Call us',
      ctaInstagram: 'Follow on Instagram',
      ctaDirections: 'Get directions',
    },
    map: {
      eyebrow: 'Find us',
      title1: 'Join Us',
      title2: 'In L\'Aouina',
      ctaDirections: 'Get directions',
      ctaViewMap: 'View on Google Maps',
    },
  },
  menuPage: {
    tagline: 'Menu',
    title1: 'Signature',
    title2: 'Tastes',
    intro:
      'Our selection changes from time to time. Discover today\'s drinks and pastries when you visit us.',
    categoriesTitle: 'You\'ll usually find',
    note: 'Menu items, prices and availability may change.',
    alsoLabel: 'Also on the menu',
    extras: ['Cold Brew', 'Takeaway'],
    ctaTitle: 'Questions about our menu?',
    ctaBody: 'Call us or drop by — we\'d love to help.',
  },
  aboutPage: {
    tagline: 'Our story',
    title1: 'Coffee,',
    title2: 'Brewed Right',
    story1:
      'BLOO COFFEE is a specialty coffee shop in L\'Aouina, Tunis. We pour espresso, filter and pour-over coffee made to order, alongside fresh pastries to pair.',
    story2:
      'Whether you come for a quick espresso, a slow pour-over or a table to settle into, the bar is the heart of the space — and the door is always open.',
    featuresLabel: 'What we focus on',
    features: [
      {
        icon: 'coffee',
        title: 'Coffee, brewed right',
        description: 'Espresso, filter and pour-over, each cup made to order.',
      },
      {
        icon: 'beans',
        title: 'Careful sourcing',
        description: 'Quality-orientated coffee served fresh at the bar all day.',
      },
      {
        icon: 'people',
        title: 'A welcoming space',
        description: 'A comfortable corner to work, meet or take a pause.',
      },
      {
        icon: 'mug',
        title: 'Fresh pastries',
        description: 'Baked goods to pair with your cup — see the counter today.',
      },
      {
        icon: 'bag',
        title: 'Takeaway',
        description: 'Take your coffee and pastries to go.',
      },
      {
        icon: 'sparkle',
        title: 'The little details',
        description: 'Timed shots, measured portions and a clean, quiet room.',
      },
    ],
    recognitionLabel: 'Recognition',
    ratingValue: '4.9',
    ratingLabel: 'Google rating',
    reviewsValue: '25',
    reviewsLabel: 'Google reviews',
    hoursTitle: 'Opening hours',
    hoursNote: 'Opening hours may vary. Call us before you visit to confirm.',
  },
  reviewsPage: {
    tagline: 'What our guests say',
    title1: 'Guest',
    title2: 'Reviews',
    basedOn: 'based on Google reviews',
    overallTitle: 'Overall rating',
    allReviews: 'Read all reviews on Google',
    note: 'We don\'t publish individual reviews on this site — you\'ll find them on our Google Maps listing.',
  },
  locationPage: {
    tagline: 'Location & contact',
    title1: 'Visit',
    title2: 'BLOO COFFEE',
    addressLabel: 'Our address',
    callLabel: 'Call us',
    followLabel: 'Follow us',
    hoursTitle: 'Opening hours',
    hoursNote: 'Hours may vary from time to time. Call us to confirm before you visit.',
    arrivalTitle: 'Getting here',
    arrivalDesc:
      'We\'re at Rés. Houssem, Avenue Mongi Slim, Tunis 2045. Use the map below for exact directions.',
    ctaDirections: 'Get directions',
    mapTitle: 'BLOO COFFEE on the map',
  },
  contactPage: {
    tagline: 'Contact',
    title1: 'Get in',
    title2: 'Touch',
    subtitle:
      'Call us, message us on Instagram, or drop by — we\'d love to hear from you.',
    callLabel: 'Call',
    callDesc: 'You can reach us by phone',
    instagramLabel: 'Instagram',
    instagramDesc: 'Message us @bloo.coffeeshop',
    addressLabel: 'Find us',
    note: 'The quickest ways to reach us are a phone call or Instagram. You can also reserve a table by phone — or send us a message with the form below, which opens your email app.',
    formTitle: 'Send us a message',
    formIntro:
      'The form opens your email app with your message ready to send — nothing is stored on this site.',
    nameLabel: 'Your name',
    emailLabel: 'Your email',
    messageLabel: 'Your message',
    send: 'Open email app',
    required: 'This field is required',
    invalidEmail: 'Please enter a valid email address',
    noEmail:
      'The quickest ways to reach us are a phone call or a message on Instagram — we\'ll get back to you right away.',
    noFormTitle: 'Reach us directly',
    documentNote:
      'The message is sent from your own email account. We don\'t collect or store your details on this site.',
  },
  galleryPage: {
    tagline: 'Visual journey',
    title1: 'The',
    title2: 'Gallery',
    all: 'All',
    categories: {
      interior: 'Interior',
      coffee: 'Coffee',
      food: 'Food',
      desserts: 'Desserts',
      atmosphere: 'Atmosphere',
    },
    close: 'Close',
    open: 'View larger',
    prev: 'Previous image',
    next: 'Next image',
    disclaimer: 'These photos are for atmosphere — come visit us to see the real thing.',
  },
  footer: {
    aboutText:
      'A specialty coffee shop in L\'Aouina, Tunis — espresso, filter, pour-over and fresh pastries.',
    exploreTitle: 'Explore',
    contactTitle: 'Contact',
    legalTitle: 'Legal',
    languagesTitle: 'Language',
    directions: 'Directions',
    rights: 'All rights reserved.',
  },
  notFound: {
    badge: '404',
    title1: 'Page Not',
    title2: 'Found',
    message: 'This page doesn\'t exist, or it has moved.',
    backHome: 'Back to home',
  },
  legal: {
    lastUpdated: 'Last updated',
    updatedDate: 'September 2026',
    terms: {
      title: 'Terms of Service',
      intro:
        'Welcome to the BLOO COFFEE website. By using this site, you agree to the terms below.',
      sections: [
        {
          heading: '1. About this site',
          body: 'This website presents information about BLOO COFFEE, a coffee shop located at Rés. Houssem, Avenue Mongi Slim, Tunis 2045, Tunisia, and its services.',
        },
        {
          heading: '2. Menu, prices and hours',
          body: 'Menu items, prices and opening hours shown on this site may change without notice. Please confirm details with us directly before visiting.',
        },
        {
          heading: '3. No online booking',
          body: 'This site does not process bookings, orders or payments. Any request is handled by phone or in person.',
        },
        {
          heading: '4. Intellectual property',
          body: 'All content on this site — text, logos and design — is the property of BLOO COFFEE unless stated otherwise. Do not reuse it without permission.',
        },
        {
          heading: '5. Limitation of liability',
          body: 'We do our best to keep information accurate, but we accept no liability for any loss arising from its use.',
        },
        {
          heading: '6. Changes',
          body: 'We may update these terms at any time. The latest version always applies.',
        },
        {
          heading: '7. Contact',
          body: 'For any question about these terms, call us at +216 54 472 945 or message us on Instagram @bloo.coffeeshop.',
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      intro:
        'This policy explains what information this website collects and how it is used.',
      sections: [
        {
          heading: '1. What we collect',
          body: 'This site collects minimal information: anonymized, technical data such as pages visited, language and approximate region.',
        },
        {
          heading: '2. What we don\'t collect',
          body: 'We do not collect names, emails, phone numbers or any contact details through this website. There are no contact forms or newsletters here.',
        },
        {
          heading: '3. How the data is used',
          body: 'Technical data is used only to understand how the site is used and to keep it working. No data is sold.',
        },
        {
          heading: '4. Embedded services',
          body: 'The site embeds a Google Maps map and Instagram content. Those services have their own privacy policies.',
        },
        {
          heading: '5. Your rights',
          body: 'You can browse without providing personal information. Your browser can also block cookies used for analytics.',
        },
        {
          heading: '6. Contact',
          body: 'Questions about this policy? Contact us by phone at +216 54 472 945.',
        },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      intro:
        'Like most websites, this one may place small files called cookies on your device.',
      sections: [
        {
          heading: '1. What are cookies?',
          body: 'Cookies are small text files stored by your browser to remember preferences and settings.',
        },
        {
          heading: '2. Cookies we use',
          body: 'This site uses a small number of technical cookies to remember your preferred language. It does not use tracking or advertising cookies.',
        },
        {
          heading: '3. Managing cookies',
          body: 'You can block or delete cookies in your browser settings at any time. Blocking them may slightly change how the site behaves.',
        },
        {
          heading: '4. Contact',
          body: 'For questions about cookies, contact us by phone at +216 54 472 945.',
        },
      ],
    },
    legal: {
      title: 'Legal Notice',
      intro: 'Information required to identify the publisher of this website.',
      sections: [
        {
          heading: 'Company / business',
          body: 'BLOO COFFEE — specialty coffee shop located at Rés. Houssem, Avenue Mongi Slim, Tunis 2045, Tunisia.',
        },
        {
          heading: 'Contact',
          body: 'Phone: +216 54 472 945. Instagram: @bloo.coffeeshop.',
        },
        {
          heading: 'Director of publication',
          body: 'BLOO COFFEE team, L\'Aouina, Tunis.',
        },
        {
          heading: 'Hosting',
          body: 'This website is hosted by Vercel Inc. (vercel.com).',
        },
        {
          heading: 'Disclaimer',
          body: 'This site is an informational website. It does not constitute professional advice, and information may change after its publication.',
        },
      ],
    },
  },
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof en>;

const fr: Dictionary = {
  brand: {
    name: 'BLOO COFFEE',
    tagline: 'Café • Savoir-faire • Confort',
  },
  meta: {
    home: {
      title: 'BLOO COFFEE — Coffee Shop à L\'Aouina, Tunis',
      description:
        'Coffee shop à L\'Aouina, Tunis — espresso, café filtre, pour-over et pâtisseries fraîches. Noté 4,9 sur Google. Ouvert tous les jours de 09:00 à 23:00.',
    },
    menu: {
      title: 'Menu — BLOO COFFEE',
      description:
        'Espresso, café filtre et pour-over, mélanges signature et pâtisseries fraîches chez BLOO COFFEE à L\'Aouina, Tunis. Découvrez la sélection du jour en magasin.',
    },
    about: {
      title: 'À propos — BLOO COFFEE',
      description:
        'BLOO COFFEE est un coffee shop à L\'Aouina, Tunis. Retrouvez-nous au Rés. Houssem, Avenue Mongi Slim, Tunis 2045.',
    },
    gallery: {
      title: 'Galerie — BLOO COFFEE',
      description:
        'Un aperçu de l\'ambiance chez BLOO COFFEE, notre coffee shop à L\'Aouina, Tunis.',
    },
    reviews: {
      title: 'Avis — BLOO COFFEE',
      description:
        'BLOO COFFEE est noté 4,9 sur 5 sur Google, sur 25 avis. Découvrez ce que disent les clients de notre coffee shop à L\'Aouina, Tunis.',
    },
    location: {
      title: 'Adresse et itinéraire — BLOO COFFEE',
      description:
        'Retrouvez BLOO COFFEE au Rés. Houssem, Avenue Mongi Slim, Tunis 2045. Appelez le +216 54 472 945 ou suivez l\'itinéraire.',
    },
    contact: {
      title: 'Contact — BLOO COFFEE',
      description:
        'Contactez BLOO COFFEE à L\'Aouina, Tunis, par téléphone (+216 54 472 945) ou sur Instagram @bloo.coffeeshop.',
    },
    terms: {
      title: 'Conditions d\'utilisation — BLOO COFFEE',
      description: 'Conditions d\'utilisation du site BLOO COFFEE.',
    },
    privacy: {
      title: 'Politique de confidentialité — BLOO COFFEE',
      description: 'Politique de confidentialité du site BLOO COFFEE.',
    },
    cookies: {
      title: 'Politique de cookies — BLOO COFFEE',
      description: 'Politique de cookies du site BLOO COFFEE.',
    },
    legal: {
      title: 'Mentions légales — BLOO COFFEE',
      description: 'Informations légales sur BLOO COFFEE, L\'Aouina, Tunis.',
    },
    notFound: {
      title: 'Page introuvable — BLOO COFFEE',
      description: 'Cette page est introuvable.',
    },
  },
  nav: {
    home: 'Accueil',
    menu: 'Menu',
    about: 'À propos',
    gallery: 'Galerie',
    reviews: 'Avis',
    location: 'Adresse',
    contact: 'Contact',
    call: 'Appelez-nous',
    directions: 'Itinéraire',
    follow: 'Suivez-nous',
    language: 'Changer de langue',
    openMenu: 'Ouvrir le menu principal',
    closeMenu: 'Fermer le menu principal',
    main: 'Navigation principale',
  },
  common: {
    skipToContent: 'Aller au contenu',
    loading: 'Chargement…',
    quickInfo: 'Informations rapides',
    errorTitle: 'Une erreur est survenue',
    errorMessage: 'Une erreur inattendue s\'est produite. Veuillez réessayer.',
    retry: 'Réessayer',
    backHome: 'Retour à l\'accueil',
    disclaimer:
      'Le menu, les prix et les horaires peuvent changer. Veuillez nous confirmer ces informations avant de venir.',
    openedInNewTab: 'S\'ouvre dans un nouvel onglet',
    viewOnGoogle: 'Voir sur Google Maps',
    directions: 'Obtenir l\'itinéraire',
    callUs: 'Appelez-nous',
    backToTop: 'Haut de page',
    breadcrumbs: 'Fil d\'ariane',
    cookieBanner: {
      title: 'Cookies et confidentialité',
      message:
        'Nous utilisons uniquement quelques cookies nécessaires pour mémoriser votre langue et faire fonctionner le site. Aucun cookie de suivi ou publicitaire.',
      accept: 'J\'ai compris',
      learnMore: 'En savoir plus',
    },
  },
  home: {
    hero: {
      badge: 'L\'Aouina · Tunis',
      title1: 'Un Moment',
      title2: 'De Fraîcheur',
      subtitle:
        'Coffee shop à L\'Aouina — espresso, filtre et pour-over préparés à la commande, avec des pâtisseries fraîches.',
      ctaMenu: 'Notre menu',
      ctaDirections: 'Obtenir l\'itinéraire',
      servicesHint: 'Café · Pâtisseries · Frais Chaque Jour',
    },
    
    offerings: {
      eyebrow: 'Nos offres',
      title1: 'Préparés Avec',
      title2: 'Précision',
      subtitle:
        'Chaque tasse commence avec soin — du dosage à la température de l\'eau. Voici ce que nous servons.',
      cards: [
        {
          icon: 'espresso',
          title: 'Espresso & Filtre',
          description: 'Espresso du jour, americano, flat white et café filtre, préparés avec soin.',
        },
        {
          icon: 'pour',
          title: 'Rituels Pour-Over',
          description: 'Café filtre infusé lentement devant vous.',
        },
        {
          icon: 'blend',
          title: 'Mélanges Signature',
          description: 'Nos mélanges signature, servis chauds ou glacés.',
        },
        {
          icon: 'pastry',
          title: 'Pâtisseries Fraîches',
          description: 'De quoi accompagner votre tasse — découvrez le comptoir du jour.',
        },
      ],
    },
    menu: {
      eyebrow: 'Aperçu du menu',
      title1: 'Saveurs',
      title2: 'Signature',
      subtitle:
        'Un menu ciblé d\'espresso, de slow-brews et de pâtisseries. Notre sélection varie — demandez à notre équipe les spécialités du jour.',
      categoriesTitle: 'Vous trouverez généralement',
      categories: [
        'Espresso & Filtre',
        'Rituels Pour-Over',
        'Mélanges Signature',
        'Pâtisseries Fraîches',
      ],
      note: 'Le menu complet et les prix sont disponibles en magasin.',
      cta: 'Contactez-nous',
    },
    stats: {
      priceValue: '10–20 TND',
      priceLabel: 'par personne',
      hoursValue: '09:00 – 23:00',
      hoursLabel: 'ouvert tous les jours',
    },
    atmosphere: {
      eyebrow: 'Histoires visuelles',
      title1: 'L\'Espace,',
      title2: 'Dans le Détail',
      subtitle:
        'Un coin tranquille pour votre premier café, une table pour un moment lent, une place près de la fenêtre pour voir L\'Aouina s\'éveiller.',
      cta: 'Voir la galerie',
    },
    reviews: {
      eyebrow: 'Avis',
      title1: 'Ce Que',
      title2: 'Disent Nos Clients',
      subtitle: 'Découvrez ce que les visiteurs partagent à notre sujet sur Google.',
      ratingSub: 'selon les avis Google',
      cta: 'Lire les avis Google',
    },
    instagram: {
      eyebrow: 'Instagram',
      title: '@bloo.coffeeshop',
      subtitle: 'Suivez les dernières tasses, pâtisseries et moments au bar.',
      cta: 'Nous suivre',
    },
    about: {
      eyebrow: 'Notre histoire',
      title1: 'Plus Qu\'un',
      title2: 'Simple Coffee Shop',
      subtitle:
        'Un coffee shop de quartier à L\'Aouina où le bar, les pâtisseries et la conversation se rencontrent.',
      cta: 'Notre histoire',
    },
    contact: {
      eyebrow: 'Dites bonjour',
      title1: 'Venez',
      title2: 'Nous Voir',
      subtitle:
        'Nous serons ravis de vous rencontrer. Retrouvez-nous à L\'Aouina, ou contactez-nous par téléphone et sur Instagram.',
      ctaCall: 'Appelez-nous',
      ctaInstagram: 'Suivre sur Instagram',
      ctaDirections: 'Obtenir l\'itinéraire',
    },
    map: {
      eyebrow: 'Nous trouver',
      title1: 'Rejoignez-nous',
      title2: 'À L\'Aouina',
      ctaDirections: 'Obtenir l\'itinéraire',
      ctaViewMap: 'Voir sur Google Maps',
    },
  },
  menuPage: {
    tagline: 'Menu',
    title1: 'Saveurs',
    title2: 'Signature',
    intro:
      'Notre sélection évolue de temps en temps. Découvrez les boissons et pâtisseries du jour lors de votre visite.',
    categoriesTitle: 'Vous trouverez généralement',
    note: 'Les plats, prix et disponibilités peuvent changer.',
    alsoLabel: 'Aussi au menu',
    extras: ['Cold Brew', 'À emporter'],
    ctaTitle: 'Des questions sur notre menu ?',
    ctaBody: 'Appelez-nous ou passez nous voir — nous serons ravis de vous aider.',
  },
  aboutPage: {
    tagline: 'Notre histoire',
    title1: 'Un Café,',
    title2: 'Bien Préparé',
    story1:
      'BLOO COFFEE est un coffee shop à L\'Aouina, Tunis. Nous servons espresso, filtre et pour-over préparés à la commande, accompagnés de pâtisseries fraîches.',
    story2:
      'Que vous veniez pour un espresso rapide, un pour-over lent ou une table pour vous installer, le bar est le cœur du lieu — et la porte est toujours ouverte.',
    featuresLabel: 'Ce que nous privilégions',
    features: [
      {
        icon: 'coffee',
        title: 'Un café bien préparé',
        description: 'Espresso, filtre et pour-over, chaque tasse préparée à la commande.',
      },
      {
        icon: 'beans',
        title: 'Sélection soignée',
        description: 'Un café de qualité, servi frais au bar toute la journée.',
      },
      {
        icon: 'people',
        title: 'Un espace accueillant',
        description: 'Un coin confortable pour travailler, retrouver des amis ou faire une pause.',
      },
      {
        icon: 'mug',
        title: 'Pâtisseries fraîches',
        description: 'De quoi accompagner votre tasse — découvrez le comptoir du jour.',
      },
      {
        icon: 'bag',
        title: 'À emporter',
        description: 'Emportez votre café et vos pâtisseries.',
      },
      {
        icon: 'sparkle',
        title: 'Les petits détails',
        description: 'Dosages minutés, portions mesurées et une salle calme et propre.',
      },
    ],
    recognitionLabel: 'Reconnaissance',
    ratingValue: '4,9',
    ratingLabel: 'Note Google',
    reviewsValue: '25',
    reviewsLabel: 'Avis Google',
    hoursTitle: 'Horaires d\'ouverture',
    hoursNote: 'Les horaires peuvent varier. Appelez-nous avant de venir pour confirmer.',
  },
  reviewsPage: {
    tagline: 'Ce que disent nos clients',
    title1: 'Avis',
    title2: 'De Nos Clients',
    basedOn: 'selon les avis Google',
    overallTitle: 'Note globale',
    allReviews: 'Voir tous les avis sur Google',
    note: 'Nous ne publions pas d\'avis individuels sur ce site — vous les trouverez sur notre fiche Google Maps.',
  },
  locationPage: {
    tagline: 'Adresse & contact',
    title1: 'Visitez',
    title2: 'BLOO COFFEE',
    addressLabel: 'Notre adresse',
    callLabel: 'Appelez-nous',
    followLabel: 'Suivez-nous',
    hoursTitle: 'Horaires d\'ouverture',
    hoursNote: 'Les horaires peuvent varier. Appelez-nous pour confirmer avant de venir.',
    arrivalTitle: 'Comment venir',
    arrivalDesc:
      'Nous sommes au Rés. Houssem, Avenue Mongi Slim, Tunis 2045. Utilisez la carte ci-dessous pour l\'itinéraire exact.',
    ctaDirections: 'Obtenir l\'itinéraire',
    mapTitle: 'BLOO COFFEE sur la carte',
  },
  contactPage: {
    tagline: 'Contact',
    title1: 'Restons',
    title2: 'En Contact',
    subtitle:
      'Appelez-nous, écrivez-nous sur Instagram, ou passez nous voir — nous serons ravis de vous entendre.',
    callLabel: 'Appeler',
    callDesc: 'Vous pouvez nous joindre par téléphone',
    instagramLabel: 'Instagram',
    instagramDesc: 'Écrivez-nous @bloo.coffeeshop',
    addressLabel: 'Nous trouver',
    note: 'La façon la plus rapide de nous joindre reste le téléphone ou Instagram. Vous pouvez aussi réserver une table par téléphone — ou nous écrire via le formulaire ci-dessous, qui ouvre votre application de messagerie.',
    formTitle: 'Envoyez-nous un message',
    formIntro:
      'Le formulaire ouvre votre application de messagerie avec votre message prêt à envoyer — rien n\'est stocké sur ce site.',
    nameLabel: 'Votre nom',
    emailLabel: 'Votre e-mail',
    messageLabel: 'Votre message',
    send: 'Ouvrir l\'application de messagerie',
    required: 'Ce champ est requis',
    invalidEmail: 'Veuillez saisir une adresse e-mail valide',
    noEmail:
      'Les moyens les plus rapides de nous joindre sont un appel téléphonique ou un message sur Instagram — nous vous répondrons très vite.',
    noFormTitle: 'Contactez-nous directement',
    documentNote:
      'Le message est envoyé depuis votre propre compte e-mail. Nous ne collectons ni ne stockons vos coordonnées sur ce site.',
  },
  galleryPage: {
    tagline: 'Voyage visuel',
    title1: 'La',
    title2: 'Galerie',
    all: 'Tout',
    categories: {
      interior: 'Intérieur',
      coffee: 'Café',
      food: 'Plats',
      desserts: 'Desserts',
      atmosphere: 'Ambiance',
    },
    close: 'Fermer',
    open: 'Agrandir',
    prev: 'Image précédente',
    next: 'Image suivante',
    disclaimer: 'Ces photos illustrent l\'ambiance — venez nous voir pour le vrai décor.',
  },
  footer: {
    aboutText:
      'Un coffee shop à L\'Aouina, Tunis — espresso, filtre, pour-over et pâtisseries fraîches.',
    exploreTitle: 'Découvrir',
    contactTitle: 'Contact',
    legalTitle: 'Mentions légales',
    languagesTitle: 'Langue',
    directions: 'Itinéraire',
    rights: 'Tous droits réservés.',
  },
  notFound: {
    badge: '404',
    title1: 'Page',
    title2: 'Introuvable',
    message: 'Cette page n\'existe pas, ou elle a changé de place.',
    backHome: 'Retour à l\'accueil',
  },
  legal: {
    lastUpdated: 'Dernière mise à jour',
    updatedDate: 'Septembre 2026',
    terms: {
      title: 'Conditions d\'utilisation',
      intro:
        'Bienvenue sur le site BLOO COFFEE. En utilisant ce site, vous acceptez les conditions ci-dessous.',
      sections: [
        {
          heading: '1. À propos de ce site',
          body: 'Ce site présente des informations sur BLOO COFFEE, un coffee shop situé au Rés. Houssem, Avenue Mongi Slim, Tunis 2045, Tunisie, et sur ses services.',
        },
        {
          heading: '2. Menu, prix et horaires',
          body: 'Les plats, prix et horaires affichés sur ce site peuvent changer sans préavis. Veuillez confirmer les détails avec nous avant de venir.',
        },
        {
          heading: '3. Aucune réservation en ligne',
          body: 'Ce site ne traite ni réservation, ni commande, ni paiement. Toute demande se fait par téléphone ou sur place.',
        },
        {
          heading: '4. Propriété intellectuelle',
          body: 'Tout le contenu du site — textes, logos et design — appartient à BLOO COFFEE sauf mention contraire. Ne le réutilisez pas sans autorisation.',
        },
        {
          heading: '5. Limitation de responsabilité',
          body: 'Nous faisons de notre mieux pour garder les informations exactes, mais nous déclinons toute responsabilité en cas de préjudice lié à leur utilisation.',
        },
        {
          heading: '6. Modifications',
          body: 'Nous pouvons mettre à jour ces conditions à tout moment. La version la plus récente fait toujours foi.',
        },
        {
          heading: '7. Contact',
          body: 'Pour toute question sur ces conditions, appelez le +216 54 472 945 ou écrivez-nous sur Instagram @bloo.coffeeshop.',
        },
      ],
    },
    privacy: {
      title: 'Politique de confidentialité',
      intro:
        'Cette politique explique quelles informations ce site collecte et comment elles sont utilisées.',
      sections: [
        {
          heading: '1. Ce que nous collectons',
          body: 'Ce site collecte un minimum d\'informations : des données techniques anonymisées telles que les pages visitées, la langue et la région approximative.',
        },
        {
          heading: '2. Ce que nous ne collectons pas',
          body: 'Nous ne collectons ni noms, ni e-mails, ni numéros de téléphone via ce site. Il n\'y a ici ni formulaire de contact ni newsletter.',
        },
        {
          heading: '3. Utilisation des données',
          body: 'Les données techniques servent uniquement à comprendre l\'usage du site et à le maintenir en fonctionnement. Aucune donnée n\'est vendue.',
        },
        {
          heading: '4. Services intégrés',
          body: 'Le site intègre une carte Google Maps et du contenu Instagram. Ces services possèdent leurs propres politiques de confidentialité.',
        },
        {
          heading: '5. Vos droits',
          body: 'Vous pouvez naviguer sans fournir d\'informations personnelles. Votre navigateur peut également bloquer les cookies d\'analyse.',
        },
        {
          heading: '6. Contact',
          body: 'Une question sur cette politique ? Contactez-nous au +216 54 472 945.',
        },
      ],
    },
    cookies: {
      title: 'Politique de cookies',
      intro:
        'Comme la plupart des sites, celui-ci peut placer de petits fichiers appelés cookies sur votre appareil.',
      sections: [
        {
          heading: '1. Que sont les cookies ?',
          body: 'Les cookies sont de petits fichiers texte stockés par votre navigateur pour mémoriser des préférences et réglages.',
        },
        {
          heading: '2. Cookies utilisés',
          body: 'Ce site utilise quelques cookies techniques pour mémoriser votre langue préférée. Il n\'utilise aucun cookie de suivi ou de publicité.',
        },
        {
          heading: '3. Gérer les cookies',
          body: 'Vous pouvez bloquer ou supprimer les cookies dans les réglages de votre navigateur à tout moment. Cela peut légèrement modifier le comportement du site.',
        },
        {
          heading: '4. Contact',
          body: 'Pour toute question sur les cookies, contactez-nous au +216 54 472 945.',
        },
      ],
    },
    legal: {
      title: 'Mentions légales',
      intro: 'Informations permettant d\'identifier l\'éditeur de ce site.',
      sections: [
        {
          heading: 'Entreprise / activité',
          body: 'BLOO COFFEE — coffee shop situé au Rés. Houssem, Avenue Mongi Slim, Tunis 2045, Tunisie.',
        },
        {
          heading: 'Contact',
          body: 'Téléphone : +216 54 472 945. Instagram : @bloo.coffeeshop.',
        },
        {
          heading: 'Directeur de la publication',
          body: 'Équipe BLOO COFFEE, L\'Aouina, Tunis.',
        },
        {
          heading: 'Hébergement',
          body: 'Ce site est hébergé par Vercel Inc. (vercel.com).',
        },
        {
          heading: 'Avertissement',
          body: 'Ce site est un site informatif. Il ne constitue pas un conseil professionnel et les informations peuvent changer après leur publication.',
        },
      ],
    },
  },
};

const ar: Dictionary = {
  brand: {
    name: 'BLOO COFFEE',
    tagline: 'قهوة • حِرفية • راحة',
  },
  meta: {
    home: {
      title: 'BLOO COFFEE — مقهى متخصص في العوينة، تونس',
      description:
        'مقهى قهوة متخصص في العوينة، تونس — إسبريسو، قهوة فلتر، بور-أوفر ومعجنات طازجة. تقييم 4.9 على Google. مفتوح يومياً من 09:00 إلى 23:00.',
    },
    menu: {
      title: 'القائمة — BLOO COFFEE',
      description:
        'إسبريسو، قهوة فلتر وبور-أوفر، خلطات مميزة ومعجنات طازجة في BLOO COFFEE بالعوينة، تونس. اكتشف تشكيلة اليوم في المحل.',
    },
    about: {
      title: 'عنّا — BLOO COFFEE',
      description:
        'BLOO COFFEE مقهى قهوة متخصص في العوينة، تونس. تجدنا في ر. حسّام، شارع منجي سليم، تونس 2045.',
    },
    gallery: {
      title: 'المعرض — BLOO COFFEE',
      description:
        'لمحة عن أجواء BLOO COFFEE، مقهى القهوة المتخصص في العوينة، تونس.',
    },
    reviews: {
      title: 'التقييمات — BLOO COFFEE',
      description:
        'حصل BLOO COFFEE على تقييم 4.9 من 5 على Google بناءً على 25 تقييماً. اطّلع على ما يقوله الزوار عن مقهانا في العوينة، تونس.',
    },
    location: {
      title: 'الموقع والاتجاهات — BLOO COFFEE',
      description:
        'تجد BLOO COFFEE في ر. حسّام، شارع منجي سليم، تونس 2045. اتصل على +216 54 472 945 أو احصل على الاتجاهات.',
    },
    contact: {
      title: 'اتصل بنا — BLOO COFFEE',
      description:
        'تواصل مع BLOO COFFEE في العوينة، تونس، عبر الهاتف (+216 54 472 945) أو عبر إنستغرام @bloo.coffeeshop.',
    },
    terms: {
      title: 'شروط الاستخدام — BLOO COFFEE',
      description: 'شروط استخدام موقع BLOO COFFEE.',
    },
    privacy: {
      title: 'سياسة الخصوصية — BLOO COFFEE',
      description: 'سياسة الخصوصية لموقع BLOO COFFEE.',
    },
    cookies: {
      title: 'سياسة ملفات الارتباط — BLOO COFFEE',
      description: 'سياسة ملفات الارتباط لموقع BLOO COFFEE.',
    },
    legal: {
      title: 'إشعار قانوني — BLOO COFFEE',
      description: 'معلومات قانونية عن BLOO COFFEE، العوينة، تونس.',
    },
    notFound: {
      title: 'الصفحة غير موجودة — BLOO COFFEE',
      description: 'هذه الصفحة غير موجودة.',
    },
  },
  nav: {
    home: 'الرئيسية',
    menu: 'القائمة',
    about: 'عنّا',
    gallery: 'المعرض',
    reviews: 'التقييمات',
    location: 'الموقع',
    contact: 'اتصل بنا',
    call: 'اتصل بنا',
    directions: 'الاتجاهات',
    follow: 'تابعنا',
    language: 'تغيير اللغة',
    openMenu: 'فتح القائمة الرئيسية',
    closeMenu: 'إغلاق القائمة الرئيسية',
    main: 'التنقل الرئيسي',
  },
  common: {
    skipToContent: 'تخطَّ إلى المحتوى',
    loading: 'جارٍ التحميل…',
    quickInfo: 'معلومات سريعة',
    errorTitle: 'حدث خطأ ما',
    errorMessage: 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.',
    retry: 'إعادة المحاولة',
    backHome: 'العودة إلى الرئيسية',
    disclaimer:
      'قد تتغيّر القائمة والأسعار وساعات العمل من وقت لآخر. يُرجى تأكيدها معنا قبل الزيارة.',
    openedInNewTab: 'يفتح في نافذة جديدة',
    viewOnGoogle: 'عرض الموقع على خرائط Google',
    directions: 'احصل على الاتجاهات',
    callUs: 'اتصل بنا',
    backToTop: 'العودة إلى الأعلى',
    breadcrumbs: 'مسار التنقل',
    cookieBanner: {
      title: 'ملفات الارتباط والخصوصية',
      message:
        'نستخدم عدداً قليلاً من ملفات الارتباط الضرورية فقط لتذكر تفضيلاتك اللغوية ولضمان عمل الموقع. لا نستخدم ملفات تتبع أو إعلانات.',
      accept: 'حسناً',
      learnMore: 'اعرف المزيد',
    },
  },
  home: {
    hero: {
      badge: 'العوينة · تونس',
      title1: 'لحظة',
      title2: 'منعشة',
      subtitle:
        'مقهى قهوة متخصص في العوينة — إسبريسو، فلتر وبور-أوفر تُحضَّر عند الطلب، مع معجنات طازجة.',
      ctaMenu: 'قائمتنا',
      ctaDirections: 'احصل على الاتجاهات',
      servicesHint: 'قهوة · مخبوزات · طازج يومياً',
    },
    
    offerings: {
      eyebrow: 'ما نقدّمه',
      title1: 'صُنع',
      title2: 'بدقة',
      subtitle:
        'كل كوب يبدأ بالعناية — من وزن الجرعة إلى درجة حرارة الماء. هذا ما نسكبه لكم.',
      cards: [
        {
          icon: 'espresso',
          title: 'الإسبريسو والفلتر',
          description: 'إسبريسو يومي وأمريكانو وفلتر، تُحضَّر بعناية.',
        },
        {
          icon: 'pour',
          title: 'طقوس البور-أوفر',
          description: 'قهوة فلتر تُسكب ببطء أمامك مباشرة.',
        },
        {
          icon: 'blend',
          title: 'الخلطات المميزة',
          description: 'خلطاتنا المميزة، تُسكب طازجة، ساخنة أو مثلجة.',
        },
        {
          icon: 'pastry',
          title: 'معجنات طازجة',
          description: 'مخبوزات لمرافقة كوبك — اطّلع على الواجهة اليوم.',
        },
      ],
    },
    menu: {
      eyebrow: 'لمحة عن القائمة',
      title1: 'مذاقات',
      title2: 'مميزة',
      subtitle:
        'قائمة مركّزة من مشروبات الإسبريسو والتحضير البطيء والمخبوزات. تشكيلتنا تتبدّل — اسأل فريقنا عن اختصاصات اليوم.',
      categoriesTitle: 'ستجد عادةً',
      categories: ['الإسبريسو والفلتر', 'طقوس البور-أوفر', 'الخلطات المميزة', 'المعجنات الطازجة'],
      note: 'القائمة الكاملة والأسعار متوفرة في المحل.',
      cta: 'اتصل بنا',
    },
    stats: {
      priceValue: '10–20 د.ت',
      priceLabel: 'للشخص',
      hoursValue: '09:00 – 23:00',
      hoursLabel: 'مفتوح يومياً',
    },
    atmosphere: {
      eyebrow: 'حكايات بصرية',
      title1: 'المساحة،',
      title2: 'بالتفصيل',
      subtitle:
        'ركن هادئ لكوبك الأول، طاولة لجلسة بطيئة، ومكان قرب النافذة لمشاهدة العوينة وهي تستيقظ.',
      cta: 'شاهد المعرض',
    },
    reviews: {
      eyebrow: 'التقييمات',
      title1: 'ماذا يقول',
      title2: 'الزوار',
      subtitle: 'اطّلع على ما يشاركه الزوار عنّا على Google.',
      ratingSub: 'استناداً إلى تقييمات Google',
      cta: 'اقرأ التقييمات على Google',
    },
    instagram: {
      eyebrow: 'إنستغرام',
      title: '@bloo.coffeeshop',
      subtitle: 'تابعنا لآخر الأكواب والمعجنات ولحظات البار.',
      cta: 'تابعنا',
    },
    about: {
      eyebrow: 'قصتنا',
      title1: 'أكثر من',
      title2: 'مجرد مقهى',
      subtitle:
        'مقهى قهوة متخصص في العوينة حيث يلتقي البار والمعجنات والأحاديث الجميلة.',
      cta: 'قصتنا',
    },
    contact: {
      eyebrow: 'قل مرحباً',
      title1: 'تعال',
      title2: 'وزرنا',
      subtitle:
        'يسعدنا لقاؤك. تجدنا في العوينة، أو تواصل معنا بالهاتف أو عبر إنستغرام.',
      ctaCall: 'اتصل بنا',
      ctaInstagram: 'تابعنا على إنستغرام',
      ctaDirections: 'احصل على الاتجاهات',
    },
    map: {
      eyebrow: 'موقعنا',
      title1: 'انضم إلينا',
      title2: 'في العوينة',
      ctaDirections: 'احصل على الاتجاهات',
      ctaViewMap: 'عرض الموقع على خرائط Google',
    },
  },
  menuPage: {
    tagline: 'القائمة',
    title1: 'مذاقات',
    title2: 'مميزة',
    intro:
      'تتغير تشكيلتنا من وقت لآخر. اكتشف مشروبات ومعجنات اليوم عند زيارتك لنا.',
    categoriesTitle: 'ستجد عادةً',
    note: 'قد تتغير الأطباق والأسعار والتوفر.',
    alsoLabel: 'أيضاً في القائمة',
    extras: ['كولد برو', 'طلب خارجي'],
    ctaTitle: 'أسئلة عن قائمتنا؟',
    ctaBody: 'اتصل بنا أو مرّ علينا — يسعدنا مساعدتك.',
  },
  aboutPage: {
    tagline: 'قصتنا',
    title1: 'قهوة،',
    title2: 'تُحضَّر بعناية',
    story1:
      'BLOO COFFEE مقهى قهوة متخصص في العوينة، تونس. نسكب الإسبريسو والفلتر والبور-أوفر عند الطلب، إلى جانب معجنات طازجة.',
    story2:
      'سواء جئت لإسبريسو سريع أو بور-أوفر بطيء أو طاولة تستقر فيها، فقلب المكان هو البار — والباب مفتوح دائماً.',
    featuresLabel: 'ما نركز عليه',
    features: [
      {
        icon: 'coffee',
        title: 'قهوة تُحضَّر بعناية',
        description: 'إسبريسو وفلتر وبور-أوفر، كل كوب عند الطلب.',
      },
      {
        icon: 'beans',
        title: 'اختيار دقيق',
        description: 'قهوة عالية الجودة، تُقدَّم طازجة في البار طوال اليوم.',
      },
      {
        icon: 'people',
        title: 'مساحة ترحيبية',
        description: 'ركن مريح للعمل أو اللقاء أو أخذ قسط من الراحة.',
      },
      {
        icon: 'mug',
        title: 'معجنات طازجة',
        description: 'مخبوزات لمرافقة كوبك — اطّلع على الواجهة اليوم.',
      },
      {
        icon: 'bag',
        title: 'خدمة الأخذ',
        description: 'خذ قهوتك ومعجناتك معك.',
      },
      {
        icon: 'sparkle',
        title: 'التفاصيل الصغيرة',
        description: 'توقيت مضبوط، كميات موزونة، وقاعة نظيفة وهادئة.',
      },
    ],
    recognitionLabel: 'التقدير',
    ratingValue: '4.9',
    ratingLabel: 'تقييم Google',
    reviewsValue: '25',
    reviewsLabel: 'تقييم على Google',
    hoursTitle: 'ساعات العمل',
    hoursNote: 'قد تختلف ساعات العمل. اتصل بنا قبل الزيارة للتأكيد.',
  },
  reviewsPage: {
    tagline: 'ماذا يقول ضيوفنا',
    title1: 'تقييمات',
    title2: 'ضيوفنا',
    basedOn: 'استناداً إلى تقييمات Google',
    overallTitle: 'التقييم العام',
    allReviews: 'اقرأ جميع التقييمات على Google',
    note: 'لا ننشر تقييمات فردية في هذا الموقع — ستجدها على صفحتنا في خرائط Google.',
  },
  locationPage: {
    tagline: 'الموقع والاتصال',
    title1: 'تفضل بزيارة',
    title2: 'BLOO COFFEE',
    addressLabel: 'عنواننا',
    callLabel: 'اتصل بنا',
    followLabel: 'تابعنا',
    hoursTitle: 'ساعات العمل',
    hoursNote: 'قد تتغير ساعات العمل من وقت لآخر. اتصل بنا للتأكيد قبل الزيارة.',
    arrivalTitle: 'كيف تصل إلينا',
    arrivalDesc:
      'نحن في ر. حسّام، شارع منجي سليم، تونس 2045. استخدم الخريطة أدناه للحصول على الاتجاهات الدقيقة.',
    ctaDirections: 'احصل على الاتجاهات',
    mapTitle: 'BLOO COFFEE على الخريطة',
  },
  contactPage: {
    tagline: 'اتصل بنا',
    title1: 'ابقَ',
    title2: 'على تواصل',
    subtitle:
      'اتصل بنا أو راسلنا على إنستغرام أو مرّ علينا — يسعدنا سماعك.',
    callLabel: 'اتصال',
    callDesc: 'يمكنك التواصل معنا عبر الهاتف',
    instagramLabel: 'إنستغرام',
    instagramDesc: 'راسلنا @bloo.coffeeshop',
    addressLabel: 'موقعنا',
    note: 'أسرع طريقة للوصول إلينا هي الهاتف أو إنستغرام. يمكنك أيضاً حجز طاولة عبر الهاتف — أو مراسلتنا عبر النموذج أدناه، الذي يفتح تطبيق بريدك الإلكتروني.',
    formTitle: 'أرسل لنا رسالة',
    formIntro: 'يفتح النموذج تطبيق بريدك الإلكتروني مع رسالتك جاهزة للإرسال — لا يُخزَّن شيء في هذا الموقع.',
    nameLabel: 'اسمك',
    emailLabel: 'بريدك الإلكتروني',
    messageLabel: 'رسالتك',
    send: 'فتح تطبيق البريد',
    required: 'هذا الحقل مطلوب',
    invalidEmail: 'يرجى إدخال بريد إلكتروني صحيح',
    noEmail: 'أسرع طريقة للوصول إلينا هي الاتصال بنا أو مراسلتنا عبر إنستغرام — وسنرد عليك فوراً.',
    noFormTitle: 'تواصل معنا مباشرة',
    documentNote: 'تُرسل الرسالة من حساب بريدك الإلكتروني. لا نجمع أو نخزّن معلوماتك في هذا الموقع.',
  },
  galleryPage: {
    tagline: 'رحلة بصرية',
    title1: 'المعرض',
    title2: '',
    all: 'الكل',
    categories: {
      interior: 'الداخلية',
      coffee: 'القهوة',
      food: 'الأطباق',
      desserts: 'الحلويات',
      atmosphere: 'الأجواء',
    },
    close: 'إغلاق',
    open: 'عرض أكبر',
    prev: 'الصورة السابقة',
    next: 'الصورة التالية',
    disclaimer: 'هذه الصور توضح الأجواء — تعال وزرنا لترى المكان الحقيقي.',
  },
  footer: {
    aboutText:
      'مقهى قهوة متخصص في العوينة، تونس — إسبريسو، فلتر، بور-أوفر ومعجنات طازجة.',
    exploreTitle: 'استكشف',
    contactTitle: 'التواصل',
    legalTitle: 'قانوني',
    languagesTitle: 'اللغة',
    directions: 'الاتجاهات',
    rights: 'جميع الحقوق محفوظة.',
  },
  notFound: {
    badge: '404',
    title1: 'الصفحة',
    title2: 'غير موجودة',
    message: 'هذه الصفحة غير موجودة، أو أنها انتقلت إلى مكان آخر.',
    backHome: 'العودة إلى الرئيسية',
  },
  legal: {
    lastUpdated: 'آخر تحديث',
    updatedDate: 'سبتمبر 2026',
    terms: {
      title: 'شروط الاستخدام',
      intro: 'مرحباً بك في موقع BLOO COFFEE. باستخدامك هذا الموقع، فإنك توافق على الشروط أدناه.',
      sections: [
        {
          heading: '1. عن هذا الموقع',
          body: 'يقدّم هذا الموقع معلومات عن BLOO COFFEE، مقهى قهوة في ر. حسّام، شارع منجي سليم، تونس 2045، وعن خدماته.',
        },
        {
          heading: '2. القائمة والأسعار وساعات العمل',
          body: 'قد تتغير الأطباق والأسعار وساعات العمل المعروضة في هذا الموقع دون إشعار مسبق. يُرجى تأكيد التفاصيل معنا مباشرة قبل الزيارة.',
        },
        {
          heading: '3. لا حجز عبر الإنترنت',
          body: 'لا يعالج هذا الموقع الحجوزات أو الطلبات أو المدفوعات. تتم أي طلبات عبر الهاتف أو في المحل.',
        },
        {
          heading: '4. الملكية الفكرية',
          body: 'جميع محتويات الموقع — النصوص والشعارات والتصميم — ملك لـBLOO COFFEE ما لم يُذكر خلاف ذلك. لا يُعاد استخدامها دون إذن.',
        },
        {
          heading: '5. حدود المسؤولية',
          body: 'نبذل قصارى جهدنا لإبقاء المعلومات دقيقة، لكننا لا نتحمل أي مسؤولية عن أي ضرر ناتج عن استخدامها.',
        },
        {
          heading: '6. التغييرات',
          body: 'يجوز لنا تحديث هذه الشروط في أي وقت. النسخة الأحدث هي المُعتمدة دائماً.',
        },
        {
          heading: '7. التواصل',
          body: 'لأي سؤال حول هذه الشروط، اتصل بنا على +216 54 472 945 أو راسلنا عبر إنستغرام @bloo.coffeeshop.',
        },
      ],
    },
    privacy: {
      title: 'سياسة الخصوصية',
      intro: 'توضح هذه السياسة المعلومات التي يجمعها هذا الموقع وكيفية استخدامها.',
      sections: [
        {
          heading: '1. ما نجمع',
          body: 'يجمع هذا الموقع حداً أدنى من المعلومات: بيانات تقنية مجهولة المصدر مثل الصفحات التي تمت زيارتها واللغة والمنطقة التقريبية.',
        },
        {
          heading: '2. ما لا نجمع',
          body: 'لا نجمع الأسماء أو البريد الإلكتروني أو أرقام الهاتف عبر هذا الموقع. لا توجد هنا نماذج اتصال أو نشرات بريدية.',
        },
        {
          heading: '3. استخدام البيانات',
          body: 'تُستخدم البيانات التقنية فقط لفهم كيفية استخدام الموقع والحفاظ على عمله. لا تُباع أي بيانات.',
        },
        {
          heading: '4. الخدمات المدمجة',
          body: 'يتضمّن الموقع خريطة Google Maps ومحتوى إنستغرام. لهذه الخدمات سياسات خصوصية خاصة بها.',
        },
        {
          heading: '5. حقوقك',
          body: 'يمكنك التصفح دون تقديم أي معلومات شخصية. كما يمكن لمتصفحك حظر ملفات الارتباط الخاصة بالتحليلات.',
        },
        {
          heading: '6. التواصل',
          body: 'لديك سؤال عن هذه السياسة؟ تواصل معنا على +216 54 472 945.',
        },
      ],
    },
    cookies: {
      title: 'سياسة ملفات الارتباط',
      intro: 'مثل معظم المواقع، قد يضع هذا الموقع ملفات صغيرة تسمى ملفات الارتباط على جهازك.',
      sections: [
        {
          heading: '1. ما هي ملفات الارتباط؟',
          body: 'ملفات الارتباط هي ملفات نصية صغيرة يخزنها متصفحك لتذكر التفضيلات والإعدادات.',
        },
        {
          heading: '2. ملفات الارتباط التي نستخدمها',
          body: 'يستخدم هذا الموقع عدداً قليلاً من ملفات الارتباط التقنية لتذكر لغتك المفضلة فقط، ولا يستخدم ملفات ارتباط للتتبع أو الإعلانات.',
        },
        {
          heading: '3. إدارة ملفات الارتباط',
          body: 'يمكنك حظر ملفات الارتباط أو حذفها في إعدادات متصفحك في أي وقت. قد يغيّر ذلك سلوك الموقع قليلاً.',
        },
        {
          heading: '4. التواصل',
          body: 'لأي سؤال حول ملفات الارتباط، اتصل بنا على +216 54 472 945.',
        },
      ],
    },
    legal: {
      title: 'إشعار قانوني',
      intro: 'معلومات لتحديد ناشر هذا الموقع.',
      sections: [
        {
          heading: 'الشركة / النشاط',
          body: 'BLOO COFFEE — مقهى قهوة متخصص في ر. حسّام، شارع منجي سليم، تونس 2045.',
        },
        {
          heading: 'التواصل',
          body: 'الهاتف: +216 54 472 945. إنستغرام: @bloo.coffeeshop.',
        },
        {
          heading: 'مدير النشر',
          body: 'فريق BLOO COFFEE، العوينة، تونس.',
        },
        {
          heading: 'الاستضافة',
          body: 'يستضيف هذا الموقع Vercel Inc. (vercel.com).',
        },
        {
          heading: 'تنويه',
          body: 'هذا الموقع موقع إعلامي. لا يشكّل نصيحة مهنية وقد تتغير المعلومات بعد نشرها.',
        },
      ],
    },
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, fr, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}