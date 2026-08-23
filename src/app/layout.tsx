import Script from 'next/script';
import { Providers } from './providers';
import '@/globals.css';
import type { Metadata } from 'next';

const GOOGLE_ADS_ID = 'AW-16815738281';

export const metadata: Metadata = {
  title: {
    default: 'Apoteka DAR',
    template: '%s | Apoteka DAR',
  },
  description: 'Priroda na dohvat ruke',
  metadataBase: new URL(
    process.env.BASE_URL || 'https://www.apoteka-dar.rs'
  ),
  verification: {
    google: 'jGROhp_tsSx2SYotId-u_cUU1lUPleFTC5eEReOc_7E',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <Script
          id="google-consent-default"
          strategy="beforeInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            window.gtag = gtag;

            var googleConsent = 'denied';

            try {
              if (
                window.localStorage.getItem(
                  'cookie_consent'
                ) === 'all'
              ) {
                googleConsent = 'granted';
              }
            } catch (error) {
              googleConsent = 'denied';
            }

            gtag('consent', 'default', {
              ad_storage: googleConsent,
              analytics_storage: googleConsent,
              ad_user_data: googleConsent,
              ad_personalization: googleConsent,
              wait_for_update: 500
            });
          `}
        </Script>

        <Script
          id="google-ads-library"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="beforeInteractive"
        />

        <Script
          id="google-ads-init"
          strategy="beforeInteractive"
        >
          {`
            gtag('js', new Date());

            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
      </head>

      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
