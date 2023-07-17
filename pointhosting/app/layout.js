import './globals.css'

export const metadata = {
    title: 'PointHosting - Hosting Services',
    description: 'Hosting Company',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/img/favicon.ico" />
            </head>
            <body className='bg-stone-100'>
                {children}
            </body>
        </html>
    );
}