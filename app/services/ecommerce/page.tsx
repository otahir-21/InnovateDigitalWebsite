import { Metadata } from 'next'
import Link from 'next/link'
import { FiCheck, FiArrowRight, FiShoppingCart, FiCreditCard, FiPackage, FiTrendingUp } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'

export const metadata: Metadata = {
  title: 'E-commerce Solutions in UAE | Online Store Development Dubai',
  description: 'Complete e-commerce solutions in Dubai & UAE. Build, grow, and optimize your online store with Shopify, WooCommerce, and custom platforms. Expert e-commerce development.',
  keywords: ['E-commerce Dubai', 'Online Store UAE', 'Shopify Expert Dubai', 'WooCommerce Development UAE', 'E-commerce Agency Dubai'],
  openGraph: {
    title: 'E-commerce Solutions UAE - Innovate Digital',
    description: 'Build and grow your online store with comprehensive e-commerce solutions in UAE.',
  },
}

const ecommerceServices = [
  {
    title: 'Store Setup & Configuration',
    description: 'Complete online store setup on your preferred e-commerce platform.',
    features: [
      'Platform selection & setup',
      'Theme customization',
      'Product catalog setup',
      'Multi-currency configuration',
    ],
  },
  {
    title: 'Payment Gateway Integration',
    description: 'Secure payment processing with all major payment methods for UAE market.',
    features: [
      'Credit/debit card processing',
      'PayPal, Stripe integration',
      'Cash on delivery setup',
      'UAE-specific payment gateways',
    ],
  },
  {
    title: 'Inventory Management',
    description: 'Efficient inventory tracking and management systems.',
    features: [
      'Stock tracking',
      'Automated alerts',
      'Multi-warehouse support',
      'Barcode integration',
    ],
  },
  {
    title: 'Conversion Optimization',
    description: 'Increase sales with proven conversion optimization strategies.',
    features: [
      'A/B testing',
      'Cart abandonment recovery',
      'Upsell & cross-sell',
      'Checkout optimization',
    ],
  },
]

const platforms = [
  {
    name: 'Shopify',
    description: 'Perfect for quick launch and scalability',
    features: ['Easy to use', 'Built-in features', 'Fast setup', 'Reliable hosting'],
  },
  {
    name: 'WooCommerce',
    description: 'Flexible WordPress-based solution',
    features: ['Highly customizable', 'Cost-effective', 'Large plugin ecosystem', 'SEO-friendly'],
  },
  {
    name: 'Custom Solutions',
    description: 'Tailored e-commerce platforms',
    features: ['Unlimited customization', 'Unique features', 'Full control', 'Scalable architecture'],
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'Understand your products, target audience, and business model to create the perfect e-commerce strategy.',
  },
  {
    step: '02',
    title: 'Design & Development',
    description: 'Build a beautiful, user-friendly online store that reflects your brand and converts visitors.',
  },
  {
    step: '03',
    title: 'Integration & Testing',
    description: 'Integrate payment gateways, shipping, and third-party tools. Rigorous testing before launch.',
  },
  {
    step: '04',
    title: 'Launch & Optimize',
    description: 'Go live and continuously optimize for better performance, conversions, and sales.',
  },
]

const benefits = [
  {
    icon: FiShoppingCart,
    title: '24/7 Sales',
    description: 'Your online store never closes. Sell products around the clock to customers worldwide.',
  },
  {
    icon: FiCreditCard,
    title: 'Multiple Payment Options',
    description: 'Accept all major payment methods including cards, digital wallets, and cash on delivery.',
  },
  {
    icon: FiPackage,
    title: 'Inventory Control',
    description: 'Real-time inventory tracking and automated stock management to prevent overselling.',
  },
  {
    icon: FiTrendingUp,
    title: 'Analytics & Insights',
    description: 'Track sales, customer behavior, and product performance with detailed analytics.',
  },
]

const faqs = [
  {
    question: 'How much does e-commerce website development cost in UAE?',
    answer: 'E-commerce development in UAE ranges from AED 15,000 for basic Shopify/WooCommerce stores to AED 100,000+ for custom enterprise solutions. The cost depends on platform choice, number of products, custom features, payment integrations, and design complexity. We offer packages for all budgets starting from AED 15,000.',
  },
  {
    question: 'Which is the best e-commerce platform for UAE businesses?',
    answer: 'It depends on your needs: Shopify is best for quick launch and ease of use. WooCommerce is ideal for SEO and customization. Magento suits large catalogs. Custom solutions work for unique requirements. For most UAE SMEs, we recommend Shopify or WooCommerce. We help you choose based on your specific needs.',
  },
  {
    question: 'Do you integrate with UAE payment gateways?',
    answer: 'Yes! We integrate with all major UAE payment gateways including Network International, Telr, PayFort (Amazon Payment Services), 2Checkout, CCAvenue, and international options like Stripe, PayPal, and Square. We also set up cash on delivery which is popular in UAE.',
  },
  {
    question: 'Can you migrate my existing store to a new platform?',
    answer: 'Absolutely! We handle complete store migrations including products, customers, orders, and reviews. We migrate from any platform (Magento, WooCommerce, Shopify, custom) to your preferred platform with zero data loss and minimal downtime. Migration services start from AED 5,000.',
  },
  {
    question: 'Do you provide Arabic language support?',
    answer: 'Yes! We build bilingual (English/Arabic) e-commerce stores with RTL (right-to-left) support for Arabic. This includes Arabic product descriptions, checkout, customer account areas, and admin panels. Essential for reaching the local UAE market.',
  },
  {
    question: 'What about shipping integration for UAE?',
    answer: 'We integrate with all major UAE shipping providers including Aramex, DHL, FedEx, Emirates Post, and Fetchr. This includes real-time shipping rates, tracking, and automated label generation. We also set up zone-based shipping for different UAE emirates.',
  },
  {
    question: 'Do you offer ongoing maintenance and support?',
    answer: 'Yes! We offer monthly maintenance packages starting from AED 2,000/month including security updates, plugin updates, backup management, technical support, performance optimization, and minor content updates. We also offer pay-as-you-go support.',
  },
  {
    question: 'How long does it take to build an e-commerce website?',
    answer: 'Timeline varies by complexity: Basic Shopify store: 2-3 weeks. WooCommerce store: 3-4 weeks. Custom e-commerce: 8-12 weeks. Enterprise solutions: 3-6 months. We provide detailed timelines during consultation based on your specific requirements.',
  },
]

export default function EcommercePage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">E-commerce Solutions</span> in UAE
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Build a profitable online store that converts visitors into customers. Complete e-commerce solutions from setup to growth.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Get Free E-commerce Consultation
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our E-commerce Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small startups to large enterprises, we build e-commerce stores that drive sales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our E-commerce Services</h2>
            <p className="text-xl text-gray-600">Everything you need to start and grow your online business</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ecommerceServices.map((service) => (
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

      {/* Platforms */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">E-commerce Platforms We Work With</h2>
            <p className="text-xl text-gray-600">We recommend the best platform based on your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <div key={platform.name} className="card text-center">
                <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature) => (
                    <li key={feature} className="flex items-center justify-center text-sm text-gray-700">
                      <FiCheck className="w-4 h-4 text-green-500 mr-2" />
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">From concept to launch and beyond</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-teal-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <p className="text-teal-100">E-commerce stores launched</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">$15M+</div>
              <p className="text-teal-100">Revenue generated for clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3.2%</div>
              <p className="text-teal-100">Average conversion rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <p className="text-teal-100">Uptime guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="E-commerce FAQ" />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Online Store?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free consultation and discover how we can build a profitable e-commerce business for you
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
