// src/components/PriceTicker.jsx
import React from 'react'

const COINS = ['bitcoin','ethereum','solana','ripple','chainlink']

export default function PriceTicker() {
  const [prices, setPrices] = React.useState([])

  async function load() {
    try {
      const qs = new URLSearchParams({
        ids: COINS.join(','),
        vs_currencies: 'usd'
      })
      const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?${qs}`)
      const json = await res.json()
      const arr = Object.entries(json).map(([id, obj]) => ({ id, usd: obj.usd }))
      setPrices(arr)
      // простейший кэш, чтобы при перезагрузке было что показать
      localStorage.setItem('ticker_cache', JSON.stringify(arr))
    } catch {}
  }

  React.useEffect(() => {
    const cache = localStorage.getItem('ticker_cache')
    if (cache) setPrices(JSON.parse(cache))
    load()
    const t = setInterval(load, 60_000) // раз в минуту
    return () => clearInterval(t)
  }, [])

  return (
    <div className="whitespace-nowrap overflow-hidden border-y border-slate-200">
      <div className="animate-[ticker_20s_linear_infinite] flex gap-6 py-2">
        {prices.map(p => (
          <span key={p.id} className="text-sm text-slate-700">
            {p.id.toUpperCase()} <b className="font-semibold">${p.usd.toLocaleString()}</b>
          </span>
        ))}
      </div>
    </div>
  )
}