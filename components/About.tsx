'use client'

import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight } from '../lib/motion'
import { useI18n } from './I18nProvider'

export default function About() {
  const { texts } = useI18n()
  const about = texts.about

  return (
    <section id="sobre" className="section bg-slate-50 dark:bg-slate-950">
      <div className="container grid gap-10 md:grid-cols-2 items-start">
        <motion.div
          variants={fadeInLeft(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            {about.title}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-cyan-500/80" />

          <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">
            {about.p1}
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            {about.p2}
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            {about.p3}
          </p>
        </motion.div>

        <motion.div
          className="card p-6 md:p-7"
          variants={fadeInRight(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            {about.workTitle}
          </h3>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            {about.workIntro}
          </p>

          <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {about.steps.map((step, idx) => (
                <li key={idx}>• {step}</li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-3 text-xs md:text-sm">
            <div className="card p-4 border border-slate-200 dark:border-slate-800/60">
              <p className="text-slate-500 dark:text-slate-400">
                {about.expLabel}
              </p>
              <p className="font-medium text-slate-900 dark:text-slate-50">
                {about.expValue}
              </p>
            </div>

            <div className="card p-4 border border-slate-200 dark:border-slate-800/60">
              <p className="text-slate-500 dark:text-slate-400">
                {about.scopeLabel}
              </p>
              <p className="font-medium text-slate-900 dark:text-slate-50">
                {about.scopeValue}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
