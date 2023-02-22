import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from "next/app"
import type { Session } from "next-auth"
import { Provider } from 'react-redux'
import store from '../store/index'
import { Suspense } from 'react'
import { CircularProgress } from '@mui/material'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
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
