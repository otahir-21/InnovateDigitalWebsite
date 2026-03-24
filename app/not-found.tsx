import NotFoundClient from '@/components/not-found/NotFoundClient'

/** Server entry for 404 — delegates UI to a client component (Next 15+ safe boundary). */
export default function NotFound() {
  return <NotFoundClient />
}
