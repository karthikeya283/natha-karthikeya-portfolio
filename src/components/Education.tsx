import Reveal, { SectionHeading } from './Reveal'
import { achievements, education } from '../data'
import { Trophy } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading title="Education" />
      <ol className="relative ml-3 space-y-8 border-l border-line">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.08}>
            <li className="relative pl-8">
              <span aria-hidden className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-gradient-to-br from-violet to-volt shadow-[0_0_14px_#8b5cf6]" />
              <div className="card p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{e.degree}</h3>
                  <span className="text-sm text-zinc-500">{e.years}</span>
                </div>
                <p className="mt-1 text-sm">{e.school}</p>
                <p className="grad-text mt-3 inline-block text-sm font-semibold">{e.score}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <div className="mt-20">
        <SectionHeading title="Achievements" />
        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a} delay={i * 0.08}>
              <div className="card flex h-full gap-4 p-6">
                <Trophy className="mt-0.5 shrink-0 text-violet" size={22} aria-hidden />
                <p className="text-zinc-300">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
