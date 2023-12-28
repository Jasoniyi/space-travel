/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        spaceBcg: "url('/bck.svg')",
        homeBck: "url('/HomeBck2.svg')",
      },
      colors: {
        spaceBlack: "var(--space-black)",
        spaceBlue: "var(--space-blue)",
        spaceWhite: "var(--space-white)",
      },
    },
  },
  plugins: [],
};
export default config;
