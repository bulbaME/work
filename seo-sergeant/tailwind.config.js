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
                'b-d': '#2F6F75',
                'b-m': '#33EB71',
                'b-l': '#B4F89C',
                'b2-d': '#527275',
                'b2-l': '#4EB8C2'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
