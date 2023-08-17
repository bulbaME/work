/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'v-d': '#7B00A3',
        'v-m': '#B60AF0',
        'v-l': '#C824FF',
        'g-d': '#6FA307',
        'g-m': '#98D916',
        'g-l': '#A8F018'
      },
      maxWidth: {
        'xxs': '15rem'
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
}
