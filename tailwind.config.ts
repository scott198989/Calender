import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Berean Baptist Church color palette
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1e40af',
          600: '#1e3a8a',
          700: '#1e3a8a',
          800: '#1e293b',
          900: '#0f172a',
        },
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#16a34a',
          600: '#15803d',
          700: '#14532d',
          800: '#064e3b',
          900: '#022c22',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        burgundy: {
          50: '#fdf4f5',
          100: '#fbe8ea',
          200: '#f8d5d9',
          300: '#f2b1ba',
          400: '#e98595',
          500: '#d95972',
          600: '#8b2635',
          700: '#7c1d2e',
          800: '#6b1927',
          900: '#5a1520',
        },
        gold: {
          50: '#fdfbef',
          100: '#fbf5d4',
          200: '#f7e9a5',
          300: '#f2d86d',
          400: '#edc53f',
          500: '#daa520',
          600: '#b8860b',
          700: '#996515',
          800: '#7e4e1a',
          900: '#6c411c',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-faithful': 'linear-gradient(135deg, #1e3a8a 0%, #15803d 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
