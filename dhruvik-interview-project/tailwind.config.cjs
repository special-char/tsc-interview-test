/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",],
  theme: {
    fontFamily:{
      "sans":['Poppins',"sans-serif"]
    },
    container: {
      center: true,
      screens: {
        "sm": "1280px"
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
