/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    extend: {
      screens:{
      'ml':'375px',
      'sm':'480px'
      },
      spacing:{
        big:'48rem',
        '7/10':'70%'

      },
    },
    fontFamily:{
      nunito:['Nunito','sans-serif']
    }
  },
  plugins: [],
}

