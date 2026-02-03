import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Digital marketing case studies and real results for businesses across the UAE.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: `Portfolio | ${siteConfig.name}`,
    description: 'Digital marketing case studies and real results for businesses across the UAE.',
    url: `${siteConfig.url}/portfolio`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Portfolio | ${siteConfig.name}`,
    description: 'Digital marketing case studies and real results for businesses across the UAE.',
    images: [siteConfig.ogImage],
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}

