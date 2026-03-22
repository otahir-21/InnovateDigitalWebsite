import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Digital Marketing Results Dubai',
  description: 'See real results from our Dubai digital marketing campaigns. 200+ successful projects with proven ROI in SEO, PPC, social media, and web development across UAE.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Portfolio & Case Studies | Digital Marketing Results Dubai',
    description: 'See real results from our Dubai digital marketing campaigns. 200+ successful projects with proven ROI across UAE.',
    url: `${siteConfig.url}/portfolio`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio & Case Studies | Digital Marketing Results Dubai',
    description: 'See real results from our Dubai digital marketing campaigns. 200+ successful projects with proven ROI across UAE.',
    images: [siteConfig.ogImage],
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}

