import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'
import { generateServiceSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Content Marketing Dubai | 200% Traffic Growth | SEO Content UAE',
  description: 'Content marketing agency in Dubai. SEO-optimized blog writing, articles & content strategy. 10+ articles/month, 200% organic traffic growth. Arabic & English content. From AED 4,000/month. Serving all UAE.',
  keywords: ['Content Marketing Dubai', 'Content Writing UAE', 'Blog Writing Dubai', 'SEO Content UAE', 'Content Strategy Dubai', 'Copywriting Services UAE', 'Arabic Content Dubai', 'Content Creator UAE'],
  openGraph: {
    title: 'Content Marketing Dubai | 200% Traffic Growth | SEO Optimized',
    description: 'Drive organic traffic with strategic content. Expert content marketing for UAE businesses.',
  },
}

const services = [
  { title: 'Content Strategy', description: 'Data-driven content plans aligned with your business goals.', features: ['Audience research', 'Content calendar', 'Topic ideation', 'SEO keyword research'] },
  { title: 'Blog & Article Writing', description: 'SEO-optimized content that ranks and converts.', features: ['Blog posts', 'Articles', 'Industry insights', 'Thought leadership'] },
  { title: 'Copywriting', description: 'Persuasive copy for websites, ads, and marketing materials.', features: ['Website copy', 'Product descriptions', 'Ad copy', 'Email content'] },
  { title: 'Content Distribution', description: 'Get your content in front of the right audience.', features: ['Social media promotion', 'Email marketing', 'Guest posting', 'Content syndication'] },
]

const benefits = [
  { icon: FiArrowRight, title: 'Drive Organic Traffic', description: 'Quality content attracts organic search traffic, reducing your dependence on paid advertising.' },
  { icon: FiCheck, title: 'Build Authority', description: 'Establish your brand as an industry thought leader with valuable, expert content.' },
  { icon: FiArrowRight, title: 'Generate Leads', description: 'Attract and convert qualified leads with content that addresses their pain points and questions.' },
  { icon: FiCheck, title: 'Long-Term ROI', description: 'Content continues to drive traffic and leads long after publication, providing compounding returns.' },
]

const process = [
  { step: '01', title: 'Strategy & Research', description: 'Analyze your audience, competitors, and opportunities to create a content roadmap.' },
  { step: '02', title: 'Content Creation', description: 'Expert writers create SEO-optimized, engaging content in your brand voice.' },
  { step: '03', title: 'Optimization & Publishing', description: 'Optimize for SEO, format for readability, and publish on your platforms.' },
  { step: '04', title: 'Distribution & Analysis', description: 'Promote across channels, track performance, and continuously improve.' },
]

const faqs = [
  { question: 'How much does content marketing cost in UAE?', answer: 'Content marketing packages in UAE typically range from AED 4,000 to AED 20,000 per month depending on volume, research depth, and distribution. Individual blog posts start from AED 500-1,500 each. We offer flexible packages for all budgets.' },
  { question: 'How often should we publish content?', answer: 'We recommend 2-4 blog posts per week for optimal results. Consistency is key for SEO and audience engagement. We create custom content calendars based on your industry, competition, and resources. Minimum recommended frequency is 2 posts per month.' },
  { question: 'Do you write in Arabic?', answer: 'Yes! We have native Arabic content writers who understand UAE cultural nuances. We provide bilingual content (English/Arabic) or Arabic-only content. Essential for reaching local UAE audiences and improving regional SEO rankings.' },
  { question: 'How do you measure content marketing success?', answer: 'We track: organic traffic growth, keyword rankings, time on page, bounce rate, social shares, backlinks earned, lead generation, and conversions. Monthly reports include all metrics with insights and recommendations for improvement.' },
  { question: 'Can you write technical or industry-specific content?', answer: 'Yes! Our team includes writers with expertise in various industries including technology, finance, real estate, healthcare, and e-commerce. We research thoroughly and work with subject matter experts to ensure accuracy and authority.' },
  { question: 'Do you optimize existing content?', answer: 'Absolutely! We offer content audit and optimization services. We analyze your existing content, identify improvement opportunities, update for current SEO best practices, and refresh outdated information. Services start from AED 300 per article.' },
]

export default function ContentMarketingPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Content Marketing Dubai',
    description: 'Professional content marketing services in Dubai. SEO-optimized blog writing, articles, and content strategy that drives traffic and conversions.',
    url: `${siteConfig.url}/services/content-marketing`,
    serviceType: 'Content Marketing',
    areaServed: 'United Arab Emirates',
    priceRange: '$$',
  })

  return (
    <div className="pt-20">
      <Script id="content-marketing-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="container mx-auto px-4"><Breadcrumbs /></div>
      <section className="section-padding bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6"><span className="gradient-text">Content Marketing</span> Services in UAE</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">Engage your audience with compelling content that drives traffic, builds authority, and converts visitors into customers.</p>
            <Link href="/contact" className="btn-primary inline-flex items-center">Get Free Content Strategy<FiArrowRight className="ml-2" /></Link>
          </div>
        </div>
      </section>

      {/* Quick Facts - AI & Voice Search Optimized */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Content Marketing Quick Facts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <div className="text-sm font-semibold text-green-900 mb-2">Service Type</div>
                <div className="text-lg font-bold text-gray-900">Content Strategy & Creation</div>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
                <div className="text-sm font-semibold text-teal-900 mb-2">Best For</div>
                <div className="text-lg font-bold text-gray-900">Businesses building thought leadership</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <div className="text-sm font-semibold text-blue-900 mb-2">Timeline</div>
                <div className="text-lg font-bold text-gray-900">Ongoing monthly retainer</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                <div className="text-sm font-semibold text-orange-900 mb-2">Investment</div>
                <div className="text-lg font-bold text-gray-900">From AED 4,000/month</div>
              </div>
            </div>
            <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">10+</div>
                  <div className="text-sm text-gray-600">Articles/month</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">SEO</div>
                  <div className="text-sm text-gray-600">Optimized</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">200%</div>
                  <div className="text-sm text-gray-600">Traffic growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Content Marketing Services</h2>
            <p className="text-xl text-gray-600">Complete content solutions that drive results</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Content Marketing?</h2>
            <p className="text-xl text-gray-600">The power of quality content</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-orange-600" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Content Marketing Process</h2>
            <p className="text-xl text-gray-600">Strategic content that drives results</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-orange-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-orange-600 to-amber-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <p className="text-orange-100">Articles published</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5M+</div>
              <p className="text-orange-100">Organic visitors driven</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">300%</div>
              <p className="text-orange-100">Avg traffic increase</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3x</div>
              <p className="text-orange-100">Better lead quality</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Content Marketing FAQ" />
      
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Compelling Content?</h2>
          <p className="text-xl mb-8 text-blue-100">Get a free content strategy and discover how we can help you engage your audience</p>
          <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center">Get Free Strategy<FiArrowRight className="ml-2" /></Link>
        </div>
      </section>
    </div>
  )
}
