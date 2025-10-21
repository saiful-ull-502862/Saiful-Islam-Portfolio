import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const ResearchProjects = () => {
  const projects = [
    {
      title: "Poro-hyperelastic Modeling of Soft Tissues",
      period: "2022 - Present",
      description: "Developed finite element models to simulate the mechanical behavior of biological soft tissues using poro-hyperelastic constitutive models in ABAQUS. Investigated tissue deformation under various loading conditions.",
      tags: ["ABAQUS", "FEA", "Biomechanics", "Poro-hyperelasticity", "Python"],
      links: {
        paper: "/papers/soft-tissue-modeling.pdf",
        data: "/data/tissue-models.zip"
      }
    },
    {
      title: "CNN-based Mechanical Property Prediction",
      period: "2023",
      description: "Applied convolutional neural networks to predict mechanical properties from microstructural images. Developed Python-based pipeline for image processing and machine learning model training.",
      tags: ["Python", "CNN", "Machine Learning", "Image Analysis", "TensorFlow"],
      links: {
        github: "https://github.com/username/cnn-mechanical-properties",
        paper: "/papers/cnn-mechanical.pdf"
      }
    },
    {
      title: "Finite Element Analysis of Concrete Structures",
      period: "2021 - 2022",
      description: "Conducted FEA simulations of concrete structures under dynamic loading conditions. Analyzed stress distribution and failure mechanisms using ABAQUS Standard and Explicit.",
      tags: ["ABAQUS", "FEA", "Concrete", "Structural Analysis", "MATLAB"],
      links: {
        presentation: "/presentations/concrete-fea.pdf",
        data: "/data/concrete-models.zip"
      }
    },
    {
      title: "Thermal Analysis of Electronic Components",
      period: "2020",
      description: "Performed thermal analysis and optimization of electronic cooling systems using computational fluid dynamics and heat transfer simulations.",
      tags: ["Thermal Analysis", "CFD", "Heat Transfer", "SolidWorks", "ANSYS"],
      links: {
        paper: "/papers/thermal-analysis.pdf"
      }
    },
    {
      title: "Biomechanical Analysis of Orthopedic Implants",
      period: "2023",
      description: "Modeled and analyzed the mechanical performance of orthopedic implants under physiological loading conditions using finite element methods.",
      tags: ["Biomechanics", "FEA", "Medical Devices", "ABAQUS", "SolidWorks"],
      links: {
        presentation: "/presentations/orthopedic-implants.pdf"
      }
    },
    {
      title: "Machine Learning for Material Classification",
      period: "2022",
      description: "Developed machine learning algorithms for automatic classification of material microstructures and prediction of mechanical properties.",
      tags: ["Machine Learning", "Python", "Material Science", "Classification", "Scikit-learn"],
      links: {
        github: "https://github.com/username/material-classification",
        paper: "/papers/ml-material-classification.pdf"
      }
    }
  ]

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Research Projects
        </motion.h1>
        
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A collection of research projects showcasing expertise in finite element analysis, 
          biomechanics, machine learning, and computational modeling.
        </motion.p>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 justify-center mb-8"
        >
          {["All", "FEA", "Biomechanics", "Machine Learning", "Python", "ABAQUS"].map((tag) => (
            <button
              key={tag}
              className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-blue-600 transition-colors"
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Interested in Collaborating?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new research opportunities and collaborative projects 
            in the fields of FEA, biomechanics, and computational modeling.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default ResearchProjects