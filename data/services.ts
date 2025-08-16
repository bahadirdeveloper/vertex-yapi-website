import { Building, School, Dumbbell, Zap, Shield, Users, MapPin, Home } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  category: 'nukleer' | 'egitim' | 'spor' | 'arastirma' | 'ticari' | 'yol' | 'diger'
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Nükleer Tesisler',
    description: 'Nükleer santral güvenlik yolları ve radyasyon ölçüm merkezleri',
    icon: Building,
    category: 'nukleer'
  },
  {
    id: '2',
    title: 'Eğitim Yapıları',
    description: 'Okul binaları, üniversite tesisleri ve eğitim kompleksleri',
    icon: School,
    category: 'egitim'
  },
  {
    id: '3',
    title: 'Spor Tesisleri',
    description: 'Olimpik havuzlar, spor kompleksleri ve fitness merkezleri',
    icon: Dumbbell,
    category: 'spor'
  },
  {
    id: '4',
    title: 'Araştırma Merkezleri',
    description: 'TÜBİTAK araştırma binaları ve laboratuvar tesisleri',
    icon: Zap,
    category: 'arastirma'
  },
  {
    id: '5',
    title: 'Ticari Yapılar',
    description: 'TOKİ konut projeleri, ticaret merkezleri ve iş binaları',
    icon: Home,
    category: 'ticari'
  },
  {
    id: '6',
    title: 'Yol ve Altyapı',
    description: 'Yol düzenleme, kaldırım ve altyapı projeleri',
    icon: MapPin,
    category: 'yol'
  },
  {
    id: '7',
    title: 'Güvenlik Sistemleri',
    description: 'Nükleer tesis güvenlik altyapısı ve sistemleri',
    icon: Shield,
    category: 'nukleer'
  },
  {
    id: '8',
    title: 'Proje Yönetimi',
    description: 'Kritik altyapı projelerinin planlama ve yönetimi',
    icon: Users,
    category: 'diger'
  }
]
