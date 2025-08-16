import type { Metadata } from 'next'
import { Inter, Poppins, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Vertex Yapı İnşaat - Güvenle Yükselen Yapılar',
    template: '%s | Vertex Yapı İnşaat'
  },
  description: 'Vertex Yapı İnşaat Sanayi ve Ticaret Limited Şirketi - Mersin Silifke\'de fabrika, hastane, okul, otel ve ticari yapılar inşa ediyoruz. Güvenli, dayanıklı ve estetik yapılar için bize ulaşın.',
  keywords: ['inşaat', 'yapı', 'fabrika', 'hastane', 'okul', 'otel', 'Mersin', 'Silifke', 'Vertex Yapı'],
  authors: [{ name: 'Vertex Yapı İnşaat' }],
  creator: 'Vertex Yapı İnşaat',
  publisher: 'Vertex Yapı İnşaat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vertexyapi.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://vertexyapi.com',
    title: 'Vertex Yapı İnşaat - Güvenle Yükselen Yapılar',
    description: 'Mersin Silifke\'de fabrika, hastane, okul, otel ve ticari yapılar inşa ediyoruz. Güvenli, dayanıklı ve estetik yapılar için bize ulaşın.',
    siteName: 'Vertex Yapı İnşaat',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vertex Yapı İnşaat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertex Yapı İnşaat - Güvenle Yükselen Yapılar',
    description: 'Mersin Silifke\'de fabrika, hastane, okul, otel ve ticari yapılar inşa ediyoruz.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#385779" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  )
}
