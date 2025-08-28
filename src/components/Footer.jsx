import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} CoinLog · <a href={`${import.meta.env.BASE_URL}privacy.html`}>Privacy Policy</a>
    </footer>
  )
}