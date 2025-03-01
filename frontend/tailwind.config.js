/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "website-color": {
          50: "#f5ffe6",
          100: "#e9fec9",
          200: "#d3fc9a",
          300: "#b5f75f",
          400: "#94ec27",
          500: "#78d30f",
          600: "#5ba907",
          700: "#46800b",
          800: "#39650f",
          900: "#315512",
          950: "#173003",
        },
        "mine-shaft": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#2d2d2d",
        },
      },
    },
  },
  plugins: [],
};
