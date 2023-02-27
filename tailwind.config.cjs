/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./main.html",
    "./index.tsx.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        dmSans:["Sans", ],
      }
    }
  },
  plugins: [require
  ("daisyui"),],
}