/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nsans-light': ['Nsans Light', 'sans-serif'],
        'nsans-medium': ['Nsans Medium', 'sans-serif'],
        'nsans-regular': ['Nsans Regular', 'sans-serif'],
        'nsans-bold': ['Nsans Bold', 'sans-serif'],
      },
    },
  },
  plugins: [ require('tailwind-scrollbar-hide'),],
}
