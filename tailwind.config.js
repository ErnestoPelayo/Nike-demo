/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      custom: ['Bebas Neue', 'sans-serif'], // Usando una fuente local o personalizada
    },
  },
  plugins: [],
}