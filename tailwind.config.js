/** @type {import('tailwindcss').Config} */
// ! explanation: Tailwind color: you can use it like bg-primary-600 or bg--600-error

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F2FFF7',
          100: '#E2FFED',
          200: '#DFF9E9',
          300: '#C1F1D4',
          400: '#91E4B2',
          500: '#59CF88',
          600: '#33B567',
          700: '#259452',
          800: '#207543',
          900: '#1E5D38',
        },
        error: {
          50: '#F04438',
          100: '#F04438',
          200: '#F04438',
          300: '#F04438',
          400: '#F04438',
          500: '#F04438',
          600: '#F04438',
          700: '#F04438',
          800: '#F04438',
          900: '#F04438',
        },
      },
    },
  },
  plugins: [],
}