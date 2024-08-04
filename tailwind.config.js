/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-heavy': 'inset 0 0px 8px rgba(0, 0, 0, 0.3)', 
      },
    },
  },
  plugins: [],
}

