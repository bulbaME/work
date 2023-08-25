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
                'g-d': '#19943E',
                'g-m': '#3CE06C',
                'g-l': '#5EFF8F',
                'r-d': '#940C0A',
                'r-l': '#E03E3D'
            },
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },

    plugins: [
        require("tailwind-gradient-mask-image")
    ]
}
