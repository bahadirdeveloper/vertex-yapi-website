'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, MapPin, Calendar, Building, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import { Project } from '@/data/projects'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open')
      setCurrentImageIndex(0) // Reset to first image when modal opens
      setImageErrors(new Set()) // Reset image errors
    } else {
      document.body.classList.remove('modal-open')
    }

    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === 'ArrowLeft') {
        handlePreviousImage()
      } else if (e.key === 'ArrowRight') {
        handleNextImage()
      } else if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentImageIndex, project])

  const handleNextImage = () => {
    if (project && currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  const handleImageError = (imagePath: string) => {
    setImageErrors(prev => new Set(prev).add(imagePath))
  }

  const getFallbackImage = () => {
    return '/logo.webp' // Logo'yu fallback olarak kullan
  }

  if (!project) return null

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'nukleer':
        return <Building className="w-5 h-5" />
      case 'spor':
        return <Award className="w-5 h-5" />
      case 'okul':
        return <Users className="w-5 h-5" />
      default:
        return <Building className="w-5 h-5" />
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'nukleer':
        return 'Nükleer Tesis'
      case 'spor':
        return 'Spor Tesisi'
      case 'okul':
        return 'Eğitim Kurumu'
      case 'yol':
        return 'Yol Projesi'
      case 'arastirma':
        return 'Araştırma Merkezi'
      case 'ticari':
        return 'Ticari Yapı'
      default:
        return category.charAt(0).toUpperCase() + category.slice(1)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden mx-4 sm:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={imageErrors.has(project.images[currentImageIndex]) ? getFallbackImage() : project.images[currentImageIndex]}
                    alt={`${project.title} - Görsel ${currentImageIndex + 1}`}
                    fill
                    unoptimized
                    className="object-cover"
                    onError={() => handleImageError(project.images[currentImageIndex])}
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Status Badge */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                <div className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${
                  project.status === 'tamamlandi' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-orange-500 text-white'
                }`}>
                  {project.status === 'tamamlandi' ? '✅ Tamamlandı' : '🔄 Devam Ediyor'}
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-gray-800 flex items-center space-x-1 sm:space-x-2">
                  {getCategoryIcon(project.category)}
                  <span className="hidden xs:inline">{getCategoryLabel(project.category)}</span>
                  <span className="xs:hidden">{getCategoryLabel(project.category).split(' ')[0]}</span>
                </div>
              </div>

              {/* Navigation Buttons */}
              {project.images.length > 1 && (
                <>
                  {/* Previous Button */}
                  <button
                    onClick={handlePreviousImage}
                    disabled={currentImageIndex === 0}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 touch-target disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={handleNextImage}
                    disabled={currentImageIndex === project.images.length - 1}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 touch-target disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>
                </>
              )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 md:top-6 md:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 touch-target"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>

              {/* Image Counter */}
              {project.images.length > 1 && (
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-white text-xs sm:text-sm font-medium">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              )}

              {/* Title */}
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                  {project.title}
                </h2>
                <div className="flex items-center text-white/90 text-xs sm:text-sm">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  {project.location}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(95vh-200px)] sm:max-h-[calc(90vh-320px)]">
              {/* Thumbnails */}
              {project.images.length > 1 && (
                <div className="mb-6">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">
                    Proje Görselleri
                  </h4>
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          currentImageIndex === index
                            ? 'border-orange-500 shadow-lg'
                            : 'border-gray-200 hover:border-orange-300'
                        }`}
                      >
                        <Image
                          src={imageErrors.has(image) ? getFallbackImage() : image}
                          alt={`${project.title} - Thumbnail ${index + 1}`}
                          fill
                          unoptimized
                          className="object-cover"
                          onError={() => handleImageError(image)}
                        />
                        {currentImageIndex === index && (
                          <div className="absolute inset-0 bg-orange-500/20 flex items-center justify-center">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                    Proje Detayları
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {project.description}
                  </p>

                  {project.area && (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                      <div className="flex items-center text-orange-800">
                        <Building className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span className="font-semibold text-sm sm:text-base">Proje Alanı:</span>
                        <span className="ml-2 text-sm sm:text-base">{project.area}</span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3" />
                      <div>
                        <div className="text-xs sm:text-sm text-gray-500">Tamamlanma Yılı</div>
                        <div className="font-semibold text-gray-800 text-sm sm:text-base">{project.year}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3" />
                      <div>
                        <div className="text-xs sm:text-sm text-gray-500">Konum</div>
                        <div className="font-semibold text-gray-800 text-sm sm:text-base">{project.location}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                      Proje Bilgileri
                    </h4>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm sm:text-base">Kategori:</span>
                        <span className="font-semibold text-gray-800 text-sm sm:text-base">
                          {getCategoryLabel(project.category)}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm sm:text-base">Durum:</span>
                        <span className={`font-semibold text-sm sm:text-base ${
                          project.status === 'tamamlandi' ? 'text-green-600' : 'text-orange-600'
                        }`}>
                          {project.status === 'tamamlandi' ? 'Tamamlandı' : 'Devam Ediyor'}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm sm:text-base">Yıl:</span>
                        <span className="font-semibold text-gray-800 text-sm sm:text-base">{project.year}</span>
                      </div>
                      
                      {project.area && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 text-sm sm:text-base">Alan:</span>
                          <span className="font-semibold text-gray-800 text-sm sm:text-base">{project.area}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                      <h5 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2 sm:mb-3">
                        Teknolojiler & Özellikler
                      </h5>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.category === 'nukleer' && (
                          <>
                            <span className="px-2 sm:px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Güvenlik Sistemleri</span>
                            <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Radyasyon Koruması</span>
                          </>
                        )}
                        {project.category === 'spor' && (
                          <>
                            <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Olimpik Standartlar</span>
                            <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Modern Tesis</span>
                          </>
                        )}
                        {project.category === 'okul' && (
                          <>
                            <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Eğitim Odaklı</span>
                            <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Güvenli Ortam</span>
                          </>
                        )}
                        <span className="px-2 sm:px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">Kaliteli İnşaat</span>
                        <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">Modern Tasarım</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 sm:p-6 md:p-8 bg-gray-50">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
                <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                  Vertex Yapı İnşaat tarafından {project.year} yılında {project.status === 'tamamlandi' ? 'tamamlanmıştır' : 'devam etmektedir'}.
                </div>
                <button
                  onClick={onClose}
                  className="px-4 sm:px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 font-semibold text-sm sm:text-base touch-target"
                >
                  Kapat
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
