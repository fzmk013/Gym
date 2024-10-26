/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-20" : "#f8f4EB",
        "gray-50" : "#EFE6E6",
        "gray-100" : "#dfcccc",
        "gray-500" : "#374151",
        "primary-100" : "#e0f2fe",
        "primary-300" : "#0369a1",
        "primary-500" : "#6366f1",
        "secondary-400" :"#e0e7ff",
        "secondary-500" :"#c7d2fe",
      },
      backgroundImage : (theme) => ({
        "gradient-yellowred" : "linear-gradient(90deg , #3730a3 0%, #e0e7ff 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),

    fontFamily: {
      dmsans: ["DM Sans" , "sans-serif"],
      montserrat: ["Montserrat" , "sans-serif"]
    },
   
    content: {
      abstractwaves: "url('./assets/AbstractWaves.png')",
    },

  screens :{
    xs : "480px",
    sm : "768px",
    md : "1060px"
  },
      },
  },
  plugins: [],
}