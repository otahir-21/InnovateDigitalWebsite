import type { Metadata } from 'next'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { DEMO_AUTH_COOKIE } from '@/lib/demo-auth'
import LogoutButton from '@/components/auth/LogoutButton'

export const metadata: Metadata = {
  title: 'Client portal',
  description: 'Innovate Digital client area (demo).',
  robots: { index: false, follow: false },
}

export default function ClientPortalPage() {
  const session = cookies().get(DEMO_AUTH_COOKIE)
  if (!session?.value) {
    redirect('/login')
  }

  return (
    <div className="min-h-[70vh] container-custom py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 font-[family-name:var(--font-heading)] mb-2">
          Welcome
        </h1>
        <p className="text-gray-600 mb-8">
          This is a placeholder client area. Connect your CRM, reports, or ticketing here when you
          replace demo auth with a real system.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-95 transition-opacity"
          >
            Contact your account manager
          </Link>
          <LogoutButton />
        </div>
      </div>
    </div>
  )
}
