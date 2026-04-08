'use client'

export const APPLE = 'https://apps.apple.com/us/app/urunner/id1617568183'
export const GOOGLE = 'https://play.google.com/store/apps/details?id=com.app.urunner'

export function getStoreUrl() {
  if (typeof navigator === 'undefined') return APPLE
  if (/android/i.test(navigator.userAgent)) return GOOGLE
  return APPLE
}

export function SmartDownloadButton({ className = 'nav-cta', children = 'Download App', style, onClick }) {
  function handleClick(e) {
    e.preventDefault()
    if (onClick) onClick()
    window.open(getStoreUrl(), '_blank', 'noopener,noreferrer')
  }
  return (
    <a href={APPLE} onClick={handleClick} className={className} style={style} rel="noopener noreferrer">
      {children}
    </a>
  )
}
