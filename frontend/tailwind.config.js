/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef2ff",
          100: "#e6ffe0ff",
          200: "#8eff9f72",
          300: "#87ff93a8",
          400: "#81f8c8a0",
          500: "#63f182a1",
          600: "#46e5988a",
          700: "#38ca9965",
          800: "#30a34f48",
          900: "#36812e34",
          950: "#1b4b362c",
        },
        score: {
          good: "#22c55e",
          medium: "#f59e0b",
          bad: "#ef4444",
        },
      },
    },
  },
  plugins: [],
};
