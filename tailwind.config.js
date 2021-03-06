/* eslint-env node */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        ceil: "#90adc6",
        space: "#434d59",
        pewter: "#e9eaec",
        sunglow: "#fad02c",
        sunny: "#edef7c",
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
