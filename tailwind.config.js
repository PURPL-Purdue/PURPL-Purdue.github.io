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
      'display2': ['roboto-mono', 'sans-serif'],
      'display2-light': ['roboto-mono-light', 'sans-serif'],
      'display2-bold': ['roboto-mono-bold', 'sans-serif'],

      'body': [],
    },
    extend: {
      colors: {
        'dusk': '#181618',
        'moon': '#34015b',
        'stardust': '#9100FF',
        'old-gold': '#DBC885',
        'off-white': '#F5F5F5',
        'orion': '#34015B',
        'oscuro': '#3E3941',
        'jet-grey': '#D3D0CB',
        'boilermaker-gold': '#CFB991',
      },
      backgroundImage: {
        'gradient-background': "url('../public/images/backgrounds/background_1.jpg')",
        'mountains-background': "url('../public/images/backgrounds/background_2.jpg')",
        'DSC01166-background': "url('../public/images/DSC/DSC01166.jpg')",
        'plume-background': "url('../public/images/projects/testbed/20250831-SelectedMedia/plume3.PNG')"
      },
      boxShadow: {
        'lg-top': '0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1)',
        'md-top': '0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.border-image-dynamic': {
          borderWidth: theme('borderWidth'), // Use theme border width
          borderImage: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to)) 1`,
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

