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
        emerald: {
          950: "#091714",
          900: "#102B26", // Primary background
          850: "#14332D",
          800: "#183B32", // Forest green
          700: "#224F44",
          600: "#2C6356",
        },
        gold: {
          light: "#F3E4C3",
          DEFAULT: "#D6B779", // Champagne gold
          dark: "#B89655",
          antique: "#92744A", // Bronze
          muted: "rgba(214, 183, 121, 0.15)",
        },
        ivory: {
          DEFAULT: "#F8F4EB", // Warm ivory
          muted: "rgba(248, 244, 235, 0.75)",
          dark: "#E3DDD0",
        },
        bronze: {
          DEFAULT: "#92744A",
          dark: "#6F5633",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cinzel)", "var(--font-cormorant)", "serif"],
        script: ["var(--font-alex-brush)", "cursive"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F3E4C3 0%, #D6B779 50%, #92744A 100%)",
        "gold-gradient-soft": "linear-gradient(135deg, rgba(243, 228, 195, 0.8) 0%, rgba(214, 183, 121, 0.8) 50%, rgba(146, 116, 74, 0.8) 100%)",
        "emerald-radial": "radial-gradient(circle at center, #183B32 0%, #102B26 60%, #091714 100%)",
        "emerald-conic": "conic-gradient(from 180deg at 50% 50%, #102B26 0deg, #183B32 180deg, #102B26 360deg)",
      },
      animation: {
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "light-sweep": "lightSweep 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        lightSweep: {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "50%, 100%": { transform: "translateX(250%) skewX(-20deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
