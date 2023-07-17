/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        colors: {
            'csblue': '#6DBCEA',
            'csblue-l': '#78CDFF',
            'cspink': '#EB8689'
        },
        borderRadius: {
            'imgrd': '3.5rem'
        },
        maxWidth: {
            'xxs': '17rem'
        }
        },
    },
    plugins: [],
}
