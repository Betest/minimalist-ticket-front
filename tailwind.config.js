/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-js': '#f7df1e',
        betest: '#129BFC',
        'betest-light': '#199afc',
        'betest-dark': '#1D5682',
      },
    },
  },
  plugins: [],
}