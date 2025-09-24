/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "synthwave"],
  },
}
