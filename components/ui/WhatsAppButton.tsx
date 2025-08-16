'use client'

import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('tel:+905403843333', '_self')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white/20 backdrop-blur-sm"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="WhatsApp ile iletişime geç"
    >
      <Phone className="w-7 h-7" />
    </motion.button>
  )
}
