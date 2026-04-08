'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const defaultClass =
  'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-gray-400 disabled:opacity-60 transition-colors'

export default function LogoutButton({ className }: { className?: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function logout() {
    setLoading(true)
    try {
      await fetch('/api/auth/demo-logout', { method: 'POST' })
      router.push('/login')
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={logout}
      disabled={loading}
      className={className ?? defaultClass}
    >
      {loading ? 'Signing out…' : 'Sign out'}
    </button>
  )
}
