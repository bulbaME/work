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
                'b-d': '#005E99',
                'b-m': '#008DE6',
                'b-l': '#19A6FF',
                'y-d': '#995900',
                'y-l': '#E68801'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
