import './globals.css'

export const metadata = {
    title: 'XCopywriter',
    description: 'Copywriting company',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/img/favicon.ico" />
            </head>
            <body className='bg-slate-100 max-w-5xl m-auto'>
                {children}
            </body>
        </html>
    );
}
