/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["manrope", "sans-serif"],
      },
      backgroundImage: {
        "hero-bg": "url('./assets/imgs/moviepage/bg_movie.png')",
      },
    },

    backgroundColor: {
      app_bg: "#141414",
      nav_bg: "#0F0F0F",
      tab_bg: "#1A1A1A",
      red_bg: "#E50000",
      black_bg_10: "#1A1A1A",
      epBG: "rgba(0, 0, 0, 0.5)",
    },
    colors: {
      black_12: "#1F1F1F",
      white: "#FFFFFF",
      bg3: "#141414",
      text_grey: "#BFBFBF",
      text_grey_2: "#999999",
      gradient_bg1: "rgba(20, 20, 20, 1)",
      gradient_bg2: "rgba(20, 20, 20, 0)",
    },
    fontSize: {
      font_18: "18px",
      font_20: "20px",
      font_22: "22px",
      font_38: "38px",
      font_40: "40px",
      font_48: "48px",
      font_58: "58px",
    },
    fontWeight: {
      small_weight: "400",
      medium_weight: "500",
      big_weight: "700",
    },
    screens: {
      laptop: "1420px",
      mediumdesktop: "1730px",
      mobile: "1105px",
    },
  },
  plugins: [],
};
