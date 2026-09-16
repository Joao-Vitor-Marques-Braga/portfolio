/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      colors: {
        brand: {
          darkest: "#060910",
          dark: "#090d16",
          surface: "#0f172a",
          card: "#111a2e",
          cardHover: "#16223b",
          border: "#1e293b",
          borderHover: "#334155",
          petroleum: "#0c2340",
          navy: "#0a192f",
          accent: "#0284c7",
          accentHover: "#0369a1",
          sky: "#0ea5e9",
        },
      },
      boxShadow: {
        'clean-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'clean-md': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'clean-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}