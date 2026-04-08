import type { Metadata } from 'next'
import LoginForm from '@/components/auth/LoginForm'

export const metadata: Metadata = {
  title: 'Client login',
  description: 'Demo client portal login for Innovate Digital.',
  robots: { index: false, follow: false },
}

export default function LoginPage({
  searchParams,
}: {
  searchParams: { from?: string }
}) {
  return <LoginForm redirectTo={searchParams.from} />
}
