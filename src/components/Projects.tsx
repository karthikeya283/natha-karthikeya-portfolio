import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Github } from 'lucide-react'
import Reveal, { SectionHeading } from './Reveal'
import { cloudLearning, projects } from '../data'
import type { Project } from '../data'

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `project-${index}`
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <motion.article whileHover={{ y: -6 }} className="card group flex h-full flex-col overflow-hidden">
        <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-violet/20 via-ink to-volt/20" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff14_1px,transparent_1px)] [background-size:18px_18px]" />
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-[0_0_40px_-8px_#8b5cf6] backdrop-blur transition-transform duration-500 group-hover:scale-110">
            <p.icon size={36} />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed">{p.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="tag">{t}</li>)}</ul>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div id={panelId} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm text-zinc-300">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet to-volt" />{f}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={panelId} className="btn-ghost !py-2">
              {open ? 'Hide Details' : 'View Details'} <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
            </button>
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2"><Github size={16} aria-hidden /> GitHub</a>
            )}
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading title="Projects" sub="Academic projects built with Python and SQL." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
      </div>

      <div className="mt-24">
        <SectionHeading title="Cloud Technologies & Hands-on Learning" sub="Areas I've practised on AWS while learning. These are learning exercises, not production projects." />
        <div className="grid gap-5 md:grid-cols-3">
          {cloudLearning.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <div className="card h-full p-6">
                <c.icon className="mb-4 text-volt" size={24} aria-hidden />
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
