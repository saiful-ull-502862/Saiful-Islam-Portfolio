import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "Graduate Research Assistant",
      company: "University of Lousiana at Lafayette",
      period: "2021 - Present",
      location: "Lafayette, LA",
      description: [
        "Developed finite element models for soft tissue biomechanics using ABAQUS",
        "Implemented poro-hyperelastic material models for biological tissues",
        "Applied machine learning techniques for mechanical property prediction",
        "Published research in peer-reviewed journals and conference proceedings"
      ]
    },
    {
      title: "Service Engineer",
      company: "AUDI",
      period: "2018 - 2021",
      location: "Dhaka, Bangladesh",
      description: [
        "Performed maintenance and troubleshooting of power generators",
        "Managed service operations and customer technical support",
        "Conducted performance analysis and optimization of mechanical systems"
      ]
    },
    {
      title: "Technical Intern",
      company: "Walton Hi-Tech Industries Ltd.",
      period: "2017",
      location: "Gazipur, Bangladesh",
      description: [
        "Gained hands-on experience in CNC machining and manufacturing processes",
        "Assisted in quality control and production optimization",
        "Learned industrial safety standards and maintenance procedures"
      ]
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
          Professional Experience
        </motion.h1>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card p-8 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-8 top-8 w-4 h-4 bg-primary rounded-full"></div>
              <div className="absolute left-8.5 top-12 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
              
              <div className="ml-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-primary dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-300">{exp.location}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 }}
                      className="text-gray-600 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-primary mr-2">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Technical Expertise Gained
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "FEA Software", skills: ["ABAQUS", "SolidWorks", "ANSYS"] },
              { category: "Programming", skills: ["Python", "MATLAB", "LaTeX"] },
              { category: "Research Methods", skills: ["Computational Modeling", "Machine Learning", "Data Analysis"] },
              { category: "Engineering", skills: ["Biomechanics", "Material Science", "Thermodynamics"] }
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {category.category}
                </h4>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1 bg-primary/10 text-primary dark:text-blue-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Experience