// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        // Marine Blue (Primary Brand Color)
        marine: {
          50: '#f0f4f8',
          100: '#d9e6f2',
          200: '#b3cde3',
          300: '#8bb5d4',
          400: '#5a9cc5',
          500: '#2A4A6B', // Marine Light
          600: '#193559', // Marine Primary
          700: '#0f2440', // Marine Dark
          800: '#0a1b30',
          900: '#061220',
        },
        // Gold (Accent Color)
        gold: {
          50: '#fefdf7',
          100: '#fefaeb',
          200: '#fcf4d1',
          300: '#faecb7',
          400: '#f6dc83',
          500: '#E8B547', // Gold Light
          600: '#C99412', // Gold Primary
          700: '#A67A0E', // Gold Dark
          800: '#85610b',
          900: '#634908',
        },
        // Text Colors
        text: {
          primary: '#2D3748',
          secondary: '#718096',
          muted: '#A0AEC0',
        },
        // Background Colors
        bg: {
          primary: '#F8F9FA',
          white: '#FFFFFF',
        },
        // Legacy Navy Mapping for Compatibility
        navy: {
          50: '#F8F9FA',
          100: '#F7FAFC',
          200: '#EDF2F7',
          300: '#E2E8F0',
          400: '#CBD5E0',
          500: '#A0AEC0',
          600: '#718096',
          700: '#2A4A6B',
          800: '#193559',
          900: '#2D3748',
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'breathe': 'breathe 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'breathe': {
          '0%, 100%': {
            opacity: '0.03',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.06',
            transform: 'scale(1.02)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '25%': {
            transform: 'translateY(-8px) translateX(2px)',
          },
          '50%': {
            transform: 'translateY(-4px) translateX(-2px)',
          },
          '75%': {
            transform: 'translateY(-12px) translateX(1px)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config