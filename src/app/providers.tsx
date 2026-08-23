'use client';

import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, Persistor } from 'redux-persist';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import theme from '@/styles/theme';
import store from '@/store/store';
import { AuthProvider } from '@/context/session/session.context';
import { UIStateProvider } from '@/context/ui/ui.context';
import { useCartWishlistSync } from '@/hooks/useCartWishlistSync';
import NavBar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import CookieConsent from '@/components/cookie-consent/cookie-consent';

function SyncManager() {
  useCartWishlistSync();
  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  // Create persistor lazily on the client after the first render to avoid
  // rehydrating the Redux store before React hydrates the DOM. This prevents
  // the server/client mismatch (React error #418) that occurs when persisted
  // cart/wishlist data causes badge elements to render on the client but not
  // in the server HTML.
  const persistorRef = useRef<Persistor | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (!persistorRef.current) {
      persistorRef.current = persistStore(store);
    }
    setIsClient(true);
  }, []);

  const content = (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
      <CookieConsent />
    </>
  );

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <UIStateProvider>
            <CssBaseline />
            <SyncManager />
            {isClient && persistorRef.current ? (
              <PersistGate persistor={persistorRef.current} loading={content}>
                {content}
              </PersistGate>
            ) : (
              content
            )}
            <Toaster />
            <Analytics />
          </UIStateProvider>
        </AuthProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
