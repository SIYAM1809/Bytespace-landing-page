import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Hero.module.css'
import studentImg from '../../assets/student-hero.jpg'

export default function Hero() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    const q = query.trim()
    navigate(`/search${q ? `?q=${encodeURIComponent(q)}` : ''}`)
  }

  return (
    <section className={styles.hero} id="hero" aria-label="Hero section">
      {/* Grid overlay */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Decorative shapes */}
      <div className={`${styles.shape} ${styles.shapeLimeTopLeft}`} aria-hidden="true" />
      <div className={`${styles.shape} ${styles.shapeLimeTopRight}`} aria-hidden="true" />
      <div className={`${styles.shape} ${styles.shapeCircleLeft}`} aria-hidden="true" />
      <div className={`${styles.shape} ${styles.shapeTriangleRight}`} aria-hidden="true" />
      <div className={`${styles.shape} ${styles.shapeSquiggleBottomLeft}`} aria-hidden="true" />
      <div className={`${styles.shape} ${styles.shapeSquiggleBottomRight}`} aria-hidden="true" />

      <div className="container">
        <div className={styles.content}>
          {/* Headline */}
          <div className={styles.headlineWrap}>
            <h1 className={styles.headline}>
              Get Access to <span className={styles.highlight}>Hundreds</span>
              <br />Courses Available
            </h1>
            <p className={styles.subtitle}>
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
          </div>

          {/* Search bar */}
          <form className={styles.searchBar} onSubmit={handleSearch} role="search">
            <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              id="hero-search"
              type="search"
              placeholder="Course, topic, creator"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search courses"
            />
            <button type="submit" className={styles.searchBtn} id="btn-hero-search">Search</button>
          </form>

          {/* Bottom area: floating cards + image */}
          <div className={styles.bottomArea}>
            {/* Left floating card: UI/UX Design */}
            <div className={`${styles.floatCard} ${styles.cardUiux}`} aria-label="UI/UX Design course info">
              <div className={styles.cardLabel}>UI/UX Design</div>
              <div className={styles.cardMeta}>200 Courses &nbsp;•&nbsp; 1000+ Students</div>
            </div>

            {/* Student image */}
            <div className={styles.imageWrap}>
              <div className={styles.greenCircle} aria-hidden="true" />
              <img
                src={studentImg}
                alt="Happy student learning online with headphones and laptop"
                className={styles.studentImg}
                loading="eager"
              />
            </div>

            {/* Right floating card: Learning Progress */}
            <div className={`${styles.floatCard} ${styles.cardProgress}`} aria-label="Learning progress">
              <div className={styles.cardLabel}>Learning Progress</div>
              <div className={styles.progressPercent}>55%</div>
              <div className={styles.progressBarTrack} role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                <div className={styles.progressBarFill} />
              </div>
            </div>

            {/* Bottom floating card: Happy Students */}
            <div className={`${styles.floatCard} ${styles.cardStudents}`} aria-label="Happy students">
              <div className={styles.studentsRow}>
                <div className={styles.avatarGroup} aria-hidden="true">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={styles.avatar} style={{background: `hsl(${i*60},70%,60%)`}} />
                  ))}
                </div>
                <span className={styles.studentCount}>2K+</span>
              </div>
              <div className={styles.studentsLabel}>
                <span className={styles.studentsTitle}>Happy Students</span>
                <span className={styles.studentsRating}>⭐ 4.9 (248)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
