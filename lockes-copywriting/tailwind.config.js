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
                'r': '#E84948',
                'r-o': '#F2654B',
                'o': '#DB784F',
                'o-y': '#F2964B',
                'y': '#E8A648',
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
