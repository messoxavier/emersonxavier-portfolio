'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="
        fixed bottom-6 right-4 md:right-8 z-40
        inline-flex h-10 w-10 items-center justify-center
        rounded-full bg-cyan-500 text-slate-950
        shadow-lg shadow-cyan-500/30
        hover:bg-cyan-400 transition
      "
      aria-label="Voltar ao topo"
    >
      <FaArrowUp className="h-4 w-4" />
    </button>
  )
}
