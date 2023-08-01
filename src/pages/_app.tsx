import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from "next/app"
import type { Session } from "next-auth"
import { Provider } from 'react-redux'
import store from '../store/store'
import { appWithTranslation } from 'next-i18next'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { useEffect, useState } from 'react'
import LoadingWheel from "@/components/loading/loading";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) => {

          let persistor = persistStore(store)

          const [loading, setLoading] = useState(false);

          useEffect(() => {
                    setLoading(false);
          }, []);

          return (
                    <>
                              {!loading ? (
                                        <SessionProvider session={session}>
                                                  <Provider store={store}>
                                                            <PersistGate persistor={persistor}>
                                                                      <Component {...pageProps} />
                                                            </PersistGate>
                                                  </Provider>
                                        </SessionProvider>
                              ) : (
                                        <LoadingWheel />
                              )}
                    </>
          )
}

export default appWithTranslation(App)
