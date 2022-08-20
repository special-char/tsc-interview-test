/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {

    fontFamily:{
      body: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      screens: {
        "sm": "1440px"
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem'
      }
    },
    fontWeight: {
      'thin': "200",
      'light': "300",
      'normal': "400",
      'medium': "500",
      'semibold': "600",
      'bold': "900",
    },
    extend: {
      colors:{
         primary :"#ff497c",
         secondary :"#1f2732",
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
