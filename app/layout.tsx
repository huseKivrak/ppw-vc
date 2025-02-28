import '@/styles/globals.css';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Providers } from './providers';
import { siteConfig } from '@/config/site';
import { fonts } from '@/config/fonts';

import clsx from 'clsx';
import { Navbar } from '@/components/layout/Navbar';
import AuthButton from '@/components/buttons/AuthButton';
import { Toaster } from '@/components/toaster/toaster';
import { Suspense, PropsWithChildren } from 'react';

const url = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen text-foreground bg-background font-rht antialiased',
          fonts
        )}
      >
        <Providers>
          <div className="relative flex flex-col min-h-screen">
            <Navbar>
              <AuthButton />
            </Navbar>
            <main className="container mx-auto px-4 sm:px-8 md:px-8 lg:px-10 pt-2 flex-grow">
              {children}
            </main>
            <Analytics />
            <SpeedInsights />
            <footer className="container mx-auto flex items-center justify-center px-4 py-2">
              <span className="sm:text-small md:text-base lg:text-large tracking-wider">
                &copy; {new Date().getFullYear()} npSpeak. All rights reserved.
              </span>
            </footer>
          </div>
          <Suspense>
            <Toaster />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
