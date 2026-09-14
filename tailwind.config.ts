import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#152238",
        paper: "#F3F0E7",
        paper2: "#ECE7D8",
        brick: "#A83A2C",
        brick2: "#8C2F24",
        gold: "#C69A3C",
        teal: "#0E6E64",
        line: "#D9D2BE",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      maxWidth: {
        wrap: "1180px",
      },
      boxShadow: {
        stamp: "0 1px 0 rgba(21,34,56,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
