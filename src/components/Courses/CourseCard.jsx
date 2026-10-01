import { Link } from 'react-router-dom'
import styles from './CourseCard.module.css'

const AVATAR_COLORS = ['#e9967a', '#87ceeb', '#90ee90', '#dda0dd']

// Signal bars SVG matching Figma icon
function LevelIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="14" width="4" height="8" rx="1" fill="currentColor"/>
      <rect x="9" y="9"  width="4" height="13" rx="1" fill="currentColor"/>
      <rect x="16" y="4" width="4" height="18" rx="1" fill="currentColor"/>
    </svg>
  )
}

// Star icon (outlined) matching Figma
function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

export default function CourseCard({ course }) {
  const { title, creator, rating, level, price, lessons, duration, comments, img } = course

  return (
    <Link to={`/course/${course.id}`} className={styles.cardLink} id={`course-card-${course.id}`}>
      <article className={styles.card}>
        {/* Thumbnail with bottom badges */}
        <div className={styles.thumbWrap}>
          <img src={img} alt={`${title} course thumbnail`} loading="lazy" />
          <div className={styles.badges}>
            <span className={styles.badge}>{lessons} Lessons</span>
            <span className={styles.badge}>{duration}</span>
            <span className={styles.badge}>{comments} Comments</span>
          </div>
        </div>

        {/* Rating top-right — absolute positioned */}
        <div className={styles.ratingBadge} aria-label={`Rating: ${rating}`}>
          <span className={styles.ratingNum}>{rating}</span>
          <span className={styles.starIcon}><StarIcon /></span>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {/* Title + creator */}
          <div className={styles.titleGroup}>
            <h3 className={styles.title} title={title}>{title}</h3>
            <p className={styles.creator}>
              by{' '}
              <Link
                to="/creator/1"
                className={styles.creatorLink}
                onClick={e => e.stopPropagation()}
              >
                {creator}
              </Link>
            </p>
          </div>

          {/* Level badge + avatar group */}
          <div className={styles.meta}>
            <div className={styles.levelBadge}>
              <span style={{ color: 'var(--gray-700)', display: 'flex' }}><LevelIcon /></span>
              <span className={styles.levelText}>{level}</span>
            </div>

            <div className={styles.avatarGroup} aria-label="Enrolled students">
              {AVATAR_COLORS.map((color, i) => (
                <div key={i} className={styles.avatar} style={{ background: color }} />
              ))}
              <div className={styles.avatarCount}>26+</div>
            </div>
          </div>

          {/* Price */}
          <div className={styles.cardFooter}>
            <span className={styles.price}>${price}</span>
            <span className={styles.pricePer}>/lifetime</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
