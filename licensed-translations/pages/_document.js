import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/img/favicon.ico" />
                <title>Licensed Translations - Translation Services</title>
            </Head>
            <body className='bg-neutral-100'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
