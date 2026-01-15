export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  location: string
  projectDate: string
  challenge: string
  solution: string
  results: string[]
  image: string
  color: string
  services: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  detailedDescription: {
    background: string
    approach: string[]
    implementation: string[]
    outcomes: string[]
  }
  metrics: {
    label: string
    value: string
    description: string
  }[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ecommerce-seo-success',
    title: 'E-commerce SEO Success',
    client: 'Dubai Fashion Retailer',
    industry: 'Retail & E-commerce',
    location: 'Dubai, UAE',
    projectDate: 'January 2023 - December 2023',
    challenge: 'Low organic traffic and poor search rankings despite having quality products',
    solution: 'Comprehensive SEO strategy with technical optimization, content marketing, and link building',
    results: [
      '250% increase in organic traffic',
      '180% boost in online sales',
      'Ranked #1 for 15+ target keywords',
      '40% reduction in bounce rate',
    ],
    image: '/case-studies/ecommerce.jpg',
    color: 'from-blue-500 to-cyan-500',
    services: ['SEO Optimization', 'Content Marketing', 'Technical SEO', 'Link Building'],
    testimonial: {
      quote: 'The SEO transformation was incredible. We went from page 5 to page 1 for our most important keywords, and our sales reflected that immediately.',
      author: 'Mohammed Al Farsi',
      role: 'E-commerce Director',
    },
    detailedDescription: {
      background: 'A Dubai-based fashion retailer was struggling to compete online despite having an extensive product catalog and competitive pricing. Their website was virtually invisible in search results, and organic traffic was minimal. They needed a complete SEO overhaul to tap into the lucrative UAE e-commerce market.',
      approach: [
        'Conducted comprehensive technical SEO audit identifying 150+ issues',
        'Performed extensive keyword research targeting UAE-specific fashion searches',
        'Developed content strategy focusing on fashion trends in the Middle East',
        'Created backlink acquisition plan targeting regional fashion blogs and influencers',
        'Optimized product pages with rich snippets and structured data',
        'Implemented mobile-first responsive design improvements',
      ],
      implementation: [
        'Fixed critical technical issues: site speed (reduced load time by 60%), mobile usability, crawlability',
        'Created 50+ high-quality blog posts about UAE fashion trends and styling tips',
        'Optimized 500+ product pages with unique descriptions and meta tags',
        'Built relationships with 30+ UAE fashion bloggers for quality backlinks',
        'Implemented schema markup for products, reviews, and breadcrumbs',
        'Set up advanced tracking and conversion optimization',
      ],
      outcomes: [
        'Achieved #1 rankings for highly competitive keywords like "buy dresses online Dubai" and "UAE fashion store"',
        'Organic traffic grew from 2,000 to 7,000+ monthly visitors',
        'Online revenue increased by 180%, generating over AED 2M in additional sales',
        'Bounce rate decreased from 65% to 39%, indicating better user engagement',
        'Featured snippets obtained for 8 high-value search queries',
        'Domain authority increased from 18 to 42 within 12 months',
      ],
    },
    metrics: [
      {
        label: 'Organic Traffic',
        value: '+250%',
        description: 'Monthly organic visitors increased from 2K to 7K',
      },
      {
        label: 'Online Sales',
        value: '+180%',
        description: 'Revenue growth of AED 2M+ in 12 months',
      },
      {
        label: 'Keyword Rankings',
        value: '15+',
        description: 'First page rankings for target keywords',
      },
      {
        label: 'Bounce Rate',
        value: '-40%',
        description: 'Improved from 65% to 39%',
      },
    ],
  },
  {
    slug: 'social-media-transformation',
    title: 'Social Media Transformation',
    client: 'UAE Hospitality Brand',
    industry: 'Hospitality & Tourism',
    location: 'Abu Dhabi, UAE',
    projectDate: 'March 2023 - September 2023',
    challenge: 'Limited social media presence and engagement with stagnant follower growth',
    solution: 'Strategic social media management across Instagram, Facebook, and TikTok with influencer partnerships',
    results: [
      '500% increase in followers',
      '300% boost in engagement',
      '150% increase in bookings',
      'Generated 2M+ impressions monthly',
    ],
    image: '/case-studies/social-media.jpg',
    color: 'from-purple-500 to-pink-500',
    services: ['Social Media Management', 'Influencer Marketing', 'Content Creation', 'Community Management'],
    testimonial: {
      quote: 'Our social media was practically dead before working with Innovate Digital. Now we have a thriving community and bookings are pouring in from Instagram alone.',
      author: 'Fatima Al Zaabi',
      role: 'Marketing Manager',
    },
    detailedDescription: {
      background: 'A boutique hotel chain in Abu Dhabi had minimal social media presence despite offering luxury experiences. Their Instagram had 800 followers with minimal engagement, and they were missing out on the UAE\'s highly active social media audience. The hospitality sector in UAE is heavily influenced by social media, and they needed to establish a strong digital presence.',
      approach: [
        'Developed comprehensive social media strategy aligned with brand positioning',
        'Created content calendar featuring UAE culture, luxury experiences, and guest stories',
        'Identified and partnered with 15+ UAE-based travel influencers',
        'Implemented user-generated content campaign encouraging guests to share experiences',
        'Launched targeted ad campaigns to UAE residents and tourists',
        'Established community management protocols for rapid engagement',
      ],
      implementation: [
        'Posted daily high-quality visual content showcasing property amenities and experiences',
        'Created Instagram Reels and TikTok videos featuring UAE cultural experiences',
        'Collaborated with influencers for hotel stays resulting in authentic content',
        'Ran "Share Your Stay" campaign offering prizes for best guest photos',
        'Engaged with audience through stories, polls, and Q&A sessions',
        'Launched geo-targeted Facebook ads reaching UAE residents and visitors',
      ],
      outcomes: [
        'Instagram followers grew from 800 to 4,800 in just 6 months',
        'Average engagement rate increased from 0.8% to 6.2%',
        'Generated over 2 million impressions monthly across all platforms',
        'User-generated content campaign produced 500+ guest posts',
        'Direct bookings from social media increased by 150%',
        'Influencer collaborations reached combined audience of 1.5M+',
      ],
    },
    metrics: [
      {
        label: 'Follower Growth',
        value: '+500%',
        description: 'From 800 to 4,800 engaged followers',
      },
      {
        label: 'Engagement Rate',
        value: '6.2%',
        description: 'Industry-leading engagement metrics',
      },
      {
        label: 'Monthly Impressions',
        value: '2M+',
        description: 'Massive brand visibility increase',
      },
      {
        label: 'Direct Bookings',
        value: '+150%',
        description: 'Social media driving real revenue',
      },
    ],
  },
  {
    slug: 'web-development-redesign',
    title: 'Complete Web Development & Redesign',
    client: 'Tech Startup UAE',
    industry: 'Technology & SaaS',
    location: 'Dubai, UAE',
    projectDate: 'June 2023 - October 2023',
    challenge: 'Outdated website with poor performance and high bounce rates',
    solution: 'Modern, responsive web development with Next.js, optimized UX/UI, and conversion-focused design',
    results: [
      '70% faster page load times',
      '45% reduction in bounce rate',
      '200% increase in conversions',
      '85+ Google PageSpeed score',
    ],
    image: '/case-studies/web-development.jpg',
    color: 'from-green-500 to-emerald-500',
    services: ['Web Development', 'UI/UX Design', 'Performance Optimization', 'Conversion Rate Optimization'],
    testimonial: {
      quote: 'The new website is a game-changer. It\'s fast, beautiful, and actually converts visitors into customers. Our bounce rate dropped dramatically.',
      author: 'Aisha Rahman',
      role: 'Product Manager',
    },
    detailedDescription: {
      background: 'A promising tech startup had a website that was hurting their business more than helping. The old WordPress site was slow (7+ second load times), not mobile-optimized, and had a confusing user journey. They were losing potential customers due to poor first impressions and technical issues.',
      approach: [
        'Conducted user research and usability testing to identify pain points',
        'Designed modern UI/UX following best practices for SaaS websites',
        'Selected Next.js for superior performance and SEO capabilities',
        'Implemented conversion-focused design with clear CTAs',
        'Optimized for Core Web Vitals and mobile-first experience',
        'Integrated analytics and tracking for data-driven improvements',
      ],
      implementation: [
        'Rebuilt entire website using Next.js with TypeScript for reliability',
        'Designed clean, modern interface emphasizing product benefits',
        'Implemented lazy loading and image optimization (WebP format)',
        'Created intuitive navigation and user flows based on research',
        'Added interactive demos and product showcase sections',
        'Optimized checkout process reducing steps from 5 to 2',
      ],
      outcomes: [
        'Page load times reduced from 7.2s to 2.1s (70% improvement)',
        'Bounce rate dropped from 68% to 37% (45% reduction)',
        'Conversion rate increased from 1.2% to 3.6% (200% increase)',
        'Mobile traffic increased by 85% due to better mobile experience',
        'Google PageSpeed score improved from 45 to 87',
        'Monthly sign-ups tripled from 120 to 360',
      ],
    },
    metrics: [
      {
        label: 'Load Time',
        value: '2.1s',
        description: '70% faster than previous website',
      },
      {
        label: 'Conversions',
        value: '+200%',
        description: 'Tripled conversion rate',
      },
      {
        label: 'PageSpeed Score',
        value: '87/100',
        description: 'Excellent performance rating',
      },
      {
        label: 'Bounce Rate',
        value: '-45%',
        description: 'Users staying and engaging',
      },
    ],
  },
  {
    slug: 'ppc-campaign-optimization',
    title: 'PPC Campaign Optimization',
    client: 'Real Estate Agency Dubai',
    industry: 'Real Estate',
    location: 'Dubai, UAE',
    projectDate: 'April 2023 - August 2023',
    challenge: 'High ad spend with low ROI and poor lead quality from Google Ads campaigns',
    solution: 'Complete PPC overhaul with refined targeting, ad copy optimization, and landing page improvements',
    results: [
      '165% increase in qualified leads',
      '48% reduction in cost per lead',
      '3.2x return on ad spend',
      '85% improvement in lead quality',
    ],
    image: '/case-studies/ppc.jpg',
    color: 'from-orange-500 to-red-500',
    services: ['Google Ads', 'PPC Management', 'Landing Page Optimization', 'Conversion Tracking'],
    testimonial: {
      quote: 'We were wasting money on clicks that never converted. Now every dirham spent brings in quality leads that actually want to buy properties.',
      author: 'Omar Khalil',
      role: 'Sales Director',
    },
    detailedDescription: {
      background: 'A Dubai real estate agency was spending AED 50,000+ monthly on Google Ads but getting minimal returns. Their campaigns were poorly targeted, attracting unqualified leads, and the cost per acquisition was unsustainable. They needed expert PPC management to make their advertising profitable.',
      approach: [
        'Audited existing campaigns identifying major inefficiencies',
        'Researched UAE real estate keywords with commercial intent',
        'Segmented campaigns by property type and buyer persona',
        'Created compelling ad copy highlighting unique selling points',
        'Designed high-converting landing pages for each property category',
        'Implemented advanced conversion tracking and attribution',
      ],
      implementation: [
        'Restructured campaigns into tightly themed ad groups',
        'Added negative keywords eliminating 40% of wasteful spend',
        'Created location-specific ads for Dubai neighborhoods',
        'A/B tested 25+ ad variations to find winning messages',
        'Built dedicated landing pages matching ad intent',
        'Implemented remarketing campaigns for engaged visitors',
      ],
      outcomes: [
        'Qualified leads increased from 85 to 225 per month (165% growth)',
        'Cost per lead decreased from AED 588 to AED 306 (48% reduction)',
        'Return on ad spend improved from 0.8x to 3.2x',
        'Lead quality score increased from 42% to 85%',
        'Reduced wasted spend by eliminating 10,000+ irrelevant clicks',
        'Generated AED 4.2M in property sales directly attributed to campaigns',
      ],
    },
    metrics: [
      {
        label: 'Qualified Leads',
        value: '+165%',
        description: 'From 85 to 225 leads monthly',
      },
      {
        label: 'Cost Per Lead',
        value: '-48%',
        description: 'Reduced from AED 588 to AED 306',
      },
      {
        label: 'ROAS',
        value: '3.2x',
        description: 'Every dirham generates 3.20 back',
      },
      {
        label: 'Lead Quality',
        value: '85%',
        description: 'Highly qualified prospects',
      },
    ],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug)
}
