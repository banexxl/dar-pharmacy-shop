'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import theme from '@/styles/theme';
import store from '@/store/store';
import { useEffect, useState } from 'react';
import { AuthProvider } from '@/context/session/session.context';
import { UIStateProvider } from '@/context/ui/ui.context';
import { useCartWishlistSync } from '@/hooks/useCartWishlistSync';
import NavBar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import CookieConsent from '@/components/cookie-consent/cookie-consent';

const persistor = typeof window !== 'undefined' ? persistStore(store) : null;

function SyncManager() {
  useCartWishlistSync();
  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
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
            {hydrated && persistor ? (
              <PersistGate persistor={persistor} loading={content}>
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
