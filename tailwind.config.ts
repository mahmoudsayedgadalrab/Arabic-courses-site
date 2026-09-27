import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["var(--font-arabic)", "Tahoma", "Arial", "sans-serif"],
        display: ["var(--font-display)", "var(--font-arabic)", "serif"],
      },
      colors: {
        brand: {
          50: "#f4f7f5",
          100: "#e5ece7",
          200: "#c8d9cd",
          300: "#a0bfa9",
          400: "#719d80",
          500: "#4f7f60",
          600: "#3c654b",
          700: "#31513e",
          800: "#294234",
          900: "#23372c",
          950: "#101e18",
        },
        sand: {
          50: "#fdfbf6",
          100: "#f9f3e6",
          200: "#f1e4c8",
          300: "#e6cf9d",
          400: "#d9b26e",
          500: "#cd984c",
          600: "#bd7f3d",
          700: "#9c6534",
          800: "#7e5230",
          900: "#67442a",
        },
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(35, 55, 44, 0.25)",
        lift: "0 1px 0 rgba(255, 255, 255, 0.6) inset, 0 24px 48px -24px rgba(35, 55, 44, 0.35)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
