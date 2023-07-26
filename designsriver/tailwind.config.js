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
                'b': '#238EF8',
                'b-c': '#1EADD9',
                'c': '#2EF0EB',
                'c-g': '#1ED99E',
                'g': '#23F878'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
