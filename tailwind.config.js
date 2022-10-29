/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      backgroundImage: {
        "hero-pattern": "url('/background.png')",
      },
      colors: {
        background: "#0F1729",
        text: {
          primary: "#B3C5EF",
          secondary: "#22d3ee",
        },
      },
    },
  },
  plugins: [],
};
