/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '.dark'],
  theme: {
    extend: {
      colors: {
        primary: '#8B4513',
        secondary: '#D2B48C',
        accent: '#DEB887',
        christmas: {
          red: '#C41E3A',
          green: '#228B22',
          gold: '#DAA520',
          darkGreen: '#0F5132',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


