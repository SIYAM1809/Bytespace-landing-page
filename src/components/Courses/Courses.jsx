import styles from './Courses.module.css'
import CourseCard from './CourseCard'
import { useState } from 'react'

const ROW_1 = [
  'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation',
  'Social Media', 'UI/UX Design', 'Creative Marketing',
]
const ROW_2 = [
  'Digital Illustration', 'Film & Video', 'Crafts',
  'Freelance & Entrepreneurship', 'Graphic Design', 'Photography',
]
const ROW_3 = [
  'Productivity', 'Web Development', 'Data Science', 'Cooking',
]

const COURSES = [
  {
    id: 1, title: 'Learn Figma from Basic', creator: 'pumppart studio',
    rating: 4.5, level: 'Beginner', price: 25, lessons: 17,
    duration: '2 hours 16 mins', comments: 59,
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80',
    category: 'UI/UX Design',
  },
  {
    id: 2, title: 'Build Digital Asset', creator: 'pumppart studio',
    rating: 4.5, level: 'Beginner', price: 25, lessons: 17,
    duration: '2 hours 16 mins', comments: 59,
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80',
    category: 'Digital Illustration',
  },
  {
    id: 3, title: 'The Power of Big Data', creator: 'pumppart studio',
    rating: 4.5, level: 'Beginner', price: 25, lessons: 17,
    duration: '2 hours 16 mins', comments: 59,
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
    category: 'Data Science',
  },
  {
    id: 4, title: 'Balancing Productivity and Life', creator: 'pumppart studio',
    rating: 4.5, level: 'Beginner', price: 25, lessons: 17,
    duration: '2 hours 16 mins', comments: 59,
    img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80',
    category: 'Productivity',
  },
  {
    id: 5, title: 'Mastering Money Management', creator: 'pumppart studio',
    rating: 4.5, level: 'Beginner', price: 25, lessons: 17,
    duration: '2 hours 16 mins', comments: 59,
    img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80',
    category: 'Marketing',
  },
  {
    id: 6, title: 'From Idea to Startup Success', creator: 'pumppart studio',
    rating: 4.5, level: 'Beginner', price: 25, lessons: 17,
    duration: '2 hours 16 mins', comments: 59,
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80',
    category: 'Freelance & Entrepreneurship',
  },
]


export default function Courses() {
  const [active, setActive] = useState('Featured')

  const filtered = active === 'Featured'
    ? COURSES
    : COURSES.filter(c => c.category === active)

  const displayed = filtered.length > 0 ? filtered : COURSES

  return (
    <section className={styles.courses} id="courses" aria-labelledby="courses-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="courses-heading" className={styles.title}>
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className={styles.subtitle}>
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and make a difference
            in your career and life.
          </p>
        </div>

        {/* Filter pills - 3 rows matching Figma */}
        <div className={styles.filters} role="tablist" aria-label="Course categories">
          <div className={styles.filterRow}>
            {ROW_1.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`${styles.pill} ${active === cat ? styles.pillActive : ''}`}
                onClick={() => setActive(cat)}
                id={`filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.filterRow}>
            {ROW_2.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`${styles.pill} ${active === cat ? styles.pillActive : ''}`}
                onClick={() => setActive(cat)}
                id={`filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.filterRow}>
            {ROW_3.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`${styles.pill} ${active === cat ? styles.pillActive : ''}`}
                onClick={() => setActive(cat)}
                id={`filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
            <button
              className={`${styles.pill} ${styles.pillMore}`}
              onClick={() => setActive('Featured')}
              id="filter-more"
            >
              + More
            </button>
          </div>
        </div>

        {/* Course grid */}
        <div className={styles.grid} role="tabpanel" aria-label={`${active} courses`}>
          {displayed.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
