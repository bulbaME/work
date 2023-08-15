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
                'g-d': '#497006',
                'g-m': '#9DEF0B',
                'g-l': '#B9F255',
                'g2-d': '#557027',
                'g2-l': '#7BBD09'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
