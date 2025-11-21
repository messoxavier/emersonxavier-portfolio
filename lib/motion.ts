import type { Variants } from 'framer-motion'

export const fadeInLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: 'easeOut',
    },
  },
})

export const fadeInRight = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: 'easeOut',
    },
  },
})

export const fadeInUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: 'easeOut',
    },
  },
})
