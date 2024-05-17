/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx}",
    "./components/**/*.{html,js,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      arial: ["Arial", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        gradientNavbar:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2)), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      },
      colors: {
        gold: "#D9A745",
      },
    },
  },
  plugins: [],
};
