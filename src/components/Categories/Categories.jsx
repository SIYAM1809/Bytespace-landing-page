import styles from './Categories.module.css'

const CATEGORIES = [
  {
    id: 1, name: 'Design', color: '#fff0f0',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="8" height="8" rx="2" fill="#ff6b6b"/>
        <rect x="16" y="4" width="8" height="8" rx="2" fill="#ffd43b"/>
        <rect x="4" y="16" width="8" height="8" rx="2" fill="#74c0fc"/>
        <rect x="16" y="16" width="8" height="8" rx="2" fill="#69db7c"/>
      </svg>
    ),
  },
  {
    id: 2, name: 'Development', color: '#f0fff4',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="#c3fae8"/>
        <path d="M8 10l-4 4 4 4M20 10l4 4-4 4" stroke="#099268" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="8" x2="12" y2="20" stroke="#099268" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3, name: 'IT & Software', color: '#f0f4ff',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="#d0ebff"/>
        <rect x="5" y="8" width="18" height="12" rx="2" stroke="#1971c2" strokeWidth="1.5"/>
        <line x1="14" y1="20" x2="14" y2="24" stroke="#1971c2" strokeWidth="1.5"/>
        <line x1="10" y1="24" x2="18" y2="24" stroke="#1971c2" strokeWidth="1.5"/>
        <line x1="8" y1="13" x2="20" y2="13" stroke="#1971c2" strokeWidth="1"/>
        <line x1="8" y1="16" x2="16" y2="16" stroke="#1971c2" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    id: 4, name: 'Business', color: '#fffbf0',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="#fff3bf"/>
        <rect x="6" y="14" width="4" height="8" rx="1" fill="#e67700"/>
        <rect x="12" y="10" width="4" height="12" rx="1" fill="#f59f00"/>
        <rect x="18" y="6" width="4" height="16" rx="1" fill="#ffd43b"/>
        <path d="M6 12l8-6 8 4" stroke="#e67700" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 5, name: 'Marketing', color: '#fff0fa',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="#fcc2d7"/>
        <circle cx="14" cy="14" r="5" fill="#c2255c"/>
        <path d="M14 4v3M14 21v3M4 14h3M21 14h3" stroke="#c2255c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 6, name: 'Photography', color: '#f5f0ff',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="#e5dbff"/>
        <rect x="4" y="9" width="20" height="14" rx="2" stroke="#7048e8" strokeWidth="1.5"/>
        <circle cx="14" cy="16" r="4" stroke="#7048e8" strokeWidth="1.5"/>
        <path d="M10 9l2-3h4l2 3" stroke="#7048e8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Categories() {
  return (
    <section className={styles.categories} id="categories" aria-labelledby="categories-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="categories-heading" className={styles.title}>
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className={styles.subtitle}>
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of
            courses spans various fields, ensuring there&apos;s something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        <div className={styles.grid}>
          {CATEGORIES.map(cat => (
            <a
              key={cat.id}
              href={`#${cat.name.toLowerCase()}`}
              className={styles.card}
              id={`category-${cat.name.replace(/\s+/g, '-').toLowerCase()}`}
              aria-label={`${cat.name} courses`}
            >
              <div className={styles.iconWrap} style={{ background: cat.color }}>
                {cat.icon}
              </div>
              <span className={styles.name}>{cat.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
