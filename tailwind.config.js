/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'c-shadow': '0 0 1em rgb(0 0 0/.15)'
      },
      colors: {
        'c-black': '#222227',
        'c-white': '#F8F8FF',
        'c-darkgrey': '#9F9F9F',
        'c-lightgrey': '#D7D7D7',
        'c-t-black': 'rgba(0, 0, 0, 0.5)'
      },
      keyframes: {
        'slide-x': {
          '0%': {
            opacity: '0',
            transform: 'scaleX(0)'
          },
          '100%': {
            opacity: '1',
            transform: 'scaleX(1)'
          }
        }
      }
    },
  },
  plugins: [],
}

