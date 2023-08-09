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
                'm': '#D538FD',
                'm-p': '#A142E6',
                'p': '#8643FA',
                'p-b': '#4C32E3',
                'b': '#3844FD',
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
