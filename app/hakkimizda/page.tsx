'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, Target, Eye, Building, Clock, Shield, Zap, MapPin, Phone, Mail } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Vertex Yapı İnşaat olarak, nükleer santralden spor tesislerine kadar geniş bir yelpazede kaliteli projeler üretiyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Vertex Yapı İnşaat
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vertex Yapı İnşaat Sanayi ve Ticaret Limited Şirketi, Türkiye'nin önde gelen 
                inşaat firmalarından biridir. Nükleer santral projelerinden eğitim kurumlarına, 
                spor tesislerinden araştırma merkezlerine kadar geniş bir yelpazede hizmet vermekteyiz.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Akkuyu Nükleer Santral projeleri, TÜBİTAK araştırma merkezleri, üniversite 
                spor tesisleri, okul binaları ve TOKİ konut projeleri gibi kritik altyapı 
                projelerinde uzmanlaşmış durumdayız.
              </p>
              
              {/* İletişim Bilgileri */}
              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">İletişim Bilgileri</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-3 text-orange-500" />
                    <span>540 384 33 33</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 text-orange-500" />
                    <span>Mersin, Türkiye</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-3 text-orange-500" />
                    <span>info@vertexyapi.com</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">7</div>
                  <div className="text-gray-600">Tamamlanan Proje</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                  <div className="text-gray-600">Devam Eden Proje</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/projects/AKKUYU NÜKLEER SANTRAL GÜVENLİK YOLU/NEPT 9.2 GÜVENLİK YOLU/IMG_20220316_170321.webp"
                alt="Vertex Yapı İnşaat - Akkuyu Nükleer Santral Projesi"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-800 font-medium">
                Akkuyu Nükleer Santral Güvenlik Yolu
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500"
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-orange-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Misyonumuz</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Nükleer santral, eğitim, spor ve araştırma tesisleri gibi kritik altyapı 
                projelerinde en yüksek güvenlik ve kalite standartlarını sağlamak. 
                Müşterilerimizin ihtiyaçlarını zamanında ve bütçeye uygun şekilde 
                karşılayarak, Türkiye'nin gelişimine katkıda bulunmak.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500"
            >
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-orange-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Vizyonumuz</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Türkiye'nin kritik altyapı projelerinde güvenilir partner olarak, 
                nükleer enerji, eğitim ve spor alanlarında öncü bir inşaat firması 
                haline gelmek. Teknoloji ve mühendislik bilgimizi kullanarak 
                geleceğin standartlarını bugünden inşa etmek.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Uzmanlık Alanlarımız
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deneyimli olduğumuz proje türleri ve sektörler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building,
                title: 'Nükleer Tesisler',
                description: 'Akkuyu Nükleer Santral güvenlik yolları ve radyasyon ölçüm merkezleri'
              },
              {
                icon: Award,
                title: 'Eğitim Kurumları',
                description: 'Okul binaları, üniversite tesisleri ve eğitim kompleksleri'
              },
              {
                icon: Zap,
                title: 'Spor Tesisleri',
                description: 'Olimpik havuzlar, spor kompleksleri ve fitness merkezleri'
              },
              {
                icon: Shield,
                title: 'Araştırma Merkezleri',
                description: 'TÜBİTAK araştırma binaları ve laboratuvar tesisleri'
              }
            ].map((specialization, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <specialization.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {specialization.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {specialization.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Değerlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Çalışma prensiplerimizi oluşturan temel değerlerimiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Kalite',
                description: 'En yüksek kalite standartlarında hizmet sunmak'
              },
              {
                icon: Shield,
                title: 'Güvenlik',
                description: 'Özellikle nükleer projelerde maksimum güvenlik'
              },
              {
                icon: Clock,
                title: 'Zamanında Teslim',
                description: 'Projeleri söz verilen sürede tamamlamak'
              },
              {
                icon: Users,
                title: 'Uzmanlık',
                description: 'Deneyimli ekip ve uzman kadro ile çalışmak'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
