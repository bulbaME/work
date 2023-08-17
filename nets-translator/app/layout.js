import './globals.css'

export const metadata = {
    title: 'Nets Translator',
    description: 'Translating Company',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/img/favicon.ico" />
            </head>
            <body className='bg-slate-100 l m-auto'>
                {children}
            </body>
        </html>
    );
}