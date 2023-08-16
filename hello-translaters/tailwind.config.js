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
                'm': '#C64FF6',
                'm-p': '#8344D4',
                'p': '#6F56EB',
                'p-b': '#4452D4',
                'b': '#4F8CF6'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
