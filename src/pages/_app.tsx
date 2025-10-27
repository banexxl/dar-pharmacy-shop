import '@/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from "next/app"
import type { Session } from "next-auth"
import { Provider } from 'react-redux'
import store from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head'
import { Toaster } from 'react-hot-toast';
import { useReportWebVitals } from 'next/web-vitals'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/styles/theme'
import Script from 'next/script'

export default function App({
     Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {

     let persistor = persistStore(store)

     useReportWebVitals((metric) => {
          // console.log(metric)
     })

     return (
          <SessionProvider session={session}>
               {/* Initialize dataLayer ASAP */}
               <Script id="gtm-datalayer" strategy="beforeInteractive">
                    {`window.dataLayer = window.dataLayer || [];`}
               </Script>

               {/* GTM container */}
               <Script
                    id="gtm"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                         __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID!}');
          `,
                    }}
               />
               <Provider store={store}>
                    <ThemeProvider theme={theme}>
                         <CssBaseline />
                         <Head>
                              <title>Apoteka DAR</title>
                              <meta name="google-site-verification" content="google" />
                              <link rel="preconnect" href="https://fonts.googleapis.com" />
                              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                              <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
                         </Head>
                         <PersistGate persistor={persistor}>
                              <Component {...pageProps} />
                         </PersistGate>
                         <Analytics />
                         <Toaster />
                    </ThemeProvider>
               </Provider>
          </SessionProvider>
     )
}
