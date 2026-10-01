import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar} id="navbar">
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo} aria-label="ByteSpace Home">
          {/* Figma: Vector #D4FB20 Electric Lime/400 */}
          <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0 4C0 1.79 1.79 0 4 0h21c2.21 0 4 1.79 4 4v24c0 2.21-1.79 4-4 4H4C1.79 32 0 30.21 0 28V4z" fill="#D4FB20"/>
            <path d="M7 8h8c2 0 3.5 1.2 3.5 3s-1.5 3-3.5 3H7V8zm0 7h8.5c2.2 0 3.8 1.3 3.8 3.2S17.7 21 15.5 21H7v-6z" fill="#003BE2"/>
          </svg>
          <span>ByteSpace</span>
        </Link>

        {/* Nav Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''} id="nav-home">
              Home
            </NavLink>
          </li>
          <li><a href="/#courses" id="nav-courses">Courses</a></li>
          <li><a href="/#creators" id="nav-creators">Creators</a></li>
        </ul>

        {/* Auth */}
        <div className={`${styles.authGroup} ${menuOpen ? styles.open : ''}`}>
          <Link to="/signin" className={styles.signIn} id="btn-signin">Sign In</Link>
          <Link to="/signup" className={styles.joinBtn} id="btn-joinus">Join Us</Link>
          <button className={styles.cartBtn} aria-label="Cart" id="btn-cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          id="btn-hamburger"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
