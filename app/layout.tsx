import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://phillylegalguide.com'
  ),
  title: {
    template: '%s | PhillyLegalGuide',
    default: 'PhillyLegalGuide — Find the Right Injury Lawyer in Philadelphia',
  },
  description:
    'Independent guide helping Philadelphia residents find the right personal injury lawyer. Take our free quiz to identify your case type and see matching firms.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'PhillyLegalGuide',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
