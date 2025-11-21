'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import { useI18n } from './I18nProvider'

const NAV_IDS = ['servicos', 'projetos', 'sobre', 'contato'] as const

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, texts } = useI18n()

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navLabels = texts.navbar.items

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-slate-50/80 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/80">
      <div className="container flex h-16 items-center justify-between gap-3">
        <Link
          href="#inicio"
          className="flex flex-col leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {texts.navbar.role}
          </span>
          <span className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            {texts.navbar.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm text-slate-700 dark:text-slate-200">
          <a href="#servicos" className="hover:text-cyan-500 transition-colors">
            {navLabels.services}
          </a>
          <a href="#projetos" className="hover:text-cyan-500 transition-colors">
            {navLabels.projects}
          </a>
          <a href="#sobre" className="hover:text-cyan-500 transition-colors">
            {navLabels.about}
          </a>
          <a href="#contato" className="hover:text-cyan-500 transition-colors">
            {navLabels.contact}
          </a>

          <a href="#contato" className="btn-primary text-xs md:text-sm">
            {texts.navbar.cta}
          </a>

          <div className="flex items-center gap-1 rounded-full border border-slate-300/70 px-1 py-0.5 text-xs dark:border-slate-600">
            <button
              type="button"
              onClick={() => setLang('pt')}
              className={`px-2 py-0.5 rounded-full ${
                lang === 'pt'
                  ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded-full ${
                lang === 'en'
                  ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              EN
            </button>
          </div>

          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center gap-1 text-xs border border-slate-300/70 rounded-full px-1 py-0.5 dark:border-slate-600">
            <button
              type="button"
              onClick={() => setLang('pt')}
              className={lang === 'pt' ? 'font-semibold' : 'opacity-70'}
            >
              PT
            </button>
            <span className="text-slate-400">|</span>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'font-semibold' : 'opacity-70'}
            >
              EN
            </button>
          </div>

          <ThemeToggle />

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-900 dark:border-slate-700 dark:text-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`
          md:hidden overflow-hidden border-t border-slate-200/60 bg-slate-50/95
          dark:border-slate-800/60 dark:bg-slate-950/95
          transition-[max-height,opacity] duration-200 ease-out
          ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
        `}
      >
        <nav className="container py-3 space-y-1 text-sm text-slate-800 dark:text-slate-200">
          <a
            href="#servicos"
            className="block rounded-lg px-2 py-2 hover:bg-slate-100 hover:text-cyan-500 dark:hover:bg-slate-900"
            onClick={() => setOpen(false)}
          >
            {navLabels.services}
          </a>
          <a
            href="#projetos"
            className="block rounded-lg px-2 py-2 hover:bg-slate-100 hover:text-cyan-500 dark:hover:bg-slate-900"
            onClick={() => setOpen(false)}
          >
            {navLabels.projects}
          </a>
          <a
            href="#sobre"
            className="block rounded-lg px-2 py-2 hover:bg-slate-100 hover:text-cyan-500 dark:hover:bg-slate-900"
            onClick={() => setOpen(false)}
          >
            {navLabels.about}
          </a>
          <a
            href="#contato"
            className="block rounded-lg px-2 py-2 hover:bg-slate-100 hover:text-cyan-500 dark:hover:bg-slate-900"
            onClick={() => setOpen(false)}
          >
            {navLabels.contact}
          </a>

          <a
            href="#contato"
            className="mt-3 inline-flex w-full justify-center rounded-lg bg-cyan-500 px-3 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-400 transition"
            onClick={() => setOpen(false)}
          >
            {texts.navbar.cta}
          </a>
        </nav>
      </div>
    </header>
  )
}
