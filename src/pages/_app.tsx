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
import { useRouter } from 'next/router'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) => {

          let persistor = persistStore(store)

          const router = useRouter();
          const [isLoading, setIsLoading] = useState(true);

          useEffect(() => {
                    // Simulate an asynchronous operation, like fetching data
                    setTimeout(() => {
                              setIsLoading(false);
                    }, 2000); // Adjust the duration as needed
          }, []);

          return (
                    <>
                              {!isLoading ? (
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
