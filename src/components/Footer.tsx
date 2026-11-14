import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  const icons = [
    { icon: Github, href: profile.github, label: 'GitHub', ext: true },
    { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn', ext: true },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ]
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-white">{profile.name}</p>
          <p>Designed &amp; Built with passion.</p>
          <p className="mt-1 text-xs text-zinc-600">© {new Date().getFullYear()} {profile.name}</p>
        </div>
        <div className="flex gap-3">
          {icons.map((i) => (
            <a key={i.label} href={i.href} aria-label={i.label} {...(i.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="rounded-lg border border-line p-2.5 transition hover:border-violet hover:text-white"><i.icon size={16} /></a>
          ))}
        </div>
      </div>
    </footer>
  )
}
