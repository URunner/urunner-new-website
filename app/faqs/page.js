'use client'
import { useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const APPLE = 'https://apps.apple.com/us/app/urunner/id1617568183'
const GOOGLE = 'https://play.google.com/store/apps/details?id=com.app.urunner'

const faqs = [
  {
    q: 'Why are my calories showing up as zero?',
    a: 'The Apple watch is required to capture the calories on all iPhones. If the calories are showing up as zero, the Apple watch is not connected to the Apple health kit. For android phones, URunner needs to connect to Google Health Connect. For android phones, check if Health Connect is running with appropriate permissions to allow Apps to connect.',
  },
  {
    q: 'Can other Fitness Apps be connected to the URunner App?',
    a: 'Yes, URunner can sync to Fitbit directly and to Garmin, Strava, and Oura ring through the Apple Health Kit. Follow the instructions to change the source of the step and calories.',
  },
  {
    q: 'What is the Activity Score ®?',
    a: 'The URunner Activity Score ® is an objective index of your daily activity. The Activity Score ® is based on the number of steps and calories for the day. It is updated each time the App is refreshed and used to determine the number of virtual URunner coins deposited into your wallet. Depending on the level of activity, the Activity Score ® can range between 0 and 40. A minimum of 500 steps is required to display the score. The approximate ranges are: Score 0 – 2 (1 – 2 miles, 200 – 450 calories), Score 2 – 8 (2 – 4 miles, 450 – 800 calories), Score 8 – 10 (4 – 5 miles, 800 – 900 calories), Score over 10 (Over 5 miles, 1000+ calories). The Activity Score ® increases exponentially with a combination of higher calories and higher steps. Marathon runners can easily attain scores between 20 and 40. A healthy goal is to maintain a score between 3 and 6.',
  },
  {
    q: 'Why is my Activity Score ® zero?',
    a: 'The steps and calories data sets are used to calculate the Activity Score ®. A minimum of 500 steps are required to display the Activity Score ®. The number of steps and calories may be insufficient for the Activity Score ® to register.',
  },
  {
    q: 'What are virtual URunner coins and how are they generated?',
    a: 'Virtual URunner coins are URunner tokens within the URunner App. These coins are generated based on an algorithm that uses the highest daily Activity Score ®. The number of coins generated increases exponentially with higher Activity Scores ® and can range from 0.20 to well over 13 coins depending on the level of activity. Coins can also be earned by posts, likes and comments on Feeds and by completing challenges. The coins are deposited into the virtual URunner wallet at the end of the day. Regular check-ins into the URunner App are required to receive the virtual coins. Check-in must be at least once in two days. URunner will send a general reminder once in 24 hours and another reminder at 9 pm, local time.',
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
              href="/faq_urunner.pdf"
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
