import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      container: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#48A860", // Chateau Green
        // primary: "#1A202C",
        secondary: "#98FB98", // Mint Green
        //current: "currentColor",
        //transparent: "transparent",
        //white: "#FFFFFF",
        //black: "#090E34",
        //dark: "#1D2144",
        //primary: "#4A6CF7",
        //yellow: "#FBB840",
        "body-color": "#959CB1",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
