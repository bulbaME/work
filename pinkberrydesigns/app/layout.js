import './globals.css'

export const metadata = {
    title: 'PinkBerryDesigns - Design Company',
    description: 'Design Company',
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