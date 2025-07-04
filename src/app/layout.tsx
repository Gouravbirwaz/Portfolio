import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { NeuralBg } from '@/components/neural-bg';
import { CursorTrail } from '@/components/cursor-trail';

export const metadata: Metadata = {
  title: 'Gourav Birwaz - AI/ML Engineer',
  description: 'AI-Powered Portfolio of Gourav Birwaz, a motivated and detail-oriented Software Engineer with a strong foundation in Artificial Intelligence and Machine Learning.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Fira+Code:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NeuralBg />
          <CursorTrail />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
