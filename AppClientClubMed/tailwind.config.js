/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "blue": "#00558A",
          "blue-alt": "#00660A"
        }
      },
    },
    },
    plugins: [require("daisyui")],
}
