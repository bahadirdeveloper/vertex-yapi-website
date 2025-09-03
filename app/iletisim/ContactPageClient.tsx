'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function ContactPageClient() {
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              İletişim
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0">
              Projeleriniz için bizimle iletişime geçin. Size en uygun çözümü sunalım.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Adres</h3>
                    <p className="text-gray-600">
                      Pazarkaşı Mah. Çarşı Sk. No:2 A<br />
                      Silifke/Mersin
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Telefon</h3>
                    <a
                      href="tel:+905439777478"
                      className="text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      +90 543 977 74 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">E-posta</h3>
                    <a
                      href="mailto:info@vertexyapi.com"
                      className="text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      info@vertexyapi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Çalışma Saatleri</h3>
                    <p className="text-gray-600">
                      Pazartesi - Cuma: 08:00 - 18:00<br />
                      Cumartesi: 08:00 - 14:00<br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Hızlı İletişim
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+905439777478"
                    className="flex items-center space-x-3 text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Hemen Ara</span>
                  </a>
                  <a
                    href="mailto:info@vertexyapi.com"
                    className="flex items-center space-x-3 text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>E-posta Gönder</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Google Maps
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Harita yükleniyor...
                  </p>
                  <a
                    href="https://maps.google.com/?q=Pazarkaşı+Mah.+Çarşı+Sk.+No:2+A+Silifke+Mersin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Haritada Görüntüle
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Sık Sorulan Sorular
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {[
              {
                question: 'Hangi bölgelerde hizmet veriyorsunuz?',
                answer: 'Mersin Silifke merkezli olarak Türkiye genelinde hizmet veriyoruz. Farklı il ve ilçelerde projelerimiz bulunmaktadır.'
              },
              {
                question: 'Proje süreleri ne kadar?',
                answer: 'Proje süreleri projenin büyüklüğüne ve karmaşıklığına göre değişmektedir. Detaylı bilgi için bizimle iletişime geçebilirsiniz.'
              },
              {
                question: 'Hangi yapı türlerinde uzmanlaşmışsınız?',
                answer: 'Fabrika, hastane, okul, otel, ticari yapılar, spor tesisleri ve konut projelerinde uzmanlaşmış durumdayız.'
              },
              {
                question: 'Referanslarınızı görebilir miyim?',
                answer: 'Evet, tamamladığımız projeleri web sitemizde inceleyebilirsiniz. Daha detaylı bilgi için iletişime geçebilirsiniz.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
