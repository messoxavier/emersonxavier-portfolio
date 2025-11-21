'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { TEXTS, type Lang } from '@/lib/i18n'

type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  texts: (typeof TEXTS)[Lang]
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem('lang')
    if (stored === 'pt' || stored === 'en') {
      setLangState(stored)
    }
  }, [])

  function setLang(next: Lang) {
    setLangState(next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', next)
    }
  }

  const value: I18nContextValue = {
    lang,
    setLang,
    texts: TEXTS[lang],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}
