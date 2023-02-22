import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from "next/app"
import type { Session } from "next-auth"
import { Provider } from 'react-redux'
import store from '../store/index'
import { Suspense } from 'react'
import { CircularProgress } from '@mui/material'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) => {
          return (
                    <SessionProvider session={session}>
                              <Suspense fallback={<CircularProgress />}>
                                        <Provider store={store}>
                                                  <Component {...pageProps} />
                                        </Provider>
                              </Suspense>
                    </SessionProvider>
          )
}

export default appWithTranslation(App)
