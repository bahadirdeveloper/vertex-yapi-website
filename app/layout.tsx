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
    default: 'Vertex Yapı İnşaat - Güvenle Yükselen Yapılar | Mersin Silifke',
    template: '%s | Vertex Yapı İnşaat'
  },
  description: 'Vertex Yapı İnşaat Sanayi ve Ticaret Limited Şirketi - Mersin Silifke\'de fabrika, hastane, okul, otel, nükleer santral ve ticari yapılar inşa ediyoruz. Akkuyu Nükleer Santral, TÜBİTAK, üniversite projeleri. Güvenli, dayanıklı ve estetik yapılar için bize ulaşın.',
  keywords: [
    'inşaat', 'yapı', 'fabrika', 'hastane', 'okul', 'otel', 'Mersin', 'Silifke', 
    'Vertex Yapı', 'nükleer santral', 'Akkuyu', 'TÜBİTAK', 'üniversite', 'spor tesisi',
    'TOKİ', 'konut', 'ticari yapı', 'endüstriyel yapı', 'altyapı projeleri'
  ],
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
    title: 'Vertex Yapı İnşaat - Güvenle Yükselen Yapılar | Mersin Silifke',
    description: 'Mersin Silifke\'de fabrika, hastane, okul, otel, nükleer santral ve ticari yapılar inşa ediyoruz. Akkuyu Nükleer Santral, TÜBİTAK, üniversite projeleri.',
    siteName: 'Vertex Yapı İnşaat',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Vertex Yapı İnşaat - Mersin Silifke İnşaat Firması',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertex Yapı İnşaat - Güvenle Yükselen Yapılar | Mersin Silifke',
    description: 'Mersin Silifke\'de fabrika, hastane, okul, otel, nükleer santral ve ticari yapılar inşa ediyoruz.',
    images: ['/og-image.webp'],
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
  category: 'construction',
  classification: 'business',
  other: {
    'geo.region': 'TR-33',
    'geo.placename': 'Mersin',
    'geo.position': '36.8121;34.6415',
    'ICBM': '36.8121, 34.6415',
  },
}

// Structured Data for Organization
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ConstructionBusiness",
  "name": "Vertex Yapı İnşaat Sanayi ve Ticaret Limited Şirketi",
  "alternateName": "Vertex Yapı",
  "description": "Mersin Silifke'de fabrika, hastane, okul, otel, nükleer santral ve ticari yapılar inşa eden inşaat firması",
  "url": "https://vertexyapi.com",
  "logo": "https://vertexyapi.com/logo.webp",
  "image": "https://vertexyapi.com/og-image.webp",
  "telephone": "+905403843333",
  "email": "info@vertexyapi.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mersin",
    "addressRegion": "Mersin",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.8121,
    "longitude": 34.6415
  },
  "openingHours": "Mo-Fr 08:00-18:00",
  "priceRange": "$$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 36.8121,
      "longitude": 34.6415
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "İnşaat Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fabrika İnşaatı"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hastane İnşaatı"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Okul İnşaatı"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nükleer Santral Projeleri"
        }
      }
    ]
  }
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.webp" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vertex Yapı" />
        <meta name="application-name" content="Vertex Yapı" />
        <meta name="msapplication-TileColor" content="#f97316" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Ana içeriğe geç
        </a>
        
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  )
}
