/**
 * Offset content below fixed header (h-20) so the sign-in form stays visible.
 */
export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <div className="pt-24 pb-12 container-custom">{children}</div>
}
