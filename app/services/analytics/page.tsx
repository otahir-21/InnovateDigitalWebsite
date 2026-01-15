import { Metadata } from 'next'
import Link from 'next/link'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'

export const metadata: Metadata = {
  title: 'Analytics & Reporting Services in UAE | Data Analytics Dubai',
  description: 'Professional analytics and reporting services in Dubai & UAE. Google Analytics setup, custom dashboards, ROI tracking, and data-driven insights for better marketing decisions.',
  keywords: ['Marketing Analytics Dubai', 'Google Analytics UAE', 'Data Analysis Dubai', 'ROI Tracking UAE', 'Marketing Reports Dubai'],
}

const services = [
  { title: 'Google Analytics Setup', description: 'Complete GA4 setup and configuration for accurate tracking.', features: ['GA4 installation', 'Goal setup', 'E-commerce tracking', 'Event tracking'] },
  { title: 'Custom Dashboards', description: 'Beautiful dashboards that visualize your key metrics.', features: ['Data visualization', 'Real-time metrics', 'Custom reports', 'Automated updates'] },
  { title: 'Performance Tracking', description: 'Track all marketing channels and campaigns.', features: ['Multi-channel attribution', 'Campaign tracking', 'Conversion tracking', 'User behavior analysis'] },
  { title: 'Monthly Reports', description: 'Comprehensive reports with actionable insights.', features: ['Executive summaries', 'Trend analysis', 'Recommendations', 'Competitive insights'] },
]

const benefits = [
  { icon: FiCheck, title: 'Data-Driven Decisions', description: 'Stop guessing, start knowing. Make informed decisions based on real data and insights.' },
  { icon: FiArrowRight, title: 'Identify Opportunities', description: 'Discover hidden opportunities and optimize underperforming channels for better ROI.' },
  { icon: FiCheck, title: 'Prove ROI', description: 'Track exact ROI from every marketing channel and show stakeholders clear results.' },
  { icon: FiArrowRight, title: 'Competitive Advantage', description: 'Understand what works, optimize faster, and stay ahead of competitors.' },
]

const process = [
  { step: '01', title: 'Audit & Setup', description: 'Review current tracking, fix issues, and set up comprehensive analytics infrastructure.' },
  { step: '02', title: 'Dashboard Creation', description: 'Build custom dashboards that visualize your most important metrics in real-time.' },
  { step: '03', title: 'Tracking Implementation', description: 'Implement advanced tracking for all marketing channels, campaigns, and user journeys.' },
  { step: '04', title: 'Reporting & Optimization', description: 'Deliver monthly reports with actionable insights and recommendations for improvement.' },
]

const faqs = [
  { question: 'How much do analytics services cost in UAE?', answer: 'Analytics services range from AED 2,000 for basic GA4 setup to AED 5,000-15,000/month for comprehensive analytics management including dashboards, tracking, and monthly reports. One-time setup starts from AED 2,000. Custom enterprise solutions available.' },
  { question: 'What analytics tools do you work with?', answer: 'We work with all major analytics platforms: Google Analytics 4 (GA4), Google Tag Manager, Google Data Studio/Looker, Adobe Analytics, Mixpanel, Hotjar, and custom solutions. We recommend the best tools based on your needs and budget.' },
  { question: 'Can you track ROI from our marketing campaigns?', answer: 'Yes! We set up complete ROI tracking across all channels including SEO, PPC, social media, email, and offline marketing. We track revenue, leads, cost per acquisition, and provide clear ROI reports showing which channels deliver best results.' },
  { question: 'How often should we review analytics?', answer: 'We recommend weekly reviews of key metrics and monthly comprehensive reports. We provide real-time dashboards for daily monitoring. Monthly strategy sessions ensure you\'re making data-driven decisions and optimizing for better performance.' },
  { question: 'Can you integrate analytics with our CRM?', answer: 'Absolutely! We integrate analytics with major CRMs including Salesforce, HubSpot, Zoho, and custom systems. This provides complete customer journey visibility from first touch to closed deal, enabling better attribution and forecasting.' },
  { question: 'Do you provide training on using analytics tools?', answer: 'Yes! We offer training sessions for your team on Google Analytics, dashboards, and reporting tools. Training includes 2-4 hour workshops plus documentation. Helps your team make data-driven decisions independently.' },
]

export default function AnalyticsPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4"><Breadcrumbs /></div>
      <section className="section-padding bg-gradient-to-br from-lime-50 to-green-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6"><span className="gradient-text">Analytics & Reporting</span> Services in UAE</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">Make data-driven decisions with comprehensive analytics, custom dashboards, and actionable insights that drive business growth.</p>
            <Link href="/contact" className="btn-primary inline-flex items-center">Get Free Analytics Audit<FiArrowRight className="ml-2" /></Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Analytics Services</h2>
            <p className="text-xl text-gray-600">Complete analytics solutions for data-driven marketing</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Analytics Matters?</h2>
            <p className="text-xl text-gray-600">The power of data-driven marketing</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-lime-600" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Analytics Process</h2>
            <p className="text-xl text-gray-600">From setup to insights</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-lime-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-lime-600 to-green-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-lime-100">Dashboards created</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-lime-100">Tracking accuracy</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">40%</div>
              <p className="text-lime-100">Avg ROI improvement</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-lime-100">Real-time monitoring</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Analytics & Reporting FAQ" />
      
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make Data-Driven Decisions?</h2>
          <p className="text-xl mb-8 text-blue-100">Get a free analytics audit and discover insights hidden in your data</p>
          <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center">Get Free Audit<FiArrowRight className="ml-2" /></Link>
        </div>
      </section>
    </div>
  )
}
