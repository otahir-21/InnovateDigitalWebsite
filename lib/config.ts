export const siteConfig = {
  name: 'Innovate Digital | Digital Marketing Agency UAE',
  description: 'Leading digital marketing agency in UAE. Expert SEO, social media marketing, web development, and PPC services. Transform your business with data-driven strategies.',
  url: 'https://innovatedigital.ae', // Update with your actual domain
  ogImage: 'https://innovatedigital.ae/og-image.jpg',
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
      { name: 'Content Marketing', href: '/services/content-marketing' },
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Branding', href: '/services/branding' },
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
