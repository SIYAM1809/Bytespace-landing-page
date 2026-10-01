import styles from './Logos.module.css'

const logos = [
  { id: 1, name: 'Coursera' },
  { id: 2, name: 'Udemy' },
  { id: 3, name: 'LinkedIn' },
  { id: 4, name: 'Skillshare' },
  { id: 5, name: 'edX' },
]

// Simple SVG placeholder logos with distinct shapes
function LogoIcon({ index }) {
  const icons = [
    // Circular badge
    <svg key={0} width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="#9aa0ab" strokeWidth="2"/>
      <circle cx="16" cy="16" r="6" fill="#9aa0ab"/>
    </svg>,
    // Star shape
    <svg key={1} width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4l2.9 8.9H28l-7.5 5.5 2.9 8.9L16 22 8.6 27.3l2.9-8.9L4 12.9h9.1z" fill="#9aa0ab"/>
    </svg>,
    // Gear
    <svg key={2} width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="5" fill="#9aa0ab"/>
      <circle cx="16" cy="16" r="12" stroke="#9aa0ab" strokeWidth="2" strokeDasharray="4 3"/>
    </svg>,
    // Cross/X
    <svg key={3} width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="6" width="20" height="20" rx="4" stroke="#9aa0ab" strokeWidth="2"/>
      <line x1="10" y1="10" x2="22" y2="22" stroke="#9aa0ab" strokeWidth="2"/>
      <line x1="22" y1="10" x2="10" y2="22" stroke="#9aa0ab" strokeWidth="2"/>
    </svg>,
    // Infinity
    <svg key={4} width="32" height="32" viewBox="0 0 32 32" fill="none">
      <ellipse cx="10" cy="16" rx="6" ry="6" stroke="#9aa0ab" strokeWidth="2" fill="none"/>
      <ellipse cx="22" cy="16" rx="6" ry="6" stroke="#9aa0ab" strokeWidth="2" fill="none"/>
    </svg>,
  ]
  return icons[index] || icons[0]
}

export default function Logos() {
  return (
    <section className={styles.logos} aria-label="Partner companies">
      <div className="container">
        <div className={styles.track}>
          {logos.map((logo, i) => (
            <div key={logo.id} className={styles.logoItem} aria-label={logo.name}>
              <LogoIcon index={i} />
              <span className={styles.logoText}>Logoipsum</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
