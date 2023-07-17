import './globals.css'

export const metadata = {
    title: 'SeoDigital360 - Seo Services',
    description: 'Seo Company',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/img/favicon.ico" />
            </head>
            <body className='background-1'>
                {children}
            </body>
        </html>
    );
}