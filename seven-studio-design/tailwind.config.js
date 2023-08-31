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
                'm': '#E44FF6',
                'm-p': '#9D44D4',
                'p': '#8C58EB',
                'p-b': '#4F44D4',
                'b': '#4F6EF6'
            },
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
