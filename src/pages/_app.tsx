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
import { useEffect, useState } from 'react';

export default function App({

     Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {

     // Only create persistor on client side to avoid SSR issues
     const [hydrated, setHydrated] = useState(false);
     const persistor = typeof window !== "undefined" ? persistStore(store) : null;

     useEffect(() => {
          setHydrated(true);
     }, []);

     useReportWebVitals((metric) => {
          // console.log(metric)
     })

     return (
          <SessionProvider session={session}>
               <Provider store={store}>
                    <ThemeProvider theme={theme}>
                         <CssBaseline />
                         <Head>
                              <title>Apoteka DAR</title>
                              <meta name="google-site-verification" content="google" />
                              <link rel="preconnect" href="https://fonts.googleapis.com" />
                              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                              {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" /> */}
                         </Head>
                         {hydrated && persistor ? (
                              <PersistGate persistor={persistor} loading={<Component {...pageProps} />}>
                                   <Component {...pageProps} />
                              </PersistGate>
                         ) : (
                              <Component {...pageProps} />
                         )}
                         <Analytics />
                         <Toaster />
                    </ThemeProvider>
               </Provider>
          </SessionProvider>
     )
}
