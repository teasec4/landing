import React from 'react'

export default function Hero() {
  return (
    <header className="relative">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-24 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
            A simpler way to log your crypto
          </h1>
          <p className="mb-8 max-w-xl text-lg text-slate-600">
            CoinLog lets you record buys and sells, keep notes per asset, and see up-to-date prices — all in a clean, focused layout.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              id="get"
              href="#"
              className="inline-flex items-center rounded-xl bg-black px-6 py-3 text-base font-semibold text-white hover:bg-neutral-800"
            >
              Download on the App Store
            </a>
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

        {/* “Phone” mock */}
        <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="aspect-[9/19.5] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <img
                src={`${import.meta.env.BASE_URL}screens/s1.png`}
                alt="App screenshot"
                className="h-full w-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            <div className="h-full w-full grid place-items-center text-slate-500">
              Put a screenshot at <code>/public/screens/s1.png</code>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}