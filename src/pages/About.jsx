import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const education = [
    {
      degree: "Ph.D. in Mechanical Engineering",
      institution: "University of Louisiana at Lafayette",
      period: "2021 - Present",
      gpa: "GPA: 3.8/4.0",
      focus: "Biomechanics, FEA, Soft Tissue Mechanics"
    },
    {
      degree: "M.Sc. in Mechanical Engineering",
      institution: "University of Louisiana at Lafayette",
      period: "2019 - 2021",
      gpa: "GPA: 3.9/4.0",
      focus: "Computational Mechanics, FEA"
    },
    {
      degree: "B.Sc. in Mechanical Engineering",
      institution: "Islamic University of Technology (IUT)",
      period: "2013 - 2017",
      gpa: "CGPA: 3.56/4.0",
      focus: "Mechanical Design, Thermodynamics"
    }
  ]

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="section-title">About Me</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-blue-900 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Professional Summary
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Ph.D. candidate specializing in finite element analysis and biomechanics with extensive 
                  experience in computational modeling of soft tissues. Expertise in ABAQUS, Python, 
                  and machine learning applications for mechanical systems. Passionate about solving 
                  complex engineering problems through computational methods and data-driven approaches.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Research Focus
                </h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Finite Element Analysis (FEA)</li>
                  <li>• Soft Tissue Biomechanics</li>
                  <li>• Poro-hyperelastic Material Modeling</li>
                  <li>• Machine Learning in Engineering</li>
                  <li>• Computational Fluid Dynamics</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Career Goals
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Seeking industrial roles in FEA engineering, mechanical design, and materials engineering 
                  where I can apply my expertise in computational modeling and biomechanics to solve 
                  real-world engineering challenges.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-6 relative pl-12"
              >
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full"></div>
                <div className="absolute left-7 top-7 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-primary dark:text-blue-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">{edu.period}</p>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">{edu.gpa}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">{edu.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default About