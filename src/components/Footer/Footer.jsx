import { useState } from 'react'
import styles from './Footer.module.css'

// Figma: Browse = Featured Courses, Categories, Business, IT, Design
//        Categories = Development, Marketing, Photography, Finance, Sport
//        Platform = Become a Creator, Affiliate Program, Contact, Help, About
const LINK_GROUPS = [
  {
    heading: 'Browse',
    links: ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  },
  {
    heading: null, // Figma shows no heading for this column
    links: ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  },
  {
    heading: 'Platform',
    links: ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setEmail('')
    }
  }

  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.top}>
          {/* Brand + newsletter */}
          <div className={styles.brand}>
            <a href="/" className={styles.logo} aria-label="ByteSpace Home">
              {/* Figma: Electric Lime/400 icon #D4FB20, Clash Display text #242528 */}
              <svg width="29" height="32" viewBox="0 0 29 32" fill="none" aria-hidden="true">
                <path d="M0 4C0 1.79 1.79 0 4 0h21c2.21 0 4 1.79 4 4v24c0 2.21-1.79 4-4 4H4C1.79 32 0 30.21 0 28V4z" fill="#D4FB20"/>
                <path d="M7 8h8c2 0 3.5 1.2 3.5 3s-1.5 3-3.5 3H7V8zm0 7h8.5c2.2 0 3.8 1.3 3.8 3.2S17.7 21 15.5 21H7v-6z" fill="#003BE2"/>
              </svg>
              <span>ByteSpace</span>
            </a>

            <p className={styles.tagline}>
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form className={styles.newsletter} onSubmit={handleNewsletterSubmit} role="form" aria-label="Newsletter signup">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={styles.emailInput}
                required
                aria-label="Email address for newsletter"
              />
              <button type="submit" className={styles.subscribeBtn} id="btn-subscribe">
                Subscribe
              </button>
            </form>

            <p className={styles.consent}>
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Link columns */}
          {LINK_GROUPS.map((group, gi) => (
            <div key={gi} className={styles.linkGroup}>
              {group.heading && <p className={styles.groupHeading}>{group.heading}</p>}
              <ul>
                {group.links.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className={styles.link}
                      id={`footer-${item.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar — line then copyright + legal */}
        <div className={styles.bottom}>
          <div className={styles.divider} role="separator" />
          <div className={styles.bottomRow}>
            <p className={styles.copy}>© 2023 ByteSpace. All rights reserved.</p>
            <nav className={styles.legal} aria-label="Legal links">
              <a href="#" id="footer-privacy">Privacy Policy</a>
              <a href="#" id="footer-terms">Terms of Service</a>
              <a href="#" id="footer-cookies">Cookies Settings</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
