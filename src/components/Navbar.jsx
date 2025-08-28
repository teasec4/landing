import React from 'react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-black text-white shadow-sm">
            <span className="text-sm font-bold tracking-wide">CL</span>
          </div>
          <span className="text-sm font-semibold text-slate-900">CoinLog</span>
        </a>

        <div className="hidden gap-6 text-sm text-slate-700 md:flex">
          <a href="#features" className="hover:text-black">Features</a>
          <a href="#demo" className="hover:text-black">Demo</a>
          <a href="/privacy.html" className="hover:text-black">Privacy</a>
        </div>

        <a
          href="#get"
          className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Get the App
        </a>
      </div>
    </nav>
  )
}