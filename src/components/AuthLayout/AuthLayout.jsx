import styles from './AuthLayout.module.css'
import { Link } from 'react-router-dom'

/**
 * Shared auth layout for SignIn and SignUp pages, matching Figma spec:
 * - 1440×1024px frame on Persian Blue #003BE2 with 120px repeating line grid (12% opacity)
 * - Header Logo with Clash Display 'ByteSpace'
 * - Left column: Text + 2 stacked Course Cards + Lime 'Happy Students' badge + 3D decorative shapes
 * - Right column: White form card (Register_Frame) 579px wide, 24px radius
 */
export default function AuthLayout({ children, heading, subheading }) {
  const avatarColors = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
  ]

  return (
    <div className={styles.page}>
      {/* 120px repeating line grid overlay (12% opacity) */}
      <div className={styles.lineGrid} aria-hidden="true" />

      {/* Main container */}
      <div className={styles.container}>
        {/* Left column */}
        <div className={styles.left}>
          {/* Header Logo */}
          <Link to="/" className={styles.logo} aria-label="ByteSpace Home">
            <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M0 4C0 1.79 1.79 0 4 0h21c2.21 0 4 1.79 4 4v24c0 2.21-1.79 4-4 4H4C1.79 32 0 30.21 0 28V4z" fill="#D4FB20" />
              <path d="M7 8h8c2 0 3.5 1.2 3.5 3s-1.5 3-3.5 3H7V8zm0 7h8.5c2.2 0 3.8 1.3 3.8 3.2S17.7 21 15.5 21H7v-6z" fill="#003BE2" />
            </svg>
            <span className={styles.logoText}>ByteSpace</span>
          </Link>

          {/* Heading + Subheading text */}
          <div className={styles.leftText}>
            <h1 className={styles.leftHeading}>{heading}</h1>
            <p className={styles.leftSub}>{subheading}</p>
          </div>

          {/* Visual Mockups area */}
          <div className={styles.mockupArea} aria-hidden="true">
            {/* 3D Decorative Cone Elements */}
            <div className={styles.coneLeft} />
            <div className={styles.coneBottom} />
            <div className={styles.ringDecor} />

            {/* Back Course Card: the Power of Big Data */}
            <div className={`${styles.courseCard} ${styles.backCard}`}>
              <div className={styles.cardThumb}>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
                  alt="Big Data"
                  className={styles.thumbImg}
                />
                <div className={styles.thumbBadges}>
                  <span>17 Lessons</span>
                  <span>2 hours 16 mins</span>
                  <span>59 Comments</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTitle}>the Power of Big Data</div>
                <div className={styles.cardCreator}>by purepearl studio</div>
                <div className={styles.cardMeta}>
                  <div className={styles.levelBadge}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <rect x="1" y="9" width="3" height="7" rx="0.5" />
                      <rect x="6" y="5" width="3" height="11" rx="0.5" />
                      <rect x="11" y="1" width="3" height="15" rx="0.5" />
                    </svg>
                    <span>Beginner</span>
                  </div>
                  <div className={styles.avatarStack}>
                    {avatarColors.slice(0, 4).map((src, i) => (
                      <img key={i} src={src} alt="" className={styles.avatarImg} />
                    ))}
                    <div className={styles.avatarMore}>26+</div>
                  </div>
                </div>
                <div className={styles.cardBottom}>
                  <div className={styles.cardPrice}>
                    $25<span>/lifetime</span>
                  </div>
                  <div className={styles.cardRating}>
                    <span>4.5</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--electric-lime)" stroke="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Front Course Card: Build Digital Asset */}
            <div className={`${styles.courseCard} ${styles.frontCard}`}>
              <div className={styles.cardThumb}>
                <img
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80"
                  alt="Digital Asset"
                  className={styles.thumbImg}
                />
                <div className={styles.thumbBadges}>
                  <span>17 Lessons</span>
                  <span>2 hours 16 mins</span>
                  <span>59 Comments</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTitle}>Build Digital Asset</div>
                <div className={styles.cardCreator}>by purepearl studio</div>
                <div className={styles.cardMeta}>
                  <div className={styles.levelBadge}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <rect x="1" y="9" width="3" height="7" rx="0.5" />
                      <rect x="6" y="5" width="3" height="11" rx="0.5" />
                      <rect x="11" y="1" width="3" height="15" rx="0.5" />
                    </svg>
                    <span>Beginner</span>
                  </div>
                  <div className={styles.avatarStack}>
                    {avatarColors.slice(0, 4).map((src, i) => (
                      <img key={i} src={src} alt="" className={styles.avatarImg} />
                    ))}
                    <div className={styles.avatarMore}>26+</div>
                  </div>
                </div>
                <div className={styles.cardBottom}>
                  <div className={styles.cardPrice}>
                    $25<span>/lifetime</span>
                  </div>
                  <div className={styles.cardRating}>
                    <span>4.5</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--electric-lime)" stroke="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Happy Students Floating Lime Card */}
            <div className={styles.happyCard}>
              <div className={styles.happyTop}>
                <span className={styles.happyTitle}>Happy Students</span>
                <div className={styles.happyRatingRow}>
                  <span className={styles.happyScore}>4.5 (240)</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#003BE2" stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
              <div className={styles.happyAvatars}>
                {avatarColors.map((src, i) => (
                  <img key={i} src={src} alt="" className={styles.happyAvatar} />
                ))}
                <div className={styles.happyBadge2K}>2K+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Form Card */}
        <div className={styles.right}>
          {children}
        </div>
      </div>
    </div>
  )
}
