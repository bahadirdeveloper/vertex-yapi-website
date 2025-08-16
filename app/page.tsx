import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProjectsPreviewSection from '@/components/sections/ProjectsPreviewSection'
import AboutPreviewSection from '@/components/sections/AboutPreviewSection'

export const metadata: Metadata = {
  title: 'Ana Sayfa',
  description: 'Vertex Yapı İnşaat - Mersin Silifke\'de fabrika, hastane, okul, otel, nükleer santral ve ticari yapılar inşa ediyoruz. Akkuyu Nükleer Santral, TÜBİTAK, üniversite projeleri.',
  keywords: [
    'inşaat firması', 'Mersin inşaat', 'Silifke inşaat', 'fabrika inşaatı', 
    'hastane inşaatı', 'okul inşaatı', 'nükleer santral projeleri', 'Akkuyu',
    'TÜBİTAK projeleri', 'üniversite inşaatı', 'spor tesisi inşaatı'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vertex Yapı İnşaat - Ana Sayfa',
    description: 'Mersin Silifke\'de fabrika, hastane, okul, otel, nükleer santral ve ticari yapılar inşa ediyoruz.',
    url: 'https://vertexyapi.com',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsPreviewSection />
      <AboutPreviewSection />
    </>
  )
}
