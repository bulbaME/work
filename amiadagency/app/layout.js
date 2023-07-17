import './globals.css'

export const metadata = {
    title: 'Amiadagency - Seo Services',
    description: 'Seo Company',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/img/favicon.ico" />
            </head>
            <body className='bg-rose-50'>
                {children}
            </body>
        </html>
    );
}