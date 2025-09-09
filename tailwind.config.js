/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#0A2540", // deep navy
        secondary: "#F5F7FA", // light gray
        accent: "#FF6B00", // orange
        textDark: "#333333",
      },
    },
  },
  plugins: [],
};
