import { Metadata } from 'next'
import Link from 'next/link'
import { FiAward, FiUsers, FiTrendingUp, FiTarget, FiHeart, FiZap } from 'react-icons/fi'
import Founder from '@/components/home/Founder'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'
import { aboutFAQs } from '@/lib/faqData'

export const metadata: Metadata = {
  title: 'About Us - Dubai\'s Leading Digital Marketing Agency | Innovate Digital',
  description: 'Meet Innovate Digital - the premier digital marketing agency in Dubai & UAE. Led by Osama Tahir, our expert team delivers exceptional results through innovative strategies.',
  openGraph: {
    title: 'About Us - Dubai\'s Leading Digital Marketing Agency | Innovate Digital',
    description: 'Leading digital marketing agency in Dubai & UAE with proven track record of success.',
  },
}

const values = [
  {
    icon: FiHeart,
    title: 'Client-Centric',
    description: 'Your success is our success. We prioritize your goals and work as an extension of your team.',
  },
  {
    icon: FiZap,
    title: 'Innovation',
    description: 'We stay ahead of digital trends to give you a competitive edge in the market.',
  },
  {
    icon: FiTarget,
    title: 'Results-Driven',
    description: 'Every strategy is designed to deliver measurable, meaningful results.',
  },
  {
    icon: FiAward,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do.',
  },
]

const team = [
  { name: 'John Smith', role: 'CEO & Founder', emoji: '👨‍💼' },
  { name: 'Sarah Ahmed', role: 'Head of SEO', emoji: '👩‍💼' },
  { name: 'Michael Chen', role: 'Creative Director', emoji: '👨‍🎨' },
  { name: 'Fatima Ali', role: 'Social Media Manager', emoji: '👩‍💻' },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We Are <span className="gradient-text">Innovate Digital</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A passionate team of digital marketing experts dedicated to helping businesses in UAE achieve extraordinary online growth.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <Founder />

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Founded in 2018, Innovate Digital was born from a simple belief: every business deserves access to world-class digital marketing services.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                What started as a small team of three passionate marketers has grown into a full-service digital agency serving over 200 clients across the UAE and Middle East.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we are proud to be recognized as one of the leading digital marketing agencies in UAE, known for our innovative strategies and exceptional client results.
              </p>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl flex items-center justify-center">
              <span className="text-8xl">🏢</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Talented professionals who make it all happen</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="card text-center group hover:-translate-y-2">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={aboutFAQs} title="About Innovate Digital - FAQ" />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-blue-100">Let's discuss how we can help grow your business</p>
          <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center">
            Get in Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
