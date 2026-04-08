import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { DEMO_AUTH_COOKIE } from '@/lib/demo-auth'

export async function GET() {
  const session = cookies().get(DEMO_AUTH_COOKIE)
  return NextResponse.json({ authenticated: Boolean(session?.value) })
}
