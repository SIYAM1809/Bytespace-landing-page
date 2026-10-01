import styles from './CreatorCTA.module.css'

export default function CreatorCTA() {
  return (
    <section className={styles.section} id="creators" aria-labelledby="creator-cta-heading">
      {/* Decorative shapes */}
      <div className={styles.shapeTriLeft} aria-hidden="true" />
      <div className={styles.shapeCircleLeft} aria-hidden="true" />
      <div className={styles.shapeLimeRight} aria-hidden="true" />
      <div className={styles.shapeTriRight} aria-hidden="true" />
      <div className={styles.shapeLimeBottomLeft} aria-hidden="true" />
      <div className={styles.shapeSquiggleLeft} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>
          <h2 id="creator-cta-heading" className={styles.title}>
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className={styles.desc}>
            Experience the collaboration of numerous creators and an expanding selection of courses.
            Register now and become a part of a community comprising over 10,000 local and
            international creators. Utilize our Course Editor, and showcase your expertise by
            publishing your finest course on the ByteSpace Course Library.
          </p>
          <a href="/signup" className={styles.btn} id="btn-join-creator">
            Join as Creator
          </a>
        </div>
      </div>
    </section>
  )
}
