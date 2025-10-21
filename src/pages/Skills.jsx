import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: "Simulation & FEA",
      skills: [
        { name: "ABAQUS", level: 95, description: "Standard & Explicit, User Subroutines" },
        { name: "SolidWorks", level: 85, description: "CAD, Simulation, FEA" },
        { name: "ANSYS", level: 75, description: "Structural & Thermal Analysis" },
        { name: "Homogenization", level: 80, description: "Multi-scale Modeling" },
        { name: "MATLAB", level: 90, description: "Numerical Analysis, Data Processing" }
      ]
    },
    {
      category: "Programming & Tools",
      skills: [
        { name: "Python", level: 90, description: "NumPy, SciPy, TensorFlow, scikit-learn" },
        { name: "LaTeX", level: 95, description: "Technical Documentation, Research Papers" },
        { name: "Git", level: 80, description: "Version Control, Collaboration" },
        { name: "Linux", level: 75, description: "Bash Scripting, Server Management" },
        { name: "Docker", level: 70, description: "Containerization, Deployment" }
      ]
    },
    {
      category: "AI/ML & Data Analysis",
      skills: [
        { name: "Machine Learning", level: 85, description: "Supervised/Unsupervised Learning" },
        { name: "CNN", level: 80, description: "Image Analysis, Pattern Recognition" },
        { name: "Data Visualization", level: 85, description: "Matplotlib, Seaborn, Plotly" },
        { name: "Statistical Analysis", level: 80, description: "Hypothesis Testing, Regression" },
        { name: "Image Processing", level: 75, description: "OpenCV, scikit-image" }
      ]
    },
    {
      category: "Materials & Engineering",
      skills: [
        { name: "Soft Tissue Mechanics", level: 90, description: "Biomechanics, Poro-hyperelasticity" },
        { name: "Material Science", level: 85, description: "Mechanical Properties, Characterization" },
        { name: "Thermodynamics", level: 80, description: "Heat Transfer, Energy Systems" },
        { name: "Fluid Mechanics", level: 75, description: "CFD, Flow Analysis" },
        { name: "Structural Analysis", level: 85, description: "Stress Analysis, Design Optimization" }
      ]
    }
  ]

  const SkillBar = ({ skill, delay }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <div>
          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
            {skill.description}
          </span>
        </div>
        <span className="text-gray-600 dark:text-gray-400 font-medium">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
        />
      </div>
    </motion.div>
  )

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive expertise in finite element analysis, computational modeling, 
          machine learning, and engineering simulation tools.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="card p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h2>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Awards */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Certifications & Awards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Graduate Research Fellowship", issuer: "UT Arlington", year: "2021" },
              { title: "Outstanding Teaching Assistant", issuer: "ME Department", year: "2022" },
              { title: "Best Paper Award", issuer: "ASME Conference", year: "2023" },
              { title: "Research Excellence Grant", issuer: "University", year: "2023" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{item.issuer}</p>
                <p className="text-primary dark:text-blue-400 font-medium">{item.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skill Tags Cloud */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technical Expertise
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Finite Element Analysis", "ABAQUS", "Python", "Machine Learning", 
              "Biomechanics", "SolidWorks", "MATLAB", "Computational Modeling",
              "Poro-hyperelasticity", "CNN", "Image Analysis", "LaTeX",
              "Thermal Analysis", "Structural Engineering", "Data Science"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-primary/10 text-primary dark:text-blue-400 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Skills