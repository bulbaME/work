import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/img/favicon.ico" />
                <title>MayLieDesigns - Design Services</title>
            </Head>
            <body className='bg-neutral-900'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
