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
          DEFAULT: '#B9F8CF', // light green
          dark: '#059669',    // emerald-600 for contrast
        },
        secondary: {
          DEFAULT: '#1E293B', // slate-800
          dark: '#0F172A',   // slate-900
        },
      },
    },
  },
  plugins: [],
}
