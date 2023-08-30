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
                'b-d': '#756437',
                'b-m': '#F5D073',
                'b-l': '#F7E6BE',
                'b2-d': '#756E5A',
                'b2-l': '#C2A55B'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
