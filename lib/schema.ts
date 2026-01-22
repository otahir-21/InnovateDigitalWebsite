import { siteConfig } from './config'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Innovate Digital',
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phone,
    contactType: 'customer service',
    areaServed: 'AE',
    availableLanguage: ['en', 'ar'],
  },
  sameAs: [
    siteConfig.links.linkedin,
    siteConfig.links.twitter,
    siteConfig.links.facebook,
    siteConfig.links.instagram,
  ],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteConfig.url,
  name: 'Innovate Digital',
  image: `${siteConfig.url}/logo.png`,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2048,
    longitude: 55.2708,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$',
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Innovate Digital',
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    '@type': 'Organization',
    name: 'Innovate Digital',
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo.png`,
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// Service Schema Generator
export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  serviceType: string
  areaServed?: string
  priceRange?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': service.url,
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Innovate Digital',
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'Country',
      name: service.areaServed || 'United Arab Emirates',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
          },
        },
      ],
    },
    serviceType: service.serviceType,
    priceRange: service.priceRange || '$$',
  }
}

// Blog Posting Schema Generator
export function generateBlogPostingSchema(post: {
  title: string
  description: string
  author: string
  authorRole?: string
  date: string
  url: string
  image?: string
  keywords?: string[]
  category?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': post.url,
    headline: post.title,
    description: post.description,
    image: post.image || `${siteConfig.url}/og-image.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole || 'Digital Marketing Expert',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Innovate Digital',
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
    keywords: post.keywords?.join(', ') || post.category,
    articleSection: post.category,
    inLanguage: 'en-AE',
  }
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

// FAQ Schema Generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Review/Aggregate Rating Schema Generator
export function generateAggregateRatingSchema(rating: {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Innovate Digital',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.ratingValue,
      reviewCount: rating.reviewCount,
      bestRating: rating.bestRating || 5,
      worstRating: rating.worstRating || 1,
    },
  }
}

// Helper function to combine multiple schemas
export function combineSchemas(...schemas: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  }
}
