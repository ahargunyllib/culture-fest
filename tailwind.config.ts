import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        plusJakartaSans: ['var(--font-plus-jakarta-sans)'],
        instrumentSans: ['var(--font-instrument-sans)'],
        neueHaasDisplay: ['var(--font-neue-haas-display)'],
      }
    }
  },
  plugins: [],
};
export default config;
