'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, Target, Eye, Building, Clock, Shield, Zap, MapPin, Phone, Mail, Instagram } from 'lucide-react'

export default function AboutPageClient() {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const getFallbackImage = () => {
    return '/logo.webp' // Logo'yu fallback olarak kullan
  }

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
              Hakkımızda
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0">
              Kaba inşaat alanında uzmanlaşmış, üst yapı projelerinde güçlü teknik kadrosu ve modern uygulama yöntemleriyle güvenli ve sağlam yapılar inşa eden bir mühendislik firması.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                Vertex Yapı İnşaat, kaba inşaat alanında uzmanlaşmış bir mühendislik firmasıdır. Özellikle üst yapı projelerinde (konutlar, hastaneler, eğitim kurumları, ticari yapılar ve sosyal tesisler) güçlü teknik kadromuz ve modern uygulama yöntemlerimizle güvenli ve sağlam yapılar inşa ediyoruz.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bizim için kaba inşaat; sadece kolon, kiriş ve döşeme yapmak değil, yapının tüm geleceğini şekillendiren iskeleti kurmaktır. Bu bilinçle;
              </p>
              <ul className="text-gray-600 mb-6 leading-relaxed space-y-2">
                <li>• Temelden çatıya kadar olan tüm taşıyıcı sistemlerde uluslararası standartlara uygunluk,</li>
                <li>• Projelerde zamanında teslim ve yüksek kalite,</li>
                <li>• Güvenlik ve mühendislik disiplininden taviz vermeme</li>
              </ul>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ilkeleriyle hareket ediyoruz.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bugüne kadar; konut projelerinden spor tesislerine, eğitim binalarından sağlık yapılarının kaba inşaatına kadar pek çok üst yapı projesinde imzamızı attık. Deneyimimiz ve uzmanlığımızla, kaba inşaatı sadece bir iş değil, geleceğe bırakılan en sağlam temel olarak görüyoruz.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vertex Yapı İnşaat, üst yapıların kaba inşaatında;
              </p>
              <ul className="text-gray-600 mb-6 leading-relaxed space-y-2">
                <li>• Dayanıklılığı,</li>
                <li>• Güvenliği,</li>
                <li>• Zamanında teslimi</li>
              </ul>
              <p className="text-gray-600 mb-6 leading-relaxed">
                bir arada sunar.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Her projemizde "Güçlü temel, sağlam gelecek" anlayışıyla hareket ediyor, ülkemizin yapı sektöründe güvenin adı olmaktan gurur duyuyoruz.
              </p>
              
              {/* İletişim Bilgileri */}
              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">İletişim Bilgileri</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-3 text-orange-500" />
                    <span>0543 977 74 78</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 text-orange-500" />
                    <span>Mersin, Türkiye</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-3 text-orange-500" />
                    <span>info@vertexyapi.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Instagram className="w-4 h-4 mr-3 text-orange-500" />
                    <a href="https://www.instagram.com/vertex_yapi/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
                      @vertex_yapi
                    </a>
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
                src={imageError ? getFallbackImage() : '/projects/akkuyu-nukleer-santral-guvenlik-yolu/IMG_20220316_155357.webp'}
                alt="Vertex Yapı İnşaat - Akkuyu Nükleer Santral Projesi"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                onError={handleImageError}
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
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
              <p className="text-gray-600 leading-relaxed mb-4">
                Güvenli, sağlam ve modern yapılar inşa ederek ülkemizin geleceğine değer katıyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kaba inşaat ve nükleer tesis altyapılarında; uluslararası standartlara uygun, çevreye duyarlı ve yenilikçi çözümler üretiyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Her projede iş güvenliği, kalite ve mühendislik disiplininden ödün vermeden, kalıcı eserler bırakmayı hedefliyoruz.
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
              <p className="text-gray-600 leading-relaxed mb-4">
                Türkiye'de ve dünyada, kaba inşaat ve nükleer enerji altyapısında güvenilir çözüm ortağı olarak öne çıkmak.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Teknoloji ve mühendisliği birleştirerek, geleceğin enerji ve yapı ihtiyaçlarına güvenle yanıt vermek.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sürdürülebilirlik, kalite ve güven ilkeleriyle, gelecek nesillere değer katan yapılar sunmak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Kalite */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Kalite</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600 text-left">
                <p>• Bizim için kalite, sadece bitmiş yapının sağlamlığı değil; sürecin her aşamasında gösterilen titizliktir.</p>
                <p>• Uluslararası standartlar çerçevesinde çalışırız.</p>
                <p>• Malzeme seçiminden işçiliğe kadar en yüksek kaliteyi hedefleriz.</p>
                <p>• Her projede sıfır hata, maksimum güvenlik anlayışıyla hareket ederiz.</p>
                <p>• Kaliteyi, sürdürülebilirliğin ve güvenilirliğin temeli olarak görürüz.</p>
              </div>
            </motion.div>

            {/* Güvenlik */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Güvenlik</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600 text-left">
                <p>• Güvenlik, tüm çalışmalarımızın temelini oluşturur.</p>
                <p>• Çalışanlarımızın sağlığı ve iş güvenliği, her şeyin önündedir.</p>
                <p>• Tüm projelerimizde uluslararası güvenlik standartlarını uygularız.</p>
                <p>• Nükleer tesisler ve kritik altyapılarda, en üst seviye güvenlik protokollerini benimseriz.</p>
                <p>• Güvenliği, yalnızca bir zorunluluk değil, sorumluluk ve kültür olarak görürüz.</p>
              </div>
            </motion.div>

            {/* Zamanında Teslim */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Zamanında Teslim</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600 text-left">
                <p>• Projelerimizi söz verdiğimiz tarihte tamamlamayı, en az kalite ve güvenlik kadar önemsiyoruz.</p>
                <p>• Planlama ve disiplinli çalışma ile süreçlerimizi en verimli şekilde yönetiriz.</p>
                <p>• Kaynaklarımızı doğru kullanarak, işlerin aksamadan ilerlemesini sağlarız.</p>
                <p>• Zamanında teslimi, müşteri memnuniyetinin ve güvenin temeli olarak kabul ederiz.</p>
                <p>• Her projede "doğru iş, doğru zaman, doğru sonuç" anlayışıyla hareket ederiz.</p>
              </div>
            </motion.div>

            {/* Uzmanlık */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Uzmanlık</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600 text-left">
                <p>• Deneyimli ekip ve uzman kadro ile çalışmak.</p>
                <p>• Nükleer tesisler ve kritik altyapı projelerinde özel uzmanlık.</p>
                <p>• Sürekli eğitim ve teknoloji takibi ile kendimizi geliştiriyoruz.</p>
                <p>• Mühendislik disiplinini her projede uyguluyoruz.</p>
                <p>• Uzmanlığımızı sürekli artırarak müşterilerimize en iyi hizmeti sunuyoruz.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specializations */}
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
              Uzmanlık Alanlarımız
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deneyimli olduğumuz proje türleri ve sektörler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
    </div>
  )
}

