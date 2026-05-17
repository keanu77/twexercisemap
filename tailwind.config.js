/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ff6b35',
          dark: '#ea580c',
        },
      },
      fontFamily: {
        sans: ['Fira Sans', 'Noto Sans TC', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'Noto Sans TC', 'monospace'],
      },
    },
  },
  plugins: [],
};
