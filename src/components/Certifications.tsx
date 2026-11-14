import { Award } from 'lucide-react'
import Reveal, { SectionHeading } from './Reveal'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeading title="Certifications" />
      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <div className="card flex h-full gap-4 p-6">
              <span className="h-fit rounded-xl bg-gradient-to-br from-violet/30 to-volt/30 p-2.5 text-white"><Award size={20} aria-hidden /></span>
              <div>
                <h3 className="font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm">{c.issuer}</p>
                <p className="mt-3 text-xs text-zinc-500">{c.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
