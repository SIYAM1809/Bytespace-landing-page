import styles from './Testimonials.module.css'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    roleColor: '#1a3fdc',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
    text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: 'James L.',
    role: 'Lifelong Learner',
    roleColor: '#6b7280',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: 'Alex B.',
    role: 'Inspired Creator',
    roleColor: '#059669',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&q=80',
    text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Header row: title left, desc right */}
        <div className={styles.headerRow}>
          <h2 id="testimonials-heading" className={styles.title}>
            Discover What Our<br />Community Is Saying
          </h2>
          <p className={styles.desc}>
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 Cards grid below */}
        <div className={styles.cards}>
          {TESTIMONIALS.map(t => (
            <article key={t.id} className={styles.card} id={`testimonial-${t.id}`}>
              <div className={styles.cardHeader}>
                <img
                  src={t.avatar}
                  alt={`${t.name} profile`}
                  className={styles.avatar}
                  loading="lazy"
                />
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
              <p className={styles.text}>{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
