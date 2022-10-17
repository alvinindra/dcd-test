const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5.3125rem',
        '2xl': '6rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      primary: {
        DEFAULT: '#2D3E50',
        600: '#1f2b38',
        dark: '#18181B',
        dark2: '#3F3F46',
        blue: '#3B82F6',
        blueborder: '#60A5FA',
        bluebg: '#EFF6FF',
        whitebg: '#FAFAFA',
      },
      secondary: {
        DEFAULT: '#E4E4E7',
        50: '#A1A1AA',
        100: '#71717A',
        200: '#e0e0e3',
        300: '#52525B',
      },
    },
    screens: {
      sm: '640px',
      md: '930px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
};
