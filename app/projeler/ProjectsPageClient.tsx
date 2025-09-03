'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects, Project } from '@/data/projects'
import { MapPin, Calendar, Filter } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import ProjectModal from '@/components/ui/ProjectModal'

export default function ProjectsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const categories = [
    { value: 'all', label: 'Tümü' },
    { value: 'nukleer', label: 'Nükleer' },
    { value: 'spor', label: 'Spor' },
    { value: 'okul', label: 'Okul' },
    { value: 'yol', label: 'Yol' },
    { value: 'arastirma', label: 'Araştırma' },
    { value: 'ticari', label: 'Ticari' }
  ]

  const statuses = [
    { value: 'all', label: 'Tümü' },
    { value: 'tamamlandi', label: 'Tamamlandı' },
    { value: 'devam-ediyor', label: 'Devam Ediyor' }
  ]

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory
    const statusMatch = selectedStatus === 'all' || project.status === selectedStatus
    return categoryMatch && statusMatch
  })

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const handleImageError = (imagePath: string) => {
    setImageErrors(prev => new Set(prev).add(imagePath))
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
              Projelerimiz
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0">
              Başarıyla tamamladığımız ve devam eden projelerimizden örnekler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <Filter className="w-6 h-6 text-orange-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Filtreler</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent touch-target"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durum
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent touch-target"
                >
                  {statuses.map(status => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
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
              Proje Portföyümüz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {filteredProjects.length} proje bulundu
            </p>
          </motion.div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-orange-200"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={imageErrors.has(project.image) ? getFallbackImage() : project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={() => handleImageError(project.image)}
                      priority={index < 3}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.status === 'tamamlandi' ? 'Tamamlandı' : 'Devam Ediyor'}
                    </div>
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.location}
                    </div>
                    
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.year}
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    {project.area && (
                      <div className="text-sm text-orange-600 font-semibold mb-4">
                        Alan: {project.area}
                      </div>
                    )}
                    
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="w-full font-semibold"
                      onClick={() => handleProjectClick(project)}
                    >
                      Detayları İncele
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <div className="text-gray-500 text-lg">
                Seçilen kriterlere uygun proje bulunamadı.
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Statistics */}
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
              Proje İstatistiklerimiz
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
            {[
              { number: '7', label: 'Tamamlanan Proje' },
              { number: '1', label: 'Devam Eden Proje' },
              { number: '8', label: 'Toplam Proje' },
              { number: '100%', label: 'Müşteri Memnuniyeti' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}
