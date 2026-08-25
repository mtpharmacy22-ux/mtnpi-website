import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#123B31",
          50: "#EAF2EF",
          100: "#CFE3DC",
          200: "#9FC7B8",
          300: "#6FAB94",
          400: "#3F8F70",
          500: "#1F6B51",
          600: "#175641",
          700: "#123B31",
          800: "#0D2B24",
          900: "#081C17"
        },
        sage: {
          DEFAULT: "#3A7D5C",
          400: "#5C9C7A",
          500: "#3A7D5C",
          600: "#2E6549"
        },
        cream: {
          DEFAULT: "#FAF6EC",
          50: "#FFFEFB",
          100: "#FAF6EC",
          200: "#F3ECD9"
        },
        skyline: {
          DEFAULT: "#E7F1F3",
          100: "#F1F8F9",
          200: "#E7F1F3",
          300: "#CFE4E8"
        },
        gold: {
          DEFAULT: "#C99A3E",
          400: "#D8B15F",
          500: "#C99A3E"
        },
        ink: "#16221E"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"]
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,59,49,0.04), 0 8px 24px -8px rgba(18,59,49,0.12)",
        lift: "0 20px 45px -20px rgba(18,59,49,0.35)"
      },
      backgroundImage: {
        "vitals-line": "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%2224%22 viewBox=%220 0 200 24%22%3E%3Cpath d=%22M0 12 H70 L80 2 L90 22 L100 12 H200%22 fill=%22none%22 stroke=%22%23C99A3E%22 stroke-width=%221.5%22/%3E%3C/svg%3E')"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
