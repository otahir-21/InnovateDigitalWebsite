import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import {
  DEMO_AUTH_COOKIE,
  DEMO_AUTH_COOKIE_MAX_AGE,
  validateDemoLogin,
} from '@/lib/demo-auth'

export async function POST(request: Request) {
  let body: { email?: string; password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const email = typeof body.email === 'string' ? body.email : ''
  const password = typeof body.password === 'string' ? body.password : ''

  if (!validateDemoLogin(email, password)) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
  }

  const cookieStore = cookies()
  cookieStore.set(DEMO_AUTH_COOKIE, '1', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: DEMO_AUTH_COOKIE_MAX_AGE,
  })

  return NextResponse.json({ ok: true })
}
