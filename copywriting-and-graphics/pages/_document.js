import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/img/favicon.ico" />
                <title>Copywriting And Graphics - Copywriting Services</title>
            </Head>
            <body className='bg-gray-950'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
