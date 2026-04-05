import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand — deep navy (trustworthy, legal, professional)
        brand: '#1B3A6B',
        'brand-dark': '#152D54',
        'brand-light': '#EEF2F8',
        'brand-mid': '#C5D3E8',

        // Link colors
        link: '#4A6FA5',
        'link-hover': '#1B3A6B',

        // Text
        'text-primary': '#1C1C1E',
        'text-secondary': '#4A4A4C',
        'text-muted': '#8A8A8C',

        // Surfaces
        'bg-page': '#FAFAF8',
        'bg-surface': '#FFFFFF',
        'bg-warm': '#F0EDE6',
        'bg-accent': '#EEF2F8',

        // Borders
        'border-subtle': '#E8E7E3',
        'border-mid': '#D4D3CF',
        'border-brand': '#C5D3E8',

        // Urgency
        'urgency-bg': '#FFF8ED',
        'urgency-border': '#F59E0B',
        'urgency-text': '#92400E',
      },

      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'ui-serif', 'serif'],
      },

      borderRadius: {
        btn: '8px',
        card: '12px',
        quiz: '16px',
      },

      maxWidth: {
        prose: '65ch',
        article: '72ch',
      },

      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)',
        'quiz-selected': '0 0 0 2px #1B3A6B, 0 4px 12px rgba(27,58,107,0.15)',
      },

      lineHeight: {
        editorial: '1.75',
      },
    },
  },
  plugins: [],
};

export default config;
