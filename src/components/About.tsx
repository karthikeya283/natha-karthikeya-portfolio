import Reveal, { SectionHeading } from './Reveal'
import { ResumeButton } from './Navbar'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading title="About me" />
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-5 leading-relaxed">
          <p>I studied B.Tech in Electronics and Communication Engineering, but the part of the course I kept coming back to was writing software. Python was where it started, and I've since used it with SQL to build a few applications, from a computer-vision project to a database-backed asset tracker.</p>
          <p>I've also spent time on AWS, working hands-on with EC2 and S3 and learning the basics of IAM. Cloud computing and backend development are where I want to grow, and I'm curious about AI too.</p>
          <p>I learn best by building things, so I keep picking up new tools and trying them on practical problems.</p>
          <ResumeButton className="btn-primary mt-2" />
        </Reveal>
        <Reveal delay={0.1} className="card space-y-4 p-6 text-sm">
          {[['Background', 'B.Tech, Electronics & Communication'], ['Main tools', 'Python, SQL, AWS'], ['Interested in', 'Cloud, backend development, AI'], ['Based in', 'Kothagudem, Telangana']].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
              <span className="text-zinc-500">{k}</span><span className="text-right text-zinc-200">{v}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
