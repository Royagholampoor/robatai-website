'use client';

import type { Metadata } from 'next';
import { Providers } from './providers';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Robatai - Professional AI & Programming Education',
  description: 'آموزش هوش مصنوعی، برنامه‌نویسی و خدمات دیجیتال',
  keywords: 'AI, Programming, Education, Robatai, هوش مصنوعی',
  authors: [{ name: 'Robatai Team' }],
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://robatai.com',
    siteName: 'Robatai',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
