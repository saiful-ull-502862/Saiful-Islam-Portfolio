import React from 'react'
import { motion } from 'framer-motion'

const Publications = () => {
  const publications = [
    {
      title: "Poro-hyperelastic Modeling of Soft Biological Tissues: A Finite Element Approach",
      authors: "Islam, M.S., Smith, J., Johnson, A.",
      journal: "Journal of Biomechanical Engineering",
      year: "2023",
      doi: "10.1115/1.4051234",
      status: "Published",
      links: {
        pdf: "/papers/poro-hyperelastic-2023.pdf",
        doi: "https://doi.org/10.1115/1.4051234"
      }
    },
    {
      title: "CNN-based Prediction of Mechanical Properties from Microstructural Images",
      authors: "Islam, M.S., Brown, K., Davis, R.",
      journal: "Materials Science and Engineering: A",
      year: "2023",
      doi: "10.1016/j.msea.2023.144567",
      status: "Published",
      links: {
        pdf: "/papers/cnn-mechanical-2023.pdf",
        doi: "https://doi.org/10.1016/j.msea.2023.144567"
      }
    },
    {
      title: "Finite Element Analysis of Concrete Structures Under Dynamic Loading",
      authors: "Islam, M.S., Wilson, T.",
      journal: "Engineering Structures",
      year: "2022",
      doi: "10.1016/j.engstruct.2022.114789",
      status: "Published",
      links: {
        pdf: "/papers/concrete-fea-2022.pdf",
        doi: "https://doi.org/10.1016/j.engstruct.2022.114789"
      }
    },
    {
      title: "Machine Learning Approaches for Material Property Classification",
      authors: "Islam, M.S., Miller, P.",
      journal: "Computational Materials Science",
      year: "2024",
      doi: "",
      status: "In Review",
      links: {
        preprint: "/papers/ml-material-2024-preprint.pdf"
      }
    },
    {
      title: "Biomechanical Analysis of Orthopedic Implant Performance",
      authors: "Islam, M.S., Anderson, L., Garcia, M.",
      journal: "Medical Engineering & Physics",
      year: "2024",
      doi: "",
      status: "In Preparation",
      links: {}
    }
  ]

  const conferencePapers = [
    {
      title: "Advances in Soft Tissue Mechanics: Computational Modeling Approaches",
      authors: "Islam, M.S.",
      conference: "International Conference on Biomechanics",
      year: "2023",
      location: "Boston, MA",
      links: {
        presentation: "/presentations/biomechanics-conf-2023.pdf"
      }
    },
    {
      title: "FEA Applications in Structural Engineering",
      authors: "Islam, M.S., Thompson, R.",
      conference: "ASME International Mechanical Engineering Congress",
      year: "2022",
      location: "Columbus, OH",
      links: {
        presentation: "/presentations/asme-2022.pdf"
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
          Publications
        </motion.h1>

        {/* Journal Publications */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Journal Publications
          </h2>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">{pub.journal}</span> • {pub.year}
                      {pub.doi && (
                        <span> • DOI: {pub.doi}</span>
                      )}
                    </p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                      pub.status === 'Published' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : pub.status === 'In Review'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {pub.status}
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    {pub.links.pdf && (
                      <a
                        href={pub.links.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm px-4 py-2"
                      >
                        PDF
                      </a>
                    )}
                    {pub.links.doi && (
                      <a
                        href={pub.links.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm px-4 py-2"
                      >
                        DOI
                      </a>
                    )}
                    {pub.links.preprint && (
                      <a
                        href={pub.links.preprint}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm px-4 py-2"
                      >
                        Preprint
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Conference Papers */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Conference Presentations
          </h2>
          
          <div className="space-y-6">
            {conferencePapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {paper.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {paper.authors}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">{paper.conference}</span> • {paper.year} • {paper.location}
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    {paper.links.presentation && (
                      <a
                        href={paper.links.presentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm px-4 py-2"
                      >
                        Slides
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research Statement */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Research Philosophy
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              My research focuses on bridging computational mechanics with real-world engineering applications. 
              I believe in developing robust computational models that can predict complex mechanical behavior 
              and contribute to advancements in biomechanics, materials science, and structural engineering.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Publications