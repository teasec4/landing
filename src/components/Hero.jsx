// src/components/Hero.jsx
import React from 'react'
import Screenshot from './Screenshot'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* мягкие пятна фона (не обязательно) */}
      <div className="absolute inset-0 -z-10">
        <div className="mx-auto max-w-7xl relative h-64">
          <div className="blob absolute left-10 top-6 h-40 w-40 rounded-full bg-emerald-300/30" />
          <div className="blob absolute right-10 top-10 h-48 w-48 rounded-full bg-cyan-300/25" />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-14 md:grid-cols-2 md:gap-10 md:py-20">
        {/* ЛЕВАЯ КОЛОНКА: текст */}
        <div>
          <h1 className="mb-3 text-4xl font-semibold tracking-tight md:text-5xl">
            A simpler way to log your crypto
          </h1>
          <p className="mb-7 max-w-xl text-lg text-slate-600">
            CoinLog lets you record buys and sells, keep notes per asset, and see up-to-date prices — all in a clean, focused layout.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link to="/get" className="inline-flex items-center rounded-xl bg-black px-6 py-3 text-base font-semibold text-white hover:bg-neutral-800">
  Download on the App Store
</Link>
            <a
              href="#demo"
              className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50"
            >
              See demo
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            iOS 16+, offline-first, optional live price fetch.
          </p>
        </div>

        {/* ПРАВАЯ КОЛОНКА: телефон */}
        
<div className="w-full md:justify-self-end flex justify-center md:justify-end">
  <img
    src={`${import.meta.env.BASE_URL}screens/s1.png`}
    alt="App screenshot"
    className="w-full max-w-sm md:max-w-md drop-shadow-2xl select-none pointer-events-none"
  />
</div>
      </div>
    </header>
  )
}