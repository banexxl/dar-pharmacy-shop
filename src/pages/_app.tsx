import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from "next/app"
import type { Session } from "next-auth"
import { ShoppingCartProvider } from '../context/cart'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
          return (
                    <SessionProvider session={session}>
                              <ShoppingCartProvider>
                                        <Component {...pageProps} />
                              </ShoppingCartProvider>
                    </SessionProvider>
          )
}
