import { useState } from 'react'
import type { FormEvent } from 'react'
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data'

const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
const configured = Boolean(endpoint && !endpoint.includes('your_form_id'))
type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!configured || !endpoint) return
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const links = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: profile.phoneHref },
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin, ext: true },
    { icon: Github, label: 'GitHub', href: profile.github, ext: true },
  ]

  return (
    <section id="contact" className="section">
      <div className="card relative overflow-hidden p-6 sm:p-12">
        <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/20 blur-[100px]" />
        <div className="relative grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-semibold sm:text-4xl">Let's Build Something Together.</h2>
            <p className="mt-4 max-w-md">Have an opportunity, project idea or just want to connect? Feel free to reach out.</p>
            <ul className="mt-8 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} {...(l.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group inline-flex items-center gap-3 text-zinc-300 transition hover:text-white">
                    <span className="rounded-lg border border-line p-2 transition group-hover:border-violet"><l.icon size={16} aria-hidden /></span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-4" aria-describedby="form-status">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="name" className="mb-1.5 block text-sm text-zinc-300">Name</label>
                  <input id="name" name="name" required autoComplete="name" className="field" placeholder="Your name" /></div>
                <div><label htmlFor="email" className="mb-1.5 block text-sm text-zinc-300">Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" className="field" placeholder="you@example.com" /></div>
              </div>
              <div><label htmlFor="subject" className="mb-1.5 block text-sm text-zinc-300">Subject</label>
                <input id="subject" name="subject" required className="field" placeholder="What is this about?" /></div>
              <div><label htmlFor="message" className="mb-1.5 block text-sm text-zinc-300">Message</label>
                <textarea id="message" name="message" required rows={5} className="field resize-y" placeholder="Write your message" /></div>

              <button type="submit" disabled={!configured || status === 'sending'} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0">
                <Send size={16} aria-hidden /> {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              <div id="form-status" role="status" aria-live="polite" className="text-sm">
                {!configured && <p className="text-amber-300">The contact form isn't connected yet, so messages can't be sent from here. Please email <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a> directly.</p>}
                {status === 'sent' && <p className="text-emerald-400">Message sent. Thank you, I'll get back to you soon.</p>}
                {status === 'error' && <p className="text-red-400">The message couldn't be sent. Try again, or email <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>.</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
