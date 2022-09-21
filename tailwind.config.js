/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vader: "#d92626",
        deepvader: "#b30000",
      },
      textColor: {
        vader: "#d92626",
      },
    },
  },
  plugins: [],
};
