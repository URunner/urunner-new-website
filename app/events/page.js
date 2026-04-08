'use client'
import { useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const APPLE = 'https://apps.apple.com/us/app/urunner/id1617568183'
const GOOGLE = 'https://play.google.com/store/apps/details?id=com.app.urunner'

const events = [
  {
    id: 1,
    title: 'Mumbai 10K Challenge – Official Qualifier for Tata Mumbai Marathon',
    date: '9/6/2025 · Sep 7 · Official Qualifier for Tata Mumbai Marathon',
    status: 'ended',
    banner: {
      headline: 'MUMBAI 10K',
      sub: 'CHALLENGE',
      caption: 'Official Qualifier\nFor All Major Half Marathon Across Pan India',
      date: '7th September 2025 | Juhu',
    },
    description: `The Mumbai 10K Challenge, taking place on Sunday, September 7, 2025, at Gallant Sports Arena in Juhu, Mumbai, serves as an official qualifier for major marathons across India, including the Tata Mumbai Marathon (TMM). Participants can register for 10km competitive, 5km competitive, and 5km non-competitive events, receiving a race jersey, finisher medal, breakfast, and other giveaways. This timed event allows participants to potentially qualify for faster start waves in the Open 10k category at the Tata Mumbai Marathon.`,
  },
  {
    id: 2,
    title: 'Pathibag Marathon – India\'s Most Beautiful Marathon',
    date: 'Oct 2025',
    status: 'upcoming',
    banner: {
      headline: 'PATHIBAG',
      sub: 'MARATHON',
      caption: "India's Most Beautiful\nMarathon",
      date: 'October 2025',
    },
    description: `The Pathibag Marathon takes you through breathtaking landscapes and scenic trails. This unique running experience combines the joy of running with the beauty of nature. Track your performance with URunner and earn coins for every kilometer completed.`,
  },
  {
    id: 3,
    title: 'OCEANMAN Goa – India',
    date: 'Nov 2025',
    status: 'upcoming',
    banner: {
      headline: 'OCEANMAN',
      sub: 'GOA · INDIA',
      caption: 'Open Water Swimming\nChallenge',
      date: 'November 2025',
    },
    description: `OCEANMAN Goa brings the world's premier open water swimming series to India's coast. Connect URunner to track your swim activity and earn bonus coins for participating in this iconic event.`,
  },
  {
    id: 4,
    title: 'Mumbai Ultra Marathon – India\'s Backyard Ultra & Ultra Marathon',
    date: 'Dec 2025',
    status: 'upcoming',
    banner: {
      headline: 'MUMBAI ULTRA',
      sub: 'MARATHON',
      caption: "India's Backyard Ultra\n& Ultra Marathon",
      date: 'December 2025',
    },
    description: `The Mumbai Ultra Marathon is India's premier ultra-distance running event. Push your limits, track every mile with URunner, and earn maximum coins for completing one of the toughest endurance challenges in the country.`,
  },
]

export default function EventsPage() {
  const [active, setActive] = useState(0)
  const ev = events[active]

  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="section-tag">Events</div>
        <h1>Our <em>Events</em></h1>
        <p>Participate in real-world fitness events, track your performance with URunner, and earn rewards for every milestone.</p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="events-layout">
            {/* Sidebar */}
            <div className="events-sidebar">
              <div style={{ fontSize: 12, color: 'var(--t3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
                Other Events
              </div>
              {events.map((e, i) => (
                <div
                  key={e.id}
                  className={`event-card-sm${i === active ? ' active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <div className="event-thumb">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,var(--s3),var(--s4))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                      🏃
                    </div>
                  </div>
                  <div>
                    <div className="event-card-sm-title">{e.title}</div>
                    <div className="event-card-sm-date">{e.date}</div>
                    <span className={`event-card-sm-badge ${e.status === 'ended' ? 'badge-ended' : 'badge-upcoming'}`}>
                      {e.status === 'ended' ? 'Event ended' : 'Upcoming'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Detail */}
            <div className="event-detail">
              <div className="event-detail-banner">
                <div className="event-detail-banner-text">
                  <h2 style={{ color: 'var(--b)', fontSize: 'clamp(32px,5vw,56px)' }}>{ev.banner.headline}</h2>
                  <div style={{ fontSize: 'clamp(18px,3vw,28px)', fontWeight: 900, letterSpacing: 4, color: 'var(--tx)' }}>{ev.banner.sub}</div>
                  {ev.banner.caption.split('\n').map((l, i) => (
                    <div key={i} style={{ fontSize: 14, color: 'var(--t2)', marginTop: i === 0 ? 12 : 2 }}>{l}</div>
                  ))}
                  <div style={{ fontFamily: 'var(--m)', fontSize: 13, color: 'var(--b)', marginTop: 12, fontWeight: 700 }}>{ev.banner.date}</div>
                </div>
              </div>
              <div className="event-detail-body">
                <div className="event-detail-date">{ev.date}</div>
                <div className="event-detail-title">{ev.title}</div>
                <div className="event-detail-desc">{ev.description}</div>
                <div className={`event-status ${ev.status}`}>
                  {ev.status === 'ended' ? '● Event ended' : '● Upcoming event'}
                </div>
              </div>
            </div>
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
