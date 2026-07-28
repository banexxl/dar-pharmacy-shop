import type { Metadata } from 'next';
import { Providers } from './providers';
import { UIWrapper } from './ui-wrapper';
import '@/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Apoteka DAR',
    template: '%s | Apoteka DAR',
  },
  description: 'Priroda na dohvat ruke',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.apoteka-dar.rs'
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
      <body>
        <Providers>
          <UIWrapper>{children}</UIWrapper>
        </Providers>
      </body>
    </html>
  );
}
