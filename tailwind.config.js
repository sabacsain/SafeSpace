/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#FFFFFF',
      secondary: {
        100: '#6E84BA', //BlueVico
        200: '#3E5798', //Secondary
      },
      tertiary: {
        100: '#E8EAEF', //C
        200: '#D8D8D8', //B
        300: '#C4C2C2', //B1
        400: '#91A1BD', //A
      },
      accent: '#8B3E98',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

