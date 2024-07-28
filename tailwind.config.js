/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        "half" : "50%", 
        "nav"  : "8vh",
        "logo" : "150px"
      },
      colors:{
        "primary" : "#fafafa",
        "secondary" : "#f9f9ff",
      }
    },
  },
  plugins: [],
}