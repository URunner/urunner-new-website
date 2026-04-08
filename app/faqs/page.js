'use client'
import { useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const APPLE = 'https://apps.apple.com/us/app/urunner/id1617568183'
const GOOGLE = 'https://play.google.com/store/apps/details?id=com.app.urunner'

const faqs = [
  {
    q: 'Why are my calories showing up as zero?',
    a: 'The URunner App is required to capture the calories on all iPhones. If the calories are showing up as zero, the Apple Watch is not connected to the Apple Health Kit. For android phones, URunner needs to connect to Google Health Connect. For android phones, check if Health Connect is running with appropriate permissions to allow Apps to connect.',
  },
  {
    q: 'Can other Fitness Apps be connected to the URunner App?',
    a: 'Yes! URunner integrates with Apple HealthKit (iOS) and Google Health Connect (Android), which means data from other fitness apps that sync to these platforms can contribute to your Activity Score. Make sure your preferred app has permissions to write health data to HealthKit or Google Health Connect.',
  },
  {
    q: 'What is the Activity Score ®?',
    a: 'The Activity Score ® is a proprietary metric developed by URunner that quantifies your daily fitness level into a single number. It is calculated using your steps, calories burned, active minutes, and consistency over time. Your Activity Score is your fitness reputation — higher scores unlock better rewards and leaderboard positions.',
  },
  {
    q: 'Why is my Activity Score ® zero?',
    a: 'Your Activity Score ® may show zero if URunner does not have permission to read your health data. Please check your phone settings to ensure URunner has access to Apple HealthKit or Google Health Connect. Also make sure you have been active today — the score updates based on real-time data from your device.',
  },
  {
    q: 'What are virtual URunner coins and how are they generated?',
    a: 'URunner coins are virtual rewards earned by completing physical activity tracked through the URunner app. Coins are generated based on your steps, calories, active minutes, and streaks. They can be redeemed for real rewards, converted to URN tokens on the Solana blockchain, entered into sweepstakes, or donated to charity. The more you move and the more consistent your activity, the more coins you earn.',
  },
  {
    q: 'You can find additional information and FAQs on the URunner App',
    a: 'For the most up-to-date FAQs and support articles, check the Help section inside the URunner mobile app. Our team regularly updates the in-app FAQ with answers to the most common questions from our community.',
    isNote: true,
  },
]

function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function FAQsPage() {
  const [open, setOpen] = useState(null)

  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="section-tag">Support</div>
        <h1><em>FAQs</em></h1>
        <p>Got questions? We have answers. Browse the most common questions about URunner below.</p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
                <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                  <span>{f.q}</span>
                  <ChevronDown />
                </div>
                <div className="faq-a">
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a
              href={APPLE}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 28px',
                background: 'var(--bG)',
                border: '1px solid rgba(77,158,246,.2)',
                borderRadius: 12,
                color: 'var(--b)',
                fontWeight: 700,
                fontSize: 14,
                transition: 'all .2s',
              }}
            >
              Click here to download complete FAQs →
            </a>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="cta-section">
        <div className="cta-title" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
          Get Our Mobile<br /><em style={{ color: 'var(--b)' }}>Application</em>
        </div>
        <p className="cta-sub">
          Join 1000+ individuals, innovators, and creators who have embraced fitness, progress, and wealth.
        </p>
        <div className="cta-btns">
          <a href={GOOGLE} className="btn-store" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M3.609 1.814L13.793 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.296 12l2.402-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 2.658z" />
            </svg>
            <div className="btn-store-text"><small>Get it on</small><strong>Google Play</strong></div>
          </a>
          <a href={APPLE} className="btn-store" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="btn-store-text"><small>Download on the</small><strong>App Store</strong></div>
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
