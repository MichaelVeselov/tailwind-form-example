const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.gray,
      },
      fontFamily: {
        ubuntu: ['Ubuntu'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
