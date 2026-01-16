import { Metadata } from 'next'
import Link from 'next/link'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'

export const metadata: Metadata = {
  title: 'SEO Company Dubai | #1 SEO Services UAE | Innovate Digital',
  description: 'Leading SEO company in Dubai & UAE. Rank #1 on Google with proven SEO strategies. Expert keyword research, on-page optimization, and link building services.',
  keywords: ['SEO Company Dubai', 'SEO Services UAE', 'Best SEO Agency Dubai', 'SEO Expert Dubai', 'Search Engine Optimization Dubai', 'Google Ranking Dubai'],
  openGraph: {
    title: 'SEO Company Dubai | #1 SEO Services UAE | Innovate Digital',
    description: 'Top-rated SEO company in Dubai. Dominate Google search rankings with expert SEO strategies.',
  },
}

const seoServices = [
  {
    title: 'Keyword Research & Strategy',
    description: 'In-depth keyword research focused on UAE market and Arabic search terms.',
    features: [
      'Competitor analysis',
      'Search intent mapping',
      'Long-tail keyword identification',
      'Arabic keyword optimization',
    ],
  },
  {
    title: 'On-Page SEO',
    description: 'Comprehensive optimization of your website content and structure.',
    features: [
      'Title tags & meta descriptions',
      'Header tag optimization',
      'Content optimization',
      'Internal linking strategy',
    ],
  },
  {
    title: 'Technical SEO',
    description: 'Fix technical issues that prevent search engines from crawling your site.',
    features: [
      'Site speed optimization',
      'Mobile optimization',
      'Schema markup',
      'XML sitemap optimization',
    ],
  },
  {
    title: 'Local SEO',
    description: 'Dominate local search results across UAE cities.',
    features: [
      'Google Business Profile optimization',
      'Local citations building',
      'Review management',
      'Local keyword targeting',
    ],
  },
  {
    title: 'Link Building',
    description: 'Build high-quality backlinks from authoritative UAE websites.',
    features: [
      'White-hat link building',
      'Content outreach',
      'Guest posting',
      'Broken link building',
    ],
  },
  {
    title: 'Content Strategy',
    description: 'Create SEO-optimized content that ranks and converts.',
    features: [
      'Content gap analysis',
      'Editorial calendar',
      'Blog post optimization',
      'Content updates',
    ],
  },
]

const process = [
  {
    step: '01',
    title: 'SEO Audit',
    description: 'Comprehensive analysis of your current SEO performance and opportunities.',
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Custom SEO strategy tailored to your business goals and UAE market.',
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Execute on-page, technical, and off-page SEO optimizations.',
  },
  {
    step: '04',
    title: 'Monitoring & Reporting',
    description: 'Track rankings, traffic, and conversions with detailed monthly reports.',
  },
]

const faqs = [
  {
    question: 'How much do SEO services cost in UAE?',
    answer: 'SEO services in UAE typically range from AED 5,000 to AED 20,000 per month, depending on your industry competition, website size, and goals. We offer customized packages tailored to your budget and objectives. Contact us for a free consultation and personalized quote.',
  },
  {
    question: 'How long does SEO take to show results?',
    answer: 'SEO typically takes 3-6 months to show significant results. However, some improvements like technical fixes and on-page optimization can show quicker wins. Long-term SEO (6-12 months) delivers the best ROI with sustained rankings and traffic growth. We provide monthly reports to track progress.',
  },
  {
    question: 'Do you offer local SEO for Dubai businesses?',
    answer: 'Yes! We specialize in local SEO for businesses across Dubai, Abu Dhabi, and all UAE emirates. This includes Google Business Profile optimization, local citations, location-based keyword targeting, and Arabic SEO to help you dominate local search results.',
  },
  {
    question: 'What\'s included in your SEO services?',
    answer: 'Our comprehensive SEO services include keyword research, on-page optimization, technical SEO audits, content creation, link building, local SEO, competitor analysis, and monthly performance reports. We customize our approach based on your specific business needs and goals.',
  },
  {
    question: 'Do you provide Arabic SEO services?',
    answer: 'Absolutely! We provide full Arabic SEO services including Arabic keyword research, Arabic content optimization, and bilingual SEO strategies. This is essential for reaching the local UAE market and improving visibility for Arabic-speaking audiences.',
  },
  {
    question: 'How do you measure SEO success?',
    answer: 'We track multiple KPIs including organic traffic growth, keyword rankings, conversion rates, bounce rate improvements, page load speed, and ROI. You\'ll receive detailed monthly reports with clear metrics and insights. Our goal is measurable business growth, not just rankings.',
  },
  {
    question: 'Can you guarantee #1 rankings on Google?',
    answer: 'No ethical SEO agency can guarantee #1 rankings as Google\'s algorithm is constantly changing. However, we use proven white-hat SEO strategies that have consistently delivered top 3 rankings for our clients. We focus on sustainable, long-term results rather than quick but risky tactics.',
  },
  {
    question: 'Do I need ongoing SEO or just one-time optimization?',
    answer: 'SEO is an ongoing process, not a one-time fix. Search engines constantly update algorithms, competitors improve their sites, and your business evolves. Ongoing SEO ensures you maintain and improve rankings, adapt to changes, and stay ahead of competition. We recommend minimum 6-month commitments for best results.',
  },
]

export default function SEOServicesPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">SEO Services</span> in UAE
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Dominate search rankings and drive qualified organic traffic with our proven SEO strategies tailored for the UAE market.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Get Free SEO Audit
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why SEO Matters */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why SEO Matters for UAE Businesses
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In the competitive UAE market, being on the first page of Google is crucial. 75% of users never scroll past the first page of search results.
              </p>
              <ul className="space-y-4">
                {[
                  'Increase organic traffic by 200-400%',
                  'Higher quality leads with better conversion rates',
                  'Long-term sustainable growth',
                  'Better ROI compared to paid advertising',
                  'Build brand authority and trust',
                  'Stay ahead of competitors',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start space-x-3">
                    <FiCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl flex items-center justify-center p-8">
              {/* SEO Illustration */}
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Search magnifier */}
                <circle cx="150" cy="150" r="80" stroke="white" strokeWidth="12" fill="none" opacity="0.9"/>
                <line x1="210" y1="210" x2="270" y2="270" stroke="white" strokeWidth="12" strokeLinecap="round" opacity="0.9"/>
                {/* Graph bars rising */}
                <rect x="80" y="280" width="40" height="60" fill="white" opacity="0.8" rx="4"/>
                <rect x="130" y="240" width="40" height="100" fill="white" opacity="0.9" rx="4"/>
                <rect x="180" y="200" width="40" height="140" fill="white" opacity="1" rx="4"/>
                <rect x="230" y="160" width="40" height="180" fill="white" opacity="0.9" rx="4"/>
                <rect x="280" y="120" width="40" height="220" fill="white" opacity="0.8" rx="4"/>
                {/* Trend line */}
                <path d="M 60 300 Q 150 250, 200 200 T 340 100" stroke="#FFD700" strokeWidth="4" fill="none" strokeLinecap="round"/>
                {/* Stars for ranking */}
                <polygon points="200,30 210,60 240,60 215,80 225,110 200,90 175,110 185,80 160,60 190,60" fill="#FFD700"/>
                <circle cx="320" cy="60" r="4" fill="white" opacity="0.6"/>
                <circle cx="340" cy="40" r="3" fill="white" opacity="0.7"/>
                <circle cx="300" cy="50" r="3" fill="white" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive SEO Services
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to dominate search results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service) => (
              <div key={service.title} className="card">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <FiCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our SEO Process</h2>
            <p className="text-xl text-gray-600">Proven methodology for SEO success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-primary-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">SEO Results We Deliver</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">400%</div>
              <div className="text-gray-600">Average Traffic Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-600">Keywords Ranked Top 3</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">6-12</div>
              <div className="text-gray-600">Months to Top Rankings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">300%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="SEO Services FAQ" />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate Google?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free SEO audit and discover your opportunities
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center"
          >
            Get Free SEO Audit
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
