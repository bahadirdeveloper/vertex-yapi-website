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
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900'>
          Vertex Yapı ile Geleceği İnşa Ediyoruz
        </h2>
        <p className='text-xl md:text-2xl mb-12 text-gray-700 max-w-5xl mx-auto leading-relaxed'>
          Mersin Silifke'den Türkiye'ye, güvenli, dayanıklı ve estetik yapılar inşa ediyoruz. 
          Fabrika, hastane, okul, otel ve ticari yapılarda uzmanlaşmış ekibimizle hizmetinizdeyiz.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Güvenilir Kalite</h3>
          <p className="text-gray-700 leading-relaxed">En yüksek standartlarda inşaat kalitesi ve güvenlik standartlarımızla her projede mükemmelliği hedefliyoruz.</p>
        </div>

        <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Hızlı Teslimat</h3>
          <p className="text-gray-700 leading-relaxed">Zamanında ve planlanan sürede proje tamamlama garantisi ile müşteri memnuniyetini ön planda tutuyoruz.</p>
        </div>

        <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Uzman Ekip</h3>
          <p className="text-gray-700 leading-relaxed">Deneyimli ve profesyonel inşaat ekibimizle her projede en iyi sonucu elde etmek için çalışıyoruz.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-6 justify-center"
      >
        <Link href="/projeler">
          <Button size="lg" className="text-lg px-10 py-4 bg-orange-500 hover:bg-orange-600 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Projelerimizi İnceleyin
          </Button>
        </Link>
        <Link href="/iletisim">
          <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
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
