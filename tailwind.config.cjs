/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    colors: {
      primary:'#6c6c6c',
     secondary :'#c6c6c6',
     secondary1: '#e9e9e9',
     white: '#ffffff',
     black: '#272727',
     pink: '#ed458b',
     green: '#0CCE17',
     lightblue: '#37ABC8',
     orange: '#F68C09',
    },
    fontFamily:{
      "sans": ['Poppins', "san-serif"],
    },
    aspectRatio: {
      "image": '3 / 2',
      "square": '1 / 1',
    },
    extend: {},
  },
  plugins: [
    
  ],
}
