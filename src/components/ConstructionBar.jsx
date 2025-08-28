import React from 'react'

export default function ConstructionBar({ className = '' }) {
  return (
    <div
      role="progressbar"
      aria-valuetext="Under construction"
      className={`relative h-3 w-full max-w-md overflow-hidden rounded-full bg-slate-200 ${className}`}
    >
      {/* полосатая подложка */}
      <div className="barber absolute inset-0 opacity-70"></div>

      {/* “бегущая” светлая капсула поверх */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="indeterminate h-full w-1/2 rounded-full bg-gradient-to-r from-white/30 via-white/60 to-white/30"></div>
      </div>
    </div>
  )
}