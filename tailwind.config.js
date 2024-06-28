/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      },
    },
    colors: {
      black: "#171717",
      gray: "#262626",
      lightgray: "#404040",
      white: "#F5F5F5",
      primary: "#D8B4FE", // purple
      // Bubble colors
      green: "#A3E635",
      blue: "#38BDF8",
      red: "#EF4444",
      yellow: "#FDE047",
      // Input
      input: {
        bg: "#44403C",
        border: "#78716C",
      },
    },
  },
  plugins: [],
};
