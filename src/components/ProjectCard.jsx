import React from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="card p-6 group cursor-pointer"
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {project.period}
        </p>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-primary/10 text-primary dark:text-blue-400 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-3">
        {project.links?.paper && (
          <a
            href={project.links.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary dark:text-blue-400 hover:underline"
          >
            📄 Paper
          </a>
        )}
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary dark:text-blue-400 hover:underline"
          >
            💻 Code
          </a>
        )}
        {project.links?.presentation && (
          <a
            href={project.links.presentation}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary dark:text-blue-400 hover:underline"
          >
            📊 Presentation
          </a>
        )}
        {project.links?.data && (
          <a
            href={project.links.data}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary dark:text-blue-400 hover:underline"
          >
            📁 Data
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard