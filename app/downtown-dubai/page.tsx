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
  title: 'Digital Marketing Agency Downtown Dubai | SEO & Social Media Experts',
  description: 'Premier digital marketing agency in Downtown Dubai. Expert SEO, social media, PPC for Downtown businesses. Near Burj Khalifa, Dubai Mall. Google Partner. Free consultation!',
  keywords: [
    'Digital Marketing Downtown Dubai',
    'SEO Downtown Dubai',
    'Marketing Agency Downtown Dubai',
    'Social Media Downtown Dubai',
    'Burj Khalifa Marketing Agency'
  ],
  alternates: {
    canonical: '/downtown-dubai',
  },
  openGraph: {
    title: 'Digital Marketing Agency Downtown Dubai | SEO & Social Media Experts',
    description: 'Downtown Dubai\'s premier digital marketing agency. Serving businesses near Burj Khalifa & Dubai Mall.',
    url: `${siteConfig.url}/downtown-dubai`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency Downtown Dubai | SEO & Social Media Experts',
    description: 'Downtown Dubai\'s premier digital marketing agency. Serving businesses near Burj Khalifa & Dubai Mall.',
    images: [siteConfig.ogImage],
  },
}

const downtownFaqs = [
  {
    question: 'Do you serve businesses in Downtown Dubai near Burj Khalifa?',
    answer: 'Yes! We specialize in serving Downtown Dubai businesses including those near Burj Khalifa, Dubai Mall, Dubai Opera, and the entire Downtown area. Whether you\'re in a high-rise office tower, retail location at Dubai Mall, or hospitality business near Burj Khalifa, we can help you dominate online. We understand the premium market of Downtown Dubai and create marketing strategies that match the sophisticated clientele in this area.'
  },
  {
    question: 'What types of Downtown Dubai businesses do you work with?',
    answer: 'We work extensively with Downtown Dubai\'s diverse business landscape including: luxury retail stores (Dubai Mall & Souk Al Bahar), fine dining restaurants and cafes, hospitality and hotels, real estate agencies (high-end properties), professional services (law, consulting, finance), entertainment venues, and tourism-related businesses. Downtown Dubai attracts high-spending customers, and we create premium marketing strategies to match.'
  },
  {
    question: 'How can digital marketing help my Downtown Dubai business?',
    answer: 'Digital marketing is essential for Downtown Dubai businesses because: Tourists and residents search online for "Downtown Dubai" + your service, local SEO helps you appear in Google Maps for "near Burj Khalifa" searches, social media showcases your premium location and attracts visitors, PPC ads target high-intent customers searching for Downtown experiences, and professional branding matches the premium nature of Downtown Dubai. With millions visiting yearly, strong online presence captures this massive opportunity.'
  },
  {
    question: 'What are typical costs for digital marketing in Downtown Dubai?',
    answer: 'Given Downtown Dubai\'s premium market, digital marketing investment typically ranges AED 7,000-20,000/month. This includes: Local SEO (AED 4,000-10,000/month) to rank for high-value Downtown keywords, PPC advertising (AED 5,000+ spend) targeting tourists and residents, Premium social media (AED 4,000-8,000/month) with professional content, and Complete digital strategy (AED 12,000-25,000/month). Higher investment is justified by Downtown\'s high customer value and return. Contact us for ROI projections specific to your Downtown business.'
  },
  {
    question: 'Can you help my Downtown Dubai restaurant get more customers?',
    answer: 'Absolutely! Downtown Dubai restaurants face unique challenges with high competition and tourist traffic. Our restaurant marketing includes: Google My Business optimization to appear in "restaurants near Burj Khalifa" searches, Instagram marketing with stunning food photography and Reels, TripAdvisor and review management, PPC ads targeting tourists planning Dubai visits, website optimization with online reservations, and influencer partnerships. We help you fill tables with both tourists and Dubai residents.'
  },
]

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Dubai', href: '/dubai' },
  { label: 'Downtown Dubai', href: '/downtown-dubai' },
]

export default function DowntownDubaiPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Digital Marketing Services Downtown Dubai',
    description: 'Premium digital marketing services in Downtown Dubai including SEO, social media, PPC for businesses near Burj Khalifa and Dubai Mall.',
    url: 'https://innovatedigital.ae/downtown-dubai',
    serviceType: 'Digital Marketing',
    areaServed: 'Downtown Dubai, Burj Khalifa, Dubai, UAE',
    priceRange: 'AED 7000-25000'
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://innovatedigital.ae/' },
    { name: 'Dubai', url: 'https://innovatedigital.ae/dubai' },
    { name: 'Downtown Dubai', url: 'https://innovatedigital.ae/downtown-dubai' },
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
              🏙️ Serving Premium Businesses Near Burj Khalifa
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Digital Marketing Agency <span className="gradient-text">Downtown Dubai</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Premium Marketing for Burj Khalifa & Dubai Mall Area
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Serving Downtown Dubai's premium businesses with expert digital marketing. From luxury retail to 
              fine dining, we help Downtown companies attract high-value customers through targeted SEO, social media, and PPC.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Get Free Marketing Audit 🎯
                <FiArrowRight className="ml-2" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I need marketing help in Downtown Dubai`}
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
                <span>30+ Downtown Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>Tourism Marketing Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>Premium Brand Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Downtown Dubai Businesses Trust Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Tourist + Resident Marketing</h3>
              <p className="text-gray-600">
                Target both millions of annual tourists and Dubai residents visiting Downtown
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-3">Premium Branding</h3>
              <p className="text-gray-600">
                Marketing strategies that match Downtown\'s luxury positioning
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3">Location-Based Targeting</h3>
              <p className="text-gray-600">
                Appear in searches for "near Burj Khalifa" and "Dubai Mall area"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Other Dubai Locations We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/dubai" className="card hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold">Dubai (All Areas)</h3>
            </Link>
            <Link href="/business-bay" className="card hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold">Business Bay</h3>
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

      <FAQ faqs={downtownFaqs} title="Downtown Dubai Digital Marketing - FAQ" />

      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate Downtown Dubai?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Free marketing audit - capture your share of Downtown's premium market
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
