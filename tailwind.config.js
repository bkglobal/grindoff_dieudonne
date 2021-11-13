const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...defaultTheme,
    gradientColorStops: {
      'bg-card-green': '#14A800',
      'bg-card-yellow': '#FFDA17',
    },
    extend: {
      backgroundImage: (theme) => ({
        'auth-image': "url('/assets/auth/auth-image.jpg')",
        'why-choose-grindoff': "url('/assets/home/why-choose-grindoff-banner.jpg')",
        'earn-on-grindoff': "url('/assets/home/earn-monthly-on-grindoff.png')",
        'get-started-1': 'url("/assets/home/ready-to-get-started-1.jpg")',
        'get-started-2': 'url("/assets/home/ready-to-get-started-2.jpg")',
        'wallet-bg': 'url("/assets/shared/wallet-bg.png")',
      }),
      inset: {
        100: '408px',
      },
      backgroundPosition: {
        'choose-grindoff': '35% 50%',
      },
      lineHeight: {
        1: '0.1rem',
        2: '0.5rem',
        'extra-loose': 1.2,
      },
      width: {
        49: '12.4rem',
        300: '350px',
        400: '400px',
        500: '500px',
        600: '600px',
        700: '700px',
        800: '800px',
        1000: '1000px',
        'screen-ms': '120vh',
        'screen-md': '140vh',
        'screen-lg': '160vh',
      },
      height: {
        49: '12.4rem',
        300: '300px',
        400: '400px',
        500: '500px',
        600: '600px',
        650: '650px',
        700: '700px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        'screen-ms': '120vh',
        'screen-md': '140vh',
        'screen-lg': '160vh',
      },
      minHeight: {
        800: '800px',
        1000: '1000px',
        'screen-ms': '120vh',
        'screen-md': '140vh',
        'screen-lg': '160vh',
      },
      borderColor: {
        DEFAULT: '#E5E5E5',
      },
      boxShadow: {
        'spread-info': '0 0 0 3px rgba(0, 112, 221, 0.16)',
        'spread-alert': '0 0 0 3px rgba(253, 0, 0, 0.14)',
        DEFAULT: '0px 2px 4px rgba(0, 0, 0, 0.05)'
      },
    },
    screens: {
      xx: '100px',
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
      inherit: 'inherit',
      default: '#1A1A1A',
      disabled: '#a6a6a6',
      body: {
        grey: {
          DEFAULT: '#F9FAFB',
          lightest: 'rgba(229, 229, 229, 0.15)',
        },
      },
      dark: {
        lightest: 'rgba(0, 0, 0, 0.07)',
        light: 'rgba(0, 0, 0, 0.6)',
        DEFAULT: 'rgba(0, 0, 0, 0.9)',
        blue: 'rgba(51, 51, 51, 0.3)',
      },
      warning: { dark: '#b78707', DEFAULT: '#ffc208', disabled: '#ffe597', light: 'rgba(255, 194, 8, 0.5)' },
      basic: {
        disabled: '#ececec',
        DEFAULT: '#e5e5e5',
        light: '#fbfbfb',
        lightest: '#f4f4f4',
        transparent: 'rgba(229, 229, 229, 0.15)',
      },
      info: { disabled: '#97c5f0', DEFAULT: '#0070dd', dark: '#00509f' },
      primary: {
        disabled: 'rgba(20, 168, 0, 0.4)',
        dark: '#118f00',
        DEFAULT: '#14A800',
        lighter: 'rgba(20, 168, 0, 0.2)',
        light: 'rgba(20, 168, 0, 0.15)',
        lightest: 'rgba(20, 168, 0, 0.05)',
      },
      success: { disabled: 'rgba(20, 168, 0, 0.4)', DEFAULT: '#14A800' },
      subtle: { disabled: '#a6a6a6', DEFAULT: '#868686', dark: '#595959' },
      alert: { disabled: 'rgba(254, 12, 12, 0.4)', DEFAULT: '#FE0C0C', dark: '#8E0101' },
      destructive: {
        disabled: 'rgba(254, 12, 12, 0.4)',
        DEFAULT: '#FE0C0C',
        dark: '#8E0101',
        transparent: 'rgba(254, 12, 12, 0.15)',
      },
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
  important: true,
};
