/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'rgb(124, 58, 237)',
        secondary:'rgb(132, 210, 224)'
      }
    },
  },
  plugins: [],
}