import Nav from '../components/Nav'
import Footer from '../components/Footer'
import RevealOnScroll from '../components/RevealOnScroll'
import Image from 'next/image'

const APPLE = 'https://apps.apple.com/us/app/urunner/id1617568183'
const GOOGLE = 'https://play.google.com/store/apps/details?id=com.app.urunner'

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M3.609 1.814L13.793 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.296 12l2.402-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 2.658z" />
    </svg>
  )
}

function StoreButtons() {
  return (
    <div className="hero-btns">
      <a href={APPLE} className="btn-store" target="_blank" rel="noopener noreferrer">
        <AppleIcon />
        <div className="btn-store-text">
          <small>Download on the</small>
          <strong>App Store</strong>
        </div>
      </a>
      <a href={GOOGLE} className="btn-store" target="_blank" rel="noopener noreferrer">
        <GoogleIcon />
        <div className="btn-store-text">
          <small>Get it on</small>
          <strong>Google Play</strong>
        </div>
      </a>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="hero-inner">
          <div>
            <h1>
              Every step<br />earns you<br /><em>real rewards</em>
            </h1>
            <p className="hero-sub">
              Track your Activity Score, earn coins for walking, compete with friends, collect cards, and get paid to move. AI-powered insights for every step you take.
            </p>
            <div className="hero-tag" style={{ marginBottom: 16 }}>
              <span />
              Now available on iOS &amp; Android
            </div>
            <StoreButtons />
          </div>
          <div className="hero-visual">
            <div className="hero-glow" />
            <div className="hero-ring-2" />
            <div className="hero-ring" />
            <div className="hero-mascot-wrap">
              <Image
                src="/urunners.jpg"
                alt="URunner mascots"
                width={380}
                height={380}
                className="hero-mascot"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <div className="proof">
        <div className="proof-inner">
          <div className="proof-stat">
            <div className="proof-num">1K+</div>
            <div className="proof-label">Active users</div>
          </div>
          <div className="proof-stat">
            <div className="proof-num">73</div>
            <div className="proof-label">Avg activity score</div>
          </div>
          <div className="proof-stat">
            <div className="proof-num">24%</div>
            <div className="proof-label">More steps daily</div>
          </div>
          <div className="proof-stat">
            <div className="proof-num">$SOL</div>
            <div className="proof-label">Solana powered</div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="section" id="features">
        <div className="section-inner">
          <div className="section-tag">Features</div>
          <RevealOnScroll>
            <div className="section-title">More than tracking<br /><em>A complete fitness economy</em></div>
          </RevealOnScroll>
          <RevealOnScroll delay="1">
            <p className="section-sub">
              URunner rewards every form of movement. Walk, run, or just stay on your feet — every step builds your score and earns you real value.
            </p>
          </RevealOnScroll>
          <div className="features">
            {[
              { icon: '📊', title: 'Activity Score', body: 'A single number that quantifies your fitness level daily. Built from steps + calories via HealthKit. Your score is your reputation.' },
              { icon: '🪙', title: 'Earn coins', body: 'Every step, every calorie, every active minute earns URunner coins. Convert to URN tokens on Solana or redeem for real rewards.' },
              { icon: '🔥', title: 'Streaks & multipliers', body: 'Build daily streaks for escalating coin multipliers. 7 days = 1.5x. 30 days = 3x. Break the streak, lose the multiplier.' },
              { icon: '🃏', title: 'UCards collectibles', body: 'Walk to real-world locations to collect digital cards. Rarity tiers from Common to Legendary. Trade with friends, complete chapters.' },
              { icon: '🏆', title: 'Leagues & competition', body: 'Weekly leagues with promotion and relegation. Head-to-head challenges with friends. Local and global leaderboards.' },
              { icon: '🛍️', title: 'Marketplace', body: 'Flash drops, partner rewards, charity donations, and sweepstakes. Your coins have real purchasing power across 50+ partners.' },
            ].map((f, i) => (
              <RevealOnScroll key={f.title} delay={((i % 3) + 1).toString()}>
                <div className="feature">
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* HOW IT WORKS */}
      <section className="section" id="how" style={{ background: 'var(--s1)' }}>
        <div className="section-inner">
          <div className="section-tag">How it works</div>
          <RevealOnScroll>
            <div className="section-title">Four steps to<br /><em>earning while moving</em></div>
          </RevealOnScroll>
          <RevealOnScroll delay="1">
            <p className="section-sub">No upfront cost. Just download and start walking.</p>
          </RevealOnScroll>
          <div className="steps-grid">
            {[
              { icon: '📱', title: 'Download & connect', body: 'Install URunner, connect HealthKit or Google Fit. Set your daily step goal. Get 25 welcome coins instantly.' },
              { icon: '🚶', title: 'Walk & earn', body: 'Every step automatically earns coins. Your AI coach tracks patterns and celebrates even the smallest effort.' },
              { icon: '📈', title: 'Build your score', body: 'Your Activity Score rises with consistency. Build streaks, complete challenges, climb leaderboards, collect UCards.' },
              { icon: '💰', title: 'Redeem rewards', body: 'Convert coins to URN tokens on Solana, redeem for partner rewards, enter sweepstakes, or donate to plant trees.' },
            ].map((s, i) => (
              <RevealOnScroll key={s.title} delay={(i + 1).toString()}>
                <div className="step">
                  <div className="step-icon">{s.icon}</div>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* AI INSIGHTS */}
      <section className="section ai-section" id="ai">
        <div className="section-inner">
          <div className="section-tag">🧠 AI-powered</div>
          <RevealOnScroll>
            <div className="section-title">Every effort is<br /><em>recognized</em></div>
          </RevealOnScroll>
          <RevealOnScroll delay="1">
            <p className="section-sub">
              URunner's AI watches your patterns and celebrates every positive signal — not just big milestones, but the small moments most apps ignore.
            </p>
          </RevealOnScroll>
          <div className="ai-grid">
            {[
              { icon: '⏰', title: 'You started 8 min earlier today', body: "Usual first activity: 7:42am. Today: 7:34am. The AI notices when you build better habits — before you even realize it." },
              { icon: '📈', title: 'Afternoon steps up 23%', body: "This week avg: 3,420 vs last week: 2,780. Your body is adapting. The AI tracks micro-improvements over weeks." },
              { icon: '💪', title: "Your worst day beats 60% of Americans", body: "Even your lightest day (4,200 steps) was above the national average of 3,800. Context turns 'bad days' into wins." },
              { icon: '🧬', title: 'Consistency score: 94/100', body: "7 consecutive active days puts you in the top 12% of URunner users. Consistency matters more than intensity." },
            ].map((a, i) => (
              <RevealOnScroll key={a.title} delay={(i + 1).toString()}>
                <div className="ai-item">
                  <div className="ai-icon">{a.icon}</div>
                  <div>
                    <h4>{a.title}</h4>
                    <p>{a.body}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* COIN ECONOMY */}
      <section className="section" id="economy">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-tag">Token economy</div>
          <RevealOnScroll>
            <div className="section-title" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              Your steps have<br /><em>real value</em>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay="1">
            <p className="section-sub" style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
              Coins earned from activity can be converted to URN tokens on the Solana blockchain, redeemed for rewards, or donated to causes you care about.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay="2">
            <div className="coin-flow">
              {[
                { icon: '🚶', label: 'Move', sub: 'Steps + calories' },
                null,
                { icon: '🪙', label: 'Earn', sub: 'URunner coins' },
                null,
                { icon: '🔄', label: 'Convert', sub: 'URN on Solana' },
                null,
                { icon: '🎁', label: 'Redeem', sub: 'Rewards & merch' },
              ].map((item, i) =>
                item === null ? (
                  <div key={i} className="coin-arrow">→</div>
                ) : (
                  <div key={item.label} className="coin-step">
                    <div className="coin-icon">{item.icon}</div>
                    <div className="coin-label">{item.label}</div>
                    <div className="coin-sub">{item.sub}</div>
                  </div>
                )
              )}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: 'var(--s1)' }}>
        <div className="section-inner">
          <div className="section-tag">Community</div>
          <RevealOnScroll>
            <div className="section-title">What walkers<br /><em>are saying</em></div>
          </RevealOnScroll>
          <RevealOnScroll delay="1">
            <p className="section-sub">Join thousands of users who are turning their daily movement into real value.</p>
          </RevealOnScroll>
          <div className="testimonials">
            <RevealOnScroll delay="1">
              <div className="testimonial">
                <div className="testimonial-stars">★★★★★</div>
                <div className="testimonial-text">"This app has me looking forward to my daily workout! The Activity Score is addictive — I compare it with friends every night."</div>
                <div className="testimonial-author">
                  <div className="testimonial-av" style={{ background: 'linear-gradient(135deg,var(--b),var(--vi))' }}>NT</div>
                  <div>
                    <div className="testimonial-name">Nick T.</div>
                    <div className="testimonial-role">Daily walker, LA</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay="2">
              <div className="testimonial">
                <div className="testimonial-stars">★★★★★</div>
                <div className="testimonial-text">"I signed up for a marathon to track my running activity. The staff are so helpful and informative about how the program fights diabetes."</div>
                <div className="testimonial-author">
                  <div className="testimonial-av" style={{ background: 'linear-gradient(135deg,var(--au),var(--or))' }}>JN</div>
                  <div>
                    <div className="testimonial-name">Jim N.</div>
                    <div className="testimonial-role">Marathon runner</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay="3">
              <div className="testimonial">
                <div className="testimonial-stars">★★★★★</div>
                <div className="testimonial-text">"At the end of the day I have steps and crypto in my wallet. Best of both worlds — health and wealth."</div>
                <div className="testimonial-author">
                  <div className="testimonial-av" style={{ background: 'linear-gradient(135deg,var(--vi),var(--b))' }}>DD</div>
                  <div>
                    <div className="testimonial-name">Dr. D.</div>
                    <div className="testimonial-role">Health enthusiast</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="download">
        <RevealOnScroll>
          <div className="cta-title">Start earning<br /><em style={{ background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', paddingRight: '12px', paddingBottom: '4px' }}>today</em></div>
        </RevealOnScroll>
        <RevealOnScroll delay="1">
          <p className="cta-sub">Download URunner free. Get 25 welcome coins. Walk more, earn more. It's that simple.</p>
        </RevealOnScroll>
        <RevealOnScroll delay="2">
          <div className="cta-btns">
            <a href={APPLE} className="btn-store" target="_blank" rel="noopener noreferrer">
              <AppleIcon />
              <div className="btn-store-text"><small>Download on the</small><strong>App Store</strong></div>
            </a>
            <a href={GOOGLE} className="btn-store" target="_blank" rel="noopener noreferrer">
              <GoogleIcon />
              <div className="btn-store-text"><small>Get it on</small><strong>Google Play</strong></div>
            </a>
          </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </>
  )
}
