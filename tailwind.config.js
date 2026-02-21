/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E11D48', // rose-600 (color automotriz profesional)
          dark: '#9F1239',   // rose-800
        },
        secondary: {
          DEFAULT: '#1E293B', // slate-800 (autoridad)
          dark: '#0F172A',   // slate-900
        },
      },
    },
  },
  plugins: [],
}
