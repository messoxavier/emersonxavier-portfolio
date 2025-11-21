import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import { ThemeProvider } from '@/components/ThemeProvider'
import { I18nProvider } from '@/components/I18nProvider'

export const metadata: Metadata = { /* ... */ }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 antialiased flex flex-col">
        <ThemeProvider>
          <I18nProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTopButton />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
