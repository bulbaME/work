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
                'c-d': '#A83422',
                'c-m': '#F6634B',
                'c-l': '#FF7A66',
                'g-d': '#11A863',
                'g-l': '#49F5A6'
            },
            transitionProperty: {
                'height': 'height',
                'width': 'width'
            }
        },
    },
}
