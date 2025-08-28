import React from 'react'
import Screenshot from './Screenshot'


const items = [
  { title: 'Asset notes & logs', text: 'Write your thesis, targets, and record each buy/sell with size and price.' },
  { title: 'Live prices', text: 'See current market prices and simple PnL. Works with popular public APIs.' },
  { title: 'Calm portfolio view', text: 'Clear totals per asset: invested, value, and change — without noise.' },
]

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">Built for clarity</h2>
      <p className="mb-10 max-w-2xl text-slate-600">
        Keep your records tidy and your head clear. CoinLog focuses on the essentials.
      </p>
      
      <div className="absolute inset-0 -z-10">
        <div className="mx-auto max-w-7xl relative h-64">
          <div className="blob absolute left-10 top-6 h-40 w-40 rounded-full bg-emerald-300/30" />
          <div className="blob absolute right-10 top-10 h-48 w-48 rounded-full bg-cyan-300/25" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-1 text-lg font-semibold">{it.title}</h3>
            <p className="text-slate-600">{it.text}</p>
          </div>
        ))}
      </div>

      
<div id="demo" className="mt-12">
  <h3 className="mb-4 text-lg font-semibold">Demo</h3>
  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
    {['s1.png','s2.png','s3.png'].map((name) => (
      <div key={name} className="flex justify-center">
        <Screenshot
          src={`${import.meta.env.BASE_URL}screens/${name}`}
          alt={name}
          fit="contain"
          rounded
          shadow
          wrapperClassName="w-full max-w-xs md:max-w-sm"
          imgClassName="w-full h-auto"
        />
      </div>
    ))}
  </div>
</div>
    </section>
  )
}