'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects, Project } from '@/data/projects'
import { MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import ProjectModal from '@/components/ui/ProjectModal'

export default function ProjectsPreviewSection() {
  const featuredProjects = projects.slice(0, 3)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Tamamlanan Projeler
          </h2>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Başarıyla tamamladığımız projelerden örnekler. Her projede kalite ve güvenilirlik 
            standartlarımızı koruyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-accent text-secondary px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                  {project.status === 'tamamlandi' ? '✅ Tamamlandı' : '🔄 Devam Ediyor'}
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-secondary font-medium">
                    Detayları Gör
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
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
                
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {project.area && (
                  <div className="text-sm text-primary font-semibold mb-4">
                    Alan: {project.area}
                  </div>
                )}
                
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleProjectClick(project)}
                >
                  Detayları İncele
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
                          <Link href="/projeler">
                  <Button size="lg" variant="default" className="font-bold">
                    Tüm Projelerimizi İnceleyin
                  </Button>
                </Link>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}
