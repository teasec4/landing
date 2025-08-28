import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)

React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={
      `sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200 transition-shadow
       ${scrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.06)]' : ''}`
    }>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-black text-white shadow-sm">
            <span className="text-sm font-bold tracking-wide">CL</span>
          </div>
          <span className="text-sm font-semibold text-slate-900">CoinLog</span>
        </Link>

                <div className="hidden gap-6 text-sm text-slate-700 md:flex">
          {/* section anchors still fine on the home page */}
          <a href={`${import.meta.env.BASE_URL}#features`} className="hover:text-black">Features</a>
          <a href={`${import.meta.env.BASE_URL}#demo`} className="hover:text-black">Demo</a>
          <a href={`${import.meta.env.BASE_URL}#contact`} className="hover:text-black">Contact</a>
          <a href={`${import.meta.env.BASE_URL}privacy.html`} className="hover:text-black">Privacy</a>
        </div>


       <Link
          to="/get"
          className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Get the App
        </Link>
      </div>
    </nav>
  )
}