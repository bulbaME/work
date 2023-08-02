import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/img/favicon.ico" />
                <title>SeoMeteor</title>
            </Head>
            <body className='bg-stone-100'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
