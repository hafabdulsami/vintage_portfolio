/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d4a574",
        secondary: "#c17850",
        accent: "#8b6f47",
        vintage: {
          cream: "#f5e6d3",
          beige: "#e8dcc4",
          brown: "#6b5344",
          orange: "#d97742",
          green: "#7a8450",
          teal: "#5B8A72",
          rose: "#C4837A",
        },
        surface: "#2C2219",
      },
      fontFamily: {
        sans: ["Georgia", "Times New Roman", "serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
