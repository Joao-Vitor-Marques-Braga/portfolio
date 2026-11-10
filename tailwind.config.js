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
        beige: {
          50: '#fffdf9',
          100: '#fff8ee',
          200: '#fbecd6', // Tom bege claro solicitado pelo usuário
          300: '#f5deb9',
          400: '#eec996',
          500: '#dcab6d',
          600: '#bf8446',
          700: '#955e2b',
          800: '#643c16',
          900: '#2d1808',
          950: '#1a0d04',
        },
        brand: {
          bg: "#fbecd6",
          card: "#fffdf9",
          cardHover: "#ffffff",
          border: "#edd7be",
          borderHover: "#d9bd9c",
          accent: "#b45309",
          accentHover: "#92400e",
          warmText: "#2c1c11",
          warmMuted: "#6f5643",
        },
      },
      boxShadow: {
        'warm-sm': '0 1px 3px 0 rgba(80, 45, 15, 0.05)',
        'warm-md': '0 4px 8px -1px rgba(80, 45, 15, 0.08), 0 2px 4px -2px rgba(80, 45, 15, 0.04)',
        'warm-lg': '0 10px 20px -3px rgba(80, 45, 15, 0.1), 0 4px 6px -4px rgba(80, 45, 15, 0.04)',
        'warm-xl': '0 20px 25px -5px rgba(80, 45, 15, 0.12), 0 8px 10px -6px rgba(80, 45, 15, 0.06)',
      },
    },
  },
  plugins: [],
}
