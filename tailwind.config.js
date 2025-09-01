/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        oswald: ['Oswald', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
         keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0,0) rotate(0deg)", opacity: "0.6" },
          "25%": { transform: "translate(15px,-15px) rotate(90deg)", opacity: "0.8" },
          "50%": { transform: "translate(-10px,-25px) rotate(180deg)", opacity: "0.4" },
          "75%": { transform: "translate(-20px,-10px) rotate(270deg)", opacity: "0.7" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translate(0,0) scale(1)", opacity: "0.5" },
          "50%": { transform: "translate(25px,-20px) scale(1.3)", opacity: "0.8" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translate(0,0) rotate(0deg)", opacity: "0.7" },
          "33%": { transform: "translate(-20px,15px) rotate(120deg)", opacity: "0.4" },
          "66%": { transform: "translate(15px,-20px) rotate(240deg)", opacity: "0.9" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        "gentle-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        shimmer: {
          "0%": { opacity: "0.4" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.4" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out",
        "fade-in-right": "fade-in-right 0.8s ease-out",
        "float-slow": "float-slow 12s ease-in-out infinite",
        "float-medium": "float-medium 8s ease-in-out infinite",
        "float-fast": "float-fast 6s ease-in-out infinite",
        heartbeat: "heartbeat 2s ease-in-out infinite",
        "gentle-pulse": "gentle-pulse 3s ease-in-out infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
      },
    },

  },
  plugins: [],
  }}
