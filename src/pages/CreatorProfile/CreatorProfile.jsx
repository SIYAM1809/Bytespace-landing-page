import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import CourseCard from '../../components/Courses/CourseCard'
import styles from './CreatorProfile.module.css'

const CREATOR = {
  name: 'PurePearl Studio',
  role: 'Passionate UI/UX, Web designer',
  badge: 'Creator',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
  products: 3,
  followers: 12,
  bio: `Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.`,
}

const SORT_OPTIONS = ['Most relevant', 'Newest', 'Highest rated', 'Price: Low to High', 'Price: High to Low']
const LEVEL_OPTIONS = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']
const CATEGORY_OPTIONS = ['All Categories', 'UI/UX Design', 'Animation', 'Creative Marketing', 'Marketing']

const COURSES = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    creator: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    category: 'UI/UX Design',
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    creator: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80',
    category: 'Animation',
  },
  {
    id: 3,
    title: 'The Power of Big Data',
    creator: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    category: 'Creative Marketing',
  },
  {
    id: 4,
    title: 'Balancing Productivity and Self-Care',
    creator: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80',
    category: 'Marketing',
  },
  {
    id: 5,
    title: 'Mastering Money Management',
    creator: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80',
    category: 'Marketing',
  },
  {
    id: 6,
    title: 'From Idea to Startup Success',
    creator: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    category: 'Creative Marketing',
  },
]

export default function CreatorProfile() {
  const [following, setFollowing] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [levelOpen, setLevelOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [activeSort, setActiveSort] = useState('Most relevant')
  const [activeLevel, setActiveLevel] = useState('All Levels')
  const [activeCategory, setActiveCategory] = useState('All Categories')

  // Close dropdowns on outside click
  useEffect(() => {
    const close = () => {
      setSortOpen(false)
      setLevelOpen(false)
      setCategoryOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  const filteredCourses = COURSES.filter(c => {
    const matchLevel = activeLevel === 'All Levels' || c.level === activeLevel
    const matchCat = activeCategory === 'All Categories' || c.category === activeCategory
    return matchLevel && matchCat
  })

  return (
    <>
      <Navbar />

      {/* ── BLUE HERO (Persian Blue/800 #003BE2 with 120px Line Grid) ── */}
      <div className={styles.hero} id="creator-hero">
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.heroContent}>
          {/* Creator Profile Top Row */}
          <div className={styles.profileHeader}>
            <img
              src={CREATOR.avatar}
              alt={`${CREATOR.name} profile`}
              className={styles.avatar}
              loading="eager"
            />
            <div className={styles.creatorTitleBlock}>
              <div className={styles.nameRow}>
                <h1 className={styles.name}>{CREATOR.name}</h1>
                <span className={styles.creatorBadge} aria-label="Verified creator">
                  {CREATOR.badge}
                </span>
              </div>
              <p className={styles.role}>{CREATOR.role}</p>
            </div>
          </div>

          {/* Bio text */}
          <p className={styles.bio}>{CREATOR.bio}</p>

          {/* Stats and Follow Row */}
          <div className={styles.statsAndFollowRow}>
            <div className={styles.statsLeft}>
              {/* Products Pill */}
              <div className={styles.statPill} id="stat-products">
                <span className={styles.statNum}>{CREATOR.products}</span>
                <span className={styles.statLabel}>Products</span>
              </div>

              {/* Followers Pill */}
              <div className={styles.statPill} id="stat-followers">
                <span className={styles.statNum}>{following ? CREATOR.followers + 1 : CREATOR.followers}</span>
                <span className={styles.statLabel}>Followers</span>
              </div>
            </div>

            {/* Follow Button: 101×46px, Electric Lime/400 #D4FB20 */}
            <button
              type="button"
              className={`${styles.followBtn} ${following ? styles.followingBtn : ''}`}
              onClick={() => setFollowing(f => !f)}
              id="btn-follow-creator"
              aria-pressed={following}
              aria-label={following ? 'Unfollow creator' : 'Follow creator'}
            >
              {following ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>
      </div>

      {/* ── MAIN COURSES SECTION ── */}
      <main className={styles.main} id="creator-courses">
        <div className={styles.contentWrapper}>
          {/* Filter / Sort row (1201×48px) */}
          <div className={styles.filterRow}>
            <div className={styles.filterLeft}>
              {/* Filter button */}
              <button
                type="button"
                className={`${styles.filterBtn} ${(activeCategory !== 'All Categories' || activeLevel !== 'All Levels') ? styles.filterBtnActive : ''}`}
                id="btn-filter-creator"
                aria-label="Filter courses"
                onClick={() => {
                  setActiveCategory('All Categories')
                  setActiveLevel('All Levels')
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                  <line x1="11" y1="18" x2="13" y2="18" />
                </svg>
                <span>Filter</span>
              </button>

              {/* Level dropdown */}
              <div className={styles.dropWrap} onClick={e => { e.stopPropagation(); setLevelOpen(!levelOpen); setSortOpen(false); setCategoryOpen(false) }}>
                <button
                  type="button"
                  className={`${styles.filterBtn} ${activeLevel !== 'All Levels' ? styles.filterBtnActive : ''}`}
                  id="btn-level-creator"
                  aria-expanded={levelOpen}
                  aria-haspopup="listbox"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="3" y="14" width="4" height="7" rx="1" />
                    <rect x="10" y="9" width="4" height="12" rx="1" />
                    <rect x="17" y="4" width="4" height="17" rx="1" />
                  </svg>
                  <span>{activeLevel === 'All Levels' ? 'Level' : activeLevel}</span>
                </button>
                {levelOpen && (
                  <ul className={styles.dropdownMenu} role="listbox" aria-label="Filter by level">
                    {LEVEL_OPTIONS.map(opt => (
                      <li
                        key={opt}
                        role="option"
                        aria-selected={activeLevel === opt}
                        className={`${styles.dropdownItem} ${activeLevel === opt ? styles.dropdownItemActive : ''}`}
                        onClick={() => setActiveLevel(opt)}
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Category dropdown */}
              <div className={styles.dropWrap} onClick={e => { e.stopPropagation(); setCategoryOpen(!categoryOpen); setSortOpen(false); setLevelOpen(false) }}>
                <button
                  type="button"
                  className={`${styles.filterBtn} ${activeCategory !== 'All Categories' ? styles.filterBtnActive : ''}`}
                  id="btn-category-creator"
                  aria-expanded={categoryOpen}
                  aria-haspopup="listbox"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                  <span>{activeCategory === 'All Categories' ? 'Category' : activeCategory}</span>
                </button>
                {categoryOpen && (
                  <ul className={styles.dropdownMenu} role="listbox" aria-label="Filter by category">
                    {CATEGORY_OPTIONS.map(opt => (
                      <li
                        key={opt}
                        role="option"
                        aria-selected={activeCategory === opt}
                        className={`${styles.dropdownItem} ${activeCategory === opt ? styles.dropdownItemActive : ''}`}
                        onClick={() => setActiveCategory(opt)}
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className={styles.sortWrap} onClick={e => { e.stopPropagation(); setSortOpen(!sortOpen); setLevelOpen(false); setCategoryOpen(false) }}>
              <button
                type="button"
                className={styles.sortBtn}
                id="btn-sort-creator"
                aria-expanded={sortOpen}
                aria-haspopup="listbox"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="6" y1="12" x2="18" y2="12" />
                  <line x1="9" y1="18" x2="15" y2="18" />
                </svg>
                <span>{activeSort}</span>
              </button>
              {sortOpen && (
                <ul className={styles.dropdownMenuRight} role="listbox" aria-label="Sort courses">
                  {SORT_OPTIONS.map(opt => (
                    <li
                      key={opt}
                      role="option"
                      aria-selected={activeSort === opt}
                      className={`${styles.dropdownItem} ${activeSort === opt ? styles.dropdownItemActive : ''}`}
                      onClick={() => setActiveSort(opt)}
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Course grid: 3 cards per row × 373px, gap 40px */}
          <div className={styles.grid} aria-label="Creator courses">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
