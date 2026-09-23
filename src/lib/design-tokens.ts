/**
 * Omega Coffe — Design System Tokens
 * Centralized design tokens for consistent theming
 */

export const colors = {
  // Cream scale - light neutrals (mapped to light ink + soft text)
  cream: {
    50: '#161616',
    100: '#f9f7f2',
    200: '#efede4',
    300: '#e5e1d8',
    400: '#cfc9bd',
    500: '#a8a296',
    600: '#8d877a',
    700: '#6f6a60',
    800: '#514d45',
    900: '#35322c',
    950: '#1c1b18',
  },

  // Charcoal scale - dark surfaces
  charcoal: {
    50: '#f5f4f1',
    100: '#e5e3df',
    200: '#c9c7c1',
    300: '#a5a29b',
    400: '#7d7a73',
    500: '#5f5d57',
    600: '#4a4843',
    700: '#383632',
    800: '#1a1a1a',
    900: '#161616',
    950: '#121212',
  },

  // Espresso scale - remapped to dark luxury neutrals + ink
  espresso: {
    50: '#161616',
    100: '#1a1a1a',
    200: '#242424',
    300: '#3d3d3d',
    400: '#7a7a7a',
    500: '#a0a0a0',
    600: '#cfc9bd',
    700: '#c5a059',
    800: '#8d877a',
    900: '#f9f7f2',
    950: '#121212',
  },

  // Terracotta - remapped to gold accent (brand)
  terracotta: {
    50: '#faf5ea',
    100: '#f3ead6',
    200: '#e8d8b0',
    300: '#dcc48c',
    400: '#d4b877',
    500: '#c5a059',
    600: '#a9894c',
    700: '#8a6d38',
    800: '#6e5730',
    900: '#4f3c1d',
    950: '#372a14',
  },

  // Gold - accents
  gold: {
    50: '#fbf6ec',
    100: '#f3e8d2',
    200: '#e6d1a4',
    300: '#ddbf80',
    400: '#d4b16a',
    500: '#c5a059',
    600: '#a9894c',
    700: '#8a6d38',
    800: '#6e5730',
    900: '#4f3c1d',
    950: '#372a14',
  },

  // Sage - secondary accent
  sage: {
    50: '#f2f4ee',
    100: '#e4e9dd',
    200: '#cbd3bb',
    300: '#aebe93',
    400: '#94a874',
    500: '#7d935e',
    600: '#64784c',
    700: '#4f5f3c',
    800: '#3d4930',
    900: '#353d29',
    950: '#20251a',
  },

  'warm-white': '#121212',
  'dark-brown': '#1a1a1a',
  'paper': '#f9f7f2',

  // Semantic colors
  semantic: {
    bg: {
      page: '#121212',
      surface: '#1a1a1a',
      elevated: '#242424',
      card: '#161616',
      overlay: 'rgba(18, 18, 18, 0.8)',
    },
    text: {
      primary: '#f9f7f2',
      secondary: '#cfc9bd',
      muted: '#a8a296',
      inverse: '#121212',
      gold: '#c5a059',
    },
    border: {
      light: 'rgba(255, 255, 255, 0.1)',
      medium: 'rgba(255, 255, 255, 0.15)',
      dark: 'rgba(255, 255, 255, 0.2)',
    },
    accent: {
      primary: '#c5a059',
      secondary: '#7d935e',
      gold: '#c5a059',
    },
  },
} as const;

export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  md: '0.25rem',
  lg: '0.375rem',
  xl: '0.5rem',
  '2xl': '0.75rem',
  '3xl': '1rem',
  full: '9999px',
} as const;

export const shadows = {
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.35), 0 1px 2px -1px rgba(0, 0, 0, 0.3)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.35)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.45), 0 4px 6px -4px rgba(0, 0, 0, 0.4)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.45)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.5)',
  glow: '0 0 24px -6px rgba(197, 160, 89, 0.4)',
} as const;

export const transitions = {
  fast: '150ms ease-out',
  base: '200ms ease-out',
  slow: '300ms ease-out',
  slower: '400ms ease-out',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
} as const;

export const zIndex = {
  dropdown: 100,
  sticky: 200,
  modal: 300,
  popover: 400,
  tooltip: 500,
  nav: 1000,
} as const;

export const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
} as const;

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
} as const;

export const lineHeights = {
  tight: 1.1,
  snug: 1.2,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extralight: 200,
} as const;