'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'Hizmetler', href: '/hizmetler' },
  { name: 'Projeler', href: '/projeler' },
  { name: 'İletişim', href: '/iletisim' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`relative z-50 transition-all duration-300 ${isScrolled ? 'header-sticky' : ''}`}>
      {/* Top Bar - Koyu kahverengi şerit */}
      <div className={`header-top-bar transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="container-custom px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-300" />
                <span>+90 540 384 33 33</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-300" />
                <span>info@vertexyapi.com</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-orange-300">Mersin Silifke'den Türkiye'ye</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`header-main transition-all duration-300 ${isScrolled ? 'header-scrolled' : ''}`}>
        <nav className="container-custom px-3 sm:px-4 lg:px-6">
          <div className={`flex justify-between items-center py-2 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20 lg:h-24'}`}>
            {/* Logo */}
            <Link href="/" className="logo-container group">
              <div className="flex items-center space-x-3">
                {/* Logo Image */}
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="Vertex Yapı İnşaat"
                    width={isScrolled ? 120 : 150}
                    height={isScrolled ? 40 : 50}
                    className="transition-all duration-300 object-contain"
                    priority
                  />
                </div>
                
                {/* Logo Text */}
                <div className="logo-text">
                  <h1 className={`logo-title transition-all duration-300 ${isScrolled ? 'text-xl lg:text-2xl' : 'text-2xl lg:text-3xl'}`} style={{ textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                    VERTEX YAPI
                  </h1>
                  <p className={`logo-subtitle transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-xs lg:text-sm'}`} style={{ textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                    CONSTRUCTION COMPANY
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/iletisim">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Teklif Alın
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-600 hover:text-orange-600 p-2 rounded-lg hover:bg-orange-50 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Menüyü aç</span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden"
              >
                <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100 rounded-b-lg shadow-lg">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-gray-100">
                    <Link href="/iletisim">
                      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300">
                        Teklif Alın
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  )
}
