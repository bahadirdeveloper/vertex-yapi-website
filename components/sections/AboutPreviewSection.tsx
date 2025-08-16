'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Building, Award, Shield, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function AboutPreviewSection() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const handleImageError = (imagePath: string) => {
    setImageErrors(prev => new Set(prev).add(imagePath))
  }

  const getFallbackImage = () => {
    return '/logo.webp' // Logo'yu fallback olarak kullan
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Vertex Yapı İnşaat
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Türkiye'nin kritik altyapı projelerinde güvenilir partner olarak, 
              nükleer santralden spor tesislerine kadar geniş bir yelpazede 
              kaliteli projeler üretiyoruz.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1 sm:mb-2">7</div>
                <div className="text-gray-600 text-xs sm:text-sm">Tamamlanan Proje</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1 sm:mb-2">1</div>
                <div className="text-gray-600 text-xs sm:text-sm">Devam Eden Proje</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                { icon: Building, title: 'Nükleer Tesisler', count: '2' },
                { icon: Award, title: 'Eğitim Kurumları', count: '2' },
                { icon: Shield, title: 'Spor Tesisleri', count: '2' }
              ].map((item, index) => (
                <div key={index} className="flex items-center p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-800">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.count} Proje</div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/hakkimizda">
              <Button variant="default" size="lg" className="font-semibold">
                Hakkımızda Daha Fazla
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative h-32 sm:h-40 lg:h-48 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={imageErrors.has('/projects/akkuyu-nukleer-santral-guvenlik-yolu/IMG_20220316_155357.webp') ? getFallbackImage() : '/projects/akkuyu-nukleer-santral-guvenlik-yolu/IMG_20220316_155357.webp'}
                    alt="Akkuyu Nükleer Santral"
                    fill
                    unoptimized
                    className="object-cover"
                    onError={() => handleImageError('/projects/akkuyu-nukleer-santral-guvenlik-yolu/IMG_20220316_155357.webp')}
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-800 font-medium">
                    Nükleer Santral
                  </div>
                </div>
                <div className="relative h-24 sm:h-28 lg:h-32 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={imageErrors.has('/projects/inonu-universitesi-acik-olimpik-havuz/IMG_3919.webp') ? getFallbackImage() : '/projects/inonu-universitesi-acik-olimpik-havuz/IMG_3919.webp'}
                    alt="Olimpik Havuz"
                    fill
                    unoptimized
                    className="object-cover"
                    onError={() => handleImageError('/projects/inonu-universitesi-acik-olimpik-havuz/IMG_3919.webp')}
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-800 font-medium">
                    Spor Tesisi
                  </div>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <div className="relative h-24 sm:h-28 lg:h-32 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={imageErrors.has('/projects/mudanya-guzelyali-32-derslik-ortaokul/3-1.webp') ? getFallbackImage() : '/projects/mudanya-guzelyali-32-derslik-ortaokul/3-1.webp'}
                    alt="Okul Binası"
                    fill
                    unoptimized
                    className="object-cover"
                    onError={() => handleImageError('/projects/mudanya-guzelyali-32-derslik-ortaokul/3-1.webp')}
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-800 font-medium">
                    Eğitim Kurumu
                  </div>
                </div>
                <div className="relative h-32 sm:h-40 lg:h-48 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={imageErrors.has('/projects/tubitak-mam-bktm-binalari/TUBITAK.webp') ? getFallbackImage() : '/projects/tubitak-mam-bktm-binalari/TUBITAK.webp'}
                    alt="TÜBİTAK Araştırma Merkezi"
                    fill
                    unoptimized
                    className="object-cover"
                    onError={() => handleImageError('/projects/tubitak-mam-bktm-binalari/TUBITAK.webp')}
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-800 font-medium">
                    Araştırma Merkezi
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
