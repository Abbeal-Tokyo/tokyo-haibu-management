import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        gray: "var(--gray)",
        event1: "var(--event1)",
        event2: "var(--event2)",
        primaryOpacity70: "rgb(from var(--primary) r g b / 0.7)",
      },
      backgroundColor: {
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        gray: "var(--gray)",
        event1: "var(--event1)",
        event2: "var(--event2)",
        backgroundOpacity40: "rgb(from var(--background) r g b / 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
