import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from "next/app"
import type { Session } from "next-auth"
import { Provider } from 'react-redux'
import store from '../store/store'
import { appWithTranslation } from 'next-i18next'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import LoadingWheel from "@/components/loading/loading";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) => {

          let persistor = persistStore(store)
          const router = useRouter()
          const [loading, setLoading] = useState(false)

          useEffect(() => {
                    const handleRouteChange = (url: any) => {
                              setLoading(true)
                    }

                    const handleRouteChangeComplete = () => {
                              setLoading(false)
                    }

                    router.events.on('routeChangeStart', handleRouteChange)
                    router.events.on('routeChangeComplete', handleRouteChangeComplete)

                    return () => {
                              router.events.off('routeChangeStart', handleRouteChange)
                              router.events.off('routeChangeComplete', handleRouteChangeComplete)
                    }
          }, [router.events])

          return (
                    <>{loading ? <LoadingWheel /> :
                              <SessionProvider session={session}>
                                        <Provider store={store}>
                                                  <PersistGate persistor={persistor}>
                                                            <Component {...pageProps} />
                                                  </PersistGate>
                                        </Provider>
                              </SessionProvider>
                    }
                    </>
          )
}

export default appWithTranslation(App)
