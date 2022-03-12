module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors:{
    //   'mountain-meadow': {  DEFAULT: '#10B9A2',  '50': '#8CF5EC',  '100': '#79F3E9',  '200': '#53F0E1',  '300': '#2EEDD8',  '400': '#13DFC6',  '500': '#10B9A2',  '600': '#0C8574',  '700': '#075246',  '800': '#031E19',  '900': '#000000'},
    // }
  },
  plugins: [require("daisyui"), require('@tailwindcss/forms')],
}
