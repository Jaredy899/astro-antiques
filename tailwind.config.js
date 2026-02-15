/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '.dark'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: 'var(--primary)', light: 'var(--primary-light)' },
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        cream: { DEFAULT: 'var(--cream)', dark: 'var(--cream-dark)' },
        ink: { DEFAULT: 'var(--ink)', muted: 'var(--ink-muted)' },
        'card-bg': 'var(--card-bg)',
        'card-border': 'var(--card-border)',
        /* legacy / direct use */
        'green-phone': '#2d5016',
        'green-phone-hover': '#3a6b1d',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        antique: '0 4px 20px rgba(44, 36, 32, 0.08)',
        'antique-hover': '0 8px 30px rgba(44, 36, 32, 0.12)',
        'antique-dark': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'antique-dark-hover': '0 8px 30px rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        antique: '12px',
        'antique-lg': '16px',
      },
    },
  },
  plugins: [],
};


