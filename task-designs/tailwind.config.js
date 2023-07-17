/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'y-l': '#FCC73A',
        'y-d': '#B08617',
        'g': '#30FFBE',
        'p-l': '#D60AFF',
        'p-d': '#9919B3'
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
}
