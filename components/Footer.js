import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-u">U</div>URunner
          </div>
          <p className="footer-desc">
            UWalk. URun. UEarn. Every step earns real rewards. Built in Los Angeles. Powered by Solana.
          </p>
        </div>
        <div className="footer-col">
          <h5>Product</h5>
          <Link href="/#features">Features</Link>
          <Link href="/#how">How it works</Link>
          <Link href="/events">Events</Link>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <Link href="/#about">About</Link>
          <a href="mailto:info@urunner.io">Contact</a>
        </div>
        <div className="footer-col">
          <h5>Legal</h5>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faqs">FAQs</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 URunner. All rights reserved.</span>
        <span>Made with 🚶 in Los Angeles</span>
      </div>
    </footer>
  )
}
