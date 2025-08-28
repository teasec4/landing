import React from 'react'

export default function Screenshot({
  src,
  alt,
  fit = 'contain',
  rounded = true,
  shadow = true,
  wrapperClassName = '',
  imgClassName = '',
  loading = 'lazy',
}) {
  const [loaded, setLoaded] = React.useState(false)
  const radius = rounded ? 'rounded-2xl' : ''
  const drop = shadow ? 'drop-shadow-2xl' : ''

  return (
    <div className={`relative inline-block ${wrapperClassName}`}>
      {/* показываем скелет ТОЛЬКО пока не загружено */}
      {!loaded && (
        <div
          className={`absolute inset-0 ${radius} bg-slate-200/60 animate-pulse`}
        />
      )}

      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        className={[
          imgClassName || 'w-full h-auto',
          radius,
          drop,
          fit === 'contain' ? 'object-contain' : 'object-cover',
          'select-none pointer-events-none transition-opacity duration-300',
          loaded ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      />
    </div>
  )
}