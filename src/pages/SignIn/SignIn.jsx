import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../../components/AuthLayout/AuthLayout'
import styles from './SignIn.module.css'

export default function SignIn() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.password) e.password = 'Password is required'
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
      heading="Sign in with ease"
      subheading="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className={styles.card} role="main">
        {/* Top Section (Frame 19) */}
        <div className={styles.topSection}>
          <div className={styles.headerGroup}>
            <p className={styles.tagline}>Sign In</p>
            <h1 className={styles.title}>Welcome Back</h1>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="Sign in form">
            {/* Email Field */}
            <div className={styles.field}>
              <label htmlFor="signin-email" className={styles.label}>Email</label>
              <div className={`${styles.inputWrap} ${errors.email ? styles.inputWrapError : ''}`}>
                <input
                  id="signin-email"
                  name="email"
                  type="email"
                  placeholder="designer@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={styles.input}
                  autoComplete="email"
                  aria-describedby={errors.email ? 'signin-email-error' : undefined}
                />
              </div>
              {errors.email && (
                <p className={styles.error} id="signin-email-error" role="alert">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className={styles.field}>
              <label htmlFor="signin-password" className={styles.label}>Password</label>
              <div className={`${styles.inputWrap} ${errors.password ? styles.inputWrapError : ''}`}>
                <input
                  id="signin-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="********"
                  value={form.password}
                  onChange={handleChange}
                  className={styles.input}
                  autoComplete="current-password"
                  aria-describedby={errors.password ? 'signin-password-error' : undefined}
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPassword(p => !p)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  id="btn-signin-toggle-password"
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
                <p className={styles.error} id="signin-password-error" role="alert">{errors.password}</p>
              )}
            </div>

            {/* Submit Button (width: 104px, height: 46px, right aligned) */}
            <button
              type="submit"
              className={styles.submitBtn}
              id="btn-signin-submit"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? <span className={styles.spinner} aria-label="Loading" /> : 'Sign In'}
            </button>
          </form>
        </div>

        {/* Bottom Section (Frame 18) */}
        <div className={styles.bottomSection}>
          {/* Divider */}
          <div className={styles.divider} aria-hidden="true">
            <span className={styles.dividerLine} />
            <span className={styles.dividerText}>or</span>
            <span className={styles.dividerLine} />
          </div>

          {/* Social Logins: 72×72px buttons */}
          <div className={styles.socials}>
            <button
              type="button"
              className={styles.socialBtn}
              id="btn-signin-apple"
              aria-label="Sign in with Apple"
            >
              {/* Apple Icon */}
              <svg width="32" height="32" viewBox="0 0 170 170" fill="#000000">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.86-12-14.47-6.09-9.39-10.89-20.08-14.38-32.08-3.5-12-5.25-23.27-5.25-33.82 0-14.12 3.5-25.79 10.49-35.01 6.99-9.22 15.82-13.88 26.5-13.98 5.68 0 11.49 1.48 17.43 4.45 5.94 2.97 9.87 4.51 11.8 4.62 1.52 0 5.62-1.63 12.31-4.89 6.69-3.26 12.65-4.66 17.89-4.22 13.93 1.09 24.63 6.13 32.1 15.11-12.44 7.6-18.52 17.76-18.25 30.48.27 10 4.07 18.28 11.4 24.84 7.33 6.56 16.03 10.29 26.11 11.19-2.27 7.06-5.07 14.15-8.4 21.26zM119.22 33.51c0-7.28 2.66-13.98 7.99-20.09 5.33-6.11 11.86-10.15 19.59-12.13.11 1.09.16 2.06.16 2.93 0 7.28-2.8 14.25-8.4 20.91-5.6 6.66-12.19 10.49-19.78 11.49-.11-.98-.16-2.02-.16-3.11z" />
              </svg>
            </button>

            <button
              type="button"
              className={styles.socialBtn}
              id="btn-signin-google"
              aria-label="Sign in with Google"
            >
              {/* Google Icon */}
              <svg width="30" height="30" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </button>
          </div>

          {/* Switch Text */}
          <p className={styles.switchText}>
            <span>New user?</span>
            <Link to="/signup" className={styles.switchLink} id="link-goto-signup">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}
