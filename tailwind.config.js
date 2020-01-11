const tw = require('tailwindcss/defaultConfig');

module.exports = {
  theme: {
    extend: {
      colors: {
        'transparent-black': 'hsla(0, 0%, 0%, 0.33)',
        gold: '#ffc600',
        'gold-light': '#ffd545',
        'gold-lightest': '#fff7b6',
      },
      fontFamily: {
        display: ['Antonio', ...tw.theme.fontFamily.sans],
        sans: ['Montserrat', ...tw.theme.fontFamily.sans],
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {},
  plugins: [],
};
