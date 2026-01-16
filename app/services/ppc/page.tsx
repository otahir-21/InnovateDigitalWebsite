import { Metadata } from 'next'
import Link from 'next/link'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'

export const metadata: Metadata = {
  title: 'PPC Agency Dubai | Google Ads Management UAE | Innovate Digital',
  description: 'Leading PPC agency in Dubai. Maximize ROI with expert Google Ads, Facebook Ads & Instagram campaigns. Certified PPC specialists with proven results in UAE market.',
  keywords: ['PPC Agency Dubai', 'Google Ads Dubai', 'PPC Management UAE', 'Google Ads Agency Dubai', 'Paid Advertising Dubai', 'Facebook Ads UAE'],
  openGraph: {
    title: 'PPC Agency Dubai | Google Ads Management UAE',
    description: 'Expert PPC management in Dubai. Drive targeted traffic and maximize ROI with certified Google Ads specialists.',
  },
}

const services = [
  {
    title: 'Google Ads Management',
    description: 'Maximize ROI with expertly managed Google Ads campaigns.',
    features: ['Search ads', 'Display ads', 'Shopping ads', 'YouTube ads'],
  },
  {
    title: 'Social Media Advertising',
    description: 'Targeted ads on Facebook, Instagram, LinkedIn, and TikTok.',
    features: ['Audience targeting', 'Ad creative', 'A/B testing', 'Retargeting'],
  },
  {
    title: 'Campaign Optimization',
    description: 'Continuous optimization for maximum performance.',
    features: ['Bid management', 'Keyword optimization', 'Quality score improvement', 'Conversion tracking'],
  },
  {
    title: 'Landing Page Optimization',
    description: 'Convert clicks into customers with optimized landing pages.',
    features: ['A/B testing', 'Mobile optimization', 'Fast loading', 'Clear CTAs'],
  },
]

const benefits = [
  { icon: FiArrowRight, title: 'Instant Results', description: 'Start getting traffic and leads within hours of campaign launch, unlike SEO which takes months.' },
  { icon: FiCheck, title: 'Precise Targeting', description: 'Reach your exact target audience based on demographics, interests, location, and behaviors.' },
  { icon: FiArrowRight, title: 'Measurable ROI', description: 'Track every click, conversion, and dollar spent with detailed performance analytics.' },
  { icon: FiCheck, title: 'Budget Control', description: 'Set your budget and adjust spend based on performance. Pay only for actual clicks and results.' },
]

const process = [
  { step: '01', title: 'Strategy & Setup', description: 'Research keywords, analyze competitors, and set up campaigns with optimal structure.' },
  { step: '02', title: 'Campaign Launch', description: 'Create compelling ads, set up tracking, and launch campaigns across multiple platforms.' },
  { step: '03', title: 'Optimization', description: 'Continuously test ad copy, adjust bids, refine targeting for maximum performance.' },
  { step: '04', title: 'Scale & Report', description: 'Scale winning campaigns, pause underperformers, and provide detailed ROI reports.' },
]

const faqs = [
  {
    question: 'How much should I spend on PPC advertising in UAE?',
    answer: 'Minimum recommended budget is AED 5,000-10,000/month for Google Ads in UAE. Competitive industries like real estate and finance may need AED 20,000-50,000/month. Social media ads can start from AED 3,000/month. We recommend starting with a test budget and scaling based on results.',
  },
  {
    question: 'What is the average cost-per-click (CPC) in UAE?',
    answer: 'Average CPC in UAE varies by industry: General services AED 2-5, Real estate AED 8-15, Finance AED 10-20, E-commerce AED 1-3, B2B services AED 5-12. Dubai keywords are typically 20-30% more expensive than other emirates.',
  },
  {
    question: 'How quickly can I see results from PPC?',
    answer: 'PPC delivers immediate traffic once campaigns go live. Initial results within 24-48 hours. Optimal performance typically achieved in 30-60 days after testing and optimization. Unlike SEO, PPC provides instant visibility and can be scaled up or down based on performance.',
  },
  {
    question: 'Do you manage Facebook and Instagram ads?',
    answer: 'Yes! We manage all major advertising platforms: Google Ads, Facebook, Instagram, LinkedIn, TikTok, Twitter, Snapchat, and YouTube. We recommend a multi-platform approach for best results, typically starting with Google + Facebook/Instagram for broad reach.',
  },
  {
    question: 'What is your PPC management fee?',
    answer: 'Our PPC management fees range from 15-20% of ad spend with a minimum of AED 3,000/month. This includes campaign setup, optimization, monthly reporting, and ongoing management. No setup fees. We also offer performance-based pricing for qualified clients.',
  },
  {
    question: 'How do you measure PPC success?',
    answer: 'We track: CTR (click-through rate), CPC (cost per click), conversion rate, cost per acquisition (CPA), ROI, quality score, impression share, and revenue generated. Monthly reports include all metrics with actionable insights. Our goal is positive ROI, typically targeting 3:1 return or better.',
  },
]

export default function PPCPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>
      
      <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">PPC Advertising</span> Services in UAE
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Drive immediate results with expertly managed PPC campaigns. Get qualified leads and maximize ROI across Google, Facebook, Instagram, and more.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Get Free PPC Audit
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our PPC Services</h2>
            <p className="text-xl text-gray-600">Comprehensive paid advertising management</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <FiCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose PPC Advertising?</h2>
            <p className="text-xl text-gray-600">The fastest way to grow your business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our PPC Management Process</h2>
            <p className="text-xl text-gray-600">How we maximize your advertising ROI</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-green-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">5:1</div>
              <p className="text-green-100">Average ROI achieved</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">$2M+</div>
              <p className="text-green-100">Ad spend managed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3.5%</div>
              <p className="text-green-100">Average CTR</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <p className="text-green-100">Active campaigns</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="PPC Advertising FAQ" />

      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Drive Immediate Traffic?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free PPC audit and discover how to maximize your advertising ROI
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center"
          >
            Get Free PPC Audit
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
