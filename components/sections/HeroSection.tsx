'use client'

import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const ConstructionHeroContent = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-gray-900 leading-tight'>
          Vertex Yapı ile Geleceği İnşa Ediyoruz
        </h2>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-700 max-w-4xl sm:max-w-5xl mx-auto leading-relaxed px-4 sm:px-0'>
          Mersin Silifke'den Türkiye'ye, kaba inşaat alanında uzmanlaşmış ekibimizle güvenli ve sağlam yapılar inşa ediyoruz. 
          Konut, hastane, eğitim kurumu, ticari yapı ve sosyal tesislerde "Güçlü temel, sağlam gelecek" anlayışıyla hizmetinizdeyiz.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
      >
        <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Güvenilir Kalite</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">En yüksek standartlarda inşaat kalitesi ve güvenlik standartlarımızla her projede mükemmelliği hedefliyoruz.</p>
        </div>

        <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Hızlı Teslimat</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Zamanında ve planlanan sürede proje tamamlama garantisi ile müşteri memnuniyetini ön planda tutuyoruz.</p>
        </div>

        <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Uzman Ekip</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Deneyimli ve profesyonel inşaat ekibimizle her projede en iyi sonucu elde etmek için çalışıyoruz.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0"
      >
        <Link href="/projeler" className="w-full sm:w-auto">
          <Button size="xl" variant="default" className="font-bold w-full sm:w-auto">
            Projelerimizi İnceleyin
          </Button>
        </Link>
        <Link href="/iletisim" className="w-full sm:w-auto">
          <Button size="xl" variant="outline" className="font-bold w-full sm:w-auto">
            İletişime Geçin
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
      title="VERTEX YAPI"
      date="İnşaat Sektöründe Güven"
      scrollToExpand="Aşağı kaydırın"
      textBlend={true}
    >
      <ConstructionHeroContent />
    </ScrollExpandMedia>
  )
}
