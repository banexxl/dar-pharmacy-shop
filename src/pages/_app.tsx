import '@/styles/globals.css'
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

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) => {

     let persistor = persistStore(store)

     return (

          <SessionProvider session={session}>
               <Provider store={store}>
                    <Head>
                         <title>
                              Apoteka DAR
                         </title>
                         <meta
                              name="google-site-verification"
                              content="google"
                         />
                    </Head>
                    <PersistGate persistor={persistor}>
                         <Component {...pageProps} />
                    </PersistGate>
               </Provider>
               <Analytics />
               <Toaster />
          </SessionProvider>

     )
}

export default App
