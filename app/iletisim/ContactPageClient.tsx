'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              İletişim
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Projeleriniz için bizimle iletişime geçin. Size en uygun çözümü sunalım.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                      href="tel:+905403843333"
                      className="text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      +90 540 384 33 33
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
                    href="tel:+905403843333"
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

      {/* Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Mesaj Gönderin
              </h2>
              <p className="text-lg text-gray-600">
                Projeleriniz hakkında bilgi almak için formu doldurun.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Soyad *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Konu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Konu seçin</option>
                    <option value="fabrika">Fabrika İnşaatı</option>
                    <option value="hastane">Hastane İnşaatı</option>
                    <option value="okul">Okul İnşaatı</option>
                    <option value="otel">Otel İnşaatı</option>
                    <option value="ticari">Ticari Yapı</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Projeniz hakkında detayları yazın..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    variant="default"
                    className="font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Mesaj Gönder
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
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

          <div className="max-w-4xl mx-auto space-y-6">
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
