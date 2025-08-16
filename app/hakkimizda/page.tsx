import { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Vertex Yapı İnşaat hakkında detaylı bilgi. Mersin Silifke\'de 7 tamamlanan proje, Akkuyu Nükleer Santral, TÜBİTAK, üniversite projeleri. İletişim: 540 384 33 33',
  keywords: [
    'Vertex Yapı hakkında', 'Mersin inşaat firması', 'Silifke inşaat şirketi',
    'Akkuyu Nükleer Santral projeleri', 'TÜBİTAK inşaat projeleri', 
    'üniversite inşaat projeleri', 'spor tesisi inşaatı', 'TOKİ projeleri'
  ],
  alternates: {
    canonical: '/hakkimizda',
  },
  openGraph: {
    title: 'Vertex Yapı İnşaat - Hakkımızda',
    description: 'Vertex Yapı İnşaat hakkında detaylı bilgi. Mersin Silifke\'de 7 tamamlanan proje.',
    url: 'https://vertexyapi.com/hakkimizda',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
