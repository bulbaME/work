/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './modules/**/*.{js,ts,jsx,tsx,mdx}',
        './public/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'g-d': '#5B994B',
                'g-m': '#61FF3A',
                'g-l': '#9AE687',
                'm-d': '#993C85',
                'm-l': '#E687D1'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
