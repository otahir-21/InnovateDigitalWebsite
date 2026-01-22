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
  title: 'Digital Marketing Agency Dubai | #1 Rated | Free Consultation',
  description: 'Top digital marketing agency in Dubai with 200+ successful projects. Expert SEO, social media, PPC, web development services. Google Partner certified. Get free consultation today!',
  keywords: [
    'Digital Marketing Agency Dubai',
    'Digital Marketing Dubai',
    'Marketing Agency Dubai',
    'SEO Company Dubai',
    'Social Media Marketing Dubai',
    'Web Development Dubai',
    'PPC Agency Dubai',
    'Best Digital Marketing Agency Dubai'
  ],
  openGraph: {
    title: 'Digital Marketing Agency Dubai | #1 Rated | Free Consultation',
    description: 'Dubai\'s leading digital marketing agency. 200+ successful projects, 4.9/5 rating, Google Partner certified.',
  },
}

const services = [
  {
    title: 'SEO Services Dubai',
    description: 'Rank #1 on Google for Dubai searches. Local SEO experts with proven results.',
    link: '/services/seo',
    results: '400% average traffic increase'
  },
  {
    title: 'Social Media Marketing Dubai',
    description: 'Build your brand on Instagram, Facebook, LinkedIn. Dubai-focused strategies.',
    link: '/services/social-media',
    results: '3x engagement growth'
  },
  {
    title: 'PPC Advertising Dubai',
    description: 'Google Ads & Facebook Ads management. Maximize ROI in Dubai market.',
    link: '/services/ppc',
    results: '5x average ROAS'
  },
  {
    title: 'Web Development Dubai',
    description: 'Fast, SEO-optimized websites. Built for Dubai businesses.',
    link: '/services/web-development',
    results: '90+ performance score'
  },
  {
    title: 'Content Marketing Dubai',
    description: 'SEO blog writing and content strategy for Dubai audience.',
    link: '/services/content-marketing',
    results: '200% content engagement'
  },
  {
    title: 'Branding Dubai',
    description: 'Logo design and brand identity for Dubai businesses.',
    link: '/services/branding',
    results: '100+ brands created'
  },
]

const dubaiFaqs = [
  {
    question: 'What makes you the best digital marketing agency in Dubai?',
    answer: 'Innovate Digital stands out in Dubai for several reasons: We\'re a certified Google Partner since 2020, we\'ve completed 200+ successful projects across Dubai, we have a 4.9/5 Google rating with 98% client satisfaction, and we deliver an average 3x ROI. Unlike other agencies, we specialize in the Dubai market with deep understanding of local consumer behavior, Arabic content requirements, and UAE business culture. Our office is based in Dubai, and we serve clients across all Dubai areas including Business Bay, Downtown Dubai, Dubai Marina, JLT, DIFC, and more.'
  },
  {
    question: 'Do you serve businesses in all areas of Dubai?',
    answer: 'Yes! We serve businesses across all Dubai areas including Business Bay, Downtown Dubai, Dubai Marina, JLT (Jumeirah Lakes Towers), DIFC, Dubai Silicon Oasis, Deira, Bur Dubai, Sheikh Zayed Road, Al Barsha, Jumeirah, Dubai Internet City, Dubai Media City, and all other locations. We also serve clients throughout UAE including Abu Dhabi, Sharjah, Ajman, and other emirates. Whether you\'re in a free zone or mainland, we can help your business grow.'
  },
  {
    question: 'How much does digital marketing cost in Dubai?',
    answer: 'Digital marketing costs in Dubai vary based on your business goals and competition. Our services range from AED 3,000/month for basic social media management to AED 15,000+/month for comprehensive digital marketing including SEO, PPC, and content. Most Dubai businesses invest AED 5,000-10,000/month for effective multi-channel marketing. We offer flexible packages tailored to your budget. Contact us for a free consultation and customized quote with ROI projections specific to your Dubai business.'
  },
  {
    question: 'How long does it take to see results in Dubai market?',
    answer: 'Results timeline depends on the service and Dubai market competition. PPC (Google Ads) delivers immediate traffic within 1-2 days. Social media marketing shows engagement growth in 2-4 weeks with significant results in 2-3 months. SEO for Dubai keywords typically shows initial improvements in 1-2 months, with strong results in 3-6 months, and top rankings by 6-12 months. The Dubai market is competitive but our proven strategies consistently deliver results faster than industry average.'
  },
  {
    question: 'Can you help with Arabic content marketing in Dubai?',
    answer: 'Absolutely! Arabic content is crucial for success in Dubai\'s diverse market. We provide comprehensive Arabic services including: native Arabic content creation, Arabic SEO optimization for Google.ae, Arabic social media management, bilingual English/Arabic website development, and Arabic copywriting for ads. This dual-language approach helps you reach both the local Emirati population and expat community in Dubai, maximizing your market reach and conversions.'
  },
  {
    question: 'Do you offer in-person meetings in Dubai?',
    answer: 'Yes! We love meeting our Dubai clients in person. Our office is located in Dubai, and we regularly meet clients at their offices, co-working spaces, or coffee shops across Dubai (Business Bay, DIFC, Dubai Marina, etc.). We also offer virtual meetings via Zoom for convenience. For your initial consultation, you can choose either in-person or virtual - whatever works best for you. Contact us to schedule your free consultation meeting in Dubai.'
  },
]

const caseStudies = [
  {
    industry: 'Real Estate - Business Bay',
    challenge: 'New property agency needed leads',
    result: '150 qualified leads in 3 months',
    metrics: '500% ROI, #1 for "Business Bay properties"'
  },
  {
    industry: 'Restaurant - Dubai Marina',
    challenge: 'Low foot traffic and online orders',
    result: '300% increase in online orders',
    metrics: '10K+ social media followers, 200+ Google reviews'
  },
  {
    industry: 'E-commerce - Dubai',
    challenge: 'High ad costs, low conversions',
    result: '70% reduction in cost per sale',
    metrics: 'AED 500K monthly revenue, 8x ROAS'
  },
]

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Dubai', href: '/dubai' },
]

export default function DubaiPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Digital Marketing Services Dubai',
    description: 'Comprehensive digital marketing services in Dubai including SEO, social media marketing, PPC advertising, web development, and content marketing.',
    url: 'https://innovatedigital.ae/dubai',
    serviceType: 'Digital Marketing',
    areaServed: 'Dubai, UAE',
    priceRange: 'AED 5000-20000'
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://innovatedigital.ae/' },
    { name: 'Dubai', url: 'https://innovatedigital.ae/dubai' },
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
              🏆 Dubai's #1 Rated Digital Marketing Agency
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Digital Marketing Agency <span className="gradient-text">Dubai</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Trusted by 200+ Dubai Businesses | Google Partner Certified
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From Business Bay to Dubai Marina, we help Dubai businesses dominate their market through expert SEO, 
              social media marketing, PPC advertising, and web development. Based in Dubai, built for Dubai success.
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
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I need digital marketing help in Dubai`}
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
                <span>200+ Dubai Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>4.9/5 Google Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>3x Average ROI</span>
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
              Digital Marketing Services in Dubai
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for Dubai businesses of all sizes
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

      {/* Dubai Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dubai Business Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results for real Dubai businesses
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

      {/* Why Choose Us for Dubai */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Dubai Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              More than just an agency - your Dubai growth partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-gray-600">Dubai Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Google Rating in Dubai</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">3x</div>
              <div className="text-gray-600">Average ROI for Dubai Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">24h</div>
              <div className="text-gray-600">Response Time in Dubai</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">Years Serving Dubai</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Areas Served */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We Serve All Dubai Areas
            </h2>
            <p className="text-xl text-gray-600">
              Local expertise across every Dubai neighborhood
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/business-bay" className="card hover:shadow-lg transition-shadow group text-center">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Business Bay</h3>
              <p className="text-gray-600 text-sm">Digital Marketing in Business Bay</p>
            </Link>
            <Link href="/downtown-dubai" className="card hover:shadow-lg transition-shadow group text-center">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Downtown Dubai</h3>
              <p className="text-gray-600 text-sm">Digital Marketing Downtown</p>
            </Link>
            <Link href="/dubai-marina" className="card hover:shadow-lg transition-shadow group text-center">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Dubai Marina</h3>
              <p className="text-gray-600 text-sm">Digital Marketing in Marina</p>
            </Link>
            <Link href="/jlt" className="card hover:shadow-lg transition-shadow group text-center">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">JLT</h3>
              <p className="text-gray-600 text-sm">Digital Marketing in JLT</p>
            </Link>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p>Also serving: DIFC • Dubai Silicon Oasis • Deira • Bur Dubai • Jumeirah • Al Barsha • Dubai Internet City • Dubai Media City • And More</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={dubaiFaqs} title="Digital Marketing in Dubai - FAQ" />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate Dubai's Digital Market?
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
