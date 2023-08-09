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
            'r': '#D60F37',
            'r-l': '#F04164',
            'r-d': '#A80C2B'
        },
        transitionProperty: {
            'height': 'height'
        }
    },
},
plugins: [],
}
