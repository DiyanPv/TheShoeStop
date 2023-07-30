/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: { raw: "(max-width: 310px)" },

        sm: { raw: "(max-width: 550px)" },

        md: { raw: "(min-width: 551px)" },
        lg: { raw: "(min-width: 800px)" },
        xl: { raw: "(min-width: 1000px)" },
      },
    },
  },
  plugins: [],
};
