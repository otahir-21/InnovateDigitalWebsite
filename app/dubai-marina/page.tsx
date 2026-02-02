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
  title: 'Digital Marketing Agency Dubai Marina | Marina Walk SEO Experts',
  description: 'Premier digital marketing agency in Dubai Marina. Expert SEO, social media, PPC for Marina businesses. Serving restaurants, retail, hospitality. Google Partner. Free consultation!',
  keywords: [
    'Digital Marketing Dubai Marina',
    'SEO Dubai Marina',
    'Marketing Agency Dubai Marina',
    'Social Media Marina Dubai',
    'Restaurant Marketing Dubai Marina'
  ],
  alternates: {
    canonical: '/dubai-marina',
  },
  openGraph: {
    title: 'Digital Marketing Agency Dubai Marina | Marina Walk SEO Experts',
    description: 'Dubai Marina\'s leading digital marketing agency. Expert in hospitality, retail, and lifestyle brands.',
    url: `${siteConfig.url}/dubai-marina`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency Dubai Marina | Marina Walk SEO Experts',
    description: 'Dubai Marina\'s leading digital marketing agency. Expert in hospitality, retail, and lifestyle brands.',
    images: [siteConfig.ogImage],
  },
}

const marinaFaqs = [
  {
    question: 'Do you serve businesses in Dubai Marina and Marina Walk?',
    answer: 'Yes! We serve 50+ businesses across Dubai Marina including Marina Walk, Marina Mall, Marina Promenade, The Walk JBR, and the surrounding towers. Dubai Marina has a unique mix of residential, hospitality, retail, and professional businesses. Whether you\'re a restaurant on Marina Walk, a retail store, yacht charter company, fitness center, or professional service, we understand the Marina lifestyle market and create marketing strategies that resonate with Marina residents and visitors.'
  },
  {
    question: 'What types of Dubai Marina businesses do you work with?',
    answer: 'Dubai Marina\'s lifestyle-focused market includes: restaurants, cafes, and bars (Marina Walk, JBR), retail stores and boutiques, fitness centers and wellness spas, yacht charter and marine services, hospitality (hotels, short-term rentals), real estate agencies (high-end properties), beauty salons and clinics, entertainment venues, and professional services. Marina attracts affluent residents and tourists, requiring premium marketing approaches that match the lifestyle positioning.'
  },
  {
    question: 'How can digital marketing help my Dubai Marina restaurant or cafe?',
    answer: 'Dubai Marina is one of Dubai\'s most competitive F&B markets with hundreds of restaurants. Digital marketing helps you: Rank for "restaurants Dubai Marina" and "Marina Walk dining", appear in Google Maps for tourists and residents searching "near me", build Instagram presence with stunning food photography and Marina views, manage reviews on TripAdvisor, Google, and Zomato, run geo-targeted ads to Marina residents and tourists, and create email campaigns for repeat customers. We help you fill tables even during slow seasons.'
  },
  {
    question: 'What are typical digital marketing costs in Dubai Marina?',
    answer: 'Dubai Marina is a premium market requiring competitive investment. Typical costs range AED 6,000-18,000/month including: Local SEO for Marina (AED 4,000-9,000/month) to rank above competition, Social media management (AED 4,000-8,000/month) with professional photography, PPC advertising (AED 5,000+ spend) targeting Marina area, Complete digital strategy (AED 12,000-25,000/month) for full market domination. Higher investment is justified by Marina\'s high customer value and purchasing power. Many Marina businesses see 4-6x ROI. Contact us for a free audit specific to your Marina business.'
  },
  {
    question: 'Can you help with Instagram marketing for my Dubai Marina business?',
    answer: 'Absolutely! Dubai Marina is one of the most "Instagrammable" locations in Dubai, making Instagram marketing crucial. Our Marina Instagram strategies include: Professional photography and videography showcasing Marina views, Instagram Reels capturing the Marina lifestyle, hashtag strategy (#DubaiMarina #MarinaWalk #JBR), influencer partnerships with Dubai lifestyle influencers, Instagram Ads targeting Marina residents and visitors, Stories and engagement with the local community, and building your brand as part of the Marina lifestyle. Strong Instagram presence in Marina drives both walk-in traffic and bookings.'
  },
]

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Dubai', href: '/dubai' },
  { label: 'Dubai Marina', href: '/dubai-marina' },
]

export default function DubaiMarinaPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Digital Marketing Services Dubai Marina',
    description: 'Premium digital marketing services in Dubai Marina including local SEO, social media, PPC for hospitality, retail, and lifestyle businesses.',
    url: `${siteConfig.url}/dubai-marina`,
    serviceType: 'Digital Marketing',
    areaServed: 'Dubai Marina, Marina Walk, JBR, Dubai, UAE',
    priceRange: 'AED 6000-18000'
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Dubai', url: `${siteConfig.url}/dubai` },
    { name: 'Dubai Marina', url: `${siteConfig.url}/dubai-marina` },
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
              ⛵ Serving 50+ Marina Lifestyle Businesses
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Digital Marketing Agency <span className="gradient-text">Dubai Marina</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Marina Walk, JBR & Premium Lifestyle Marketing
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Serving Dubai Marina's premium businesses with expert digital marketing. From Marina Walk restaurants 
              to luxury retail, we help Marina businesses attract affluent customers through targeted SEO, Instagram marketing, and PPC.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Get Free Marketing Audit 🎯
                <FiArrowRight className="ml-2" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi, I need marketing help in Dubai Marina`}
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
                <span>50+ Marina Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>Hospitality Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-600" />
                <span>Instagram Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Dubai Marina Businesses Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-xl font-bold mb-3">Instagram Marketing</h3>
              <p className="text-gray-600">
                Leverage Marina's visual appeal with stunning social media content
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3">Lifestyle Branding</h3>
              <p className="text-gray-600">
                Marketing strategies that match Marina's premium positioning
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Local Targeting</h3>
              <p className="text-gray-600">
                Reach Marina residents, JBR visitors, and tourists
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
            <Link href="/jlt" className="card hover:shadow-lg transition-shadow text-center">
              <h3 className="font-bold">JLT</h3>
            </Link>
          </div>
        </div>
      </section>

      <FAQ faqs={marinaFaqs} title="Dubai Marina Digital Marketing - FAQ" />

      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate Dubai Marina?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Free marketing audit - capture Marina's affluent market
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
