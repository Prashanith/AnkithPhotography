/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#100F0F",
        secondary:"#F6F1F1"
      }
    },
  },
  plugins: [],
}

