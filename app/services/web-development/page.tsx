import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'
import { generateServiceSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Web Development Dubai | 95+ Speed Score | Modern Websites UAE',
  description: 'Top web development company in Dubai since 2020. Custom websites, web apps & e-commerce. 95+ PageSpeed scores, 100% mobile responsive, 24/7 support. From AED 15,000. Serving all UAE.',
  keywords: ['Web Development Dubai', 'Website Design UAE', 'Web Developer Dubai', 'Custom Website Dubai', 'Responsive Website UAE', 'E-commerce Website Dubai', 'Next.js Developer UAE', 'React Developer Dubai'],
  alternates: {
    canonical: '/services/web-development',
  },
  openGraph: {
    title: 'Web Development Dubai | 95+ Speed Score | 24/7 Support',
    description: 'Award-winning web development in Dubai. Modern, fast, SEO-optimized websites for UAE businesses.',
    url: `${siteConfig.url}/services/web-development`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Dubai | 95+ Speed Score | 24/7 Support',
    description: 'Award-winning web development in Dubai. Modern, fast, SEO-optimized websites for UAE businesses.',
    images: [siteConfig.ogImage],
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
  const serviceSchema = generateServiceSchema({
    name: 'Web Development Dubai',
    description: 'Professional web development services in Dubai and UAE. Custom websites, e-commerce platforms, and web applications with SEO optimization and mobile-responsive design.',
    url: `${siteConfig.url}/services/web-development`,
    serviceType: 'Web Development',
    areaServed: 'United Arab Emirates',
    priceRange: '$$$',
  })

  return (
    <div className="pt-20">
      <Script id="web-dev-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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

      {/* Quick Facts - AI & Voice Search Optimized */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Web Development Quick Facts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <div className="text-sm font-semibold text-blue-900 mb-2">Service Type</div>
                <div className="text-lg font-bold text-gray-900">Custom Website & Web Application Development</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <div className="text-sm font-semibold text-green-900 mb-2">Best For</div>
                <div className="text-lg font-bold text-gray-900">Businesses needing modern, fast websites</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                <div className="text-sm font-semibold text-purple-900 mb-2">Timeline</div>
                <div className="text-lg font-bold text-gray-900">4-12 weeks depending on complexity</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                <div className="text-sm font-semibold text-orange-900 mb-2">Investment</div>
                <div className="text-lg font-bold text-gray-900">From AED 15,000</div>
              </div>
            </div>
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">95+</div>
                  <div className="text-sm text-gray-600">Page Speed score achieved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Mobile responsive</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Ongoing support</div>
                </div>
              </div>
            </div>
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

      {/* Related Services - Internal Linking for SEO */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Services For Your New Website</h2>
            <p className="text-xl text-gray-600">Build a complete digital presence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/seo" className="card hover:shadow-xl transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">SEO Services</h3>
              <p className="text-gray-600 mb-4">A beautiful website means nothing if nobody finds it. SEO brings organic traffic and ensures your site ranks on Google.</p>
              <div className="flex items-center text-primary-600 font-medium">
                Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link href="/services/content-marketing" className="card hover:shadow-xl transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">Content Marketing</h3>
              <p className="text-gray-600 mb-4">Your website needs quality content. Professional copywriting and blog posts engage visitors and drive conversions.</p>
              <div className="flex items-center text-primary-600 font-medium">
                Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link href="/services/analytics" className="card hover:shadow-xl transition-shadow group">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">Analytics & Tracking</h3>
              <p className="text-gray-600 mb-4">Understand your visitors. Analytics tracking reveals how users interact with your site so you can optimize for better results.</p>
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
