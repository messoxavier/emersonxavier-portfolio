'use client'

import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight } from '../lib/motion'
import { useI18n } from './I18nProvider'

export default function Hero() {
  const { texts } = useI18n()

  return (
    <section id="inicio" className="section bg-slate-50 dark:bg-slate-950">
      <div className="container grid md:grid-cols-2 items-center gap-10">
        
        <motion.div
          variants={fadeInLeft(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <div
            className="
              inline-flex items-center gap-2 rounded-full
              bg-slate-100 px-3 py-1 text-xs font-medium
              text-slate-700 ring-1 ring-slate-200
              dark:bg-slate-900/80 dark:text-slate-300 dark:ring-slate-700
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>{texts.hero.badge}</span>
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            {texts.hero.title}
          </h1>

          <p className="mt-5 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            {texts.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="btn-primary px-6 py-3 text-sm md:text-base"
            >
              {texts.hero.ctaPrimary}
            </a>

            <a
              href="#projetos"
              className="inline-flex items-center text-sm md:text-base font-medium text-slate-800 hover:text-cyan-500 dark:text-slate-200 dark:hover:text-cyan-400"
            >
              {texts.hero.ctaSecondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="order-first md:order-last"
          variants={fadeInRight(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <div className="card p-6 md:p-7">

            <p className="text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
              {texts.hero.stackLabel}
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
              {texts.hero.stackItems}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="card p-4 border border-slate-200 dark:border-slate-800">
                <p className="text-slate-500 dark:text-slate-400">
                  {texts.hero.expLabel}
                </p>
                <p className="font-medium text-slate-900 dark:text-slate-50">
                  {texts.hero.expValue}
                </p>
              </div>

              <div className="card p-4 border border-slate-200 dark:border-slate-800">
                <p className="text-slate-500 dark:text-slate-400">
                  {texts.hero.projLabel}
                </p>
                <p className="font-medium text-slate-900 dark:text-slate-50">
                  {texts.hero.projValue}
                </p>
              </div>

              <div className="card p-4 col-span-2 border border-slate-200 dark:border-slate-800">
                <p className="text-slate-500 dark:text-slate-400">
                  {texts.hero.helpLabel}
                </p>
                <p className="font-medium text-slate-900 dark:text-slate-50">
                  {texts.hero.helpValue}
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              {texts.hero.bottomNote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
