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
  title: 'Digital Marketing Agency Abu Dhabi | Capital City SEO Experts',
  description: 'Leading digital marketing agency in Abu Dhabi, UAE. Expert SEO, social media, PPC, web development. Serving 100+ Abu Dhabi businesses. Google Partner certified. Free consultation!',
  keywords: [
    'Digital Marketing Agency Abu Dhabi',
    'Digital Marketing Abu Dhabi',
    'Marketing Agency Abu Dhabi',
    'SEO Company Abu Dhabi',
    'Social Media Marketing Abu Dhabi',
    'Web Development Abu Dhabi',
    'PPC Agency Abu Dhabi',
    'Best Digital Marketing Abu Dhabi'
  ],
  alternates: {
    canonical: '/abu-dhabi',
  },
  openGraph: {
    title: 'Digital Marketing Agency Abu Dhabi | Capital City SEO Experts',
    description: 'Abu Dhabi\'s leading digital marketing agency. 100+ successful projects, 4.9/5 rating, Google Partner certified.',
    url: `${siteConfig.url}/abu-dhabi`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency Abu Dhabi | Capital City SEO Experts',
    description: 'Abu Dhabi\'s leading digital marketing agency. 100+ successful projects, 4.9/5 rating, Google Partner certified.',
    images: [siteConfig.ogImage],
  },
}

const services = [
  {
    title: 'SEO Services Abu Dhabi',
    description: 'Rank #1 on Google for Abu Dhabi searches. Local SEO experts with proven results.',
    link: '/services/seo',
    results: '400% average traffic increase'
  },
  {
    title: 'Social Media Marketing Abu Dhabi',
    description: 'Build your brand on Instagram, Facebook, LinkedIn. Abu Dhabi-focused strategies.',
    link: '/services/social-media',
    results: '3x engagement growth'
  },
  {
    title: 'PPC Advertising Abu Dhabi',
    description: 'Google Ads & Facebook Ads management. Maximize ROI in Abu Dhabi market.',
    link: '/services/ppc',
    results: '5x average ROAS'
  },
  {
    title: 'Web Development Abu Dhabi',
    description: 'Fast, SEO-optimized websites. Built for Abu Dhabi businesses.',
    link: '/services/web-development',
    results: '90+ performance score'
  },
  {
    title: 'Content Marketing Abu Dhabi',
    description: 'SEO blog writing and content strategy for Abu Dhabi audience.',
    link: '/services/content-marketing',
    results: '200% content engagement'
  },
  {
    title: 'Branding Abu Dhabi',
    description: 'Logo design and brand identity for Abu Dhabi businesses.',
    link: '/services/branding',
    results: '100+ brands created'
  },
]

const abuDhabiFaqs = [
  {
    question: 'Do you serve businesses in Abu Dhabi from Dubai?',
    answer: 'Yes! While our main office is in Dubai, we actively serve 100+ businesses across Abu Dhabi. We regularly meet clients in Abu Dhabi at their offices, co-working spaces like Hub71, or anywhere convenient. We understand Abu Dhabi\'s unique business environment - from government entities and oil & gas companies to tourism, healthcare, and retail. Many of our team members live in Abu Dhabi, giving us deep local market knowledge and the ability to serve you effectively with same-day responses.'
  },
  {
    question: 'What makes digital marketing different in Abu Dhabi vs Dubai?',
    answer: 'Abu Dhabi has distinct characteristics: More government and semi-government entities requiring formal, professional communication; stronger focus on Arabic language content (higher Emirati population); oil & gas, finance, and healthcare are major industries; more conservative, family-oriented consumer behavior; and tourism targeting cultural attractions (Louvre, Grand Mosque). Our Abu Dhabi strategies reflect these differences - we use more formal tone, emphasize Arabic content, target B2G opportunities, and focus on family values and cultural respect in messaging.'
  },
  {
    question: 'What types of Abu Dhabi businesses do you work with?',
    answer: 'We serve diverse Abu Dhabi industries including: government contractors and suppliers, oil & gas service companies, healthcare providers and hospitals, educational institutions and training centers, real estate developers and agencies, hospitality (hotels, restaurants), tourism and cultural attractions, retail and e-commerce, financial services and consulting, construction and engineering firms, and technology companies in Hub71. We understand Abu Dhabi\'s economic landscape and create strategies that work for capital city businesses.'
  },
  {
    question: 'How much does digital marketing cost for Abu Dhabi businesses?',
    answer: 'Digital marketing costs for Abu Dhabi businesses typically range AED 5,000-20,000/month, similar to Dubai but with some variations: Local SEO (AED 4,000-10,000/month) for ranking in Abu Dhabi searches, B2G marketing (AED 8,000-15,000/month) for government sector targeting, Social media (AED 4,000-8,000/month) with bilingual content, PPC campaigns (AED 5,000+ spend) targeting Abu Dhabi decision-makers, and Complete digital strategy (AED 12,000-25,000/month). Abu Dhabi B2B and B2G projects often require higher investment due to longer sales cycles and formal requirements. Contact us for a free consultation tailored to your Abu Dhabi business.'
  },
  {
    question: 'Can you help with Arabic content marketing for Abu Dhabi?',
    answer: 'Absolutely! Arabic content is MORE critical in Abu Dhabi than Dubai due to higher Emirati population and government requirements. We provide comprehensive Arabic services including: native Arabic content creation by Emirati writers, Arabic SEO for Google.ae targeting Abu Dhabi, formal Arabic for B2G communications, bilingual website development (Arabic/English), Arabic social media management with cultural sensitivity, and Arabic video production. Our content respects Abu Dhabi\'s cultural values and formal communication style, essential for success in the capital.'
  },
  {
    question: 'Do you understand government sector marketing in Abu Dhabi?',
    answer: 'Yes! Abu Dhabi has unique B2G (Business-to-Government) requirements. Our government sector marketing includes: understanding procurement processes and tender requirements, formal communication style and protocols, emphasis on local content and Emiratization, compliance with government digital standards, targeting decision-makers in government entities, showcase of credentials and certifications, and relationship-based marketing approach. We help contractors, suppliers, and service providers position themselves effectively for Abu Dhabi government opportunities while maintaining appropriate formality and cultural respect.'
  },
]

const caseStudies = [
  {
    industry: 'Healthcare - Abu Dhabi',
    challenge: 'Specialty clinic needed patient acquisition',
    result: '200 new patients in 4 months',
    metrics: '600% ROI, #1 for "specialist Abu Dhabi"'
  },
  {
    industry: 'Oil & Gas Supplier - Abu Dhabi',
    challenge: 'B2B company needed leads from ADNOC contractors',
    result: '50 qualified B2B leads in 6 months',
    metrics: 'AED 2M in contracts, LinkedIn presence established'
  },
  {
    industry: 'Tourism - Abu Dhabi',
    challenge: 'Tour operator needed bookings for cultural tours',
    result: '300% increase in online bookings',
    metrics: '5K+ Instagram followers, 150+ TripAdvisor reviews'
  },
]

export default function AbuDhabiPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Digital Marketing Services Abu Dhabi',
    description: 'Comprehensive digital marketing services in Abu Dhabi, UAE including SEO, social media marketing, PPC advertising, web development, and content marketing.',
    url: `${siteConfig.url}/abu-dhabi`,
    serviceType: 'Digital Marketing',
    areaServed: 'Abu Dhabi, UAE',
    priceRange: 'AED 5000-20000'
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Abu Dhabi', url: `${siteConfig.url}/abu-dhabi` },
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
              🏛️ Serving 100+ Abu Dhabi Businesses | Capital City Experts
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Digital Marketing Agency <span className="gradient-text">Abu Dhabi</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Trusted by Government & Private Sector | Google Partner Certified
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Serving Abu Dhabi businesses with expert digital marketing. From government contractors to healthcare, 
              we help capital city companies grow through targeted SEO, social media, PPC, and web development with deep understanding of Abu Dhabi market dynamics.
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
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I need digital marketing help in Abu Dhabi`}
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
                <span>Google Partner Since 2020</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>100+ Abu Dhabi Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>B2G Marketing Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>Arabic Content Specialists</span>
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
              Digital Marketing Services in Abu Dhabi
            </h2>
            <p className="text-xl text-gray-600">
              Tailored for Abu Dhabi's unique business environment
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

      {/* Abu Dhabi Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Abu Dhabi Business Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results for real Abu Dhabi businesses
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

      {/* Why Abu Dhabi Businesses Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Abu Dhabi Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Capital city expertise with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Abu Dhabi Projects Completed</div>
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
              <div className="text-5xl font-bold text-primary-600 mb-2">B2G</div>
              <div className="text-gray-600">Government Sector Expertise</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">24h</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Arabic Content Available</div>
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
            <Link href="/sharjah" className="card hover:shadow-lg transition-shadow group text-center">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Sharjah</h3>
              <p className="text-gray-600 text-sm">Digital Marketing in Sharjah</p>
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
      <FAQ faqs={abuDhabiFaqs} title="Digital Marketing in Abu Dhabi - FAQ" />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate Abu Dhabi's Digital Market?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free marketing audit worth AED 2,000 - discover your growth opportunities
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
