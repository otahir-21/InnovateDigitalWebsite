import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { DEMO_AUTH_COOKIE } from '@/lib/demo-auth'

/** Open redirect guard for ?from= — internal paths only */
function isSafeRedirectPath(path: string): boolean {
  if (!path.startsWith('/') || path.startsWith('//')) return false
  if (path.includes('://') || path.includes('\\')) return false
  return true
}

/**
 * Site-wide lock: unauthenticated visitors only see /login.
 * Set SITE_UNLOCK=true in env to open the site (e.g. public launch).
 */
export function middleware(request: NextRequest) {
  if (process.env.SITE_UNLOCK === 'true') {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl
  const session = request.cookies.get(DEMO_AUTH_COOKIE)

  if (pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  if (pathname === '/login') {
    if (session?.value) {
      const from = request.nextUrl.searchParams.get('from')
      const dest = from && isSafeRedirectPath(from) ? from : '/'
      return NextResponse.redirect(new URL(dest, request.url))
    }
    return NextResponse.next()
  }

  if (session?.value) {
    return NextResponse.next()
  }

  const loginUrl = request.nextUrl.clone()
  loginUrl.pathname = '/login'
  loginUrl.search = ''
  const from = `${pathname}${request.nextUrl.search}`
  if (from && from !== '/login') {
    loginUrl.searchParams.set('from', from)
  }

  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|site.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|txt|xml|webmanifest)$).*)',
  ],
}
