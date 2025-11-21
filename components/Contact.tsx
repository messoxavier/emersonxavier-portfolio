'use client'

import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight } from '../lib/motion'
import { useI18n } from './I18nProvider'

const WHATSAPP_NUMBER = '5581996363981'
const WHATSAPP_MESSAGE =
  'Olá, Emerson! Vi seu portfólio e gostaria de falar sobre um projeto.'
const EMAIL = 'efxavier.dev@gmail.com'

export default function Contact() {
  const { texts } = useI18n()

  return (
    <section
      id="contato"
      className="section bg-slate-50 dark:bg-slate-950"
    >
      <div className="container grid gap-10 md:grid-cols-2 items-start">
        <motion.div
          variants={fadeInLeft(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            {texts.contact.title}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-cyan-500/80" />

          <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">
            {texts.contact.subtitle1}
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            {texts.contact.subtitle2}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                WHATSAPP_MESSAGE
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3 text-sm md:text-base"
            >
              {texts.contact.whatsappCta}
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center text-sm md:text-base font-medium text-slate-800 hover:text-cyan-500 dark:text-slate-200 dark:hover:text-cyan-400"
            >
              {texts.contact.emailCta}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="card p-6 md:p-7"
          variants={fadeInRight(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            {texts.contact.cardTitle}
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <span className="block text-slate-500 dark:text-slate-400 text-xs uppercase tracking-[0.16em]">
                {texts.contact.whatsappLabel}
              </span>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  WHATSAPP_MESSAGE
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-cyan-600 hover:underline dark:text-cyan-400"
              >
                <span>+55 (81) 9 9636-3981</span>
              </a>
            </li>

            <li>
              <span className="block text-slate-500 dark:text-slate-400 text-xs uppercase tracking-[0.16em]">
                {texts.contact.emailLabel}
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-1 inline-flex items-center gap-2 text-cyan-600 hover:underline break-all dark:text-cyan-400"
              >
                <span>{EMAIL}</span>
              </a>
            </li>
          </ul>

          <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
            {texts.contact.cardNote}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
