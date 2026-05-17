import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,mdx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-serif)', 'Charter', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        ink: {
          DEFAULT: '#1a1a1a',
          muted: '#4a4a4a',
          faint: '#8a8a8a',
        },
        paper: {
          DEFAULT: '#fdfcf9',
          alt: '#f5f3ed',
        },
        accent: {
          DEFAULT: '#8b1a1a',
          dark: '#c84a4a',
        },
      },
      typography: ({ theme }: any) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink.DEFAULT'),
            '--tw-prose-headings': theme('colors.ink.DEFAULT'),
            '--tw-prose-links': theme('colors.accent.DEFAULT'),
            maxWidth: 'none',
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#d4d4d4',
            '--tw-prose-headings': '#f5f5f5',
            '--tw-prose-links': theme('colors.accent.dark'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
