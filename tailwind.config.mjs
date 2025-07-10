/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#8B4513',
        secondary: '#D2B48C',
        accent: '#DEB887',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.sr-only': {
          'position': 'absolute',
          'width': '1px',
          'height': '1px',
          'padding': '0',
          'margin': '-1px',
          'overflow': 'hidden',
          'clip': 'rect(0, 0, 0, 0)',
          'white-space': 'nowrap',
          'border': '0',
        },
        '.focus\\:not-sr-only:focus': {
          'position': 'static',
          'width': 'auto',
          'height': 'auto',
          'padding': 'inherit',
          'margin': 'inherit',
          'overflow': 'visible',
          'clip': 'auto',
          'white-space': 'normal',
        },
      })
    }
  ],
} 