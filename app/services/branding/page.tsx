import { Metadata } from 'next'
import Link from 'next/link'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'

export const metadata: Metadata = {
  title: 'Branding & Design Services in UAE | Brand Identity Dubai',
  description: 'Professional branding and design services in Dubai & UAE. Create a memorable brand identity with logo design, brand guidelines, and visual identity systems.',
  keywords: ['Branding Dubai', 'Brand Identity UAE', 'Logo Design Dubai', 'Brand Strategy UAE', 'Graphic Design Dubai'],
}

const services = [
  { title: 'Brand Strategy', description: 'Define your brand positioning, values, and messaging.', features: ['Market research', 'Competitor analysis', 'Brand positioning', 'Messaging strategy'] },
  { title: 'Logo & Visual Identity', description: 'Create a distinctive logo and visual system.', features: ['Logo design', 'Color palette', 'Typography', 'Brand assets'] },
  { title: 'Brand Guidelines', description: 'Comprehensive guidelines for consistent brand application.', features: ['Style guide', 'Usage rules', 'Templates', 'Brand book'] },
  { title: 'Marketing Materials', description: 'Professional design for all your marketing needs.', features: ['Business cards', 'Brochures', 'Social media graphics', 'Presentations'] },
]

const benefits = [
  { icon: FiCheck, title: 'Stand Out', description: 'Differentiate your business in the crowded UAE market with a unique, memorable brand identity.' },
  { icon: FiArrowRight, title: 'Build Trust', description: 'Professional branding builds credibility and trust with your target audience from day one.' },
  { icon: FiCheck, title: 'Command Premium Pricing', description: 'Strong brands can charge 20-30% more than unbranded competitors for the same products/services.' },
  { icon: FiArrowRight, title: 'Consistent Experience', description: 'Brand guidelines ensure consistent messaging and visuals across all customer touchpoints.' },
]

const process = [
  { step: '01', title: 'Discovery & Research', description: 'Understand your business, target audience, and competitive landscape through research.' },
  { step: '02', title: 'Strategy & Positioning', description: 'Define your brand positioning, values, personality, and messaging framework.' },
  { step: '03', title: 'Design & Development', description: 'Create logo, visual identity system, and all brand assets with multiple concepts.' },
  { step: '04', title: 'Guidelines & Launch', description: 'Develop comprehensive brand guidelines and support your brand launch.' },
]

const faqs = [
  { question: 'How much does branding cost in UAE?', answer: 'Branding packages in UAE range from AED 15,000 for basic logo + identity to AED 100,000+ for complete rebrand including strategy, design, and implementation. Logo-only services start from AED 5,000. Final cost depends on scope, research depth, and deliverables.' },
  { question: 'How long does the branding process take?', answer: 'Timeline varies by scope: Logo design: 2-3 weeks, Brand identity: 4-6 weeks, Complete branding: 8-12 weeks. Includes strategy, design, revisions, and guideline creation. Rush delivery available for additional fee.' },
  { question: 'What\'s included in brand identity?', answer: 'Complete brand identity includes: Logo (primary, secondary, alternate versions), Color palette, Typography system, Brand guidelines, Business card design, Letterhead, Email signature, Social media templates. Additional assets available based on needs.' },
  { question: 'Do you offer rebranding services?', answer: 'Yes! We help businesses evolve their brand while maintaining brand equity. Includes brand audit, strategy refinement, visual refresh, and migration plan. We ensure smooth transition from old to new brand across all touchpoints.' },
  { question: 'Can you design Arabic brand elements?', answer: 'Absolutely! We have native Arabic designers experienced in Arabic calligraphy and typography. We create bilingual brand identities that work seamlessly in both English and Arabic. Essential for UAE and GCC markets.' },
  { question: 'What if we don\'t like the designs?', answer: 'We offer unlimited revisions within project scope to ensure you love your brand. Our process includes research, concept presentation, and iterative refinement. 95% of clients approve within 2-3 revision rounds. Your satisfaction is guaranteed.' },
]

export default function BrandingPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4"><Breadcrumbs /></div>
      <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6"><span className="gradient-text">Branding & Design</span> Services in UAE</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">Create a memorable brand identity that resonates with your audience and stands out in the competitive UAE market.</p>
            <Link href="/contact" className="btn-primary inline-flex items-center">Get Free Brand Consultation<FiArrowRight className="ml-2" /></Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Branding Services</h2>
            <p className="text-xl text-gray-600">Complete brand solutions from strategy to design</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Invest in Branding?</h2>
            <p className="text-xl text-gray-600">The power of a strong brand</p>
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Branding Process</h2>
            <p className="text-xl text-gray-600">From strategy to launch</p>
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
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <p className="text-indigo-100">Brands created</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30%</div>
              <p className="text-indigo-100">Premium pricing achieved</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <p className="text-indigo-100">Client approval rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-indigo-100">Awards won</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Branding & Design FAQ" />
      
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Brand?</h2>
          <p className="text-xl mb-8 text-blue-100">Get a free consultation and discover how we can create a memorable brand identity for you</p>
          <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center">Get Free Consultation<FiArrowRight className="ml-2" /></Link>
        </div>
      </section>
    </div>
  )
}
