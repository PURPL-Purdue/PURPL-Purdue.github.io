/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.js',
    './src/pages/**/*.{html,js}',
    './src/components/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      'display': ['chakra-petch', 'sans-serif'],
      'display2': ['roboto-mono-bold', 'sans-serif'],
      'body': []
    },
    extend: {
      colors: {
        'dusk': '#181618',
        'moon': '#34015b',
        'stardust': '#9100FF',
        'old-gold': '#DBC885',

      },
    },
  },
  plugins: [],
}

