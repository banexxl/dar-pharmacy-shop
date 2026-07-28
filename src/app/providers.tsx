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

const persistor = typeof window !== 'undefined' ? persistStore(store) : null;

export function Providers({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          {hydrated && persistor ? (
            <PersistGate persistor={persistor} loading={children}>
              {children}
            </PersistGate>
          ) : (
            children
          )}
          <Toaster />
          <Analytics />
        </AuthProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
