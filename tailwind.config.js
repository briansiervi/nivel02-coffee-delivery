/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
          fontWeight: '800', //extraBold
        },
      ],
      'baloo2-title-l': [
        '32px',
        {
          lineHeight: '130%',
          fontWeight: '800', //extraBold
        },
      ],
      'baloo2-title-m': [
        '24px',
        {
          lineHeight: '130%',
          fontWeight: '800', //extraBold
        },
      ],
      'baloo2-title-s': [
        '20px',
        {
          lineHeight: '130%',
          fontWeight: '700', //bold
        },
      ],
      'baloo2-title-xs': [
        '18px',
        {
          lineHeight: '130%',
          fontWeight: '700', //bold
        },
      ],

      //roboto
      'roboto-text-l': [
        '20px',
        {
          lineHeight: '130%',
          fontWeight: '400', //regular
        },
      ],
      'roboto-text-m': [
        '16px',
        {
          lineHeight: '130%',
          fontWeight: '400', //regular
        },
      ],
      'roboto-text-s': [
        '14px',
        {
          lineHeight: '130%',
          fontWeight: '400', //regular
        },
      ],
      'roboto-text-xs': [
        '12px',
        {
          lineHeight: '130%',
          fontWeight: '700', //bold
        },
      ],
      'roboto-text-tag': [
        '10px',
        {
          lineHeight: '130%',
          fontWeight: '700', //bold
        },
      ],
      'roboto-text-button-g': [
        '14px',
        {
          lineHeight: '160%',
          fontWeight: '700', //bold
        },
      ],
      'roboto-text-button-m': [
        '12px',
        {
          lineHeight: '160%',
          fontWeight: '700', //bold
        },
      ],
    },
  },
  plugins: [],
}
