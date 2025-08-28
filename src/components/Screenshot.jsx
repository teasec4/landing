// src/components/Screenshot.jsx
import React from 'react'

export default function Screenshot({
  src,
  alt,
  wrapperClassName = '',
  imgClassName = '',
  fallback = null,           // ReactNode на время загрузки
}) {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <div className={`relative ${wrapperClassName}`}>
      {/* Fallback поверх ТОЛЬКО пока не загрузилось */}
      {!loaded && (
        fallback ?? (
          <div className="absolute inset-0 animate-pulse rounded-xl bg-slate-200/60" />
        )
      )}

      <img
  src={src}
  alt={alt}
  onLoad={() => setLoaded(true)}
  className={`absolute inset-0 h-full w-full object-contain rounded-xl border border-slate-200 bg-slate-50 transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
/>
    </div>
  )
}