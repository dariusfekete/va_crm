/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: { 50: '#f0f3f8', 100: '#d5dde9', 200: '#a8b8d1', 300: '#7b93b9', 400: '#4e6ea1', 500: '#2C5F8A', 600: '#1B2A4A', 700: '#152240', 800: '#0f1a36', 900: '#09122c' },
        gold: { 50: '#fdf6e9', 100: '#f9e8c4', 200: '#f2d48f', 300: '#e8bc5a', 400: '#D4A843', 500: '#b8912e', 600: '#967522', 700: '#745a1a', 800: '#523f12', 900: '#30250a' },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
