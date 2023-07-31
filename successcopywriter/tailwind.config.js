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
                'o-d': '#A84E1D',
                'o-m': '#F58042',
                'o-l': '#FF975E',
                'b-d': '#0CA8A2',
                'b-l': '#42F5EE'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width',
        }
    },
}
