import { Metadata } from 'next'
import ServicesPageClient from './ServicesPageClient'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Vertex Yapı İnşaat hizmetleri: Fabrika, hastane, okul, otel, nükleer santral, spor tesisi, TOKİ konut projeleri. Mersin Silifke\'de kaliteli inşaat hizmetleri.',
  keywords: [
    'inşaat hizmetleri', 'fabrika inşaatı', 'hastane inşaatı', 'okul inşaatı',
    'otel inşaatı', 'nükleer santral projeleri', 'spor tesisi inşaatı', 
    'TOKİ konut projeleri', 'ticari yapı inşaatı', 'endüstriyel yapı inşaatı'
  ],
  alternates: {
    canonical: '/hizmetler',
  },
  openGraph: {
    title: 'Vertex Yapı İnşaat - Hizmetlerimiz',
    description: 'Fabrika, hastane, okul, otel, nükleer santral ve ticari yapı inşaat hizmetleri.',
    url: 'https://vertexyapi.com/hizmetler',
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
