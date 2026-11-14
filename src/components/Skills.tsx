import { motion } from 'framer-motion'
import Reveal, { SectionHeading } from './Reveal'
import { skillGroups } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading title="Technical skills" sub="Tools and technologies I've worked with through coursework and projects." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06}>
            <motion.div whileHover={{ y: -4 }} className="card h-full p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-xl bg-gradient-to-br from-violet/30 to-volt/30 p-2.5 text-white"><g.icon size={20} aria-hidden /></span>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => <li key={s} className="tag">{s}</li>)}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
