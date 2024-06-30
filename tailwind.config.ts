import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        "sans-manrope": ["var(--font-manrope)"],
        "sans-ibm-plex": ["var(--font-ibm-plex-sans)"]
      },
      fontSize: {
        "2xs": "8px"
      },
      borderRadius: {
        base: "4px"
      },
      colors: {
        "primary-gray": "#16191F",
        "dark-gray": "#71757A",
        "base-gray": "#6D6D6D",
        "light-gray": "#ADB1B8",
        "negative-red": "#EF454A",
        "positive-green": "#20B26C",
        "pure-blue": "#0099FF",
        "pure-cyan": "#00CCFF",
        "off-white": "#C9C9C9"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
