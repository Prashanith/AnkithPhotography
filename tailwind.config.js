/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F17EA6",
        secondary: "#0C0C0C",
        tertiary: "#FCF8F3",
      },
      backgroundImage: {
        homeBgOne: "url('/assets/galley_1.png')",
        homeBgTwo: "url('/assets/galley_9.jpg')",
      },
    },
  },
  plugins: [],
};
