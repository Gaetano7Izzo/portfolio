'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Code, Languages, Award } from 'lucide-react'

const skills = {
  technical: [
    'Python', 'Java', 'C++', 'HTML', 'SQL', 'Git', 'Docker', 'Linux',
    'Flask', 'gRPC', 'MongoDB', 'JMS', 'JSON', 'REST API', 'Assembly'
  ],
  soft: [
    'Problem Solving', 'Team Work', 'Comunicazione', 'Leadership',
    'Gestione del Tempo', 'Creatività', 'Adattabilità', 'Analisi Critica',
    'Pensiero Logico', 'Capacità di Apprendimento Rapido'
  ]
}

const languages = [
  { name: 'Italiano', level: 'Nativo' },
  { name: 'Inglese', level: 'Avanzato (C1)' },
  { name: 'Spagnolo', level: 'Intermedio (B2)' }
]

const education = [
  {
    degree: 'Laurea in Ingegneria Informatica',
    institution: 'Università degli Studi di Napoli Federico II',
    period: 'Set 2022 - Presente',
    description: 'Specializzazione in sistemi software e tecnologie web'
  },
  {
    degree: 'Diploma: Informatica e Telecomunicazione - Articolazione Telecomunicazioni',
    institution: 'Istituto Tecnico "EUGENIO PANTALEO"',
    period: 'Set 2017 - Giu 2022',
    description: 'Votazione: 94/100'
  }
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Chi <span className="gradient-text">Sono</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Studente appassionato di tecnologia con una forte attitudine per l'innovazione e il problem solving
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Me */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              La Mia Storia
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Sono uno studente di <strong>Ingegneria Informatica</strong> presso l'Università degli Studi di Napoli Federico II, 
                con una <strong>passione innata per la tecnologia</strong> e l'innovazione.
              </p>
              <p>
                Fin da giovane ho mostrato interesse per la <strong>programmazione</strong> e lo <strong>sviluppo software</strong>, 
                dedicandomi a progetti personali e collaborazioni che mi hanno permesso di sviluppare 
                <strong>competenze tecniche solide</strong> e una mentalità orientata al <strong>problem solving</strong>.
              </p>
              <p>
                Credo fermamente nell'importanza dell'<strong>apprendimento continuo</strong> e nella condivisione delle conoscenze. 
                Sono sempre alla ricerca di <strong>nuove sfide</strong> che mi permettano di crescere sia professionalmente che personalmente.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills & Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Formazione</h3>
              </div>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-4 rounded-lg"
                  >
                    <h4 className="font-semibold text-gray-900">{item.degree}</h4>
                    <p className="text-primary-600 font-medium">{item.institution}</p>
                    <p className="text-sm text-gray-500">{item.period}</p>
                    <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center mb-4">
                <Languages className="w-6 h-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Lingue</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-3 rounded-lg text-center"
                  >
                    <div className="font-semibold text-gray-900">{lang.name}</div>
                    <div className="text-sm text-primary-600">{lang.level}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Competenze</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                <Award className="w-5 h-5 text-primary-600 mr-2" />
                Competenze Tecniche
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                                     <motion.span
                     key={index}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.3, delay: index * 0.05 }}
                     viewport={{ once: true }}
                     className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium skill-tag"
                   >
                     {skill}
                   </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                <Award className="w-5 h-5 text-primary-600 mr-2" />
                Competenze Trasversali
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                                     <motion.span
                     key={index}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.3, delay: index * 0.05 }}
                     viewport={{ once: true }}
                     className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium skill-tag"
                   >
                     {skill}
                   </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 