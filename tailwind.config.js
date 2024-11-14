/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        secondary: "#f6f6f2",
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
