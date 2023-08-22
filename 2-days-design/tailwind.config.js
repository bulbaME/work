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
                'g1': '#3AE85B',
                'g2': '#3AE85B',
                'gm': '#88DB41',
                'g-y': '#D1F23D',
                'y': '#E8E03A'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
