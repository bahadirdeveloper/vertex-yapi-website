'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/services'

export default function ServicesPage() {
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
              Hizmetlerimiz
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Uzmanlık alanlarımızda kaliteli ve güvenilir inşaat hizmetleri sunuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Çeşitli yapı türlerinde deneyimli ekibimizle hizmet veriyoruz. 
              Her projede en yüksek kalite standartlarını hedefliyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-orange-200"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 text-white rounded-full mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                    <service.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
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
              Hizmet Kategorileri
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Farklı sektörlerde sunduğumuz kapsamlı inşaat hizmetleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Sanayi Yapıları',
                description: 'Fabrika, atölye, üretim tesisleri ve endüstriyel yapılar',
                features: ['Modern üretim tesisleri', 'Endüstriyel depolama alanları', 'Teknoloji entegrasyonu']
              },
              {
                title: 'Sağlık Yapıları',
                description: 'Hastane, klinik, sağlık merkezi ve tıbbi tesisler',
                features: ['Modern hastane binaları', 'Özel klinikler', 'Sağlık merkezleri']
              },
              {
                title: 'Eğitim Yapıları',
                description: 'Okul, üniversite, eğitim kampüsü ve akademik tesisler',
                features: ['Anaokul ve ilkokullar', 'Ortaokul ve liseler', 'Üniversite kampüsleri']
              },
              {
                title: 'Turizm Yapıları',
                description: 'Otel, resort, tatil köyü ve turizm tesisleri',
                features: ['Lüks oteller', 'Resort tesisleri', 'Turizm kompleksleri']
              },
              {
                title: 'Ticari Yapılar',
                description: 'AVM, mağaza, iş merkezi ve ticari tesisler',
                features: ['Alışveriş merkezleri', 'İş merkezleri', 'Ticari kompleksler']
              },
              {
                title: 'Spor Tesisleri',
                description: 'Spor salonu, stadyum, fitness merkezi ve spor kompleksleri',
                features: ['Kapalı spor salonları', 'Fitness merkezleri', 'Spor kompleksleri']
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vertex Yapı İnşaat olarak sunduğumuz avantajlar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Deneyim',
                description: '10+ yıllık sektör deneyimi'
              },
              {
                title: 'Kalite',
                description: 'En yüksek kalite standartları'
              },
              {
                title: 'Güvenilirlik',
                description: 'Zamanında teslim garantisi'
              },
              {
                title: 'Uzmanlık',
                description: 'Uzman mühendislik ekibi'
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <div className="text-2xl font-bold">{index + 1}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
