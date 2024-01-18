/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["manrope", "sans-serif"],
      },
    },
    backgroundColor: {
      app_bg: "#141414",
      nav_bg: "#0F0F0F",
      tab_bg: "#1A1A1A",
    },
    colors: {
      black_12: "#1F1F1F",
      white: "#FFFFFF",
      text_grey: "#BFBFBF",
    },
    fontSize: {
      font_18: "18px",
      font_20: "20px",
      font_22: "22px",
      font_32: "38px",
      font_40: "40px",
      font_48: "48px",
    },
    fontWeight: {
      small_weight: "400",
      medium_weight: "500",
    },
  },
  plugins: [],
};
