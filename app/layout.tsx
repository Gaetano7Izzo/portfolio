import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gaetano Emanuele Izzo - Portfolio',
  description: 'Portfolio personale di Gaetano Emanuele Izzo, studente di Ingegneria Informatica',
  keywords: ['portfolio', 'ingegneria informatica', 'sviluppatore', 'Gaetano Izzo'],
  authors: [{ name: 'Gaetano Emanuele Izzo' }],
  creator: 'Gaetano Emanuele Izzo',
  openGraph: {
    title: 'Gaetano Emanuele Izzo - Portfolio',
    description: 'Portfolio personale di Gaetano Emanuele Izzo, studente di Ingegneria Informatica',
    type: 'website',
    locale: 'it_IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaetano Emanuele Izzo - Portfolio',
    description: 'Portfolio personale di Gaetano Emanuele Izzo, studente di Ingegneria Informatica',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 