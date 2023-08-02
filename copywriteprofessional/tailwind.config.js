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
                'y-d': '#9E7F03',
                'y': '#EBBD0A',
                'y-l': '#FFD324',
                'b-d': '#00089E',
                'b': '#0914EB'
            }
        },
        transitionProperty: {
            'height': 'height'
        }
    },
}
