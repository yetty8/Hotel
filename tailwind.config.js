/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lux-gold": "#C9A86A",
        "lux-gold-dark": "#B88F4E",
        "lux-cream": "#E8E1D5", // consistent with your bg
        "lux-black": "#111111", // for dark backgrounds
      },
      boxShadow: {
        luxury: "0 8px 25px rgba(0,0,0,0.35)",
        goldGlow: "0 0 15px rgba(201,168,106,0.45)", // used for Footer hover
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
