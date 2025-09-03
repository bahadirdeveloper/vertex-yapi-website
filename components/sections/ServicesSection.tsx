'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/services'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Hizmetlerimiz
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Uzmanlık alanlarımızda kaliteli ve güvenilir inşaat hizmetleri sunuyoruz. 
            Her projede en yüksek standartları hedefliyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.slice(0, 8).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-8 relative z-10">
                <div className="text-center">
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl mb-6 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                    <service.icon className="w-10 h-10" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-800 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-left">
                  {service.description}
                </p>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/hizmetler">
            <Button size="lg" variant="default" className="font-bold">
              Tüm Hizmetlerimizi İnceleyin
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
