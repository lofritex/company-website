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
        "mobScreen" : "150vh", 
        "nav"  : "8%",
        "logo" : "150px",
        "pic"  : "60%",
        "cardWidth" : "333px",
        "cardHeight-1" : "260px",
        "screenSize" : "87vh",
      },
      colors:{
        "primary" : "#FFFFFF",
        "secondary" : "#F9F9FF",
        "footerCaption" : "#718096",
      }
    },
  },
  plugins: [],
}