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
  title: 'Digital Marketing Agency Business Bay Dubai | Local SEO Experts',
  description: 'Top digital marketing agency in Business Bay, Dubai. Expert SEO, social media, PPC & web development. Serving 50+ Business Bay businesses. Google Partner certified. Free consultation!',
  keywords: [
    'Digital Marketing Agency Business Bay',
    'SEO Business Bay',
    'Marketing Agency Business Bay Dubai',
    'Social Media Marketing Business Bay',
    'Web Development Business Bay',
    'PPC Agency Business Bay'
  ],
  alternates: {
    canonical: '/business-bay',
  },
  openGraph: {
    title: 'Digital Marketing Agency Business Bay Dubai | Local SEO Experts',
    description: 'Business Bay\'s leading digital marketing agency. 50+ local projects, 4.9/5 rating.',
    url: `${siteConfig.url}/business-bay`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency Business Bay Dubai | Local SEO Experts',
    description: 'Business Bay\'s leading digital marketing agency. 50+ local projects, 4.9/5 rating.',
    images: [siteConfig.ogImage],
  },
}

const services = [
  {
    title: 'Local SEO Business Bay',
    description: 'Rank for "Business Bay" + your service. Local search optimization.',
    link: '/services/seo',
  },
  {
    title: 'Social Media Business Bay',
    description: 'Build your brand with Business Bay-focused social campaigns.',
    link: '/services/social-media',
  },
  {
    title: 'PPC Ads Business Bay',
    description: 'Target Business Bay customers with geo-targeted Google & Facebook Ads.',
    link: '/services/ppc',
  },
  {
    title: 'Website Design Business Bay',
    description: 'Modern, fast websites for Business Bay businesses.',
    link: '/services/web-development',
  },
]

const businessBayFaqs = [
  {
    question: 'Do you have an office in Business Bay, Dubai?',
    answer: 'Yes! We serve Business Bay businesses directly and can meet you at your Business Bay office, nearby co-working spaces like Nook or The Executive Centre, or coffee shops in Business Bay. We understand the unique business environment of Business Bay with its mix of startups, corporate offices, and entrepreneurs. Whether you\'re in one of the iconic towers like Executive Towers, Churchill Tower, or Bay Square, we can meet you conveniently.'
  },
  {
    question: 'What types of Business Bay businesses do you work with?',
    answer: 'We work with a diverse range of Business Bay businesses including: tech startups and SaaS companies, financial services firms, consulting agencies, real estate companies, e-commerce businesses, hospitality and restaurants, creative agencies, and professional services (legal, accounting, HR). Business Bay is home to many innovative businesses, and we understand the competitive landscape and how to make your business stand out online.'
  },
  {
    question: 'How can digital marketing help my Business Bay business?',
    answer: 'Digital marketing is crucial for Business Bay businesses because: Most clients search online before visiting, local SEO helps you rank for "[your service] Business Bay", social media builds credibility in Dubai\'s business community, PPC ads target your ideal clients in Business Bay and nearby areas, a professional website establishes trust with corporate clients, and content marketing positions you as an industry expert. With high competition in Business Bay, strong digital presence is essential.'
  },
  {
    question: 'What are the costs for digital marketing in Business Bay?',
    answer: 'Digital marketing costs for Business Bay businesses typically range from AED 5,000-15,000/month depending on your goals and competition. Business Bay has competitive industries like finance, tech, and consulting which may require higher investment. We offer customized packages including: Local SEO (AED 3,000-8,000/month), PPC management (AED 4,000+ spend + 20% management fee), Social media management (AED 3,000-6,000/month), and complete digital marketing (AED 10,000-20,000/month). Contact us for a free consultation tailored to your Business Bay business.'
  },
  {
    question: 'Can you help my Business Bay startup get noticed?',
    answer: 'Absolutely! Business Bay is Dubai\'s startup hub, and we specialize in helping startups build their digital presence. Our startup packages include: startup-friendly pricing, website development (fast, professional), SEO to rank for your niche in Dubai, social media to build your brand, content marketing to establish authority, and performance tracking to show ROI. We understand that startups need to see results quickly, so we focus on high-impact strategies that deliver measurable growth within 2-3 months.'
  },
]

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Dubai', href: '/dubai' },
  { label: 'Business Bay', href: '/business-bay' },
]

export default function BusinessBayPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Digital Marketing Services Business Bay Dubai',
    description: 'Comprehensive digital marketing services in Business Bay, Dubai including local SEO, social media marketing, PPC advertising, and web development.',
    url: `${siteConfig.url}/business-bay`,
    serviceType: 'Digital Marketing',
    areaServed: 'Business Bay, Dubai, UAE',
    priceRange: 'AED 5000-15000'
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Dubai', url: `${siteConfig.url}/dubai` },
    { name: 'Business Bay', url: `${siteConfig.url}/business-bay` },
  ])

  return (
    <div className="min-h-screen">
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
              📍 Serving 50+ Businesses in Business Bay
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Digital Marketing Agency <span className="gradient-text">Business Bay</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Local SEO & Marketing Experts | Google Partner Certified
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Based in Dubai, serving Business Bay businesses with expert digital marketing. From startups to 
              corporate offices, we help Business Bay companies grow through targeted SEO, social media, PPC, and web development.
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
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I need digital marketing help in Business Bay`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2 w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>50+ Business Bay Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>Local Business Bay Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>Same-Day Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Digital Marketing Services in Business Bay
            </h2>
            <p className="text-xl text-gray-600">
              Tailored for Business Bay's competitive market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="card hover:shadow-xl transition-all group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-primary-600 font-medium">
                  Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business Bay Success Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Business Bay Success Story
            </h2>
          </div>

          <div className="max-w-3xl mx-auto card bg-white">
            <div className="text-sm font-medium text-primary-600 mb-2">Tech Startup - Business Bay</div>
            <h3 className="text-2xl font-bold mb-4">Challenge</h3>
            <p className="text-gray-600 mb-6">
              A B2B SaaS startup in Business Bay needed to generate qualified leads and establish brand authority 
              in Dubai's competitive tech market. They had zero online presence and were relying solely on networking.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Our Strategy</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>✓ Built SEO-optimized website in 4 weeks</li>
              <li>✓ Targeted "SaaS solutions Dubai" and "Business Bay tech companies"</li>
              <li>✓ LinkedIn marketing targeting Business Bay decision-makers</li>
              <li>✓ Content marketing establishing thought leadership</li>
              <li>✓ PPC campaigns targeting Dubai B2B buyers</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Results in 6 Months</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
                <div className="text-gray-600">Qualified Leads</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">#1</div>
                <div className="text-gray-600">For Target Keywords</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">500%</div>
                <div className="text-gray-600">ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Business Bay Businesses Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Business Bay Businesses Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                We understand Business Bay's unique business environment and competitive landscape
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Results</h3>
              <p className="text-gray-600">
                Proven strategies that deliver leads within 2-3 months for Business Bay businesses
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Convenient Meetings</h3>
              <p className="text-gray-600">
                We meet you at your Business Bay office or favorite co-working space
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Dubai Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              We Also Serve Other Dubai Areas
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/dubai" className="card hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold">Dubai (All Areas)</h3>
            </Link>
            <Link href="/downtown-dubai" className="card hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold">Downtown Dubai</h3>
            </Link>
            <Link href="/dubai-marina" className="card hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold">Dubai Marina</h3>
            </Link>
            <Link href="/jlt" className="card hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold">JLT</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={businessBayFaqs} title="Business Bay Digital Marketing - FAQ" />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business Bay Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Free marketing audit worth AED 2,000 - see how you can dominate Business Bay
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
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
