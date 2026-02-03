import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest insights, tips, and strategies from digital marketing experts in the UAE.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: 'Latest insights, tips, and strategies from digital marketing experts in the UAE.',
    url: `${siteConfig.url}/blog`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blog | ${siteConfig.name}`,
    description: 'Latest insights, tips, and strategies from digital marketing experts in the UAE.',
    images: [siteConfig.ogImage],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}

