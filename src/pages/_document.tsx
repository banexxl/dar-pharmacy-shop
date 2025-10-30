import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="sr">
      <Head>
        <meta name="google-site-verification" content="jGROhp_tsSx2SYotId-u_cUU1lUPleFTC5eEReOc_7E" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
