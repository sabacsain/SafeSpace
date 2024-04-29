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
      animation: {
        'slide-in': 'slideIn 0.2s ease-in forwards',
        'slide-out': 'slideOut 0.2s ease-out forwards',
        'fade-in': 'fadeIn 0.2s ease-in forwards',
        'fade-out': 'fadeOut 0.2s ease-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        slideOut: {
          '100%': {
            transform: 'translateY(50%)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeOut: {
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};

