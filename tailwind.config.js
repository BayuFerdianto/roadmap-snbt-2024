/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '900px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'theme': '#D3F1D2',
        'primary': '#FF7F27',
        'secondary': '#FFAEC8',
        'gray-60': '#D9D9D9',
        'text-default': '#2C2727'
      },
      fontFamily: {
        'ohbaby': ['Oooh Baby', 'cursive'],
        'Roboto-mono': ['Roboto Mono', 'monospace'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Playfair': ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}

