'use client'

import { FaGlobe, FaCode, FaServer, FaComments } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'
import { useI18n } from './I18nProvider'

type ServiceKey = 'webSites' | 'customSystems' | 'integrations' | 'consulting'

const SERVICES: {
  icon: React.ComponentType<{ className?: string }>
  key: ServiceKey
}[] = [
  { icon: FaGlobe, key: 'webSites' },
  { icon: FaCode, key: 'customSystems' },
  { icon: FaServer, key: 'integrations' },
  { icon: FaComments, key: 'consulting' },
]

export default function Services() {
  const { texts } = useI18n()

  return (
    <section id="servicos" className="section bg-slate-100 dark:bg-slate-950">
      <div className="container">
        <motion.div
          variants={fadeInUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            {texts.services.title}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-cyan-500/80" />
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
            {texts.services.subtitle}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            const content = texts.services.items[service.key]

            return (
              <motion.div
                key={service.key}
                variants={fadeInUp(0.1 * (index + 1))}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.25 }}
                className="
                  card p-6 flex flex-col gap-3
                  border border-slate-200 dark:border-slate-800
                  hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10
                  transition
                "
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    {content.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                  {content.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
