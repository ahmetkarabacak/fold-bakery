import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'buttery-yellow': '#F5E6C8',
        'golden-brown': '#D4A017',
        'dark-roast': '#3E2723',
        'off-white': '#FAFAFA',
      },
      fontFamily: {
        'serif': ['var(--font-playfair)', 'serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

