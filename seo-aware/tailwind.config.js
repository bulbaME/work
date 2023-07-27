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
                'g-d': '#25702A',
                'g-m': '#4FF05A',
                'g-l': '#99F29F',
                'ga-d': '#477049',
                'ga-l': '#3FBD48'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
