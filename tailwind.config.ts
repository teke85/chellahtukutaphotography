import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aboreto: ["var(--font-aboreto)"],
        jost: ["var(--font-jost)"],
        cormorant: ["var(--font-cormorant)"],
        ibarra: ["var(--font-ibarra)"],
        playfair: ["var(--font-playfair)"],
        inter: ["var(--font-inter)"],
        lora: ["var(--font-lora)"],
        "geist-sans": ["var(--font-geist-sans)"],
        "geist-mono": ["var(--font-geist-mono)"],
      },
      colors: {
        // ChellahTukuta Photography Brand Colors
        gold: {
          50: "#fefdf7",
          100: "#fef9e7",
          200: "#fdf2c4",
          300: "#fbe897",
          400: "#f8d968",
          500: "#D6B978", // Your main brand color
          600: "#c29f5e",
          700: "#a3834d",
          800: "#856742",
          900: "#6e5539",
          950: "#3f2f1c",
        },
        // Complementary warm tones for photography
        cream: {
          50: "#fefefe",
          100: "#fefcf8",
          200: "#fdf8f0",
          300: "#fbf2e4",
          400: "#f8ebd5",
          500: "#f5e2c2",
          600: "#edd5a8",
          700: "#e1c088",
          800: "#d1a567",
          900: "#be8d4c",
        },
        // Deep charcoal for contrast and elegance
        charcoal: {
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
          950: "#2a2a2a",
        },
        // Warm whites and off-whites
        pearl: {
          50: "#ffffff",
          100: "#fffffe",
          200: "#fffcf7",
          300: "#fff9f0",
          400: "#fff4e6",
          500: "#ffefd9",
          600: "#ffe8c7",
          700: "#ffdda8",
          800: "#ffcc7d",
          900: "#ffb347",
        },
        // Accent bronze for highlights
        bronze: {
          50: "#fdf9f5",
          100: "#faf1e8",
          200: "#f4e0c9",
          300: "#ecc9a1",
          400: "#e1ab73",
          500: "#d89150",
          600: "#ca7c39",
          700: "#a96430",
          800: "#87502d",
          900: "#6e4329",
          950: "#3b2114",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;
