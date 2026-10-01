import styles from './GrowthSection.module.css'
import growthImg from '../../assets/student-hero.jpg'

const STATS = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators', highlight: true },
]

export default function GrowthSection() {
  return (
    <section className={styles.section} id="growth" aria-labelledby="growth-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Left content */}
          <div className={styles.left}>
            <h2 id="growth-heading" className={styles.title}>
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className={styles.desc}>
              Explore our curated selection of courses tailored to enhance your capabilities
              and accelerate your career journey. Whether you are looking to sharpen specific
              skills, gain industry expertise, or embark on a new career path entirely,
              we have the resources you need.
            </p>

            <div className={styles.stats} aria-label="Platform statistics">
              {STATS.map(s => (
                <div key={s.label} className={styles.stat}>
                  <span className={`${styles.statVal} ${s.highlight ? styles.statHighlight : ''}`}>
                    {s.value}
                  </span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            <a href="#courses" className={styles.cta} id="btn-growth-explore">
              Explore Courses
            </a>
          </div>

          {/* Right: mockup */}
          <div className={styles.right} aria-hidden="true">
            <div className={styles.mockup}>
              <img src={growthImg} alt="Student learning" className={styles.mockupImg} loading="lazy" />
              {/* Course card overlay */}
              <div className={styles.courseCard}>
                <div className={styles.courseCardImg} />
                <div className={styles.courseCardBody}>
                  <div className={styles.courseCardTitle}>Learn Figma fr...</div>
                  <div className={styles.courseCardMeta}>by pumppart studio</div>
                  <div className={styles.courseCardPrice}>$25 <span>/lifetime</span></div>
                </div>
              </div>
              {/* Progress overlay */}
              <div className={styles.progressCard}>
                <div className={styles.progressLabel}>Learning Progress</div>
                <div className={styles.progressBig}>55%</div>
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
