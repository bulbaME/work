/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './modules/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'm-d': '#751335',
                'm-m': '#F5276F',
                'm-l': '#F771A0',
                'm2-d': '#752642',
                'm2-l': '#C21F58'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
