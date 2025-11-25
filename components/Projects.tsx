'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'
import { useI18n } from './I18nProvider'
import type { I18nTexts } from '../lib/i18n'
import { FaHospital, FaSchool, FaLaptopCode } from 'react-icons/fa'
import type { ReactNode } from 'react'

type ProjectId = keyof I18nTexts['projects']['items']

type Project = {
  id: ProjectId
  title: string
  technologies: string[]
  link?: string
}

const ICONS_BY_SECTOR: Record<string, ReactNode> = {
  'Saúde': <FaHospital className="text-cyan-500 dark:text-cyan-300" />,
  'Educação': <FaSchool className="text-cyan-500 dark:text-cyan-300" />,
  'Tecnologia': <FaLaptopCode className="text-cyan-500 dark:text-cyan-300" />,
}

const PROJECTS: Project[] = [
  { id: 'sisger', title: 'SISGER - Sistema de Gerenciamento de Reunião', technologies: ['React', 'Node.js', 'MySQL'] },
  { id: 'autorize', title: 'Autorize - Plataforma de Gestão Integrada', technologies: ['Laravel', 'PHP', 'JavaScript', 'MySQL'] },
  { id: 'consultorio', title: 'Consultório na Nuvem', technologies: ['Laravel', 'PHP', 'JavaScript', 'MySQL'] },
  { id: 'moodle', title: 'Ambiente Virtual de Aprendizagem (Moodle)', technologies: ['PHP', 'JavaScript', 'Moodle', 'MySQL'] },
  { id: 'portfolio', title: 'Portfólio Web', technologies: ['Next.js', 'React', 'Tailwind CSS'] },
  { id: 'landing', title: 'Landing pages e páginas de captura', technologies: ['Next.js', 'React', 'Tailwind CSS'], },
]

export default function Projects() {
  const { texts } = useI18n()

  return (
    <section id="projetos" className="section bg-slate-50 dark:bg-slate-950">
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

        <div className="mt-10 grid gap-8 md:grid-cols-2">

          {PROJECTS.map((project, index) => {
            const t = texts.projects.items[project.id]

            const firstWord = t.sector?.split('·')[0]?.trim() ?? ''
            const icon = ICONS_BY_SECTOR[firstWord] ?? <FaLaptopCode />

            return (
              <motion.div
                key={project.id}
                variants={fadeInUp(0.1 * (index + 1))}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                className="
                  card relative p-6 border-l-4 border-cyan-500
                  hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10
                  transition
                "
              >
                <div className="flex items-center gap-3 mb-2">
                  {icon}
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                    {project.title}
                  </h3>
                </div>

                {t.sector && (
                  <p className="text-xs text-cyan-600 dark:text-cyan-300/80 mb-3">
                    {t.sector}
                  </p>
                )}

                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-100 dark:bg-slate-900
                      border border-slate-300 dark:border-slate-700
                      rounded-full text-xs px-3 py-1 text-cyan-700 dark:text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
