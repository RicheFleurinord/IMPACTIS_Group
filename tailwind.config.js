/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1F3E",
          light: "#112240",
          dark: "#08192D",
        },
        gold: {
          DEFAULT: "#BFA181",
          light: "#C9A96E",
          dark: "#A8845A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};