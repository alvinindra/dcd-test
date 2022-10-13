const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
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
      },
      secondary: {
        DEFAULT: '#E4E4E7',
        200: '#e0e0e3',
        300: '#52525B',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1110px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
};
