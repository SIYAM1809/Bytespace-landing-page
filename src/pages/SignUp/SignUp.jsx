import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../../components/AuthLayout/AuthLayout'
import styles from './SignUp.module.css'

export default function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.password) e.password = 'Password is required'
    else if (form.password.length < 6) e.password = 'Password must be at least 6 characters'
    return e
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length) {
      setErrors(v)
      return
    }
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    navigate('/')
  }

  return (
    <AuthLayout
      heading="Sign up and come in"
      subheading="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className={styles.card} role="main">
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.headerGroup}>
            <p className={styles.tagline}>Create an Account</p>
            <h1 className={styles.title}>Welcome to ByteSpace</h1>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="Sign up form">
            {/* Full Name */}
            <div className={styles.field}>
              <label htmlFor="signup-name" className={styles.label}>Full Name</label>
              <div className={`${styles.inputWrap} ${errors.name ? styles.inputWrapError : ''}`}>
                <input
                  id="signup-name"
                  name="name"
                  type="text"
                  placeholder="Jamie Davis"
                  value={form.name}
                  onChange={handleChange}
                  className={styles.input}
                  autoComplete="name"
                  aria-describedby={errors.name ? 'signup-name-error' : undefined}
                />
              </div>
              {errors.name && (
                <p className={styles.error} id="signup-name-error" role="alert">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className={styles.field}>
              <label htmlFor="signup-email" className={styles.label}>Email</label>
              <div className={`${styles.inputWrap} ${errors.email ? styles.inputWrapError : ''}`}>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  placeholder="designer@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={styles.input}
                  autoComplete="email"
                  aria-describedby={errors.email ? 'signup-email-error' : undefined}
                />
              </div>
              {errors.email && (
                <p className={styles.error} id="signup-email-error" role="alert">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className={styles.field}>
              <label htmlFor="signup-password" className={styles.label}>Password</label>
              <div className={`${styles.inputWrap} ${errors.password ? styles.inputWrapError : ''}`}>
                <input
                  id="signup-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  className={styles.input}
                  autoComplete="new-password"
                  aria-describedby={errors.password ? 'signup-password-error' : undefined}
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPassword(p => !p)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  id="btn-signup-toggle-password"
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className={styles.error} id="signup-password-error" role="alert">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={styles.submitBtn}
              id="btn-signup-continue"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? <span className={styles.spinner} aria-label="Loading" /> : 'Continue'}
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p className={styles.switchText}>
            <span>Already have an account?</span>
            <Link to="/signin" className={styles.switchLink} id="link-goto-signin">
              Login
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}
