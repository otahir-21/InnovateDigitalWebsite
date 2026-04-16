import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'
import { generateServiceSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Brand Identity Agency Dubai | Logo Design & Branding UAE',
  description: 'Leading brand identity agency in Dubai. Logo design, brand guidelines & visual identity for UAE startups and businesses. Bilingual Arabic/English branding. From AED 5,000.',
  keywords: ['Brand Identity Agency Dubai', 'Brand Identity Dubai', 'Logo Design Dubai', 'Brand Design Dubai', 'Brand Guidelines Design Dubai', 'Brand Identity for Startups Dubai', 'Brand Identity Design Services', 'Branding Agency UAE'],
  alternates: {
    canonical: '/services/branding',
  },
  openGraph: {
    title: 'Brand Identity Agency Dubai | Logo Design & Branding UAE',
    description: 'Professional brand identity design for UAE businesses. Logo, guidelines, Arabic/English branding. From AED 5,000.',
    url: `${siteConfig.url}/services/branding`,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Identity Agency Dubai | Logo Design & Branding UAE',
    description: 'Professional brand identity design for UAE businesses. Logo, guidelines, Arabic/English branding. From AED 5,000.',
    images: [siteConfig.ogImage],
  },
}

const services = [
  {
    title: 'Brand Identity Design Services',
    description: 'A complete visual identity system — logo, color palette, typography, and usage rules — so your brand looks consistent everywhere.',
    features: ['Primary & alternate logo variants', 'Color palette with hex/CMYK/Pantone codes', 'Typography system', 'Business card & letterhead design', 'Social media templates'],
  },
  {
    title: 'Brand Strategy & Positioning',
    description: 'Define what your brand stands for before we design anything. We research your market and competitors to find the position that wins.',
    features: ['Market & competitor analysis', 'Brand positioning statement', 'Tone of voice guidelines', 'Messaging framework', 'Target audience personas'],
  },
  {
    title: 'Brand Guidelines Design Dubai',
    description: 'A detailed brand guidelines document so every designer, printer, and employee uses your brand correctly — every time.',
    features: ['Logo usage rules (do\'s and don\'ts)', 'Color & typography specifications', 'Photography & icon style', 'Digital & print application examples', 'Editable brand book (PDF + Figma)'],
  },
  {
    title: 'Arabic & Bilingual Branding',
    description: 'Brand identities that work in both English and Arabic — essential for the UAE and GCC markets.',
    features: ['Arabic logo & logotype design', 'Arabic calligraphy & typography', 'Bilingual business cards & stationery', 'Right-to-left layout design', 'Arabic social media templates'],
  },
]

const benefits = [
  { icon: FiCheck, title: 'Stand Out in the UAE Market', description: 'Dubai is one of the most competitive markets in the world. A professional brand identity makes your business instantly recognizable.' },
  { icon: FiCheck, title: 'Build Instant Credibility', description: 'Businesses with consistent, professional branding close deals faster. Clients trust you before the first meeting.' },
  { icon: FiCheck, title: 'Command Premium Pricing', description: 'Strong brands charge 20-30% more than unbranded competitors for the same service — and win.' },
  { icon: FiCheck, title: 'Works in Arabic & English', description: 'All brand assets are designed to work seamlessly in both English and Arabic — right for the UAE, GCC and beyond.' },
]

const process = [
  { step: '01', title: 'Discovery', description: 'We learn your business, audience, and competitive landscape. No guessing — every design decision is rooted in research.' },
  { step: '02', title: 'Strategy', description: 'We define your brand positioning, personality, and tone of voice before a single logo concept is sketched.' },
  { step: '03', title: 'Design', description: 'We present multiple logo concepts with a full reasoning behind each. You pick a direction and we refine it.' },
  { step: '04', title: 'Delivery', description: 'You receive final files in every format (AI, EPS, SVG, PNG, PDF) plus a full brand guidelines document.' },
]

const faqs = [
  {
    question: 'What does a brand identity agency in Dubai charge?',
    answer: 'Brand identity packages in Dubai range from AED 5,000 for a logo-only project to AED 50,000+ for a full brand identity including strategy, guidelines, and all marketing materials. At Innovate Digital, our brand identity packages start from AED 5,000 and include logo, color palette, typography, and a brand guidelines PDF.',
  },
  {
    question: 'How long does brand identity design take?',
    answer: 'Logo design: 1-2 weeks. Full brand identity (logo + guidelines + stationery): 3-5 weeks. Complete brand strategy + identity: 6-10 weeks. We also offer a 48-hour initial concept delivery for urgent projects.',
  },
  {
    question: 'What is included in a brand identity package?',
    answer: 'Our standard brand identity package includes: primary logo, alternate logo versions (horizontal, stacked, icon-only), color palette (hex, CMYK, Pantone), typography selection, brand guidelines PDF, business card design, letterhead, email signature, and social media profile assets. All files delivered in AI, EPS, SVG, and PNG formats.',
  },
  {
    question: 'Do you design bilingual Arabic/English brands?',
    answer: 'Yes. We have native Arabic designers experienced in Arabic calligraphy and typography. Every bilingual brand we create is designed to look equally strong in Arabic (right-to-left) and English. This is essential for UAE and GCC markets.',
  },
  {
    question: 'Can you create brand guidelines for an existing logo?',
    answer: 'Yes. If you already have a logo but no brand guidelines, we can build a full guidelines document around it — covering color, typography, logo usage rules, and application examples. This is a common project for growing UAE businesses.',
  },
  {
    question: 'Do you offer rebranding for established businesses?',
    answer: 'Yes. Rebranding includes a brand audit, strategy update, visual refresh, and a migration plan to transition smoothly from old to new brand. We help businesses evolve without losing the brand equity they\'ve built.',
  },
  {
    question: 'What if I\'m a startup with a small budget?',
    answer: 'We work with Dubai startups regularly and offer phased branding — start with a logo and core identity, then add guidelines and materials as you grow. Our startup brand packages begin at AED 5,000.',
  },
]

export default function BrandingPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Brand Identity Agency Dubai',
    description: 'Professional brand identity design services in Dubai and UAE. Logo design, brand guidelines, bilingual Arabic/English branding for startups and businesses.',
    url: `${siteConfig.url}/services/branding`,
    serviceType: 'Brand Identity Design',
    areaServed: 'United Arab Emirates',
    priceRange: '$$',
  })

  return (
    <div className="pt-20">
      <Script id="branding-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="container mx-auto px-4"><Breadcrumbs /></div>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Brand Identity Agency</span> Dubai
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Logo design, brand guidelines, and complete visual identity for UAE businesses — in English, Arabic, or both.
            </p>
            <p className="text-lg text-gray-500 mb-8">
              From AED 5,000 · 48-hour initial concepts · Unlimited revisions
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Get Free Brand Consultation <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-600">
                <div className="text-sm font-semibold text-pink-900 mb-2">Service</div>
                <div className="text-lg font-bold text-gray-900">Brand Identity & Visual Design</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                <div className="text-sm font-semibold text-purple-900 mb-2">Best For</div>
                <div className="text-lg font-bold text-gray-900">Startups & rebranding businesses in UAE</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <div className="text-sm font-semibold text-blue-900 mb-2">Timeline</div>
                <div className="text-lg font-bold text-gray-900">3–5 weeks for complete brand identity</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                <div className="text-sm font-semibold text-orange-900 mb-2">Starting Price</div>
                <div className="text-lg font-bold text-gray-900">From AED 5,000</div>
              </div>
            </div>
            <div className="mt-6 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-pink-600 mb-1">100+</div>
                  <div className="text-sm text-gray-600">Brands created in UAE</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600 mb-1">48hrs</div>
                  <div className="text-sm text-gray-600">Initial concepts delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600 mb-1">∞</div>
                  <div className="text-sm text-gray-600">Revisions included</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity Design Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Brand Identity Design Services in Dubai</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every project starts with strategy. We don't just make logos — we build brand identities that position your business correctly in the UAE market.
            </p>
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

      {/* Brand Identity for Startups Dubai */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Brand Identity for Startups in Dubai</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Dubai's startup scene is one of the most active in the world — and first impressions count. Investors, partners, and customers judge your brand before they hear your pitch.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We've helped 100+ UAE startups build brand identities that look established from day one, without the corporate agency price tag.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <FiCheck className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Startup-friendly packages from AED 5,000</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Phased delivery — logo first, guidelines as you grow</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Pitch deck templates included</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Arabic and English versions for GCC expansion</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn-primary inline-flex items-center">
                  Start Your Brand <FiArrowRight className="ml-2" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Startup Brand Package Includes</h3>
                {[
                  'Primary logo + 3 alternate versions',
                  'Color palette (hex, CMYK, Pantone)',
                  'Font selection & typography rules',
                  'Business card design',
                  'Email signature',
                  'Social media profile & cover images',
                  'Brand guidelines PDF',
                  'All source files (AI, EPS, SVG, PNG)',
                ].map((item) => (
                  <div key={item} className="flex items-center py-3 border-b border-indigo-100 last:border-0">
                    <FiCheck className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why invest */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Brand Identity Matters in the UAE</h2>
            <p className="text-xl text-gray-600">Dubai businesses compete globally — your brand needs to match that ambition</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Brand Identity Process</h2>
            <p className="text-xl text-gray-600">Strategy first, design second — that's why our brands perform</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-indigo-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <p className="text-indigo-100">Brand identities created in UAE</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">48hrs</div>
              <p className="text-indigo-100">Initial concepts delivered</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">AED 5K</div>
              <p className="text-indigo-100">Starting price for full brand identity</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Brand Identity FAQ" />

      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Brand Identity?</h2>
          <p className="text-xl mb-8 text-blue-100">Free 30-minute consultation. We'll tell you exactly what your brand needs before you spend a dirham.</p>
          <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center">
            Get Free Consultation <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
