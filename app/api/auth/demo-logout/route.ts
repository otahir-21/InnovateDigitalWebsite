import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { DEMO_AUTH_COOKIE } from '@/lib/demo-auth'

export async function POST() {
  const cookieStore = cookies()
  cookieStore.set(DEMO_AUTH_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  })
  return NextResponse.json({ ok: true })
}
