import './globals.css'

export const metadata = {
    title: 'Design2Go - Design Company',
    description: 'Design Company',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/img/favicon.ico" />
            </head>
            <body className='bg-slate-100'>
                {children}
            </body>
        </html>
    );
}