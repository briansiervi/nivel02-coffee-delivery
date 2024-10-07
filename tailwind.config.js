/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        baloo2: ['"Baloo 2"', 'sans-serif'],
      },
      fontSize: {
        //https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight

        //baloo 2
        'baloo2-title-xl': [
          '48px',
          {
            lineHeight: '130%',
            fontWeight: '800',
          },
        ],
        'baloo2-title-l': [
          '32px',
          {
            lineHeight: '130%',
            fontWeight: '800',
          },
        ],
        'baloo2-title-m': [
          '24px',
          {
            lineHeight: '130%',
            fontWeight: '800',
          },
        ],
        'baloo2-title-s': [
          '20px',
          {
            lineHeight: '130%',
            fontWeight: '700',
          },
        ],
        'baloo2-title-xs': [
          '18px',
          {
            lineHeight: '130%',
            fontWeight: '700',
          },
        ],

        //roboto
        'roboto-text-l': [
          '20px',
          {
            lineHeight: '130%',
            fontWeight: '400',
          },
        ],
        'roboto-text-m': [
          '16px',
          {
            lineHeight: '130%',
            fontWeight: '400',
          },
        ],
        'roboto-text-s': [
          '14px',
          {
            lineHeight: '130%',
            fontWeight: '400',
          },
        ],
        'roboto-text-xs': [
          '12px',
          {
            lineHeight: '130%',
            fontWeight: '700',
          },
        ],
        'roboto-text-tag': [
          '10px',
          {
            lineHeight: '130%',
            fontWeight: '400',
          },
        ],
        'roboto-text-button-g': [
          '14px',
          {
            lineHeight: '160%',
            fontWeight: '700',
          },
        ],
        'roboto-text-button-m': [
          '12px',
          {
            lineHeight: '160%',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        'yellow-dark': '#c47f17',
        yellow: '#dbac2c',
        'yellow-light': '#f2e9c9',

        'purple-dark': '#4b2995',
        purple: '#8047f8',
        'purple-light': '#ebe5f9',

        'base-title': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#574f4d',
        'base-label': '#8d8686',
        'base-hover': '#d7d5d5',

        'base-button': '#e6e5e5',
        'base-input': '#ededed',
        'base-card': '#f3f2f2',
        background: '#fafafa',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
