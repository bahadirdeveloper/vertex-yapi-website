import { Metadata } from 'next'
import ProjectsPageClient from './ProjectsPageClient'

export const metadata: Metadata = {
  title: 'Projelerimiz',
  description: 'Vertex Yapı İnşaat projeleri: Akkuyu Nükleer Santral, TÜBİTAK, İnönü Üniversitesi, Manisa spor tesisleri, TOKİ konut projeleri. Mersin Silifke\'de tamamlanan ve devam eden projeler.',
  keywords: [
    'Vertex Yapı projeleri', 'Akkuyu Nükleer Santral projeleri', 'TÜBİTAK projeleri',
    'İnönü Üniversitesi projeleri', 'Manisa spor tesisleri', 'TOKİ konut projeleri',
    'tamamlanan projeler', 'devam eden projeler', 'Mersin inşaat projeleri'
  ],
  alternates: {
    canonical: '/projeler',
  },
  openGraph: {
    title: 'Vertex Yapı İnşaat - Projelerimiz',
    description: 'Akkuyu Nükleer Santral, TÜBİTAK, üniversite ve spor tesisi projeleri.',
    url: 'https://vertexyapi.com/projeler',
  },
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
