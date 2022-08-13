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
        "sm": "1520px",
        
      },
    },

    aspectRatio: {
      image:'4 / 3',
      aimage:'3 / 2',
      bimage:'2 / 3',
      square:'1 / 1',
    },

  extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
