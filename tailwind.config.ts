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
        // Faith-centered color palette
        primary: {
          50: '#f0f4f8',
          100: '#d9e6f2',
          200: '#b8cfe6',
          300: '#8ab0d6',
          400: '#5a8fc3',
          500: '#3b73b0',
          600: '#2e5c91',
          700: '#274975',
          800: '#243e62',
          900: '#233653',
        },
        burgundy: {
          50: '#fdf4f5',
          100: '#fbe8ea',
          200: '#f8d5d9',
          300: '#f2b1ba',
          400: '#e98595',
          500: '#d95972',
          600: '#c23b5a',
          700: '#a22d4a',
          800: '#872943',
          900: '#73273e',
        },
        gold: {
          50: '#fdfbef',
          100: '#fbf5d4',
          200: '#f7e9a5',
          300: '#f2d86d',
          400: '#edc53f',
          500: '#ddb027',
          600: '#c08a1a',
          700: '#996318',
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
        'gradient-faithful': 'linear-gradient(135deg, #2e5c91 0%, #73273e 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
