import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0C3049",
          dark: "#071e2e",
          light: "#1A4A6B",
        },
        secondary: {
          DEFAULT: "#F5C225",
          dark: "#d4a61e",
          light: "#f8d96b",
        },
        accent: {
          DEFAULT: "#8FA8BE",
          muted: "#6b8ca4",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".glass": {
          "backdrop-filter": "blur(12px)",
          "-webkit-backdrop-filter": "blur(12px)",
          "background-color": "rgba(255, 255, 255, 0.08)",
          "border": "1px solid rgba(255, 255, 255, 0.15)",
        },
        ".glass-card": {
          "backdrop-filter": "blur(16px)",
          "-webkit-backdrop-filter": "blur(16px)",
          "background-color": "rgba(255, 255, 255, 0.10)",
          "border": "1px solid rgba(255, 255, 255, 0.20)",
          "border-radius": "1rem",
        },
        ".glass-strong": {
          "backdrop-filter": "blur(24px)",
          "-webkit-backdrop-filter": "blur(24px)",
          "background-color": "rgba(255, 255, 255, 0.18)",
          "border": "1px solid rgba(255, 255, 255, 0.30)",
          "border-radius": "0.75rem",
        },
        ".glass-sidebar": {
          "backdrop-filter": "blur(20px)",
          "-webkit-backdrop-filter": "blur(20px)",
          "background-color": "rgba(0, 0, 0, 0.35)",
          "border-right": "1px solid rgba(255, 255, 255, 0.10)",
        },
      });
    }),
  ],
};

export default config;
