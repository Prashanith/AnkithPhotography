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
        secondary:"#C4DFDF",
        tertiary:"#20262E"
      }
    },
  },
  plugins: [],
}

