/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        floating: "floating 10s ease-in-out infinite",
      },
      keyframes: {
        floating: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(50px, -30px) scale(1.1)" },
          "50%": { transform: "translate(-30px, 50px) scale(0.9)" },
          "75%": { transform: "translate(30px, -50px) scale(1.05)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
