/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        robotoSlab: "Roboto Slab, serif",
        raleway: "'Raleway', sans-serif"
      }
    },
  },
  plugins: [],
}
