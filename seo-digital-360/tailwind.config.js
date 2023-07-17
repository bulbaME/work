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
            'g-l': '#B3F590',
            'g-d': '#80A86C',
            'b-l': '#A9AFF5',
            'b-d': '#6369A8',
            'p': '#F5D1C1'
        }
    },
    transitionProperty: {
        'underline': 'underline',
        'height': 'height'
    }
},
plugins: [],
}
