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
                'g-d': '#106136',
                'g-m': '#25E07D',
                'g-l': '#6CE6A5',
                'g2-d': '#2E6146',
                'g2-l': '#1DAD61'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
