/**
 * Demo / placeholder client portal auth — not for real user data.
 * Override in production with env: DEMO_LOGIN_EMAIL, DEMO_LOGIN_PASSWORD
 */
export const DEMO_AUTH_COOKIE = 'innovate_demo_session'
export const DEMO_AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 days

/** Defaults — must match DEMO_HINT_* in components/auth/LoginForm.tsx */
const DEFAULT_EMAIL = 'demo@innovatedigital.ae'
const DEFAULT_PASSWORD = 'InnovateDemo2026!'

export function getDemoCredentials() {
  return {
    email: process.env.DEMO_LOGIN_EMAIL?.trim() || DEFAULT_EMAIL,
    password: process.env.DEMO_LOGIN_PASSWORD || DEFAULT_PASSWORD,
  }
}

export function validateDemoLogin(email: string, password: string): boolean {
  const { email: expected, password: expectedPass } = getDemoCredentials()
  if (!email || !password) return false
  return (
    email.trim().toLowerCase() === expected.trim().toLowerCase() &&
    password === expectedPass
  )
}
