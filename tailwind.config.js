/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,css}"],
  theme: {
    colors:{
    },
    extend: {},
    fontFamily: {
      Cairo: "'Cairo', serif"
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
  plugins: [],
}
