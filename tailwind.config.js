/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "moon-rose": "#B39793",
        "moon-cream": "#FCEDDA",
        "moon-white": "#FAF9F6",
        "moon-rose-dark": "#8A6E6C",
        "moon-rose-light": "#DCC0BD",
        "moon-contrast": "#2F2A28",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
