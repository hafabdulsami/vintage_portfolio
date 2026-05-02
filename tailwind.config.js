/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./minimal.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src-minimal/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C6F542",
        secondary: "#7C5CFF",
        accent: "#FF6B4A",
        ink: {
          DEFAULT: "#0B0B0F",
          50: "#FFFFFF",
          100: "#E4E4E7",
          200: "#9A9AA8",
          300: "#6B6B78",
          400: "#3A3A44",
          500: "#23232C",
          600: "#1A1A22",
          700: "#13131A",
          800: "#0B0B0F",
          900: "#050507",
        },
        lime: "#C6F542",
        violet: "#7C5CFF",
        coral: "#FF6B4A",
        surface: "#13131A",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
      },
    },
  },
  plugins: [],
};
