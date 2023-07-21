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
                'y-d': '#AD8E31',
                'y-m': '#FAD35E',
                'y-l': '#FFDE7A',
                'b-d': '#1F39AD',
                'b-l': '#5F7BFA'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
