/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'y': '#D68542',
                'y-d': '#8A470F',
                'b-l': '#69E8FF',
                'b': '#42C0D6',
                'b-d': '#1D798A'
            }
        }
    },
    plugins: [],
}
