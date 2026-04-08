'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import LogoutButton from '@/components/auth/LogoutButton'

export default function FooterSessionLink() {
  const pathname = usePathname()
  const [authed, setAuthed] = useState<boolean | null>(null)

  useEffect(() => {
    let cancelled = false
    setAuthed(null)
    fetch('/api/auth/session')
      .then((r) => r.json())
      .then((d: { authenticated?: boolean }) => {
        if (!cancelled) setAuthed(Boolean(d.authenticated))
      })
      .catch(() => {
        if (!cancelled) setAuthed(false)
      })
    return () => {
      cancelled = true
    }
  }, [pathname])

  if (authed === null) {
    return <span className="text-sm text-gray-500">…</span>
  }

  if (authed) {
    return (
      <LogoutButton className="text-sm text-left hover:text-primary-400 transition-colors disabled:opacity-60 underline-offset-2 hover:underline" />
    )
  }

  return (
    <Link href="/login" className="text-sm hover:text-primary-400 transition-colors">
      Client login
    </Link>
  )
}
