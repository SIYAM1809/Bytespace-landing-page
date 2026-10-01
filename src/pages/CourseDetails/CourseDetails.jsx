import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import styles from './CourseDetails.module.css'

const COURSE_DATA = {
  id: 2,
  title: 'Build Digital Asset: A Comprehensive Guide',
  subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
  creator: 'purepearl studio',
  level: 'Intermediate',
  rating: 4.8,
  reviews: 172,
  students: 199,
  price: 25,
  totalLessons: 112,
  totalHours: 24,
  img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
  creatorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80',
  creatorTitle: 'Professional Creator',
  lessons: [
    { num: '01', title: 'Introduction to Digital Assets', duration: '12 mins' },
    { num: '02', title: 'Design Principles for Impacts', duration: '21 mins' },
    { num: '03', title: 'Advanced Techniques in Digital Creation', duration: '16 mins' },
  ],
  moreVideos: 99,
  includes: [
    { label: 'Learning Resources' },
    { label: 'Quality Lesson Videos' },
    { label: 'Certificate of Completion' },
    { label: 'Private Consultation' },
  ],
  description: [
    `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.`,
    `In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.`,
    `As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights.`,
  ],
  sneakPeaks: [
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&q=70',
    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=200&q=70',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=70',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&q=70',
  ],
  keyPoints: [
    'Foundational Concepts',
    'Design Principles Mastery',
    'Advanced Techniques in Digital Creation',
    'Project Showcase and Critique',
    'Optimizing for Various Platforms',
    'Digital Asset Management Best Practices',
    'Monetization Strategies',
    'Capstone Project: Building Your Portfolio',
  ],
}

const TABS = ['About', 'Lessons', 'Reviews']

// Rating bars data extracted from Figma (filled widths out of 282px)
const RATING_BARS = [
  { stars: 5, fillPct: 92, count: 720 },
  { stars: 4, fillPct: 36, count: 120 },
  { stars: 3, fillPct: 9,  count: 21  },
  { stars: 2, fillPct: 4,  count: 12  },
  { stars: 1, fillPct: 5,  count: 16  },
]

// Figma review data
const REVIEWS = [
  {
    name: 'PurePearl Studio',
    role: 'UI/UX Designer',
    stars: 5,
    date: 'a year ago',
    text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    color: '#e9967a',
  },
  {
    name: 'Albert Flores',
    role: 'UI/UX Designer',
    stars: 5,
    date: 'a year ago',
    text: 'This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!',
    color: '#87ceeb',
  },
  {
    name: 'Cody Fisher',
    role: 'UI/UX Designer',
    stars: 5,
    date: 'a year ago',
    text: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
    color: '#90ee90',
  },
  {
    name: 'Brooklyn Simmons',
    role: 'UI/UX Designer',
    stars: 5,
    date: 'a year ago',
    text: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
    color: '#dda0dd',
  },
]

// SVG icons for includes (Figma: outlined, blue fill)
const INCLUDE_ICONS = {
  'Learning Resources': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
    </svg>
  ),
  'Quality Lesson Videos': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
    </svg>
  ),
  'Certificate of Completion': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  'Private Consultation': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>
  ),
}

function StarIcon({ filled = true }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

function SignalIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="2" y="14" width="4" height="8" rx="1"/>
      <rect x="9" y="9" width="4" height="13" rx="1"/>
      <rect x="16" y="4" width="4" height="18" rx="1"/>
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="#F5F2FF" aria-hidden="true">
      <polygon points="20 10 50 30 20 50"/>
    </svg>
  )
}

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState('About')
  const [isPlaying, setIsPlaying] = useState(false)
  const course = COURSE_DATA

  return (
    <>
      <Navbar />

      {/* ── BLUE HERO ── */}
      <div className={styles.hero} id="course-hero">
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          {/* LEFT: course info + video */}
          <div className={styles.heroLeft}>
            {/* Title block */}
            <div className={styles.titleBox}>
              <div className={styles.titleTop}>
                <div>
                  <h1 className={styles.courseTitle}>{course.title}</h1>
                  <p className={styles.courseSubtitle}>{course.subtitle}</p>
                  <p className={styles.courseCreator}>
                    by <Link to="#" className={styles.creatorLink}>{course.creator}</Link>
                  </p>
                </div>
                {/* Share button — Electric Lime, right-aligned */}
                <button className={styles.shareBtn} id="btn-share" aria-label="Share this course">
                  <ShareIcon />
                  Share
                </button>
              </div>

              {/* Badges — white frosted pills */}
              <div className={styles.badges} aria-label="Course details">
                <span className={styles.badge} id="badge-level">
                  <SignalIcon />
                  {course.level}
                </span>
                <span className={styles.badge} id="badge-rating">
                  <StarIcon />
                  {course.rating} ({course.reviews} reviews)
                </span>
                <span className={styles.badge} id="badge-students">
                  <UsersIcon />
                  {course.students} Students
                </span>
              </div>
            </div>

            {/* Video player */}
            <div
              className={styles.videoWrap}
              role="region"
              aria-label="Course preview video"
              id="course-video"
            >
              <img src={course.img} alt="Course preview" className={styles.videoThumb} />
              <div className={styles.videoOverlay} aria-hidden="true" />
              {!isPlaying && (
                <button
                  className={styles.playBtn}
                  onClick={() => setIsPlaying(true)}
                  id="btn-play-video"
                  aria-label="Play course preview"
                >
                  <div className={styles.playBtnInner}>
                    <PlayIcon />
                  </div>
                </button>
              )}
              {isPlaying && (
                <div className={styles.videoPlaying}>
                  <p>▶ Preview is playing...</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: sidebar */}
          <aside className={styles.sidebar} aria-label="Course enrollment" id="course-sidebar">
            {/* Lesson count */}
            <div className={styles.lessonCount}>
              {course.totalLessons} Lessons ({course.totalHours} hours)
            </div>

            {/* Lesson list */}
            <ol className={styles.lessonList} aria-label="Course lessons preview">
              {course.lessons.map(l => (
                <li key={l.num} className={styles.lessonItem}>
                  <span className={styles.lessonNum}>{l.num}</span>
                  <span className={styles.lessonTitle}>{l.title}</span>
                  <span className={styles.lessonDur}>{l.duration}</span>
                </li>
              ))}
              <li className={styles.moreVideos}>
                {course.moreVideos} more videos
              </li>
            </ol>

            {/* Enrollment CTA */}
            <p className={styles.enrollCta}>
              Ready to Dive In? Enroll Now and Start Building Your Digital Future!
            </p>

            {/* Price */}
            <div className={styles.priceRow}>
              <span className={styles.price}>${course.price}</span>
              <span className={styles.pricePer}>/lifetime</span>
            </div>

            {/* Enroll button */}
            <button className={styles.enrollBtn} id="btn-enroll" aria-label={`Enroll in ${course.title}`}>
              Enroll Now
            </button>

            {/* This course includes */}
            <div className={styles.includesSection} aria-label="What's included">
              <h3 className={styles.includesTitle}>This course include</h3>
              <ul className={styles.includesList}>
                {course.includes.map(item => (
                  <li key={item.label} className={styles.includesItem}>
                    <span className={styles.includesItem}>{INCLUDE_ICONS[item.label]}</span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className={styles.sidebarDivider} role="separator" />

            {/* Creator card */}
            <div className={styles.creatorCard} aria-label="Course creator">
              <img
                src={course.creatorAvatar}
                alt={course.creator}
                className={styles.creatorAvatar}
                loading="lazy"
              />
              <div className={styles.creatorInfo}>
                <div className={styles.creatorName}>PurePearl Studio</div>
                <div className={styles.creatorRole}>{course.creatorTitle}</div>
              </div>
            </div>

            {/* Enrollment CTA (repeated per Figma) */}
            <p className={styles.enrollCta}>
              Ready to Dive In? Enroll Now and Start Building Your Digital Future!
            </p>

            {/* See Full Profile */}
            <Link to="#" className={styles.profileLink} id="link-creator-profile">
              See Full Profile
            </Link>
          </aside>
        </div>
      </div>

      {/* ── MAIN CONTENT (white) ── */}
      <main className={styles.main} id="course-content">
        <div className={`container ${styles.mainInner}`}>
          {/* Tabs */}
          <div className={styles.tabsRow}>
            <div className={styles.tabs} role="tablist" aria-label="Course content tabs">
              {TABS.map(tab => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(tab)}
                  id={`tab-${tab.toLowerCase()}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* ── About tab ── */}
          {activeTab === 'About' && (
            <div className={styles.tabContent} role="tabpanel" aria-labelledby="tab-about">
              <section className={styles.descSection} aria-labelledby="desc-heading">
                <h2 id="desc-heading" className={styles.sectionTitle}>Description</h2>
                {course.description.map((para, i) => (
                  <p key={i} className={styles.descPara}>{para}</p>
                ))}
              </section>

              <section className={styles.sneakSection} aria-labelledby="sneak-heading">
                <h2 id="sneak-heading" className={styles.sectionTitle}>Sneak Peak</h2>
                <div className={styles.sneakGrid}>
                  {course.sneakPeaks.map((src, i) => (
                    <div key={i} className={styles.sneakThumb}>
                      <img src={src} alt={`Sneak peak ${i + 1}`} loading="lazy" />
                    </div>
                  ))}
                </div>
              </section>

              <section className={styles.keySection} aria-labelledby="key-heading">
                <h2 id="key-heading" className={styles.sectionTitle}>Key Points</h2>
                <ul className={styles.keyList} aria-label="Course key points">
                  {course.keyPoints.map(point => (
                    <li key={point} className={styles.keyItem}>
                      <span className={styles.keyCheck} aria-hidden="true">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          )}

          {/* ── Lessons tab ── */}
          {activeTab === 'Lessons' && (
            <div className={styles.tabContent} role="tabpanel" aria-labelledby="tab-lessons">
              <section className={styles.modulesSection} aria-labelledby="modules-heading">
                <h2 id="modules-heading" className={styles.sectionTitle}>Explore the Modules</h2>
                <p className={styles.modulesSubtitle}>
                  Immerse yourself in the course content as we break down each module into comprehensive
                  lessons, providing practical insights and hands-on experiences.
                </p>
                <h3 className={styles.lessonListHeading}>Lesson List</h3>
                <ul className={styles.moduleList} aria-label="Course modules">
                  {[
                    { num: 1, title: 'Module 1: Introduction to Digital Assets', desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.'" },
                    { num: 2, title: 'Module 2: Design Principles for Impact', desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.'" },
                    { num: 4, title: 'Module 4: User-Centric Design Strategies', desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.'" },
                    { num: 5, title: 'Module 5: Interactive Media and Engagement', desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.'" },
                    { num: 6, title: 'Module 6: Project Showcase and Critique', desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration." },
                    { num: 7, title: 'Module 7: Optimizing Digital Assets for Various Platforms', desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.'" },
                  ].map(mod => (
                    <li key={mod.num} className={styles.moduleItem} id={`module-${mod.num}`}>
                      <div className={styles.moduleIcon} aria-hidden="true">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#242528" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
                        </svg>
                      </div>
                      <div className={styles.moduleBody}>
                        <h4 className={styles.moduleTitle}>{mod.title}</h4>
                        <p className={styles.moduleDesc}>{mod.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section className={styles.lessonContentSection} aria-labelledby="lesson-content-heading">
                <h3 id="lesson-content-heading" className={styles.subsectionTitle}>Lesson Content</h3>
                <p className={styles.modulesSubtitle}>
                  Engage with each lesson through captivating video content, detailed textual explanations,
                  and interactive elements.
                </p>
              </section>

              <section className={styles.progressSection} aria-labelledby="progress-heading">
                <h3 id="progress-heading" className={styles.subsectionTitle}>Lesson Progress Tracking</h3>
                <p className={styles.modulesSubtitle}>
                  Witness your growth as you complete lessons, with an intuitive progress tracking feature
                  guiding you through your learning journey.
                </p>
                <div className={styles.progressCard} aria-label="Your learning progress">
                  <div className={styles.progressCardLabel}>Learning Progress</div>
                  <div className={styles.progressCardPercent}>55%</div>
                  <div className={styles.progressCardTrack} role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} aria-label="55% complete">
                    <div className={styles.progressCardFill} />
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* ── Reviews tab ── */}
          {activeTab === 'Reviews' && (
            <div className={styles.tabContent} role="tabpanel" aria-labelledby="tab-reviews">
              <h2 className={styles.sectionTitle}>What Learners Are Saying</h2>

              <p className={styles.reviewsDesc}>
                Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.'
                Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
              </p>

              {/* Rating summary card */}
              <div className={styles.ratingOverview} aria-label="Overall course rating">
                {/* Electric Lime score box */}
                <div className={styles.ratingScoreBox}>
                  <span className={styles.ratingLabel}>Ratings</span>
                  <span className={styles.ratingBig}>4.7</span>
                </div>

                {/* Rating bars */}
                <div className={styles.ratingBars} aria-label="Rating breakdown">
                  {RATING_BARS.map(row => (
                    <div key={row.stars} className={styles.ratingBarRow}>
                      {/* Progress bar track */}
                      <div className={styles.barTrack} role="progressbar" aria-valuenow={row.fillPct} aria-valuemin={0} aria-valuemax={100} aria-label={`${row.stars} stars`}>
                        <div className={styles.barFill} style={{ width: `${row.fillPct}%` }} />
                      </div>

                      {/* Stars */}
                      <div className={styles.starsRow} aria-hidden="true">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={styles.starFilled}><StarIcon /></span>
                        ))}
                      </div>

                      {/* Count */}
                      <span className={styles.barCount}>{row.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Individual Reviews heading */}
              <h3 className={styles.reviewsHeading} style={{ marginBottom: '16px' }}>Individual Reviews:</h3>

              {/* Rating filter pills */}
              <div className={styles.ratingFilter} role="group" aria-label="Filter by rating">
                <button className={`${styles.filterPill} ${styles.filterPillActive}`} id="filter-all">All rating</button>
                {[5, 4, 3, 2, 1].map(n => (
                  <button key={n} className={styles.filterPill} id={`filter-${n}`} aria-label={`${n} stars`}>
                    <StarIcon />
                    {n}
                  </button>
                ))}
              </div>

              {/* Review cards */}
              <div className={styles.reviewsPlaceholder}>
                {REVIEWS.map((r, i) => (
                  <div key={i} className={styles.reviewCard} id={`review-${i + 1}`}>
                    <div className={styles.reviewHeader}>
                      {/* Left: avatar + name + stars */}
                      <div className={styles.reviewLeft}>
                        <div className={styles.reviewerRow}>
                          <div className={styles.reviewAvatar} style={{ background: r.color }} aria-label={r.name}>
                            {r.name[0]}
                          </div>
                          <div className={styles.reviewerInfo}>
                            <div className={styles.reviewName}>{r.name}</div>
                            <div className={styles.reviewRole}>{r.role}</div>
                          </div>
                        </div>
                        {/* Stars */}
                        <div className={styles.reviewStars} aria-label={`${r.stars} out of 5 stars`}>
                          {[...Array(r.stars)].map((_, si) => (
                            <span key={si}><StarIcon /></span>
                          ))}
                        </div>
                      </div>
                      {/* Right: date */}
                      <span className={styles.reviewDate}>{r.date}</span>
                    </div>
                    <p className={styles.reviewText}>{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
