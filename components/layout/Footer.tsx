import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Logo ve Açıklama */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 sm:mb-8">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Image
                  src="/logo.webp"
                  alt="Vertex Yapı İnşaat"
                  width={720}
                  height={240}
                  className="h-16 sm:h-20 lg:h-24 w-auto"
                />
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white" style={{ textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontFeatureSettings: "'kern' 1, 'liga' 1" }}>VERTEX YAPI</h3>
                  <p className="text-orange-400 text-xs sm:text-sm font-medium" style={{ textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontFeatureSettings: "'kern' 1, 'liga' 1" }}>CONSTRUCTION COMPANY</p>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
              Vertex Yapı İnşaat olarak, güvenli, dayanıklı ve estetik yapılar inşa ederek 
              müşterilerimizin ihtiyaçlarını en yüksek kalite standartlarında karşılıyoruz.
            </p>
            
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="tel:+905439777478"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:info@vertexyapi.com"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/vertex_yapi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Hızlı Linkler</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href="/hakkimizda" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/projeler" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  Projeler
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">İletişim</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  Pazarkaşı Mah. Çarşı Sk. No:2 A Silifke/Mersin
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a
                  href="tel:+905439777478"
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium"
                >
                  +90 543 977 74 78
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a
                  href="mailto:info@vertexyapi.com"
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium"
                >
                  info@vertexyapi.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2024 Vertex Yapı İnşaat Sanayi ve Ticaret Limited Şirketi. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link href="/kvkk" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                KVKK
              </Link>
              <Link href="/gizlilik" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
