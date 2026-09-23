import type { Locale } from '@/lib/i18n';

export interface LegalSection {
  heading: string;
  body: string;
}

const en = {
  brand: {
    name: 'Omega Coffe',
    tagline: 'Coffee • Games • Good Moments',
  },
  meta: {
    home: {
      title: 'Omega Coffe — Coffee, Games & Good Moments in L\'Aouina, Tunis',
      description:
        'A neighborhood café in L\'Aouina, Tunis serving coffee, pastries, sandwiches, pizza and salads, with board games, karaoke nights and takeaway. Visit us or call +216 22 101 785.',
    },
    menu: {
      title: 'Menu — Omega Coffe',
      description:
        'Coffee, croissants, sandwiches, pizza, salads, breakfast and takeaway at Omega Coffe in L\'Aouina, Tunis. Discover today\'s selection in-store.',
    },
    about: {
      title: 'About — Omega Coffe',
      description:
        'Omega Coffe is a neighborhood café in L\'Aouina, Tunis for coffee, games and good times. Find us at Résidence Bel Azure, L\'Aouina.',
    },
    gallery: {
      title: 'Gallery — Omega Coffe',
      description:
        'A glimpse of the atmosphere at Omega Coffe, our neighborhood café in L\'Aouina, Tunis.',
    },
    reviews: {
      title: 'Reviews — Omega Coffe',
      description:
        'Omega Coffe is rated 4.7 out of 5 on Google, from 47 reviews. Read what guests say about our café in L\'Aouina, Tunis.',
    },
    location: {
      title: 'Location & Directions — Omega Coffe',
      description:
        'Find Omega Coffe at Résidence Bel Azure, L\'Aouina, Tunis. Call +216 22 101 785 or get directions.',
    },
    contact: {
      title: 'Contact — Omega Coffe',
      description:
        'Contact Omega Coffe in L\'Aouina, Tunis by phone (+216 22 101 785) or on Instagram @dice.and.beans.',
    },
    terms: {
      title: 'Terms of Service — Omega Coffe',
      description: 'Terms of service for the Omega Coffe website.',
    },
    privacy: {
      title: 'Privacy Policy — Omega Coffe',
      description: 'Privacy policy for the Omega Coffe website.',
    },
    cookies: {
      title: 'Cookie Policy — Omega Coffe',
      description: 'Cookie policy for the Omega Coffe website.',
    },
    legal: {
      title: 'Legal Notice — Omega Coffe',
      description: 'Legal information about Omega Coffe, L\'Aouina, Tunis.',
    },
    notFound: {
      title: 'Page not found — Omega Coffe',
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
      title1: 'Where Coffee Meets',
      title2: 'The Game Table',
      subtitle:
        'A neighborhood café in L\'Aouina for great coffee, board games and good times with friends.',
      ctaMenu: 'Our menu',
      ctaDirections: 'Get directions',
      servicesHint: 'Coffee · Croissants · Sandwiches · Pizza · Salads · Breakfast · Takeaway',
    },
    quickInfo: {
      coffeeLabel: 'Coffee & more',
      coffeeValue: 'Espresso, pastries & light meals',
      ratingLabel: 'On Google',
      locationLabel: 'Find us',
      locationValue: 'L\'Aouina · Tunis',
      directionsValue: 'Résidence Bel Azure',
    },
    menu: {
      eyebrow: 'What we serve',
      title1: 'A Menu Made',
      title2: 'For Sharing',
      subtitle:
        'Coffee, pastries, sandwiches, pizza, salads and more. Our selection changes, so ask our team about today\'s specials.',
      categoriesTitle: 'You\'ll usually find',
      categories: [
        'Coffee',
        'Croissants',
        'Sandwiches',
        'Pizza',
        'Salads',
        'Breakfast & brunch',
        'Takeaway',
        'Delivery',
      ],
      note: 'Full menu and prices are available in-store.',
      cta: 'Contact us',
    },
    atmosphere: {
      eyebrow: 'The vibe',
      title1: 'Coffee, Games &',
      title2: 'Good Company',
      subtitle:
        'Board games, karaoke nights and a space that\'s built for hanging out — whether you\'re here to work, play or catch up.',
      cta: 'Visit the gallery',
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
      title: '@dice.and.beans',
      subtitle: 'Follow along for updates and behind-the-scenes moments.',
      cta: 'Follow us',
    },
    about: {
      eyebrow: 'Our space',
      title1: 'More Than',
      title2: 'Just Coffee',
      subtitle:
        'A neighborhood spot in L\'Aouina where coffee, games and conversation come together.',
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
      title1: 'In the Heart',
      title2: 'Of L\'Aouina',
      ctaDirections: 'Get directions',
      ctaViewMap: 'View on Google Maps',
    },
  },
  menuPage: {
    tagline: 'Menu',
    title1: 'Taste the',
    title2: 'Selection',
    intro:
      'Our menu changes from time to time. Discover today\'s selection and prices when you visit us.',
    categoriesTitle: 'You\'ll usually find',
    note: 'Menu items, prices and availability may change.',
    ctaTitle: 'Questions about our menu?',
    ctaBody: 'Call us or drop by — we\'d love to help.',
  },
  aboutPage: {
    tagline: 'Our story & recognition',
    title1: 'Good Coffee,',
    title2: 'Good Times',
    story1:
      'Omega Coffe is a neighborhood café in L\'Aouina, Tunis. We serve coffee and espresso drinks, fresh pastries, breakfast and brunch, sandwiches, pizza, salads — and a good dose of board games.',
    story2:
      'Whether you come to work, play or simply unwind, our space is made for hanging out. Karaoke nights and game time keep things lively.',
    featuresLabel: 'What makes us special',
    features: [
      {
        icon: 'coffee',
        title: 'Coffee & espresso',
        description: 'Coffee, espresso drinks and options for everyone, served all day.',
      },
      {
        icon: 'dice',
        title: 'Board games',
        description: 'Ready-to-play board games for all ages and levels.',
      },
      {
        icon: 'people',
        title: 'Community',
        description: 'A welcoming space for friends, families and solo visitors.',
      },
      {
        icon: 'mug',
        title: 'Food & pastries',
        description: 'Breakfast, brunch, sandwiches, pizza, salads and pastries.',
      },
      {
        icon: 'bag',
        title: 'Takeaway & delivery',
        description: 'Take your coffee and food to go, or order delivery.',
      },
      {
        icon: 'mic',
        title: 'Karaoke',
        description: 'Karaoke nights to make things lively.',
      },
    ],
    recognitionLabel: 'Recognition',
    ratingValue: '4.7',
    ratingLabel: 'Google rating',
    reviewsValue: '47',
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
    title2: 'Omega Coffe',
    addressLabel: 'Our address',
    callLabel: 'Call us',
    followLabel: 'Follow us',
    hoursTitle: 'Opening hours',
    hoursNote: 'Hours may vary from time to time. Call us to confirm before you visit.',
    arrivalTitle: 'Getting here',
    arrivalDesc:
      'We\'re at Résidence Bel Azure in L\'Aouina, Tunis. Use the map below for exact directions.',
    ctaDirections: 'Get directions',
    mapTitle: 'Omega Coffe on the map',
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
    instagramDesc: 'Message us @dice.and.beans',
    addressLabel: 'Find us',
    note: 'The quickest ways to reach us are a phone call or Instagram. You can also send us a message with the form below — it opens your email app.',
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
      'We\'re not set up for email yet — the fastest ways to reach us are a call or a message on Instagram.',
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
      'A neighborhood café in L\'Aouina, Tunis — coffee, board games and good times.',
    exploreTitle: 'Explore',
    contactTitle: 'Contact',
    legalTitle: 'Legal',
    languagesTitle: 'Language',
    directions: 'Directions',
    rights: 'All rights reserved.',
  },
  notFound: {
    badge: '404',
    title1: 'Looks Like',
    title2: 'You Rolled a Wrong Number',
    message: 'This page doesn\'t exist, or it has moved to another table.',
    backHome: 'Back to home',
  },
  legal: {
    lastUpdated: 'Last updated',
    updatedDate: 'September 2026',
    terms: {
      title: 'Terms of Service',
      intro:
        'Welcome to the Omega Coffe website. By using this site, you agree to the terms below.',
      sections: [
        {
          heading: '1. About this site',
          body: 'This website presents information about Omega Coffe, a café located at Résidence Bel Azure, L\'Aouina, Tunis, Tunisia, and its services.',
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
          body: 'All content on this site — text, logos and design — is the property of Omega Coffe unless stated otherwise. Do not reuse it without permission.',
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
          body: 'For any question about these terms, call us at +216 22 101 785 or message us on Instagram @dice.and.beans.',
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
          body: 'Questions about this policy? Contact us by phone at +216 22 101 785.',
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
          body: 'This site uses a small number of technical cookies to remember your preferred language, and anonymized analytics cookies if enabled.',
        },
        {
          heading: '3. Managing cookies',
          body: 'You can block or delete cookies in your browser settings at any time. Blocking them may slightly change how the site behaves.',
        },
        {
          heading: '4. Contact',
          body: 'For questions about cookies, contact us by phone at +216 22 101 785.',
        },
      ],
    },
    legal: {
      title: 'Legal Notice',
      intro: 'Information required to identify the publisher of this website.',
      sections: [
        {
          heading: 'Company / business',
          body: 'Omega Coffe — coffee shop and games café located at Résidence Bel Azure, L\'Aouina, Tunis, Tunisia.',
        },
        {
          heading: 'Contact',
          body: 'Phone: +216 22 101 785. Instagram: @dice.and.beans.',
        },
        {
          heading: 'Director of publication',
          body: 'Omega Coffe team, L\'Aouina, Tunis.',
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
    name: 'Omega Coffe',
    tagline: 'Café • Jeux • Beaux Moments',
  },
  meta: {
    home: {
      title: 'Omega Coffe — Café, jeux et beaux moments à L\'Aouina, Tunis',
      description:
        'Un café de quartier à L\'Aouina, Tunis, servant café, pâtisseries, sandwichs, pizzas et salades, avec jeux de société, soirées karaoké et à emporter. Rendez-vous sur place ou appelez le +216 22 101 785.',
    },
    menu: {
      title: 'Menu — Omega Coffe',
      description:
        'Café, croissants, sandwichs, pizzas, salades, petit-déjeuner et à emporter chez Omega Coffe à L\'Aouina, Tunis. Découvrez la sélection du jour en magasin.',
    },
    about: {
      title: 'À propos — Omega Coffe',
      description:
        'Omega Coffe est un café de quartier à L\'Aouina, Tunis, pour le café, les jeux et les bons moments. Retrouvez-nous à la Résidence Bel Azure, L\'Aouina.',
    },
    gallery: {
      title: 'Galerie — Omega Coffe',
      description:
        'Un aperçu de l\'ambiance chez Omega Coffe, notre café de quartier à L\'Aouina, Tunis.',
    },
    reviews: {
      title: 'Avis — Omega Coffe',
      description:
        'Omega Coffe est noté 4,7 sur 5 sur Google, sur 47 avis. Découvrez ce que disent les clients de notre café à L\'Aouina, Tunis.',
    },
    location: {
      title: 'Adresse et itinéraire — Omega Coffe',
      description:
        'Retrouvez Omega Coffe à la Résidence Bel Azure, L\'Aouina, Tunis. Appelez le +216 22 101 785 ou suivez l\'itinéraire.',
    },
    contact: {
      title: 'Contact — Omega Coffe',
      description:
        'Contactez Omega Coffe à L\'Aouina, Tunis, par téléphone (+216 22 101 785) ou sur Instagram @dice.and.beans.',
    },
    terms: {
      title: 'Conditions d\'utilisation — Omega Coffe',
      description: 'Conditions d\'utilisation du site Omega Coffe.',
    },
    privacy: {
      title: 'Politique de confidentialité — Omega Coffe',
      description: 'Politique de confidentialité du site Omega Coffe.',
    },
    cookies: {
      title: 'Politique de cookies — Omega Coffe',
      description: 'Politique de cookies du site Omega Coffe.',
    },
    legal: {
      title: 'Mentions légales — Omega Coffe',
      description: 'Informations légales sur Omega Coffe, L\'Aouina, Tunis.',
    },
    notFound: {
      title: 'Page introuvable — Omega Coffe',
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
      title1: 'Là où le café',
      title2: 'rencontre le jeu',
      subtitle:
        'Un café de quartier à L\'Aouina pour un bon café, des jeux de société et de bons moments entre amis.',
      ctaMenu: 'Notre menu',
      ctaDirections: 'Obtenir l\'itinéraire',
      servicesHint: 'Café · Croissants · Sandwichs · Pizzas · Salades · Petit-déjeuner · À emporter',
    },
    quickInfo: {
      coffeeLabel: 'Café & plus',
      coffeeValue: 'Espresso, pâtisseries & plats légers',
      ratingLabel: 'Sur Google',
      locationLabel: 'Nous trouver',
      locationValue: 'L\'Aouina · Tunis',
      directionsValue: 'Résidence Bel Azure',
    },
    menu: {
      eyebrow: 'Ce que nous servons',
      title1: 'Un Menu Fait',
      title2: 'Pour le Partage',
      subtitle:
        'Café, pâtisseries, sandwichs, pizzas, salades et plus. Notre sélection change : demandez à notre équipe les spécialités du jour.',
      categoriesTitle: 'Vous trouverez généralement',
      categories: [
        'Café',
        'Croissants',
        'Sandwichs',
        'Pizzas',
        'Salades',
        'Petit-déjeuner & brunch',
        'À emporter',
        'Livraison',
      ],
      note: 'Le menu complet et les prix sont disponibles en magasin.',
      cta: 'Contactez-nous',
    },
    atmosphere: {
      eyebrow: 'L\'ambiance',
      title1: 'Café, Jeux &',
      title2: 'Bonne Compagnie',
      subtitle:
        'Jeux de société, soirées karaoké et un espace pensé pour traîner entre amis, travailler ou se détendre.',
      cta: 'Visiter la galerie',
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
      title: '@dice.and.beans',
      subtitle: 'Suivez-nous pour les actualités et les coulisses.',
      cta: 'Nous suivre',
    },
    about: {
      eyebrow: 'Notre espace',
      title1: 'Plus Qu\'un',
      title2: 'Simple Café',
      subtitle:
        'Un lieu de quartier à L\'Aouina où café, jeux et conversation se rencontrent.',
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
      title1: 'Au Cœur',
      title2: 'De L\'Aouina',
      ctaDirections: 'Obtenir l\'itinéraire',
      ctaViewMap: 'Voir sur Google Maps',
    },
  },
  menuPage: {
    tagline: 'Menu',
    title1: 'Découvrez',
    title2: 'La Sélection',
    intro:
      'Notre menu évolue de temps en temps. Découvrez la sélection et les prix du jour lors de votre visite.',
    categoriesTitle: 'Vous trouverez généralement',
    note: 'Les plats, prix et disponibilités peuvent changer.',
    ctaTitle: 'Des questions sur notre menu ?',
    ctaBody: 'Appelez-nous ou passez nous voir — nous serons ravis de vous aider.',
  },
  aboutPage: {
    tagline: 'Notre histoire & reconnaissance',
    title1: 'Bon Café,',
    title2: 'Bons Moments',
    story1:
      'Omega Coffe est un café de quartier à L\'Aouina, Tunis. Nous servons café et boissons espresso, pâtisseries fraîches, petit-déjeuner et brunch, sandwichs, pizzas, salades — et une bonne dose de jeux de société.',
    story2:
      'Que vous veniez pour travailler, jouer ou simplement vous détendre, notre espace est fait pour traîner. Les soirées karaoké et les parties de jeux animent les lieux.',
    featuresLabel: 'Ce qui nous rend spéciaux',
    features: [
      {
        icon: 'coffee',
        title: 'Café & espresso',
        description: 'Café, boissons espresso et options pour tous, servis toute la journée.',
      },
      {
        icon: 'dice',
        title: 'Jeux de société',
        description: 'Jeux de société prêts à jouer pour tous les âges et niveaux.',
      },
      {
        icon: 'people',
        title: 'Communauté',
        description: 'Un espace accueillant pour les amis, les familles et les visiteurs.',
      },
      {
        icon: 'mug',
        title: 'Plats & pâtisseries',
        description: 'Petit-déjeuner, brunch, sandwichs, pizzas, salades et pâtisseries.',
      },
      {
        icon: 'bag',
        title: 'À emporter & livraison',
        description: 'Emportez votre café et vos plats, ou commandez en livraison.',
      },
      {
        icon: 'mic',
        title: 'Karaoké',
        description: 'Des soirées karaoké pour animer votre moment.',
      },
    ],
    recognitionLabel: 'Reconnaissance',
    ratingValue: '4,7',
    ratingLabel: 'Note Google',
    reviewsValue: '47',
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
    title2: 'Omega Coffe',
    addressLabel: 'Notre adresse',
    callLabel: 'Appelez-nous',
    followLabel: 'Suivez-nous',
    hoursTitle: 'Horaires d\'ouverture',
    hoursNote: 'Les horaires peuvent varier. Appelez-nous pour confirmer avant de venir.',
    arrivalTitle: 'Comment venir',
    arrivalDesc:
      'Nous sommes à la Résidence Bel Azure à L\'Aouina, Tunis. Utilisez la carte ci-dessous pour l\'itinéraire exact.',
    ctaDirections: 'Obtenir l\'itinéraire',
    mapTitle: 'Omega Coffe sur la carte',
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
    instagramDesc: 'Écrivez-nous @dice.and.beans',
    addressLabel: 'Nous trouver',
    note: 'La façon la plus rapide de nous joindre reste le téléphone ou Instagram. Vous pouvez aussi nous écrire via le formulaire ci-dessous — il ouvre votre application de messagerie.',
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
      'Nous ne sommes pas encore joignables par e-mail — le plus rapide reste l\'appel ou un message sur Instagram.',
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
      'Un café de quartier à L\'Aouina, Tunis — café, jeux de société et bons moments.',
    exploreTitle: 'Découvrir',
    contactTitle: 'Contact',
    legalTitle: 'Mentions légales',
    languagesTitle: 'Langue',
    directions: 'Itinéraire',
    rights: 'Tous droits réservés.',
  },
  notFound: {
    badge: '404',
    title1: 'On Dirait Que',
    title2: 'Vous Avez Tiré un Mauvais Numéro',
    message: 'Cette page n\'existe pas, ou elle a changé de table.',
    backHome: 'Retour à l\'accueil',
  },
  legal: {
    lastUpdated: 'Dernière mise à jour',
    updatedDate: 'Septembre 2026',
    terms: {
      title: 'Conditions d\'utilisation',
      intro:
        'Bienvenue sur le site de Omega Coffe. En utilisant ce site, vous acceptez les conditions ci-dessous.',
      sections: [
        {
          heading: '1. À propos de ce site',
          body: 'Ce site présente des informations sur Omega Coffe, un café situé à la Résidence Bel Azure, L\'Aouina, Tunis, Tunisie, et sur ses services.',
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
          body: 'Tout le contenu du site — textes, logos et design — appartient à Omega Coffe sauf mention contraire. Ne le réutilisez pas sans autorisation.',
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
          body: 'Pour toute question sur ces conditions, appelez le +216 22 101 785 ou écrivez-nous sur Instagram @dice.and.beans.',
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
          body: 'Une question sur cette politique ? Contactez-nous au +216 22 101 785.',
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
          body: 'Ce site utilise quelques cookies techniques pour mémoriser votre langue préférée, et éventuellement des cookies d\'analyse anonymisés.',
        },
        {
          heading: '3. Gérer les cookies',
          body: 'Vous pouvez bloquer ou supprimer les cookies dans les réglages de votre navigateur à tout moment. Cela peut légèrement modifier le comportement du site.',
        },
        {
          heading: '4. Contact',
          body: 'Pour toute question sur les cookies, contactez-nous au +216 22 101 785.',
        },
      ],
    },
    legal: {
      title: 'Mentions légales',
      intro: 'Informations permettant d\'identifier l\'éditeur de ce site.',
      sections: [
        {
          heading: 'Entreprise / activité',
          body: 'Omega Coffe — café et espace de jeux situé à la Résidence Bel Azure, L\'Aouina, Tunis, Tunisie.',
        },
        {
          heading: 'Contact',
          body: 'Téléphone : +216 22 101 785. Instagram : @dice.and.beans.',
        },
        {
          heading: 'Directeur de la publication',
          body: 'Équipe Omega Coffe, L\'Aouina, Tunis.',
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
    name: 'Omega Coffe',
    tagline: 'قهوة • ألعاب • لحظات جميلة',
  },
  meta: {
    home: {
      title: 'أوميغا كوفي — قهوة وألعاب ولحظات جميلة في العوينة، تونس',
      description:
        'مقهى حيوي في العوينة، تونس، يقدّم القهوة والمعجنات والسندويشات والبيتزا والسلطات، مع ألعاب الطاولة وأمسيات الكاريوكي وخدمة الأخذ. تفضّل بزيارتنا أو اتصل على +216 22 101 785.',
    },
    menu: {
      title: 'القائمة — أوميغا كوفي',
      description:
        'القهوة والكرواسون والسندويشات والبيتزا والسلطات والفطور وخدمة الأخذ في أوميغا كوفي بالعوينة، تونس. اكتشف تشكيلة اليوم في المحل.',
    },
    about: {
      title: 'عنّا — أوميغا كوفي',
      description:
        'أوميغا كوفي مقهى حيوي في العوينة، تونس، للقهوة والألعاب والأوقات الجميلة. تجدنا في إقامة بيل أزور، العوينة.',
    },
    gallery: {
      title: 'المعرض — أوميغا كوفي',
      description:
        'لمحة عن أجواء أوميغا كوفي، مقهانا في العوينة، تونس.',
    },
    reviews: {
      title: 'التقييمات — أوميغا كوفي',
      description:
        'حصل أوميغا كوفي على تقييم 4.7 من 5 على Google بناءً على 47 تقييماً. اطّلع على ما يقوله الزوار عن مقهانا في العوينة، تونس.',
    },
    location: {
      title: 'الموقع والاتجاهات — أوميغا كوفي',
      description:
        'تجد أوميغا كوفي في إقامة بيل أزور، العوينة، تونس. اتصل على +216 22 101 785 أو احصل على الاتجاهات.',
    },
    contact: {
      title: 'اتصل بنا — أوميغا كوفي',
      description:
        'تواصل مع أوميغا كوفي في العوينة، تونس، عبر الهاتف (+216 22 101 785) أو عبر إنستغرام @dice.and.beans.',
    },
    terms: {
      title: 'شروط الاستخدام — أوميغا كوفي',
      description: 'شروط استخدام موقع أوميغا كوفي.',
    },
    privacy: {
      title: 'سياسة الخصوصية — أوميغا كوفي',
      description: 'سياسة الخصوصية لموقع أوميغا كوفي.',
    },
    cookies: {
      title: 'سياسة ملفات الارتباط — أوميغا كوفي',
      description: 'سياسة ملفات الارتباط لموقع أوميغا كوفي.',
    },
    legal: {
      title: 'إشعار قانوني — أوميغا كوفي',
      description: 'معلومات قانونية عن أوميغا كوفي، العوينة، تونس.',
    },
    notFound: {
      title: 'الصفحة غير موجودة — أوميغا كوفي',
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
      title1: 'حيث تلتقي القهوة',
      title2: 'بطاولة اللعب',
      subtitle:
        'مقهى حيوي في العوينة لقهوة رائعة وألعاب طاولة وأوقات جميلة مع الأصدقاء.',
      ctaMenu: 'قائمتنا',
      ctaDirections: 'احصل على الاتجاهات',
      servicesHint: 'قهوة · كرواسون · سندويشات · بيتزا · سلطات · فطور · أخذ',
    },
    quickInfo: {
      coffeeLabel: 'قهوة وأكثر',
      coffeeValue: 'إسبريسو ومعجنات ووجبات خفيفة',
      ratingLabel: 'على Google',
      locationLabel: 'موقعنا',
      locationValue: 'العوينة · تونس',
      directionsValue: 'إقامة بيل أزور',
    },
    menu: {
      eyebrow: 'ماذا نقدّم',
      title1: 'قائمة صُنعت',
      title2: 'للمشاركة',
      subtitle:
        'قهوة ومعجنات وسندويشات وبيتزا وسلطات وأكثر. تتغير تشكيلتنا، لذا اسأل فريقنا عن اختصاصات اليوم.',
      categoriesTitle: 'ستجد عادةً',
      categories: [
        'القهوة',
        'الكرواسون',
        'السندويشات',
        'البيتزا',
        'السلطات',
        'الفطور والبرانش',
        'خدمة الأخذ',
        'التوصيل',
      ],
      note: 'القائمة الكاملة والأسعار متوفرة في المحل.',
      cta: 'اتصل بنا',
    },
    atmosphere: {
      eyebrow: 'الأجواء',
      title1: 'قهوة وألعاب و',
      title2: 'رفقة طيبة',
      subtitle:
        'ألعاب طاولة وأمسيات كاريوكي ومساحة صُممت لقضاء الوقت مع الأصدقاء أو العمل أو الاسترخاء.',
      cta: 'زيارة المعرض',
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
      title: '@dice.and.beans',
      subtitle: 'تابعنا لآخر المستجدات ولقطات من الكواليس.',
      cta: 'تابعنا',
    },
    about: {
      eyebrow: 'مساحتنا',
      title1: 'أكثر من',
      title2: 'مجرد قهوة',
      subtitle:
        'مكان حيوي في العوينة تلتقي فيه القهوة والألعاب والأحاديث الجميلة.',
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
      title1: 'في قلب',
      title2: 'العوينة',
      ctaDirections: 'احصل على الاتجاهات',
      ctaViewMap: 'عرض الموقع على خرائط Google',
    },
  },
  menuPage: {
    tagline: 'القائمة',
    title1: 'تذوّق',
    title2: 'التشكيلة',
    intro:
      'تتغير قائمتنا من وقت لآخر. اكتشف تشكيلة اليوم وأسعارها عند زيارتك لنا.',
    categoriesTitle: 'ستجد عادةً',
    note: 'قد تتغير الأطباق والأسعار والتوفر.',
    ctaTitle: 'أسئلة عن قائمتنا؟',
    ctaBody: 'اتصل بنا أو مرّ علينا — يسعدنا مساعدتك.',
  },
  aboutPage: {
    tagline: 'قصتنا وتقديرنا',
    title1: 'قهوة جيدة،',
    title2: 'أوقات جميلة',
    story1:
      'أوميغا كوفي مقهى حيوي في العوينة، تونس. نقدّم القهوة ومشروبات الإسبريسو والمعجنات الطازجة والفطور والبرانش والسندويشات والبيتزا والسلطات — مع الكثير من ألعاب الطاولة.',
    story2:
      'سواء جئت للعمل أو اللعب أو الاسترخاء، فمساحتنا مصممة لقضاء الوقت. أمسيات الكاريوكي وجلسات اللعب تضفي الحيوية على المكان.',
    featuresLabel: 'ما يميزنا',
    features: [
      {
        icon: 'coffee',
        title: 'القهوة والإسبريسو',
        description: 'قهوة ومشروبات إسبريسو وخيارات للجميع، نقدّمها طوال اليوم.',
      },
      {
        icon: 'dice',
        title: 'ألعاب الطاولة',
        description: 'ألعاب طاولة جاهزة للعب لجميع الأعمار والمستويات.',
      },
      {
        icon: 'people',
        title: 'المجتمع',
        description: 'مساحة ترحيبية للأصدقاء والعائلات والزوار.',
      },
      {
        icon: 'mug',
        title: 'أطباق ومعجنات',
        description: 'فطور وبرانش وسندويشات وبيتزا وسلطات ومعجنات.',
      },
      {
        icon: 'bag',
        title: 'الأخذ والتوصيل',
        description: 'خذ قهوتك وأطباقك معك، أو اطلب توصيلاً.',
      },
      {
        icon: 'mic',
        title: 'الكاريوكي',
        description: 'أمسيات كاريوكي لإضافة المزيد من المرح.',
      },
    ],
    recognitionLabel: 'التقدير',
    ratingValue: '4.7',
    ratingLabel: 'تقييم Google',
    reviewsValue: '47',
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
    title2: 'أوميغا كوفي',
    addressLabel: 'عنواننا',
    callLabel: 'اتصل بنا',
    followLabel: 'تابعنا',
    hoursTitle: 'ساعات العمل',
    hoursNote: 'قد تتغير ساعات العمل من وقت لآخر. اتصل بنا للتأكيد قبل الزيارة.',
    arrivalTitle: 'كيف تصل إلينا',
    arrivalDesc:
      'نحن في إقامة بيل أزور في العوينة، تونس. استخدم الخريطة أدناه للحصول على الاتجاهات الدقيقة.',
    ctaDirections: 'احصل على الاتجاهات',
    mapTitle: 'أوميغا كوفي على الخريطة',
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
    instagramDesc: 'راسلنا @dice.and.beans',
    addressLabel: 'موقعنا',
    note: 'أسرع طريقة للوصول إلينا هي الهاتف أو إنستغرام. يمكنك أيضاً مراسلتنا عبر النموذج أدناه — سيفتح تطبيق بريدك الإلكتروني.',
    formTitle: 'أرسل لنا رسالة',
    formIntro: 'يفتح النموذج تطبيق بريدك الإلكتروني مع رسالتك جاهزة للإرسال — لا يُخزَّن شيء في هذا الموقع.',
    nameLabel: 'اسمك',
    emailLabel: 'بريدك الإلكتروني',
    messageLabel: 'رسالتك',
    send: 'فتح تطبيق البريد',
    required: 'هذا الحقل مطلوب',
    invalidEmail: 'يرجى إدخال بريد إلكتروني صحيح',
    noEmail: 'لسنا جاهزين للبريد الإلكتروني بعد — أسرع الطرق هي الاتصال بنا أو مراسلتنا على إنستغرام.',
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
      'مقهى حيوي في العوينة، تونس — قهوة وألعاب طاولة ولحظات جميلة.',
    exploreTitle: 'استكشف',
    contactTitle: 'التواصل',
    legalTitle: 'قانوني',
    languagesTitle: 'اللغة',
    directions: 'الاتجاهات',
    rights: 'جميع الحقوق محفوظة.',
  },
  notFound: {
    badge: '404',
    title1: 'يبدو أنك',
    title2: 'رميت رقماً خاطئاً',
    message: 'هذه الصفحة غير موجودة، أو أنها انتقلت إلى طاولة أخرى.',
    backHome: 'العودة إلى الرئيسية',
  },
  legal: {
    lastUpdated: 'آخر تحديث',
    updatedDate: 'سبتمبر 2026',
    terms: {
      title: 'شروط الاستخدام',
      intro: 'مرحباً بك في موقع أوميغا كوفي. باستخدامك هذا الموقع، فإنك توافق على الشروط أدناه.',
      sections: [
        {
          heading: '1. عن هذا الموقع',
          body: 'يقدّم هذا الموقع معلومات عن أوميغا كوفي، مقهى في إقامة بيل أزور، العوينة، تونس، وعن خدماته.',
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
          body: 'جميع محتويات الموقع — النصوص والشعارات والتصميم — ملك لأوميغا كوفي ما لم يُذكر خلاف ذلك. لا يُعاد استخدامها دون إذن.',
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
          body: 'لأي سؤال حول هذه الشروط، اتصل بنا على +216 22 101 785 أو راسلنا عبر إنستغرام @dice.and.beans.',
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
          body: 'لديك سؤال عن هذه السياسة؟ تواصل معنا على +216 22 101 785.',
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
          body: 'يستخدم هذا الموقع عدداً قليلاً من ملفات الارتباط التقنية لتذكر لغتك المفضلة، وربما ملفات ارتباط تحليلات مجهولة المصدر.',
        },
        {
          heading: '3. إدارة ملفات الارتباط',
          body: 'يمكنك حظر ملفات الارتباط أو حذفها في إعدادات متصفحك في أي وقت. قد يغيّر ذلك سلوك الموقع قليلاً.',
        },
        {
          heading: '4. التواصل',
          body: 'لأي سؤال حول ملفات الارتباط، اتصل بنا على +216 22 101 785.',
        },
      ],
    },
    legal: {
      title: 'إشعار قانوني',
      intro: 'معلومات لتحديد ناشر هذا الموقع.',
      sections: [
        {
          heading: 'الشركة / النشاط',
          body: 'أوميغا كوفي — مقهى ومساحة ألعاب في إقامة بيل أزور، العوينة، تونس.',
        },
        {
          heading: 'التواصل',
          body: 'الهاتف: +216 22 101 785. إنستغرام: @dice.and.beans.',
        },
        {
          heading: 'مدير النشر',
          body: 'فريق أوميغا كوفي، العوينة، تونس.',
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