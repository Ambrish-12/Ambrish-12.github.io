/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'cust-gray':'#DDDDDD',
        'dark-green':'#627254',
        'light-green':'#76885B'
      }
    },
  },
  plugins: [],
}

