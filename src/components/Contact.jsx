import React from 'react'

const socials = [
  { name: 'Email', href: 'mailto:kovalev_mk@tuta.io?subject=CoinLog%20feedback', icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor"><path strokeWidth="1.5" d="M3 7.5 12 13l9-5.5M4 6h16a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20 18H4a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 4 6Z"/></svg>
  )},
  { name: 'X (Twitter)', href: 'https://x.com/CoinsAndCode', icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M18.244 2h3.26l-7.13 8.15L22 22h-6.563l-5.137-6.71L4.31 22H1.05l7.63-8.74L2 2h6.692l4.65 6.14L18.244 2Zm-1.15 18h1.805L7.01 4h-1.9l12 16Z"/></svg>
  )},
  { name: 'Telegram', href: 'https://t.me/teasec4', icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M9.036 15.28 8.86 19.4a.9.9 0 0 0 1.39.77l3.123-2.05 3.612 2.657c.662.487 1.603.12 1.77-.683l3.164-15.3c.18-.873-.67-1.59-1.49-1.22L2.4 9.22c-.91.41-.85 1.77.11 2.06l4.9 1.46 11.36-7.04-9.734 9.58Z"/></svg>
  )},
  { name: 'GitHub', href: 'https://github.com/teasec4', icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path fillRule="evenodd" d="M12 2a10 10 0 0 0-3.162 19.49c.5.092.687-.217.687-.483 0-.237-.009-.868-.013-1.706-2.797.608-3.387-1.349-3.387-1.349-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.342 1.087 2.912.832.091-.647.35-1.087.636-1.337-2.233-.254-4.582-1.116-4.582-4.966 0-1.097.39-1.995 1.03-2.697-.103-.253-.447-1.274.098-2.655 0 0 .84-.269 2.75 1.03A9.564 9.564 0 0 1 12 6.844a9.55 9.55 0 0 1 2.505.337c1.91-1.3 2.75-1.03 2.75-1.03.545 1.381.201 2.402.099 2.655.64.702 1.029 1.6 1.029 2.697 0 3.86-2.352 4.71-4.592 4.959.36.31.68.921.68 1.856 0 1.34-.012 2.418-.012 2.747 0 .268.186.579.694.48A10.002 10.002 0 0 0 12 2Z" clipRule="evenodd"/></svg>
  )},
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-3 text-2xl font-semibold tracking-tight">Get in touch</h2>
      <p className="mb-8 max-w-2xl text-slate-600">
        Questions, feedback, or early access? DM me on socials or email me.
      </p>

      <ul className="flex flex-wrap gap-3">
        {socials.map(s => (
          <li key={s.name}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 shadow-sm"
            >
              {s.icon}
              <span>{s.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}