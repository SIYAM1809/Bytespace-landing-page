import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import CourseCard from '../../components/Courses/CourseCard'
import styles from './SearchPage.module.css'

const CATEGORIES = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Cooking',
]

const SORT_OPTIONS = [
  'Most relevant',
  'Newest',
  'Highest rated',
  'Price: Low to High',
  'Price: High to Low',
]

const LEVEL_OPTIONS = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']

const ALL_COURSES = [
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
  {
    id: 7,
    title: 'Electronic Music Production',
    creator: 'soundwave records',
    rating: 4.8,
    level: 'Intermediate',
    price: 35,
    lessons: 21,
    duration: '3 hours 45 mins',
    comments: 74,
    img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80',
    category: 'Music',
  },
  {
    id: 8,
    title: 'Oil Painting Foundations',
    creator: 'artisan studio',
    rating: 4.9,
    level: 'Beginner',
    price: 30,
    lessons: 19,
    duration: '4 hours 10 mins',
    comments: 88,
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&q=80',
    category: 'Drawing & Painting',
  },
  {
    id: 9,
    title: 'Social Media Growth Mastery',
    creator: 'viral media lab',
    rating: 4.6,
    level: 'Advanced',
    price: 40,
    lessons: 25,
    duration: '5 hours 20 mins',
    comments: 112,
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    category: 'Social Media',
  },
  {
    id: 10,
    title: 'Culinary Art of French Pastry',
    creator: 'chef patissier',
    rating: 4.9,
    level: 'Intermediate',
    price: 29,
    lessons: 16,
    duration: '2 hours 50 mins',
    comments: 63,
    img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
    category: 'Cooking',
  },
  {
    id: 11,
    title: '3D Character Animation in Blender',
    creator: 'poly render lab',
    rating: 4.7,
    level: 'Intermediate',
    price: 45,
    lessons: 28,
    duration: '6 hours 15 mins',
    comments: 95,
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
    category: 'Animation',
  },
  {
    id: 12,
    title: 'Advanced Design Systems with Figma',
    creator: 'purepearl studio',
    rating: 4.9,
    level: 'Advanced',
    price: 49,
    lessons: 30,
    duration: '7 hours 10 mins',
    comments: 140,
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&q=80',
    category: 'UI/UX Design',
  },
]

const ITEMS_PER_PAGE = 6

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [inputVal, setInputVal] = useState(searchParams.get('q') || '')
  const [activeCategory, setActiveCategory] = useState('Featured')
  const [activeSort, setActiveSort] = useState('Most relevant')
  const [activeLevel, setActiveLevel] = useState('All Levels')
  const [page, setPage] = useState(1)
  const [sortOpen, setSortOpen] = useState(false)
  const [levelOpen, setLevelOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [typeOpen, setTypeOpen] = useState(false)
  const [searchType, setSearchType] = useState('Courses')

  // Filter courses
  const filtered = ALL_COURSES.filter(c => {
    const matchCat = activeCategory === 'Featured' || c.category === activeCategory
    const matchLevel = activeLevel === 'All Levels' || c.level === activeLevel
    const matchQuery =
      !query ||
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.creator.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchLevel && matchQuery
  }).sort((a, b) => {
    if (activeSort === 'Highest rated') return b.rating - a.rating
    if (activeSort === 'Price: Low to High') return a.price - b.price
    if (activeSort === 'Price: High to Low') return b.price - a.price
    if (activeSort === 'Newest') return b.id - a.id
    return 0 // 'Most relevant'
  })

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const handleSearch = (e) => {
    e.preventDefault()
    setQuery(inputVal)
    setPage(1)
    if (inputVal) {
      setSearchParams({ q: inputVal })
    } else {
      setSearchParams({})
    }
  }

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat)
    setPage(1)
  }

  // Close all dropdowns on outside click
  useEffect(() => {
    const close = () => {
      setSortOpen(false)
      setLevelOpen(false)
      setCategoryOpen(false)
      setTypeOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  return (
    <>
      <Navbar />

      {/* Blue hero header (1440×360px, #003BE2 with 120px line grid) */}
      <div className={styles.hero} id="search-hero">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Find Your Next Course</h1>

          {/* Search Row: 624px width, 52px height */}
          <form className={styles.searchRow} onSubmit={handleSearch} role="search" aria-label="Search courses">
            <div className={styles.searchInputWrap}>
              <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                id="search-input"
                type="search"
                placeholder="Search"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                className={styles.searchInput}
                aria-label="Search query"
              />
            </div>

            {/* Courses selector: 147×48px #D4FB20 */}
            <div className={styles.searchDropdownWrap} onClick={e => { e.stopPropagation(); setTypeOpen(!typeOpen) }}>
              <button
                type="button"
                className={styles.courseDropdown}
                id="btn-search-type"
                aria-expanded={typeOpen}
                aria-haspopup="listbox"
              >
                <span>{searchType}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {typeOpen && (
                <ul className={styles.dropdownMenu} role="listbox" aria-label="Search type">
                  {['Courses', 'Creators', 'Categories'].map(opt => (
                    <li
                      key={opt}
                      role="option"
                      aria-selected={searchType === opt}
                      className={`${styles.dropdownItem} ${searchType === opt ? styles.dropdownItemActive : ''}`}
                      onClick={() => setSearchType(opt)}
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Main content */}
      <main className={styles.main} id="search-results">
        <div className={styles.contentWrapper}>

          {/* Filter / Sort row (1201×48px) */}
          <div className={styles.filterRow}>
            <div className={styles.filterLeft}>
              {/* Filter toggle button */}
              <button
                type="button"
                className={`${styles.filterBtn} ${(activeCategory !== 'Featured' || activeLevel !== 'All Levels') ? styles.filterBtnActive : ''}`}
                id="btn-filter"
                aria-label="Filter courses"
                onClick={() => {
                  if (activeCategory !== 'Featured' || activeLevel !== 'All Levels') {
                    setActiveCategory('Featured')
                    setActiveLevel('All Levels')
                    setPage(1)
                  }
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
                  id="btn-level"
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
                        onClick={() => { setActiveLevel(opt); setPage(1) }}
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
                  className={`${styles.filterBtn} ${activeCategory !== 'Featured' ? styles.filterBtnActive : ''}`}
                  id="btn-category"
                  aria-expanded={categoryOpen}
                  aria-haspopup="listbox"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                  <span>{activeCategory === 'Featured' ? 'Category' : activeCategory}</span>
                </button>
                {categoryOpen && (
                  <ul className={styles.dropdownMenu} role="listbox" aria-label="Filter by category">
                    {CATEGORIES.map(cat => (
                      <li
                        key={cat}
                        role="option"
                        aria-selected={activeCategory === cat}
                        className={`${styles.dropdownItem} ${activeCategory === cat ? styles.dropdownItemActive : ''}`}
                        onClick={() => handleCategorySelect(cat)}
                      >
                        {cat}
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
                id="btn-sort"
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
                <ul className={styles.dropdownMenuRight} role="listbox" aria-label="Sort results">
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

          {/* Tab_Categories: Category Pills (1200×43px, gap 16px) */}
          <div className={styles.pills} role="tablist" aria-label="Course categories">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`${styles.pill} ${activeCategory === cat ? styles.pillActive : ''}`}
                onClick={() => handleCategorySelect(cat)}
                id={`search-cat-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count indicator */}
          {query && (
            <p className={styles.resultCount} aria-live="polite">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;<strong>{query}</strong>&rdquo;
            </p>
          )}

          {/* Course grid (3 cards per row × 373px, gap 40px) */}
          {paginated.length > 0 ? (
            <div className={styles.grid} role="tabpanel" aria-label="Search results">
              {paginated.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className={styles.empty} aria-live="polite">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gray-300)" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <p>No courses found{query ? ` for "${query}"` : ''}.</p>
              <button
                type="button"
                className={styles.clearBtn}
                onClick={() => {
                  setQuery('')
                  setInputVal('')
                  setActiveCategory('Featured')
                  setActiveLevel('All Levels')
                  setSearchParams({})
                }}
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination (314×48px, gap 24px) */}
          {totalPages > 1 && (
            <nav className={styles.pagination} aria-label="Search results pagination">
              <button
                type="button"
                className={styles.pageArrowBtn}
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                aria-label="Previous page"
                id="btn-page-prev"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className={styles.pageNumbers}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button
                    key={p}
                    type="button"
                    className={`${styles.pageNumber} ${page === p ? styles.pageNumberActive : ''}`}
                    onClick={() => setPage(p)}
                    aria-label={`Page ${p}`}
                    aria-current={page === p ? 'page' : undefined}
                    id={`btn-page-${p}`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className={styles.pageArrowBtn}
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                aria-label="Next page"
                id="btn-page-next"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </nav>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
