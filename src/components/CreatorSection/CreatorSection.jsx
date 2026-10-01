import styles from './CreatorSection.module.css'
import creatorImg from '../../assets/creator-hero.jpg'

const FEATURES = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]

export default function CreatorSection() {
  return (
    <section className={styles.section} id="creator-manage" aria-labelledby="creator-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Left: image with floating cards */}
          <div className={styles.left} aria-hidden="true">
            <div className={styles.imageWrap}>
              <img src={creatorImg} alt="Creator managing courses" className={styles.img} loading="lazy" />

              {/* Revenue card */}
              <div className={`${styles.floatCard} ${styles.cardRevenue}`}>
                <div className={styles.revenueLabel}>Total Revenue</div>
                <div className={styles.revenueDate}>July 12th</div>
                <div className={styles.revenueAmount}>$120.29</div>
              </div>

              {/* Year revenue card */}
              <div className={`${styles.floatCard} ${styles.cardYear}`}>
                <div className={styles.revenueLabel}>Year to Date</div>
                <div className={styles.revenueDate}>2025</div>
                <div className={styles.revenueAmount}>$1,200.38</div>
                <div className={styles.revenueBadge}>+128</div>
              </div>

              {/* Happy students */}
              <div className={`${styles.floatCard} ${styles.cardHappy}`}>
                <div className={styles.happyRow}>
                  <div className={styles.avatarGroup}>
                    {['#e9967a','#87ceeb','#90ee90','#dda0dd','#f0a500'].map((c,i) => (
                      <div key={i} className={styles.avatar} style={{ background: c }} />
                    ))}
                  </div>
                  <span className={styles.happyCount}>2K+</span>
                </div>
                <div className={styles.happyLabel}>Happy Students</div>
                <div className={styles.happyRating}>⭐ 4.5 (248)</div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className={styles.right}>
            <h2 id="creator-heading" className={styles.title}>
              Create &amp; Manage Courses Easily.
            </h2>
            <p className={styles.desc}>
              <strong>ByteSpace</strong> supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            <ul className={styles.features} aria-label="Creator benefits">
              {FEATURES.map(f => (
                <li key={f} className={styles.featureItem}>
                  <span className={styles.check} aria-hidden="true">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a href="#creators" className={styles.cta} id="btn-become-creator">
              Become a Creator
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
