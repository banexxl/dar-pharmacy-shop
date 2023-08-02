import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from "next/app"
import type { Session } from "next-auth"
import { Provider } from 'react-redux'
import store from '../store/store'
import { appWithTranslation } from 'next-i18next'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) => {

          let persistor = persistStore(store)

          return (
                    <SessionProvider session={session}>
                              <Provider store={store}>
                                        <PersistGate persistor={persistor}>
                                                  <Component {...pageProps} />
                                        </PersistGate>
                              </Provider>
                    </SessionProvider>
          )
}

export default appWithTranslation(App)
