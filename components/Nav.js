'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/faqs', label: 'FAQs' },
  ]

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="logo">
            <Image src="/logo.jpg" alt="URunner" width={44} height={44} className="logo-img" priority />
          </Link>
          <div className="nav-links">
            {links.map(l => (
              <Link key={l.href} href={l.href} className={pathname === l.href ? 'active' : ''}>
                {l.label}
              </Link>
            ))}
            <a
              href="https://apps.apple.com/us/app/urunner/id1617568183"
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download App
            </a>
          </div>
          <div
            className={`nav-hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>

      <div className={`nav-mobile${open ? ' open' : ''}`}>
        {links.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={pathname === l.href ? 'active' : ''}>
            {l.label}
          </Link>
        ))}
        <a
          href="https://apps.apple.com/us/app/urunner/id1617568183"
          className="nav-cta"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Download App
        </a>
      </div>
    </>
  )
}
