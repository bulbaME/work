/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './modules/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'v1-l': '#B34FE1',
                'v1-m': '#990ADB',
                'v1-d': '#40055C',
                'v2-l': '#7608A8',
                'v2-d': '#49205C'
            },
            transitionProperty: {
                'height': 'height',
                'width': 'width'
            }
        }
    },
    plugins: [],
}
