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
                'p': '#BC6CF6',
                'p-b': '#815DD4',
                'b': '#7772EB',
                'b-c': '#5D79D4',
                'c': '#6CB0F6'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
