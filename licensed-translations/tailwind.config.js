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
                'b-d': '#263180',
                'b-m': '#4C61FF',
                'b-l': '#99A5FF',
                'b2-d': '#4D5280',
                'b2-l': '#3D4ECC'
            },
            minHeight: {
                'b-h-1': 'calc(100vh - 6rem)',
            },
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
