import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from "next/app"
import type { Session } from "next-auth"
import { Provider } from 'react-redux'
import store from '../store/store'
import { appWithTranslation } from 'next-i18next'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Analytics } from '@vercel/analytics/react';
import { ReCaptchaProvider } from "next-recaptcha-v3";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) => {

     let persistor = persistStore(store)

     // useEffect(() => {
     //           // Initialize i18next
     //           // You can pass additional configuration options here if needed
     //           import('i18next').then((i18n) => i18n.default.init());
     // }, []);

     return (
          <ReCaptchaProvider reCaptchaKey={`${process.env.GOOGLE_CAPTCHA_SITE_KEY}`}>
               <SessionProvider session={session}>
                    <Provider store={store}>
                         <PersistGate persistor={persistor}>
                              <Component {...pageProps} />
                         </PersistGate>
                    </Provider>
                    <Analytics />
               </SessionProvider>
          </ReCaptchaProvider>
     )
}

export default appWithTranslation(App)
