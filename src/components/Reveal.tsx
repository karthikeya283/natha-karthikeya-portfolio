import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-zinc-400">{sub}</p>}
    </Reveal>
  )
}
