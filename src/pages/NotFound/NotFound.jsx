import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className={styles.page} id="not-found-main" aria-label="Page not found">
        {/* Blue hero section */}
        <section className={styles.heroSection}>

          {/* Grid overlay — lines at 12% opacity */}
          <div className={styles.grid} aria-hidden="true" />

          {/* Giant gradient "404" — Poppins 600 480px, Electric Lime → transparent */}
          <div className={styles.bigNum} aria-hidden="true">404</div>

          {/* Content block — Figma: Frame 1, top 521px, centered */}
          <div className={styles.content}>
            <h1 className={styles.headline}>
              The page you are looking for doesn't exist
            </h1>

            <p className={styles.subtext}>
              Try to use a correct url or go back to homepage to start again
            </p>

            <Link
              to="/"
              className={styles.backBtn}
              id="btn-back-home"
              aria-label="Go back to homepage"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
