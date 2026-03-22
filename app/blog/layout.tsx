import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Digital Marketing Blog Dubai | SEO & Social Media Tips UAE',
  description: 'Expert digital marketing insights from Dubai. SEO tips, social media strategies, Google Ads guides, and web design trends for UAE businesses. Updated weekly.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Digital Marketing Blog Dubai | SEO & Social Media Tips UAE',
    description: 'Expert digital marketing insights from Dubai. SEO tips, social media strategies, Google Ads guides, and web design trends for UAE businesses.',
    url: `${siteConfig.url}/blog`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Blog Dubai | SEO & Social Media Tips UAE',
    description: 'Expert digital marketing insights from Dubai. SEO tips, social media strategies, Google Ads guides, and web design trends for UAE businesses.',
    images: [siteConfig.ogImage],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}

