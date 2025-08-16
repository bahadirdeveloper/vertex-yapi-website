'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Building, Award, Shield, Users, ArrowRight } from 'lucide-react'

export default function AboutPreviewSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Vertex Yapı İnşaat
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Türkiye'nin kritik altyapı projelerinde güvenilir partner olarak, 
              nükleer santralden spor tesislerine kadar geniş bir yelpazede 
              kaliteli projeler üretiyoruz.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-orange-600 mb-2">7</div>
                <div className="text-gray-600 text-sm">Tamamlanan Proje</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-orange-600 mb-2">1</div>
                <div className="text-gray-600 text-sm">Devam Eden Proje</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Building, title: 'Nükleer Tesisler', count: '2' },
                { icon: Award, title: 'Eğitim Kurumları', count: '2' },
                { icon: Shield, title: 'Spor Tesisleri', count: '2' }
              ].map((item, index) => (
                <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <item.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.count} Proje</div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/hakkimizda">
              <button className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Hakkımızda Daha Fazla
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/projects/AKKUYU NÜKLEER SANTRAL GÜVENLİK YOLU/NEPT 9.2 GÜVENLİK YOLU/IMG_20220316_170321.jpg"
                    alt="Akkuyu Nükleer Santral"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-800 font-medium">
                    Nükleer Santral
                  </div>
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/projects/İNÖNÜ ÜNVİVERSİTESİ AÇIK OLİMPİK HAVUZ/IMG_3920.JPG"
                    alt="Olimpik Havuz"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-800 font-medium">
                    Spor Tesisi
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/projects/MUDANYA GÜZELYALI 32 DERSLİK ORTAOKUL İNŞAATI/3-1.jpeg"
                    alt="Okul Binası"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-800 font-medium">
                    Eğitim Kurumu
                  </div>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/projects/TÜBİTAK MAM BKTM BİNALARI İNŞAATI/TÜBİTAK.jpg"
                    alt="TÜBİTAK Araştırma Merkezi"
                    fill
                    className="object-cover"
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
