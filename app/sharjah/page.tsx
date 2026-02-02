import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { FiArrowRight, FiCheckCircle, FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'
import { siteConfig } from '@/lib/config'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Sharjah | Affordable SEO & Social Media',
  description: 'Top digital marketing agency in Sharjah, UAE. Affordable SEO, social media, PPC, web development. Serving 80+ Sharjah businesses. Google Partner certified. Free consultation!',
  keywords: [
    'Digital Marketing Agency Sharjah',
    'Digital Marketing Sharjah',
    'Marketing Agency Sharjah',
    'SEO Company Sharjah',
    'Social Media Marketing Sharjah',
    'Web Development Sharjah',
    'Affordable Digital Marketing Sharjah'
  ],
  alternates: {
    canonical: '/sharjah',
  },
  openGraph: {
    title: 'Digital Marketing Agency Sharjah | Affordable SEO & Social Media',
    description: 'Sharjah\'s leading digital marketing agency. 80+ successful projects, affordable packages, 4.9/5 rating.',
    url: `${siteConfig.url}/sharjah`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency Sharjah | Affordable SEO & Social Media',
    description: 'Sharjah\'s leading digital marketing agency. 80+ successful projects, affordable packages, 4.9/5 rating.',
    images: [siteConfig.ogImage],
  },
}

const services = [
  {
    title: 'SEO Services Sharjah',
    description: 'Rank #1 on Google for Sharjah searches. Affordable local SEO packages.',
    link: '/services/seo',
    results: '400% average traffic increase'
  },
  {
    title: 'Social Media Marketing Sharjah',
    description: 'Build your brand on Instagram, Facebook. Family-focused Sharjah strategies.',
    link: '/services/social-media',
    results: '3x engagement growth'
  },
  {
    title: 'PPC Advertising Sharjah',
    description: 'Cost-effective Google & Facebook Ads. Budget-friendly campaigns.',
    link: '/services/ppc',
    results: '5x average ROAS'
  },
  {
    title: 'Web Development Sharjah',
    description: 'Affordable, professional websites. Built for Sharjah businesses.',
    link: '/services/web-development',
    results: 'Starting AED 3,000'
  },
  {
    title: 'E-commerce Sharjah',
    description: 'Online stores for Sharjah retailers. Expand beyond physical stores.',
    link: '/services/ecommerce',
    results: '200+ online stores'
  },
  {
    title: 'Branding Sharjah',
    description: 'Affordable logo & brand design for Sharjah businesses.',
    link: '/services/branding',
    results: 'Starting AED 1,500'
  },
]

const sharjahFaqs = [
  {
    question: 'Do you offer affordable digital marketing packages for Sharjah businesses?',
    answer: 'Yes! We understand Sharjah businesses often need cost-effective solutions. We offer budget-friendly packages starting from AED 2,500/month for social media management, AED 3,000/month for basic SEO, and AED 5,000/month for complete digital marketing. Sharjah has many SMEs, family businesses, and retail shops that need quality marketing without Dubai prices. We provide the same professional service with flexible packages tailored to Sharjah business budgets. Many Sharjah clients start small and scale as they see ROI.'
  },
  {
    question: 'What makes Sharjah businesses different from Dubai businesses?',
    answer: 'Sharjah has unique characteristics: More family-oriented and conservative consumer base; stronger emphasis on value and affordability over luxury; large manufacturing and industrial sector; retail-heavy economy with traditional shops and souks; higher percentage of middle-income families; cultural and arts focus (museums, heritage areas); and residential-focused lifestyle. Our Sharjah marketing strategies reflect these differences - family values, affordability messaging, community engagement, and practical benefits over lifestyle positioning.'
  },
  {
    question: 'What types of Sharjah businesses do you work with?',
    answer: 'We serve diverse Sharjah industries including: retail stores and boutiques (traditional and modern), manufacturing and industrial companies, family-owned businesses, healthcare clinics and pharmacies, educational institutions and training centers, real estate agencies, restaurants and food businesses, automotive services and showrooms, home furnishing and furniture stores, construction and contracting, professional services (accounting, legal), and e-commerce businesses. Sharjah\'s diverse economy means varied marketing needs, and we adapt to each sector.'
  },
  {
    question: 'Can you help my Sharjah retail store compete with online businesses?',
    answer: 'Absolutely! Many Sharjah retailers face competition from online stores. Our retail marketing strategy includes: Local SEO to appear in "near me" searches from Sharjah residents, Google My Business optimization with products and offers, Social media showcasing your store and products, E-commerce website to sell online (expand beyond physical store), WhatsApp Business for direct customer communication, Google Shopping ads for product visibility, and In-store promotions announced on social media. We help traditional Sharjah retailers build online presence while driving foot traffic to physical stores.'
  },
  {
    question: 'Do you understand Sharjah\'s family-oriented market?',
    answer: 'Yes! Sharjah is known as the family emirate with strong cultural and family values. Our Sharjah marketing emphasizes: Family-friendly messaging and imagery, value and affordability focus, community involvement and local partnerships, respect for cultural values and traditions, family packages and offers, educational content for parents, safety and quality assurance, and halal-certified products/services where relevant. Whether you\'re a restaurant, retail store, or service provider, we position you as family-friendly and trustworthy for Sharjah\'s community-minded residents.'
  },
  {
    question: 'Can you help my Sharjah manufacturing company with B2B marketing?',
    answer: 'Definitely! Sharjah is UAE\'s industrial hub with major manufacturing in Al Sajaa, Sharjah Industrial Areas, and SAIF Zone. Our B2B manufacturing marketing includes: LinkedIn marketing targeting procurement managers, SEO for "[product] supplier Sharjah" keywords, professional website showcasing capabilities and certifications, Google Ads targeting B2B buyers, trade show promotion and follow-up, content marketing establishing expertise, email marketing to B2B prospects, and emphasis on quality, reliability, and competitive pricing. We help Sharjah manufacturers reach buyers across UAE and GCC.'
  },
]

const caseStudies = [
  {
    industry: 'Retail Store - Sharjah',
    challenge: 'Traditional shop needed online presence',
    result: 'AED 50K monthly online sales added',
    metrics: '300% ROI, 2K+ Instagram followers, e-commerce launched'
  },
  {
    industry: 'Manufacturing - Sharjah Industrial Area',
    challenge: 'Factory needed B2B leads',
    result: '80 B2B leads in 6 months',
    metrics: 'AED 1.5M in new contracts, #1 for target keywords'
  },
  {
    industry: 'Family Restaurant - Sharjah',
    challenge: 'Restaurant needed family customers',
    result: '200% increase in weekend bookings',
    metrics: '5K+ social followers, 4.8/5 Google rating'
  },
]

export default function SharjahPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Digital Marketing Services Sharjah',
    description: 'Affordable digital marketing services in Sharjah, UAE including SEO, social media marketing, PPC advertising, web development, and e-commerce solutions.',
    url: `${siteConfig.url}/sharjah`,
    serviceType: 'Digital Marketing',
    areaServed: 'Sharjah, UAE',
    priceRange: 'AED 2500-15000'
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Sharjah', url: `${siteConfig.url}/sharjah` },
  ])

  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <Breadcrumbs />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              👨‍👩‍👧‍👦 Serving 80+ Sharjah Businesses | Affordable Packages
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Digital Marketing Agency <span className="gradient-text">Sharjah</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Budget-Friendly Marketing for Sharjah's Family Businesses
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Serving Sharjah businesses with affordable, effective digital marketing. From retail stores to manufacturers, 
              we help Sharjah companies grow through targeted SEO, social media, and e-commerce with packages designed for local business budgets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Get Free Marketing Audit 🎯
                <FiArrowRight className="ml-2" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I need affordable marketing help in Sharjah`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2 w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>80+ Sharjah Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>Affordable Packages</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>Family Business Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>Starting AED 2,500/mo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Affordable Digital Marketing Services in Sharjah
            </h2>
            <p className="text-xl text-gray-600">
              Quality service, budget-friendly prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="card hover:shadow-xl transition-all group"
              >
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-sm font-medium text-primary-600 mb-4">
                  ✓ {service.results}
                </div>
                <div className="flex items-center text-primary-600 font-medium">
                  Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sharjah Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sharjah Business Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results for real Sharjah businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="card bg-white">
                <div className="text-sm font-medium text-primary-600 mb-2">{study.industry}</div>
                <h3 className="text-xl font-bold mb-3">Challenge</h3>
                <p className="text-gray-600 mb-4">{study.challenge}</p>
                <h3 className="text-xl font-bold mb-3">Result</h3>
                <p className="text-gray-900 font-semibold mb-4">{study.result}</p>
                <div className="text-sm text-gray-600 border-t pt-4">
                  {study.metrics}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-primary inline-flex items-center">
              View All Success Stories
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Sharjah Businesses Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Sharjah Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Quality service at Sharjah-friendly prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">80+</div>
              <div className="text-gray-600">Sharjah Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">3x</div>
              <div className="text-gray-600">Average ROI for Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">40%</div>
              <div className="text-gray-600">Lower Than Dubai Prices</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">24h</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">SME</div>
              <div className="text-gray-600">Specialized Packages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Other UAE Areas Served */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We Serve All UAE Emirates
            </h2>
            <p className="text-xl text-gray-600">
              Local expertise across UAE
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/dubai" className="card hover:shadow-lg transition-shadow group text-center">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Dubai</h3>
              <p className="text-gray-600 text-sm">Digital Marketing in Dubai</p>
            </Link>
            <Link href="/abu-dhabi" className="card hover:shadow-lg transition-shadow group text-center">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Abu Dhabi</h3>
              <p className="text-gray-600 text-sm">Digital Marketing in Abu Dhabi</p>
            </Link>
            <Link href="/business-bay" className="card hover:shadow-lg transition-shadow group text-center">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Business Bay</h3>
              <p className="text-gray-600 text-sm">Dubai Business Bay</p>
            </Link>
            <Link href="/dubai-marina" className="card hover:shadow-lg transition-shadow group text-center">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Dubai Marina</h3>
              <p className="text-gray-600 text-sm">Dubai Marina</p>
            </Link>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p>Also serving: Ajman • Ras Al Khaimah • Fujairah • Umm Al Quwain • Al Ain • And More</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={sharjahFaqs} title="Digital Marketing in Sharjah - FAQ" />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Sharjah Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free marketing audit - affordable packages for Sharjah businesses
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center justify-center"
            >
              Get Free Audit 🎯
              <FiArrowRight className="ml-2" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center"
            >
              <FiPhone className="mr-2" />
              Call Now
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-blue-100">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center space-x-2 hover:text-white transition-colors">
              <FiPhone className="w-5 h-5" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <span className="hidden md:inline">|</span>
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center space-x-2 hover:text-white transition-colors">
              <FiMail className="w-5 h-5" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
