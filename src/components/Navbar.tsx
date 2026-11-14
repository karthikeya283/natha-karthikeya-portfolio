import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { navItems, profile } from '../data'

function useActiveSection() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navItems.forEach((n) => {
      const el = document.getElementById(n.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])
  return active
}

export function ResumeButton({ className = 'btn-ghost' }: { className?: string }) {
  return (
    <a href="/resume.pdf" download={profile.resumeFile} className={className}>
      <Download size={16} aria-hidden /> Download Resume
    </a>
  )
}

export default function Navbar() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? 'border-b border-line bg-ink/80 backdrop-blur-xl' : ''}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="font-display text-xl font-bold text-white" aria-label="Natha Karthikeya, home">
          N<span className="grad-text">K</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} aria-current={active === n.id ? 'page' : undefined}
                className={`relative px-3 py-2 text-sm transition-colors hover:text-white ${active === n.id ? 'text-white' : 'text-zinc-400'}`}>
                {n.label}
                {active === n.id && (
                  <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-gradient-to-r from-violet to-volt" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ResumeButton className="btn-ghost hidden !py-2 sm:inline-flex" />
          <button className="rounded-lg p-2 text-white lg:hidden" onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden lg:hidden">
            <ul className="flex flex-col gap-1 px-5 pb-5">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-3 ${active === n.id ? 'bg-white/10 text-white' : 'text-zinc-400'}`}>{n.label}</a>
                </li>
              ))}
              <li className="pt-2"><ResumeButton className="btn-primary w-full" /></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
