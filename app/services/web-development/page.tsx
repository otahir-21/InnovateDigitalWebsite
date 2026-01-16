import { Metadata } from 'next'
import Link from 'next/link'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'

export const metadata: Metadata = {
  title: 'Web Development Company Dubai | Best Website Design UAE',
  description: 'Leading web development company in Dubai. Custom websites, e-commerce platforms & web applications. Fast, SEO-optimized, mobile-responsive designs with proven results.',
  keywords: ['Web Development Dubai', 'Website Design Dubai', 'Web Development Company Dubai', 'Website Development UAE', 'Web Developer Dubai', 'Custom Website Dubai'],
  openGraph: {
    title: 'Web Development Company Dubai | Best Website Design UAE',
    description: 'Professional web development in Dubai. Build fast, secure, SEO-optimized websites that drive results.',
  },
}

const services = [
  {
    title: 'Custom Website Development',
    description: 'Tailored websites built to your exact specifications and business needs.',
    features: ['Custom design', 'Responsive layouts', 'CMS integration', 'SEO optimization'],
  },
  {
    title: 'E-commerce Development',
    description: 'Powerful online stores that drive sales and conversions.',
    features: ['Shopify, WooCommerce', 'Payment integration', 'Inventory management', 'Product optimization'],
  },
  {
    title: 'Web Applications',
    description: 'Complex web applications and portals for your business.',
    features: ['Custom functionality', 'Database design', 'API integration', 'Secure authentication'],
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing support to keep your website running smoothly.',
    features: ['Security updates', 'Performance optimization', 'Bug fixes', '24/7 monitoring'],
  },
]

const benefits = [
  { icon: FiCheck, title: 'Fast Performance', description: 'Lightning-fast websites that load in under 2 seconds, improving user experience and SEO rankings.' },
  { icon: FiArrowRight, title: 'Mobile-First Design', description: 'Fully responsive websites that look perfect on all devices, from phones to desktops.' },
  { icon: FiCheck, title: 'SEO Optimized', description: 'Built with SEO best practices to help you rank higher in search results from day one.' },
  { icon: FiArrowRight, title: 'Scalable & Secure', description: 'Future-proof architecture that grows with your business, with enterprise-grade security.' },
]

const process = [
  { step: '01', title: 'Discovery & Planning', description: 'Understand your goals, audience, and requirements to create a detailed project roadmap.' },
  { step: '02', title: 'Design & Prototype', description: 'Create modern, user-friendly designs and interactive prototypes for your approval.' },
  { step: '03', title: 'Development & Testing', description: 'Build your website with clean code, test thoroughly across all devices and browsers.' },
  { step: '04', title: 'Launch & Support', description: 'Deploy your website and provide ongoing maintenance, updates, and support.' },
]

const faqs = [
  {
    question: 'How much does website development cost in UAE?',
    answer: 'Website development costs vary widely: Basic website: AED 10,000-20,000, Business website: AED 20,000-50,000, E-commerce: AED 30,000-100,000, Custom web application: AED 50,000-300,000+. Final cost depends on design complexity, features, and integrations.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Timeline varies by project: Basic website: 2-4 weeks, Business website: 4-8 weeks, E-commerce store: 6-12 weeks, Custom web app: 3-6 months. We provide detailed timelines during consultation and keep you updated throughout the process.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, proven technologies: Frontend: React, Next.js, Vue.js, Backend: Node.js, PHP, Python, CMS: WordPress, Shopify, WooCommerce, Database: MySQL, PostgreSQL, MongoDB. We recommend the best tech stack based on your specific needs.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Yes! All our websites are fully responsive and mobile-optimized. With 85% of UAE internet users on mobile, this is essential. We test on all devices and browsers to ensure perfect display and functionality everywhere.',
  },
  {
    question: 'Do you provide website hosting?',
    answer: 'Yes! We offer reliable hosting starting from AED 500/year for basic sites or can work with your preferred hosting provider. We recommend UAE-based or Middle East servers for faster loading times in the region.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely! We specialize in website redesigns and migrations. We analyze your current site, preserve what works, improve what doesn\'t, and deliver a modern, high-performing website. We handle content migration and ensure zero downtime during launch.',
  },
]

export default function WebDevelopmentPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>
      
      <section className="section-padding bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Web Development</span> Services in UAE
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Lightning-fast, SEO-optimized websites that convert visitors into customers. Custom web solutions built for your success.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Get Free Website Quote
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Web Development Services</h2>
            <p className="text-xl text-gray-600">Complete web solutions from concept to launch</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our Web Development?</h2>
            <p className="text-xl text-gray-600">Modern, fast, and built to convert</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-pink-600" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">From concept to launch</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-pink-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-pink-600 to-rose-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">300+</div>
              <p className="text-pink-100">Websites launched</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">&lt;2s</div>
              <p className="text-pink-100">Average load time</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <p className="text-pink-100">Uptime guarantee</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-pink-100">Mobile responsive</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Web Development FAQ" />

      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free consultation and custom quote for your web development project
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center"
          >
            Get Free Consultation
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
