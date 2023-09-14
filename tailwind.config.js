/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: '360px',
        sm2:'520px',
        md: '760px',
        lg: '976px',
        xl: '1040px',
      }
    },
  },
  plugins: [],
}

