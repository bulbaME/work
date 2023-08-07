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
                'g-1': '#47E813',
                'g-2': '#13F226',
                'g-3': '#1CDC63',
                'g-c': '#13F2A4',
                'c': '#13E8DA'
            }
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width'
        }
    },
}
