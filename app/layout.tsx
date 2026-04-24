import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Magnum Opus Cloud Computing | Windows 11 Without AI',
  description:
    'Access Windows 11 from any device with Magnum Opus Cloud Computing. No bloatware, no AI, no advertisements. Free Windows 11 product key included. Connect from phone, tablet, laptop, or desktop.',
  keywords: [
    'Windows 11',
    'cloud computing',
    'Windows without AI',
    'no bloatware',
    'remote desktop',
    'Windows App',
    'Magnum Opus',
    'cloud Windows',
    'Windows 11 cloud',
    'remote PC',
  ],
  authors: [{ name: 'Magnum Opus Cloud Computing' }],
  creator: 'Magnum Opus Cloud Computing',
  publisher: 'Magnum Opus Cloud Computing',
  applicationName: 'Magnum Opus Cloud Computing',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://magnumopuscloud.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Magnum Opus Cloud Computing | Windows 11 Without AI',
    description:
      'Access Windows 11 from any device. No bloatware, no AI, no advertisements. Free Windows 11 product key included.',
    url: 'https://magnumopuscloud.com',
    siteName: 'Magnum Opus Cloud Computing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magnum Opus Cloud Computing | Windows 11 Without AI',
    description:
      'Access Windows 11 from any device. No bloatware, no AI, no advertisements. Free Windows 11 product key included.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
