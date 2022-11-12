/** @type {import('tailwindcss').Config} */

const FluidType = require('tailwindcss-fluid-type')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        sm: '480px',
      },
      colors: {
        'lightMode-100': '#0084ff',
        'lightMode-200': '#1372cc',
        'lightMode-300': '#005099',
        'lightMode-400': '#013565',
        'lightMode-paragraph': '#333333',
        'lightMode-heading': '#333333',
        'lightBackground': '#e5f2ff',
        'lightMode-card': '#f3f9ff',
        'lightBackdrop': 'rgba(0, 0, 0, 0.8)',
        'darkMode-100': '#1690ff',
        'darkMode-200': '#46a5ff',
        'darkMode-300': '#73bcff',
        'darkMode-400': '#a2d2ff',
        'darkMode-paragraph': '#707d97',
        'darkMode-card-text': '#ccd7f7',
        'darkMode-heading': '#8891b0',
        'darkMode-card': '#112240',
        'darkBackground': '#0D0D2B',
        'cube': 'rgba(255, 255, 255, 0.4)',
        'darkBackdrop': '#0b0b0b',
      },
    },
  },
  plugins: [FluidType],
}
