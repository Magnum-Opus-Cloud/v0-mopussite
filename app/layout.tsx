import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Magnum Opus Cloud Computing | Windows 11 Without AI or Bloatware',
  description:
    'Access a full Windows 11 desktop from any device with Magnum Opus Cloud Computing. No bloatware, no AI, no advertisements. Free Windows 11 product key included. Works on iPhone, Android, tablet, laptop, and desktop.',
  keywords: [
    'Magnum Opus Cloud Computing',
    'cloud computing',
    'Windows 11 cloud',
    'Windows 11 without AI',
    'Windows 11 no bloatware',
    'Windows 11 no ads',
    'cloud desktop',
    'remote desktop',
    'Windows App',
    'remote PC',
    'cloud PC',
    'virtual desktop',
    'Windows 11 free product key',
    'cloud Windows 11',
    'access Windows from phone',
    'access Windows from tablet',
    'Guacamole remote desktop',
    'Windows 11 streaming',
    'cloud computer USA',
    'affordable cloud PC',
  ],
  authors: [{ name: 'Magnum Opus Cloud Computing' }],
  creator: 'Magnum Opus Cloud Computing',
  publisher: 'Magnum Opus Cloud Computing',
  applicationName: 'Magnum Opus Cloud Computing',
  referrer: 'origin-when-cross-origin',
  category: 'technology',
  classification: 'Cloud Computing Services',
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
    title: 'Magnum Opus Cloud Computing | Windows 11 Without AI or Bloatware',
    description:
      'Access a full Windows 11 desktop from any device. No bloatware, no AI, no advertisements. Free Windows 11 product key included. Works on phone, tablet, laptop, or desktop.',
    url: 'https://magnumopuscloud.com',
    siteName: 'Magnum Opus Cloud Computing',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/magnum-opus-logo.png',
        width: 1200,
        height: 630,
        alt: 'Magnum Opus Cloud Computing — Windows 11 Without AI or Bloatware',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magnum Opus Cloud Computing | Windows 11 Without AI or Bloatware',
    description:
      'Access a full Windows 11 desktop from any device. No bloatware, no AI, no advertisements. Free Windows 11 product key included.',
    images: ['/images/magnum-opus-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/magnum-opus-logo.png',
    apple: '/images/magnum-opus-logo.png',
  },
  verification: {
    google: '',
    yandex: '',
    yahoo: '',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background dark`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
