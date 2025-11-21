'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useI18n } from './I18nProvider'

export default function Footer() {
  const year = new Date().getFullYear()
  const { texts } = useI18n()

  return (
    <footer className="border-t border-slate-200 bg-slate-100/95 dark:border-slate-800 dark:bg-slate-950/95">
      <div className="container py-6 md:py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-600 dark:text-slate-400">
        <div>
          <p className="font-medium text-slate-900 dark:text-slate-100">
            {texts.navbar.name}
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            {texts.footer.roleLine} · {year}
          </p>
        </div>

        <div className="flex items-center gap-4 text-base">
          <a
            href="https://www.linkedin.com/in/emersonxavier99/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition"
          >
            <FaLinkedin />
            <span className="hidden sm:inline text-xs md:text-sm">
              {texts.footer.linkedin}
            </span>
          </a>
          <a
            href="https://github.com/messoxavier"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition"
          >
            <FaGithub />
            <span className="hidden sm:inline text-xs md:text-sm">
              {texts.footer.github}
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
