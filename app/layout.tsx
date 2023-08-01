import '#/styles/globals.css';

import React from 'react';

import { Analytics } from '#/components/analytics';
import Provider from '#/components/auth-provider';
import { Header } from '#/components/header';
import { TailwindIndicator } from '#/components/tailwind-indicator';
import { ThemeProvider } from '#/components/theme-provider';
import { Toaster } from '#/components/toaster';
import { siteConfig } from '#/config/site';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
  ],
  authors: [
    {
      name: 'shadcn',
      url: 'https:shadcn.com',
    },
  ],
  creator: 'shadcn',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@shadcn',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="px-2">
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="notion app bg-primary text-primaryFg">
              <div className="viewport"></div>
              <div className="frame min-h-screen">
                <Header />
                {children}
              </div>
              <Analytics />
              <Toaster />
              <TailwindIndicator />
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
