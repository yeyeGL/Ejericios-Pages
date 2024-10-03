/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fondo: "#111315",
        secondfondo: "#1B1D1F",
        button: "#6F757C",
        price: "#BEE3CC",
        soldout: "#ED735D",
        poppular: "#F6C768",
        treefondo: "#282B30",
        patodo: "#6C727F",
        letra: "#D2D5DA"
      },
    },
    fontFamily: {
      sans: ["Inter", "system-ui", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
