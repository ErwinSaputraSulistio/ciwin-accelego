/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        "c-shadow": "0 0 1em rgb(0 0 0/.15)"
      }
      ,
      colors: {
        "c-black": "#222227",
        "c-white": "#F8F8FF",
        "c-darkgrey": "#9F9F9F",
        "c-lightgrey": "#D7D7D7"
      }
    },
  },
  plugins: [],
}

