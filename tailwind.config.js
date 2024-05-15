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
      'display-bold': ['chakra-petch-bold', 'sans-serif'],
      'display-medium': ['chakra-petch-medium', 'sans-serif'],
      'display-light': ['chakra-petch-light', 'sans-serif'],
      'display2': ['roboto-mono-bold', 'sans-serif'],
      'display2-light': ['roboto-mono-light', 'sans-serif'],
      'body': [],
    },
    extend: {
      colors: {
        'dusk': '#181618',
        'moon': '#34015b',
        'stardust': '#9100FF',
        'old-gold': '#DBC885',
        'off-white': '#F5F5F5',
      },
      backgroundImage: {
        'mountains-background': "url('../public/images/background_2.jpg')",
      },
    },
  },
  plugins: [],
}

