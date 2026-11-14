import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import profileImg from '../assets/profile.jpg'
import { profile } from '../data'
import { ResumeButton } from './Navbar'

const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="orb absolute -left-24 top-24 h-80 w-80 rounded-full bg-violet/25 blur-[110px]" />
        <div className="orb absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-volt/20 blur-[120px]" style={{ animationDelay: '-8s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="section relative grid items-center gap-12 pb-16 pt-32 lg:grid-cols-[1.25fr_1fr]">
        <motion.div variants={{ show: { transition: { staggerChildren: 0.12 } } }} initial="hidden" animate="show">
          <motion.p variants={item} className="mb-4 text-lg text-zinc-400">Hello, I'm</motion.p>
          <motion.h1 variants={item} className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">{profile.name}</motion.h1>
          <motion.p variants={item} className="mt-5 text-lg font-medium text-zinc-200 sm:text-xl">
            Software Developer | Cloud Enthusiast | <span className="grad-text">Building Solutions with Python &amp; AWS</span>
          </motion.p>
          <motion.p variants={item} className="mt-5 max-w-xl leading-relaxed">
            I'm an Electronics and Communication Engineering graduate passionate about software development, cloud technologies and solving real-world problems through technology. I enjoy learning new technologies and building practical applications.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View My Projects</a>
            <ResumeButton />
          </motion.div>
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="rounded-lg border border-line p-2.5 text-zinc-300 transition hover:border-violet hover:text-white"><Linkedin size={18} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="rounded-lg border border-line p-2.5 text-zinc-300 transition hover:border-violet hover:text-white"><Github size={18} /></a>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
              Open to connecting and collaborating
            </span>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-violet via-volt to-violet opacity-70 blur-xl" />
          <div className="relative rounded-[2rem] bg-gradient-to-br from-violet to-volt p-[2px]">
            <img src={profileImg} alt="Portrait of Natha Karthikeya" width={600} height={660} fetchPriority="high"
              className="aspect-[4/4.4] w-full rounded-[calc(2rem-2px)] bg-panel object-cover object-top" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
