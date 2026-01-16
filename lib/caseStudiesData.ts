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
    slug: 'ecommerce-fashion-brand',
    title: 'E-Commerce Fashion Brand Success',
    client: 'Dubai Fashion Retailer',
    industry: 'Retail & E-commerce',
    location: 'Dubai, UAE',
    projectDate: 'January 2023 - December 2023',
    challenge: 'Low organic traffic, poor search rankings, and stagnant online sales despite having quality products and competitive pricing',
    solution: 'Comprehensive digital marketing strategy combining SEO, PPC, and social media to drive traffic and conversions',
    results: [
      '300% increase in online sales revenue',
      '450% growth in organic traffic',
      '120% improvement in conversion rate',
      'Ranked #1 for 20+ target keywords',
      '250K+ social media impressions monthly',
    ],
    image: '/case-studies/ecommerce.jpg',
    color: 'from-blue-500 to-cyan-500',
    services: ['SEO', 'PPC', 'Social Media Marketing'],
    testimonial: {
      quote: 'Innovate Digital transformed our online business. We went from struggling to dominating our niche in Dubai. Sales have tripled and we are finally seeing the ROI we always dreamed of.',
      author: 'Sarah Ahmed',
      role: 'E-commerce Director',
    },
    detailedDescription: {
      background: 'A Dubai-based fashion retailer with an extensive product catalog was virtually invisible online. Despite having competitive pricing and quality products, they were losing market share to competitors. Their website had minimal organic traffic (less than 500 visitors monthly), high bounce rates, and poor conversion rates. They needed a complete digital transformation to compete in the UAE fashion e-commerce market.',
      approach: [
        'Conducted comprehensive SEO audit identifying 200+ technical and content issues',
        'Performed extensive keyword research targeting UAE-specific fashion searches with commercial intent',
        'Developed content strategy focusing on Dubai fashion trends and Middle East styling',
        'Created PPC campaigns targeting high-intent shoppers in UAE',
        'Built social media presence on Instagram and Facebook showcasing products',
        'Optimized product pages with rich snippets, reviews, and better descriptions',
      ],
      implementation: [
        'Fixed critical technical SEO issues: reduced page load time from 8s to 2.5s, improved mobile usability, fixed crawlability issues',
        'Created 80+ high-quality blog posts about UAE fashion trends, styling tips, and seasonal collections',
        'Optimized 800+ product pages with unique descriptions, meta tags, and schema markup',
        'Launched Google Shopping campaigns and search ads targeting Dubai fashion shoppers',
        'Built Instagram following through daily posts, reels, and influencer partnerships',
        'Implemented remarketing campaigns capturing 35% of cart abandoners',
      ],
      outcomes: [
        'Organic traffic exploded from 500 to 2,750 monthly visitors (450% growth)',
        'Online revenue increased from AED 150K to AED 600K monthly (300% growth)',
        'Conversion rate improved from 1.2% to 2.64% (120% improvement)',
        'Achieved #1 rankings for "buy dresses online Dubai", "UAE fashion store", and 20+ other keywords',
        'Instagram following grew from 1,200 to 15,000 engaged followers',
        'PPC campaigns generated 3.5x return on ad spend consistently',
      ],
    },
    metrics: [
      {
        label: 'Online Revenue',
        value: '+300%',
        description: 'From AED 150K to 600K monthly',
      },
      {
        label: 'Organic Traffic',
        value: '+450%',
        description: 'From 500 to 2,750 visitors monthly',
      },
      {
        label: 'Conversion Rate',
        value: '+120%',
        description: 'Improved from 1.2% to 2.64%',
      },
      {
        label: 'ROAS',
        value: '3.5x',
        description: 'Profitable PPC campaigns',
      },
    ],
  },
  {
    slug: 'tech-startup-launch',
    title: 'Tech Startup Launch & Brand Building',
    client: 'UAE SaaS Startup',
    industry: 'Technology & SaaS',
    location: 'Dubai, UAE',
    projectDate: 'March 2023 - September 2023',
    challenge: 'Zero brand presence, no website, and need to establish credibility in competitive UAE tech market',
    solution: 'Complete brand identity development, modern web development, and strategic social media launch',
    results: [
      '5M+ total impressions across digital channels',
      '3,500+ qualified leads generated',
      '280% month-over-month engagement growth',
      'Built audience of 25,000+ across platforms',
      'Achieved 95/100 Google PageSpeed score',
    ],
    image: '/case-studies/tech-startup.jpg',
    color: 'from-purple-500 to-pink-500',
    services: ['Branding', 'Web Development', 'Social Media'],
    testimonial: {
      quote: 'We came to Innovate Digital with nothing but an idea. They built our entire digital presence from scratch and helped us launch successfully. We could not have done it without them.',
      author: 'Omar Hassan',
      role: 'Co-Founder & CEO',
    },
    detailedDescription: {
      background: 'A tech startup was preparing to launch their SaaS product in the UAE market but had zero digital presence. They needed everything: brand identity, website, social media, and a go-to-market strategy. The UAE tech market is competitive, and they needed to establish credibility quickly to attract early adopters and investors.',
      approach: [
        'Developed complete brand identity including logo, colors, typography, and brand guidelines',
        'Designed and built modern, high-performance website showcasing product features and benefits',
        'Created compelling brand story and messaging targeting UAE businesses',
        'Established presence on LinkedIn, Twitter, and Instagram',
        'Developed content strategy for thought leadership and product education',
        'Implemented lead generation funnels and email marketing automation',
      ],
      implementation: [
        'Created modern brand identity with blue/tech aesthetic appealing to UAE corporate market',
        'Built Next.js website with blazing-fast performance and engaging product demos',
        'Launched with press release and influencer partnerships reaching 500K+ tech professionals',
        'Posted daily on LinkedIn with insights about UAE tech trends and SaaS best practices',
        'Created explainer videos and product tutorials gaining 100K+ views',
        'Set up automated lead nurturing sequences converting 18% of sign-ups to paying customers',
      ],
      outcomes: [
        'Generated 5 million impressions within first 6 months of launch',
        'Collected 3,500+ qualified leads interested in the product',
        'Built LinkedIn following of 12,000+ UAE professionals',
        'Month-over-month engagement grew by 280% consistently',
        'Website achieved 95/100 PageSpeed score with 2.1s load time',
        'Secured 250+ paid customers within first 6 months',
      ],
    },
    metrics: [
      {
        label: 'Total Impressions',
        value: '5M+',
        description: 'Across all digital channels',
      },
      {
        label: 'Qualified Leads',
        value: '3,500+',
        description: 'High-intent prospects collected',
      },
      {
        label: 'Engagement Growth',
        value: '+280%',
        description: 'Month-over-month consistent growth',
      },
      {
        label: 'PageSpeed Score',
        value: '95/100',
        description: 'Lightning-fast website',
      },
    ],
  },
  {
    slug: 'restaurant-chain-expansion',
    title: 'Restaurant Chain Local SEO Domination',
    client: 'UAE Restaurant Chain',
    industry: 'Food & Beverage',
    location: 'Multiple UAE Locations',
    projectDate: 'May 2023 - November 2023',
    challenge: 'Poor local search visibility across multiple locations, losing customers to competitors appearing in "near me" searches',
    solution: 'Comprehensive local SEO strategy with Google Business Profile optimization, location-specific content, and paid search campaigns',
    results: [
      '50+ #1 local rankings across UAE',
      '400% increase in website traffic',
      '250% increase in store visits',
      '4.8 star average rating across all locations',
      '1,200+ new positive reviews',
    ],
    image: '/case-studies/restaurant.jpg',
    color: 'from-orange-500 to-red-500',
    services: ['Local SEO', 'Google Ads', 'Content Marketing'],
    testimonial: {
      quote: 'We dominated local search after working with Innovate Digital. Now when people search for restaurants in Dubai, Abu Dhabi, or Sharjah, we appear first. Foot traffic has increased dramatically.',
      author: 'Khalid Al Mansouri',
      role: 'Operations Manager',
    },
    detailedDescription: {
      background: 'A restaurant chain with 8 locations across UAE was struggling with local visibility. Despite having quality food and good locations, they were invisible in local searches. Competitors appeared first for "restaurants near me" and location-specific searches. They needed to dominate local search results to drive more foot traffic to all their locations.',
      approach: [
        'Audited and optimized Google Business Profile for all 8 locations',
        'Created location-specific landing pages for each restaurant',
        'Implemented local citation building across UAE directories',
        'Developed review generation strategy to build social proof',
        'Created location-targeted Google Ads campaigns',
        'Built content strategy around local food trends and UAE dining culture',
      ],
      implementation: [
        'Completely optimized all 8 Google Business Profiles with photos, menus, hours, and regular posts',
        'Built dedicated landing pages for each location optimized for "restaurant in [area]" searches',
        'Listed business in 50+ UAE local directories and review sites',
        'Implemented automated review request system generating 150+ reviews monthly',
        'Launched geo-targeted Google Ads for "restaurant near me" and cuisine-specific searches',
        'Created blog content about UAE food culture, special events, and seasonal menus',
      ],
      outcomes: [
        'Achieved #1 local ranking for 50+ location-specific searches across Dubai, Abu Dhabi, and Sharjah',
        'Website traffic increased from 2,000 to 10,000 monthly visitors (400% growth)',
        'Foot traffic increased by 250% tracked through Google Business Insights',
        'Collected 1,200+ new 5-star reviews bringing average rating to 4.8 stars',
        'Local search impressions grew from 15K to 180K monthly',
        'Google Ads generated 3.2x ROAS with consistent customer acquisition',
      ],
    },
    metrics: [
      {
        label: 'Local Rankings',
        value: '50+',
        description: '#1 positions across UAE',
      },
      {
        label: 'Website Traffic',
        value: '+400%',
        description: 'From 2K to 10K monthly',
      },
      {
        label: 'Store Visits',
        value: '+250%',
        description: 'Significant foot traffic increase',
      },
      {
        label: 'Avg Rating',
        value: '4.8★',
        description: '1,200+ new positive reviews',
      },
    ],
  },
  {
    slug: 'real-estate-portal',
    title: 'Real Estate Portal Transformation',
    client: 'Dubai Real Estate Agency',
    industry: 'Real Estate',
    location: 'Dubai, UAE',
    projectDate: 'February 2023 - August 2023',
    challenge: 'Outdated website with poor UX, ranking on page 5+ for important keywords, and losing leads to competitors',
    solution: 'Complete website redesign with modern UX, comprehensive SEO strategy, and content marketing focused on Dubai property market',
    results: [
      'Top 3 rankings for competitive keywords',
      '350% increase in organic traffic',
      '200% increase in property inquiries',
      'Website conversion rate improved from 0.8% to 2.5%',
      'Generated AED 12M+ in property sales',
    ],
    image: '/case-studies/real-estate.jpg',
    color: 'from-green-500 to-emerald-500',
    services: ['SEO', 'Content Marketing', 'Web Development'],
    testimonial: {
      quote: 'The new website and SEO strategy completely transformed our business. We went from invisible to competing with the biggest real estate portals in Dubai. Inquiries tripled and sales followed.',
      author: 'Ahmed Al Blooshi',
      role: 'Managing Director',
    },
    detailedDescription: {
      background: 'A Dubai real estate agency had a dated website that was hurting their business. The site was slow, not mobile-optimized, and buried on page 5+ of Google results for key terms like "Dubai properties" and "apartments for sale Dubai". They were losing high-value leads to competitors with better online presence.',
      approach: [
        'Conducted technical SEO audit and competitive analysis of top real estate portals',
        'Designed modern, user-friendly website optimized for property search and lead capture',
        'Performed extensive keyword research for Dubai real estate terms',
        'Created comprehensive content strategy around Dubai property market insights',
        'Optimized all property listings with SEO-friendly descriptions and structured data',
        'Implemented advanced lead capture and CRM integration',
      ],
      implementation: [
        'Rebuilt website with Next.js for speed and SEO, reducing load time from 9s to 2.3s',
        'Created intuitive property search with filters for location, price, property type',
        'Optimized 500+ property listings with unique descriptions and schema markup',
        'Published 60+ in-depth articles about Dubai property market, buying guides, and area reviews',
        'Built neighborhood pages for all major Dubai areas (Dubai Marina, Downtown, JBR, etc.)',
        'Implemented WhatsApp chat integration and lead forms capturing 2.5% of visitors',
      ],
      outcomes: [
        'Achieved Top 3 rankings for "Dubai properties", "apartments for sale Dubai", and 50+ other high-value keywords',
        'Organic traffic surged from 3,000 to 13,500 monthly visitors (350% growth)',
        'Property inquiries increased from 180 to 540 monthly (200% growth)',
        'Website conversion rate jumped from 0.8% to 2.5% due to better UX',
        'Generated AED 12M+ in property sales directly attributed to organic search',
        'Reduced bounce rate from 72% to 38% through improved user experience',
      ],
    },
    metrics: [
      {
        label: 'Rankings',
        value: 'Top 3',
        description: 'For competitive Dubai property keywords',
      },
      {
        label: 'Organic Traffic',
        value: '+350%',
        description: 'From 3K to 13.5K monthly',
      },
      {
        label: 'Inquiries',
        value: '+200%',
        description: 'From 180 to 540 monthly',
      },
      {
        label: 'Property Sales',
        value: 'AED 12M+',
        description: 'Attributed to SEO',
      },
    ],
  },
  {
    slug: 'healthcare-clinic-growth',
    title: 'Healthcare Clinic Digital Growth',
    client: 'Dubai Healthcare Clinic',
    industry: 'Healthcare & Medical',
    location: 'Dubai, UAE',
    projectDate: 'April 2023 - October 2023',
    challenge: 'Low patient inquiries, minimal online presence, and fierce competition from established clinics',
    solution: 'Local SEO strategy, social media presence building, and reputation management to establish trust and credibility',
    results: [
      '180% increase in patient inquiries',
      '150% increase in appointment bookings',
      '4.9/5 star rating with 300+ reviews',
      'Top 3 local ranking for medical services',
      '85% increase in website traffic',
    ],
    image: '/case-studies/healthcare.jpg',
    color: 'from-teal-500 to-blue-500',
    services: ['Local SEO', 'Social Media', 'Branding'],
    testimonial: {
      quote: 'Innovate Digital helped us build trust and credibility online. Patient inquiries have nearly tripled, and our appointment book is consistently full. The ROI has been exceptional.',
      author: 'Dr. Mariam Al Zaabi',
      role: 'Medical Director',
    },
    detailedDescription: {
      background: 'A private healthcare clinic in Dubai was struggling to attract patients despite offering quality care. They had minimal online presence, poor local search visibility, and were losing patients to larger, more established clinics. In the healthcare sector, trust and credibility are paramount, and they needed a strong digital strategy to compete.',
      approach: [
        'Optimized Google Business Profile with photos, services, and doctor credentials',
        'Implemented reputation management strategy to build 5-star reviews',
        'Created educational social media content about health topics relevant to UAE residents',
        'Built location-specific SEO targeting Dubai neighborhoods',
        'Developed content strategy around common health concerns in UAE',
        'Enhanced website with service pages and doctor profiles building authority',
      ],
      implementation: [
        'Fully optimized Google Business Profile with professional photos, service list, and regular health tips',
        'Created automated review request system for satisfied patients',
        'Launched Instagram and Facebook with daily health tips, success stories, and clinic updates',
        'Built neighborhood-specific landing pages targeting "clinic near [Dubai area]" searches',
        'Published 40+ articles about health conditions, treatments, and preventive care',
        'Added doctor profiles with credentials, specializations, and patient testimonials',
      ],
      outcomes: [
        'Patient inquiries increased from 85 to 238 monthly (180% growth)',
        'Appointment bookings grew by 150% filling up the clinic schedule',
        'Achieved 4.9/5 star rating with over 300 positive Google reviews',
        'Ranked Top 3 for "clinic in Dubai", "healthcare Dubai", and specialty-specific searches',
        'Website traffic increased by 85% with visitors spending 4+ minutes on site',
        'Social media following grew to 8,500+ engaged followers',
      ],
    },
    metrics: [
      {
        label: 'Patient Inquiries',
        value: '+180%',
        description: 'From 85 to 238 monthly',
      },
      {
        label: 'Bookings',
        value: '+150%',
        description: 'Consistently full schedule',
      },
      {
        label: 'Rating',
        value: '4.9/5★',
        description: '300+ positive reviews',
      },
      {
        label: 'Local Ranking',
        value: 'Top 3',
        description: 'For medical services Dubai',
      },
    ],
  },
  {
    slug: 'fitness-studio-transformation',
    title: 'Fitness Studio Social Media Success',
    client: 'Dubai Fitness Studio',
    industry: 'Fitness & Wellness',
    location: 'Dubai, UAE',
    projectDate: 'June 2023 - December 2023',
    challenge: 'Stagnant membership growth, minimal social media engagement, and strong competition from established fitness centers',
    solution: 'Comprehensive social media strategy with influencer partnerships, engaging content, and targeted PPC campaigns',
    results: [
      '300% increase in membership signups',
      '400% boost in social media engagement',
      '2M+ social media reach monthly',
      'Built community of 35,000+ followers',
      '4.2x return on advertising spend',
    ],
    image: '/case-studies/fitness.jpg',
    color: 'from-pink-500 to-purple-500',
    services: ['Social Media', 'Influencer Marketing', 'PPC'],
    testimonial: {
      quote: 'Our studio went from empty to fully booked. The social media strategy and influencer partnerships created massive buzz. We had to add more classes to keep up with demand!',
      author: 'Sarah Johnson',
      role: 'Studio Owner',
    },
    detailedDescription: {
      background: 'A boutique fitness studio in Dubai was struggling with stagnant membership numbers despite offering unique classes and excellent trainers. Their social media presence was minimal, and they were not leveraging the UAE\'s highly active fitness community. They needed to build buzz and attract Dubai\'s health-conscious residents.',
      approach: [
        'Developed social media strategy focusing on Instagram and TikTok where fitness content thrives',
        'Created content calendar featuring workout tips, transformation stories, and class highlights',
        'Identified and partnered with 20+ UAE fitness influencers for authentic promotions',
        'Implemented user-generated content strategy encouraging members to share journey',
        'Launched targeted Facebook and Instagram ads to Dubai residents interested in fitness',
        'Created exclusive promotions and challenges to drive engagement and signups',
      ],
      implementation: [
        'Posted daily high-energy content: workout videos, fitness tips, member spotlights',
        'Created viral TikTok challenges and Instagram Reels showcasing unique classes',
        'Partnered with fitness influencers for studio visits resulting in authentic content reaching 500K+ followers',
        'Launched "30-Day Transformation Challenge" generating massive UGC and engagement',
        'Ran geo-targeted ads to Dubai residents within 5km of studio',
        'Created referral program incentivizing members to share on social media',
      ],
      outcomes: [
        'Membership signups increased from 40 to 160 monthly (300% growth)',
        'Social media engagement rate jumped from 1.2% to 6.8% (400% boost)',
        'Achieved 2 million+ monthly reach across Instagram, TikTok, and Facebook',
        'Built combined following of 35,000+ highly engaged fitness enthusiasts',
        'Influencer campaigns reached 1.5M+ potential customers',
        'PPC campaigns generated 4.2x ROAS with consistent new member acquisition',
      ],
    },
    metrics: [
      {
        label: 'Membership Growth',
        value: '+300%',
        description: 'From 40 to 160 signups monthly',
      },
      {
        label: 'Engagement Rate',
        value: '+400%',
        description: 'From 1.2% to 6.8%',
      },
      {
        label: 'Monthly Reach',
        value: '2M+',
        description: 'Across social platforms',
      },
      {
        label: 'ROAS',
        value: '4.2x',
        description: 'Profitable ad campaigns',
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
