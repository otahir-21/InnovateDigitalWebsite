import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { FiArrowRight, FiCheckCircle, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'
import { siteConfig } from '@/lib/config'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency JLT Dubai | Jumeirah Lakes Towers SEO',
  description: 'Top digital marketing agency in JLT (Jumeirah Lakes Towers), Dubai. Expert SEO, social media, PPC for JLT businesses. Free consultation. Google Partner certified!',
  keywords: [
    'Digital Marketing JLT',
    'SEO JLT Dubai',
    'Marketing Agency Jumeirah Lakes Towers',
    'Social Media Marketing JLT',
    'PPC JLT Dubai'
  ],
  alternates: {
    canonical: '/jlt',
  },
  openGraph: {
    title: 'Digital Marketing Agency JLT Dubai | Jumeirah Lakes Towers SEO',
    description: 'JLT\'s leading digital marketing agency. Serving 40+ businesses in Jumeirah Lakes Towers.',
    url: `${siteConfig.url}/jlt`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency JLT Dubai | Jumeirah Lakes Towers SEO',
    description: 'JLT\'s leading digital marketing agency. Serving 40+ businesses in Jumeirah Lakes Towers.',
    images: [siteConfig.ogImage],
  },
}

const jltFaqs = [
  {
    question: 'Do you have clients in JLT (Jumeirah Lakes Towers)?',
    answer: 'Yes! We serve 40+ businesses in JLT including companies in Cluster A through Z, Gold Tower, Platinum Tower, Fortune Tower, and other iconic JLT buildings. JLT is home to many SMEs, startups, and corporate offices, and we understand the business community dynamics in this area. We can meet you at your JLT office, The Office JLT co-working space, or any convenient location in Jumeirah Lakes Towers.'
  },
  {
    question: 'What types of JLT businesses do you work with?',
    answer: 'JLT has a diverse business community and we work with: tech startups and software companies, consulting firms and agencies, healthcare and dental clinics, education and training centers, real estate agencies, financial services, retail and e-commerce, hospitality (hotels, restaurants, cafes), and professional services (legal, accounting, HR). JLT businesses need to compete both locally in Dubai and internationally, requiring smart digital strategies.'
  },
  {
    question: 'How can digital marketing help my JLT business stand out?',
    answer: 'JLT is home to thousands of businesses, making digital presence crucial. Digital marketing helps you: Rank for "JLT" + your service on Google, appear in local searches when people search "near me" in JLT area, build credibility through social media and reviews, target JLT residents and workers with geo-targeted ads, establish thought leadership in your industry, and compete with larger companies through smart online strategies. Many JLT businesses rely on walk-ins and referrals - digital marketing multiplies your reach.'
  },
  {
    question: 'What do digital marketing services cost for JLT businesses?',
    answer: 'Digital marketing for JLT businesses typically ranges AED 4,000-12,000/month, depending on your goals and competition. We offer: Local SEO for JLT (AED 3,000-7,000/month) to rank for local searches, Social media management (AED 3,000-6,000/month) to build your brand, PPC advertising (AED 3,000+ spend + management) for immediate leads, Complete digital marketing (AED 8,000-15,000/month) for comprehensive growth. Many JLT SMEs start with one service and expand as they see ROI. Contact us for a free consultation tailored to your JLT business budget.'
  },
  {
    question: 'Can you help my JLT clinic or healthcare business get more patients?',
    answer: 'Absolutely! JLT has many clinics, dental practices, and healthcare providers competing for patients. Our healthcare marketing includes: Local SEO to rank for "dentist JLT" or "clinic JLT", Google My Business optimization with reviews, social media showcasing your services and patient testimonials, PPC ads targeting JLT residents and workers, website with online booking, and reputation management. We help you fill your appointment calendar with both JLT residents and people from nearby areas (Dubai Marina, Business Bay, etc.).'
  },
]

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Dubai', href: '/dubai' },
  { label: 'JLT', href: '/jlt' },
]

export default function JLTPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Digital Marketing Services JLT Dubai',
    description: 'Digital marketing services in JLT (Jumeirah Lakes Towers) including local SEO, social media, PPC for JLT businesses.',
    url: `${siteConfig.url}/jlt`,
    serviceType: 'Digital Marketing',
    areaServed: 'JLT, Jumeirah Lakes Towers, Dubai, UAE',
    priceRange: 'AED 4000-12000'
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Dubai', url: `${siteConfig.url}/dubai` },
    { name: 'JLT', url: `${siteConfig.url}/jlt` },
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

      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏢 Serving 40+ Businesses in JLT
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Digital Marketing Agency <span className="gradient-text">JLT Dubai</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Jumeirah Lakes Towers Local SEO & Marketing Experts
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Based in Dubai, serving JLT (Jumeirah Lakes Towers) businesses with expert digital marketing. From startups 
              in Cluster offices to established companies, we help JLT businesses grow through local SEO, social media, and PPC.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Get Free Marketing Audit 🎯
                <FiArrowRight className="ml-2" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I need marketing help in JLT`}
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
                <span>40+ JLT Businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>SME Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>Budget-Friendly Packages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why JLT Businesses Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Local JLT Expertise</h3>
              <p className="text-gray-600">
                We understand JLT's business community and what works in this competitive area
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">SME-Friendly Pricing</h3>
              <p className="text-gray-600">
                Flexible packages designed for JLT SMEs and startups
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">Fast ROI</h3>
              <p className="text-gray-600">
                Proven strategies that deliver leads within 2-3 months
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Other Dubai Areas We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/dubai" className="card hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold">Dubai (All Areas)</h3>
            </Link>
            <Link href="/business-bay" className="card hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold">Business Bay</h3>
            </Link>
            <Link href="/downtown-dubai" className="card hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold">Downtown Dubai</h3>
            </Link>
            <Link href="/dubai-marina" className="card hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold">Dubai Marina</h3>
            </Link>
          </div>
        </div>
      </section>

      <FAQ faqs={jltFaqs} title="JLT Digital Marketing - FAQ" />

      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your JLT Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Free marketing audit - see how to dominate JLT market
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
