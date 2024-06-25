const theme = require("./theme.json");
const tailpress = require("@jeffreyvr/tailwindcss-tailpress");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.php",
    "./**/*.php",
    "./resources/css/*.css",
    "./resources/js/*.js",
    "./safelist.txt",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "0rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["'M PLUS 1p'", "sans-serif"],
        rounded: ["'M PLUS Rounded 1c'", "sans-serif"],
      },
      colors: tailpress.colorMapper(
        tailpress.theme("settings.color.palette", theme)
      ),
      fontSize: tailpress.fontSizeMapper(
        tailpress.theme("settings.typography.fontSizes", theme)
      ),
    },
    screens: {
      xs: "480px",
      sm: "600px",
      md: "782px",
      lg: tailpress.theme("settings.layout.contentSize", theme),
      xl: tailpress.theme("settings.layout.wideSize", theme),
      "2xl": "1440px",
    },
  },
  plugins: [
    tailpress.tailwind,
    plugin(function ({ addUtilities }) {
      addUtilities({
        html: {
          "font-family": "'M PLUS 1p', sans-serif",
          "font-size": "62.5%",
          "scroll-behavior": "smooth",
          "overflow-x": "hidden",
        },
      });
    }),
  ],
};
