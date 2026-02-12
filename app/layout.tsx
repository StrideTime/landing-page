import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { DevBanner } from '@/components/DevBanner';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Stride - Master Your Productivity',
  description:
    'The intelligent task management system that helps teams and individuals achieve their goals with precision and clarity.',
  keywords: [
    'productivity',
    'time tracking',
    'task management',
    'analytics',
    'progress tracking',
    'achievement system',
    'team collaboration',
  ],
  authors: [{ name: 'Stride' }],
  openGraph: {
    title: 'Stride - Master Your Productivity',
    description:
      'The intelligent task management system that helps teams and individuals achieve their goals with precision and clarity.',
    type: 'website',
    siteName: 'Stride',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stride - Master Your Productivity',
    description:
      'The intelligent task management system that helps teams and individuals achieve their goals with precision and clarity.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                if (mediaQuery.matches) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <DevBanner />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
