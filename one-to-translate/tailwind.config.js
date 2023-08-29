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
                'b-d': '#2A2E75',
                'b-m': '#5960F5',
                'b-l': '#A3A7F7',
                'b2-d': '#4D4F75',
                'b2-l': '#464CC2'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
