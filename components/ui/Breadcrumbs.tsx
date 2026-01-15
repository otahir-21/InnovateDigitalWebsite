'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiHome, FiChevronRight } from 'react-icons/fi'

interface BreadcrumbItem {
  label: string
  href: string
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  // Don't show on homepage
  if (pathname === '/') return null

  const pathSegments = pathname.split('/').filter(segment => segment)
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
  ]

  // Build breadcrumb trail
  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    
    // Format label (capitalize and remove hyphens)
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    breadcrumbs.push({
      label,
      href: currentPath,
    })
  })

  // Generate Schema.org BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://innovatedigital.ae'}${item.href}`,
    })),
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1
            
            return (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <FiChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                {index === 0 ? (
                  <Link
                    href={item.href}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FiHome className="w-4 h-4" />
                    <span className="ml-1">{item.label}</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-gray-900 font-medium">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
