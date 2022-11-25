/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,css}",
        "./node_modules/flowbite/**/*.js"
],
  theme: {
    colors:{
      "primary" : "#722F37",
      "white" : "#fff",
      "new-black":"#1D1D1D",
      "move":"#3C2F72",
      "new-primary":'#8D585F',
      "new-new-priamry":"#733139",
      "gold":"#E1C34B",
      "silver":"#A5B3BB",
      "new-green":"#2AC94F",

    },
    extend: {},
    fontFamily: {
      FF: "'FF', serif"
    },
    screens: {
      'md':'1025px'
    },
    container: {
      center: true,
      padding: '2rem',
      margin: 'auto',
      width: 'fit-content',
      screens: {
        lg: '1025px',
        xl: '1440px',
        // "2xl" : '1124px'
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    // require('@tailwindcss/forms'),
    // require('tailwindcss-rtl'),
  ],
}
