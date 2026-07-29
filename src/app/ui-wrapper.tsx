'use client';

import { UIProvider } from '@/context/ui/ui.context';
import CookieConsent from '@/components/cookie-consent/cookie-consent';

/**
 * Wraps all pages with the shared NavBar + Footer via UIProvider.
 * UIProvider includes NavBar, Animate wrapper, and Footer.
 */
export function UIWrapper({ children }: { children: React.ReactNode }) {
  return (
    <UIProvider>
      {children}
      <CookieConsent />
    </UIProvider>
  );
}
