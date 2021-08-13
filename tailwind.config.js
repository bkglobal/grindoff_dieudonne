const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...defaultTheme,
    extend: {
      lineHeight: {
        2: '0.5rem'
      },
    },
    screens: {
      xs: '321px',
      sm: '415px',
      md: '769px',
      lg: '1025px',
      xl: '1281px',
      '2xl': '1537px',
    },
    colors: {
      ...defaultTheme.colors,
      transparent: 'transparent',
      current: 'currentColor',
      white: 'white',
      default: 'black',
      disabled: '#a6a6a6',
      warning: { dark: '#b78707', DEFAULT: '#ffc208', disabled: '#ffe597' },
      basic: { disabled: '#ececec', DEFAULT: '#e5e5e5' },
      info: { disabled: '#97c5f0', DEFAULT: '#0070dd', dark: '#00509f' },
      primary: { disabled: 'rgba(20, 168, 0, 0.4)', DEFAULT: '#14A800' },
      success: { disabled: 'rgba(20, 168, 0, 0.4)', DEFAULT: '#14A800' },
      subtle: { disabled: '#a6a6a6', DEFAULT: '#868686', dark: '#595959' },
      alert: { disabled: 'rgba(254, 12, 12, 0.4)', DEFAULT: '#FE0C0C', dark: '#8E0101' },
      destructive: { disabled: 'rgba(254, 12, 12, 0.4)', DEFAULT: '#FE0C0C', dark: '#8E0101' },
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      body: ["'Inter', sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
