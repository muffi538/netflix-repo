/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        obsidian: "#0a0a0a",
        charcoal: "#141414",
        ember: "#e50914",
        emberdark: "#8b0710",
        gold: "#d4af37",
        pearl: "#f5f5f0",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "'Archivo Black'", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
      },
      animation: {
        "flash-sweep": "flash-sweep 1.2s ease-in-out forwards",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-slower": "float-slow 9s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "particle-rise": "particle-rise 14s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        "flash-sweep": {
          "0%": { transform: "translateX(-150%) skewX(-15deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(150%) skewX(-15deg)", opacity: "0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", filter: "blur(20px)" },
          "50%": { opacity: "1", filter: "blur(30px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "particle-rise": {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "0.8" },
          "90%": { opacity: "0.4" },
          "100%": { transform: "translateY(-100vh) translateX(20px)", opacity: "0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(229, 9, 20, 0.35)",
        "glow-gold": "0 0 40px rgba(212, 175, 55, 0.3)",
        "glow-white": "0 0 60px rgba(255, 255, 255, 0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
