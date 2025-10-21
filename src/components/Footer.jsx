import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Md Saiful Islam
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Ph.D. Candidate | FEA & Biomechanics Specialist
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            <a
              href="mailto:your-email@example.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200"
            >
              GitHub
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
        >
          <p className="text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Md Saiful Islam. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer