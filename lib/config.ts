export const siteConfig = {
  name: 'Innovate Digital',
  description: 'Leading digital marketing agency in UAE. Expert SEO, social media marketing, web development, and PPC services. Transform your business with data-driven strategies.',
  // Canonical domain (your deployment redirects non-www -> www)
  url: 'https://www.innovatedigital.ae',
  // Use an existing asset to avoid broken OG previews.
  // You can replace this later with a dedicated 1200×630 image at `/public/og-image.jpg`.
  ogImage: 'https://www.innovatedigital.ae/logo.svg',
  links: {
    twitter: 'https://twitter.com/innovatedigital',
    linkedin: 'https://linkedin.com/company/innovatedigital',
    instagram: 'https://instagram.com/innovatedigital',
    facebook: 'https://facebook.com/innovatedigital',
  },
  contact: {
    email: 'info@innovatedigital.ae',
    phone: '+971 52 394 9010',
    whatsapp: '+971523949010',
    address: 'Meydan Free Zone, Dubai, UAE',
  },
}

export const navigationLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'SEO Services', href: '/services/seo' },
      { name: 'Social Media Marketing', href: '/services/social-media' },
      { name: 'PPC Management', href: '/services/ppc' },
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'E-commerce Solutions', href: '/services/ecommerce' },
      { name: 'Email Marketing', href: '/services/email-marketing' },
      { name: 'Video Production', href: '/services/video-production' },
      { name: 'Mobile App Development', href: '/services/mobile-app' },
      { name: 'Content Marketing', href: '/services/content-marketing' },
      { name: 'Branding & Design', href: '/services/branding' },
      { name: 'Analytics & Reporting', href: '/services/analytics' },
      { name: 'Marketing Automation', href: '/services/marketing-automation' },
    ],
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]
