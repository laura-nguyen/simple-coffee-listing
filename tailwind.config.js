/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1B1D1F",
        darker: "#111315",
        grayish: "#6F757C",
        greenish: "#BEE3CC",
        offwhite: "#FEF7EE",
        yellow: "#F6C768",
        red: "#ED735D",
      },
      fontSize: {
        heading: "2rem", // 32px
        body: "1rem", // 16px
        label: "0.875rem", // 14px
        small: "0.625rem", // 10px
        price: "0.75rem", // 12px
      },
    },
  },
  plugins: [],
};
