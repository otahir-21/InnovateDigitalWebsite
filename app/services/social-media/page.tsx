import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { FiCheck, FiArrowRight, FiInstagram, FiTwitter, FiTrendingUp, FiUsers } from 'react-icons/fi'
import { FaFacebook, FaLinkedin, FaTiktok } from 'react-icons/fa'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'
import { generateServiceSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Social Media Marketing Dubai | 300% Engagement Growth | Google Partner',
  description: 'Leading social media agency in Dubai since 2020. Expert Instagram, Facebook, TikTok & LinkedIn marketing. 50K+ combined reach achieved for UAE clients. Free strategy session. Serving Dubai, Abu Dhabi & Sharjah.',
  keywords: ['Social Media Marketing Dubai', 'Instagram Marketing UAE', 'Facebook Ads Dubai', 'Social Media Agency Abu Dhabi', 'TikTok Marketing UAE', 'LinkedIn Marketing Dubai', 'Influencer Marketing UAE', 'Social Media Management Sharjah'],
  openGraph: {
    title: 'Social Media Marketing Dubai | 300% Engagement Growth',
    description: 'Google Partner certified agency delivering 300% average engagement growth. Expert social media management for UAE businesses.',
  },
}

const platforms = [
  { name: 'Instagram', icon: FiInstagram, color: 'text-pink-600' },
  { name: 'Facebook', icon: FaFacebook, color: 'text-blue-600' },
  { name: 'LinkedIn', icon: FaLinkedin, color: 'text-blue-700' },
  { name: 'TikTok', icon: FaTiktok, color: 'text-gray-900' },
  { name: 'Twitter/X', icon: FiTwitter, color: 'text-blue-400' },
]

const services = [
  {
    title: 'Strategy Development',
    description: 'Data-driven social media strategies aligned with your business goals.',
    features: ['Competitor analysis', 'Audience research', 'Content calendar', 'Platform selection'],
  },
  {
    title: 'Content Creation',
    description: 'Engaging content that stops the scroll and drives action.',
    features: ['Professional photography', 'Graphic design', 'Video production', 'Copywriting'],
  },
  {
    title: 'Community Management',
    description: 'Build relationships and engage with your audience daily.',
    features: ['Comment management', 'DM responses', 'Community engagement', 'Reputation management'],
  },
  {
    title: 'Paid Social Advertising',
    description: 'Targeted ads that reach the right audience and drive conversions.',
    features: ['Campaign setup', 'Audience targeting', 'Ad creative', 'Performance optimization'],
  },
]

const benefits = [
  { icon: FiUsers, title: 'Brand Awareness', description: 'Reach millions of UAE users and build strong brand recognition across multiple platforms.' },
  { icon: FiTrendingUp, title: 'Engagement & Loyalty', description: 'Build lasting relationships with your audience through authentic, engaging content.' },
  { icon: FiInstagram, title: 'Multi-Platform Presence', description: 'Dominate Instagram, Facebook, LinkedIn, TikTok, and Twitter with consistent branding.' },
  { icon: FiUsers, title: 'Community Building', description: 'Create a loyal community of followers who become brand advocates and customers.' },
]

const process = [
  { step: '01', title: 'Strategy & Research', description: 'Analyze your brand, competitors, and audience to create a winning social media strategy.' },
  { step: '02', title: 'Content Creation', description: 'Design and produce stunning visuals, videos, and copy that resonates with your audience.' },
  { step: '03', title: 'Publishing & Engagement', description: 'Post consistently, respond to comments, and actively engage with your community.' },
  { step: '04', title: 'Analyze & Optimize', description: 'Track performance metrics and continuously improve content and strategy for better results.' },
]

const faqs = [
  {
    question: 'How much do social media marketing services cost in UAE?',
    answer: 'Social media marketing in UAE typically ranges from AED 5,000 to AED 25,000 per month depending on number of platforms, posting frequency, content creation needs, and paid advertising budget. We offer customized packages starting from AED 5,000/month for small businesses.',
  },
  {
    question: 'Which social media platforms are best for UAE businesses?',
    answer: 'For B2C: Instagram and Facebook are essential (80%+ of UAE population uses them), TikTok for younger audiences. For B2B: LinkedIn is crucial. Twitter/X for news and customer service. We recommend starting with 2-3 platforms and expanding based on performance.',
  },
  {
    question: 'Do you create content in Arabic?',
    answer: 'Yes! We create bilingual content (English/Arabic) with native Arabic copywriters who understand UAE cultural nuances. This is essential for reaching local UAE audiences. We recommend a mix of English and Arabic content based on your target demographic.',
  },
  {
    question: 'How often should we post on social media?',
    answer: 'Recommended posting frequency: Instagram: 4-7 posts/week + daily stories, Facebook: 3-5 posts/week, LinkedIn: 2-3 posts/week, TikTok: 3-5 videos/week, Twitter: 1-3 posts/day. We create custom content calendars based on your industry and audience engagement patterns.',
  },
  {
    question: 'What results can we expect from social media marketing?',
    answer: 'Typical results within 3-6 months: 50-200% follower growth, 2-5% engagement rate, 20-50 qualified leads/month, improved brand awareness, better customer relationships. Results vary by industry, budget, and consistency. We provide monthly reports tracking all KPIs.',
  },
  {
    question: 'Do you offer influencer marketing services?',
    answer: 'Yes! We have relationships with 500+ influencers across UAE in various niches. We handle influencer research, negotiation, campaign management, and ROI tracking. Influencer campaigns start from AED 10,000 and can reach millions of UAE residents.',
  },
]

export default function SocialMediaPage() {
  // Generate Service Schema
  const serviceSchema = generateServiceSchema({
    name: 'Social Media Marketing Dubai',
    description: 'Professional social media marketing services in Dubai and UAE. Expert Instagram, Facebook, LinkedIn, and TikTok management to grow your brand and engage audiences.',
    url: `${siteConfig.url}/services/social-media`,
    serviceType: 'Social Media Marketing',
    areaServed: 'United Arab Emirates',
    priceRange: '$$',
  })

  return (
    <div className="pt-20">
      {/* Service Schema */}
      <Script
        id="social-media-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>
      
      <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Social Media Marketing</span> Services in UAE
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Build a powerful social presence that engages your audience and drives real business results across all major platforms.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Get Free Social Media Audit
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Facts - AI & Voice Search Optimized */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Social Media Marketing Quick Facts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                <div className="text-sm font-semibold text-purple-900 mb-2">Service Type</div>
                <div className="text-lg font-bold text-gray-900">Social Media Management & Advertising</div>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-600">
                <div className="text-sm font-semibold text-pink-900 mb-2">Best For</div>
                <div className="text-lg font-bold text-gray-900">Brand awareness & customer engagement</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <div className="text-sm font-semibold text-blue-900 mb-2">Timeline</div>
                <div className="text-lg font-bold text-gray-900">2-3 months for significant growth</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                <div className="text-sm font-semibold text-orange-900 mb-2">Investment</div>
                <div className="text-lg font-bold text-gray-900">From AED 2,000/month</div>
              </div>
            </div>
            <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">300%</div>
                  <div className="text-sm text-gray-600">Average engagement increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">50K+</div>
                  <div className="text-sm text-gray-600">Combined reach achieved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">4.5%</div>
                  <div className="text-sm text-gray-600">Average conversion rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Platforms We Manage</h2>
            <p className="text-xl text-gray-600">Expert management across all major social networks</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {platforms.map((platform) => (
              <div key={platform.name} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <platform.icon className={`w-10 h-10 ${platform.color}`} />
                </div>
                <span className="font-semibold">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Social Media Services</h2>
            <p className="text-xl text-gray-600">Comprehensive social media management for your brand</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Social Media Marketing?</h2>
            <p className="text-xl text-gray-600">The power of social media for your business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Social Media Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-purple-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">5M+</div>
              <p className="text-purple-100">Impressions generated</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150%</div>
              <p className="text-purple-100">Avg follower growth</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.5%</div>
              <p className="text-purple-100">Engagement rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-purple-100">Client satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Social Media Marketing FAQ" />

      {/* Related Services - Internal Linking for SEO */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Boost Social Media With These Services</h2>
            <p className="text-xl text-gray-600">Amplify your social presence with complementary strategies</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/content-marketing" className="card hover:shadow-xl transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">Content Marketing</h3>
              <p className="text-gray-600 mb-4">Great social media needs great content. Professional blog posts and articles give you valuable content to share and engage followers.</p>
              <div className="flex items-center text-primary-600 font-medium">
                Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link href="/services/video-production" className="card hover:shadow-xl transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">Video Production</h3>
              <p className="text-gray-600 mb-4">Video content gets 1200% more engagement on social media. Professional videos make your social strategy unstoppable.</p>
              <div className="flex items-center text-primary-600 font-medium">
                Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link href="/services/ppc" className="card hover:shadow-xl transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">PPC Advertising</h3>
              <p className="text-gray-600 mb-4">Scale your social reach faster with paid ads. Combine organic and paid social for maximum impact and conversions.</p>
              <div className="flex items-center text-primary-600 font-medium">
                Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Social Media Presence?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free social media audit and discover opportunities to engage your audience
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center"
          >
            Get Free Social Media Audit
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
