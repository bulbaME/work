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
                'r-1': '#C23729',
                'r-2': '#F54433',
                'r-l': '#F7887E',
                'r-d-1': '#752019',
                'r-d-2': '#785D5B'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
