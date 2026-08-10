import type { Metadata } from 'next';
import { Providers } from './providers';
import { UIWrapper } from './ui-wrapper';
import '@/globals.css';
import Script from 'next/script';

const GOOGLE_ADS_ID = 'AW-16815738281';


declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

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
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="sr">
      <head>
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
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
      </head>
      <body>
        <Providers>
          <UIWrapper>{children}</UIWrapper>
        </Providers>
      </body>
    </html>
  );
}
