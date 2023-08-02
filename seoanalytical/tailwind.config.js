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
            'p-l': 'rose-50',
            'p-m': '#F5B0B0',
            'p-d': '#A86868',
            'g-l': '#8fd9a4',
            'g-d': '#58A86E',
            'b-l': '#8fc3d9'
        },
        transitionProperty: {
            'height': 'height'
        }
    },
},
plugins: [],
}
