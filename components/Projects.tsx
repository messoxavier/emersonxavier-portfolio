'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'
import { useI18n } from './I18nProvider'
import type { I18nTexts } from '../lib/i18n'

type ProjectId = keyof I18nTexts['projects']['items']

type Project = {
  id: ProjectId
  title: string          
  technologies: string[]
  link?: string
}

const PROJECTS: Project[] = [
  {
    id: 'sisger',
    title: 'SISGER - Sistema de Gerenciamento de Reunião',
    technologies: ['React', 'Node.js', 'MySQL'],
  },
  {
    id: 'moodle',
    title: 'Ambiente Virtual de Aprendizagem (Moodle)',
    technologies: ['PHP', 'JavaScript', 'Moodle', 'MySQL'],
  },
  {
    id: 'portfolio',
    title: 'Portfólio Web',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    id: 'ehora',
    title: 'Sistema e-Hora',
    technologies: ['React', 'Node.js', 'MySQL'],
  },
]

export default function Projects() {
  const { texts } = useI18n()

  return (
    <section
      id="projetos"
      className="section bg-slate-50 dark:bg-slate-950"
    >
      <div className="container">
        <motion.div
          variants={fadeInUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-50">
            {texts.projects.title}
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-cyan-500/80" />

          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
            {texts.projects.subtitle}
          </p>
        </motion.div>

        <div className="mt-10 space-y-8">
          {PROJECTS.map((project, index) => {
            const t = texts.projects.items[project.id]

            return (
              <motion.article
                key={project.id}
                variants={fadeInUp(0.1 * (index + 1))}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.25 }}
                className="
                  card p-6 md:p-7 border 
                  border-slate-200 dark:border-slate-800
                  hover:border-cyan-500/40 hover:-translate-y-1
                  hover:shadow-lg hover:shadow-cyan-500/10
                  transition
                "
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                      {project.title}
                    </h3>

                    {t.sector && (
                      <p className="text-xs md:text-sm text-cyan-600 dark:text-cyan-300/80 mt-1">
                        {t.sector}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 md:justify-end">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full px-2.5 py-1 text-xs font-medium
                          bg-slate-100 text-cyan-700 border border-slate-300
                          dark:bg-slate-900 dark:text-cyan-300 dark:border-slate-700
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t.desc}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
