import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="sr">
      <Head>
        <meta name="Apoteka DAR Kragujevac" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="jGROhp_tsSx2SYotId-u_cUU1lUPleFTC5eEReOc_7E" />
        <link rel="icon" href="/favicon.ico" />
        {/* GTM script */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID!}');
                  `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
