import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Md.Tofayel Islam - Full Stack Developer',
  description: 'Passionate full-stack developer crafting modern web experiences with cutting-edge technologies. Specializing in React, Next.js, and scalable backend solutions.',
  keywords: 'Full Stack Developer, React, Next.js, TypeScript, Web Development, Portfolio',
  authors: [{ name: 'Md.Tofayel Islam' }],
  openGraph: {
    title: 'Md.Tofayel Islam - Full Stack Developer',
    description: 'Passionate full-stack developer crafting modern web experiences with cutting-edge technologies.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}