import { Metadata } from 'next'
import Link from 'next/link'
import { FiSearch, FiTrendingUp, FiMonitor, FiEdit, FiVolume2, FiTarget, FiArrowRight, FiMail, FiShoppingCart, FiVideo, FiFileText, FiBarChart2, FiSmartphone } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'
import { servicesFAQs } from '@/lib/faqData'

export const metadata: Metadata = {
  title: 'Digital Marketing Services in UAE | SEO, PPC, Social Media',
  description: 'Comprehensive digital marketing services in UAE. Expert SEO, social media marketing, PPC, web development, content marketing, and branding services.',
  openGraph: {
    title: 'Digital Marketing Services - Innovate Digital UAE',
    description: 'Full-service digital marketing agency offering SEO, PPC, social media, and web development services in UAE.',
  },
}

const services = [
  {
    icon: FiSearch,
    title: 'SEO Services',
    description: 'Dominate search rankings with our proven SEO strategies tailored for UAE market.',
    features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Local SEO', 'Technical SEO'],
    href: '/services/seo',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FiTrendingUp,
    title: 'Social Media Marketing',
    description: 'Build a strong social presence and engage your audience across all platforms.',
    features: ['Strategy Development', 'Content Creation', 'Community Management', 'Influencer Marketing', 'Analytics & Reporting'],
    href: '/services/social-media',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FiTarget,
    title: 'PPC Advertising',
    description: 'Maximize ROI with targeted Google Ads and social media campaigns.',
    features: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'Campaign Optimization'],
    href: '/services/ppc',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FiMonitor,
    title: 'Web Design & Development',
    description: 'Lightning-fast, SEO-optimized websites that convert visitors into customers.',
    features: ['Responsive Design', 'E-commerce Development', 'UI/UX Design', 'Speed Optimization', 'Maintenance & Support'],
    href: '/services/web-development',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: FiEdit,
    title: 'Content Marketing',
    description: 'Engage your audience with compelling content that drives conversions.',
    features: ['Content Strategy', 'Blog Writing', 'Article Writing', 'Copywriting', 'Content Distribution'],
    href: '/services/content-marketing',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: FiVolume2,
    title: 'Branding & Design',
    description: 'Create a memorable brand identity that resonates with your target audience.',
    features: ['Brand Strategy', 'Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Positioning'],
    href: '/services/branding',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: FiShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Build and grow your online store with our comprehensive e-commerce services.',
    features: ['Store Setup', 'Product Optimization', 'Payment Integration', 'Inventory Management', 'Conversion Optimization'],
    href: '/services/ecommerce',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: FiMail,
    title: 'Email Marketing',
    description: 'Drive sales and build relationships with strategic email campaigns.',
    features: ['Campaign Strategy', 'Email Design', 'List Management', 'Automation', 'Analytics & Testing'],
    href: '/services/email-marketing',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: FiVideo,
    title: 'Video Production',
    description: 'Professional video content that captures attention and drives engagement.',
    features: ['Concept Development', 'Video Shooting', 'Editing & Post-production', 'Animation', 'Social Media Videos'],
    href: '/services/video-production',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile App Development',
    description: 'Custom mobile apps for iOS and Android that users love.',
    features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'App Store Optimization', 'Maintenance'],
    href: '/services/mobile-app',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: FiBarChart2,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to optimize your marketing performance.',
    features: ['Google Analytics', 'Custom Dashboards', 'Performance Tracking', 'ROI Analysis', 'Monthly Reports'],
    href: '/services/analytics',
    color: 'from-lime-500 to-lime-600',
  },
  {
    icon: FiFileText,
    title: 'Marketing Automation',
    description: 'Streamline your marketing with intelligent automation solutions.',
    features: ['Lead Nurturing', 'Workflow Automation', 'CRM Integration', 'Behavioral Triggers', 'Performance Tracking'],
    href: '/services/marketing-automation',
    color: 'from-violet-500 to-violet-600',
  },
]

export default function ServicesPage() {
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive digital marketing solutions designed to help your business grow in the competitive UAE market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <div className="card group hover:-translate-y-2 cursor-pointer h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <span className="text-primary-600 font-medium inline-flex items-center group-hover:gap-2 transition-all">
                    Learn More
                    <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business, goals, and target audience' },
              { step: '02', title: 'Strategy', description: 'Developing a customized digital marketing plan' },
              { step: '03', title: 'Execution', description: 'Implementing campaigns with precision and care' },
              { step: '04', title: 'Optimization', description: 'Continuous monitoring and improvement for best results' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-primary-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={servicesFAQs} title="Services FAQ" />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">Let's discuss which services are right for your business</p>
          <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center">
            Contact Us Today
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
