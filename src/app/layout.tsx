import type { Metadata, Viewport } from 'next'
// Theme & Fonts
import { Rethink_Sans, Passions_Conflict, Inter } from 'next/font/google'
import './globals.css'
// Components
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ToastProvider } from '@/components/ui/toast'
// Libraries
import NextTopLoader from 'nextjs-toploader'

const rethinkSans = Rethink_Sans({
  variable: '--font-rethink-sans',
  subsets: ['latin'],
})
const passionsConflict = Passions_Conflict({
  weight: '400',
  variable: '--font-passion-conflict',
  subsets: ['latin'],
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const baseUrl = 'https://rikustore.vercel.app'

export const metadata: Metadata = {
  title: {
    default: 'Riku Store | Premium Website Development & Templates',
    template: '%s | Riku Store',
  },
  description:
    'Riku Store provides high-performance website development and curated premium templates. Elevate your digital presence with our pixel-perfect, SEO-optimized solutions.',
  keywords: [
    'Website Development',
    'Web Design Agency',
    'Premium Web Templates',
    'Next.js Website',
    'Responsive Design',
    'UI/UX Design',
  ],
  metadataBase: new URL(baseUrl),
  robots: 'index, follow',
  openGraph: {
    title: 'Riku Store | Premium Website Development',
    description:
      'Elevate your digital presence with premium website development and curated templates.',
    url: baseUrl,
    siteName: 'Riku Store',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Riku Store - Premium Website Development',
      },
    ],
  },
}

// Move viewport to a separate export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Prevent zooming on mobile
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} flex min-h-[100dvh] flex-col antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <ToastProvider />
          <NextTopLoader
            color="#16a34a"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
          />
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
