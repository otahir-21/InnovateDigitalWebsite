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
  { name: 'Osama Tahir', role: 'CEO & Founder', emoji: '👨‍💼' },
  { name: 'Syed Shahjahan', role: 'Head of SEO', emoji: '👨‍💼' },
  { name: 'Ali Husnain', role: 'Creative Director', emoji: '👨‍🎨' },
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

      {/* Founder Section - Temporarily Hidden */}
      {/* <Founder /> */}

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
            <div className="relative h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 400 350" className="w-full h-full">
                {/* Company Growth Journey Illustration */}
                
                {/* Timeline base */}
                <path d="M 50 300 L 350 300" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round"/>
                
                {/* Timeline milestones */}
                
                {/* 2018 - Start (Small) */}
                <circle cx="80" cy="300" r="8" fill="#3B82F6"/>
                <text x="80" y="330" textAnchor="middle" fill="#6B7280" fontSize="12" fontWeight="bold">2018</text>
                <text x="80" y="345" textAnchor="middle" fill="#9CA3AF" fontSize="10">Founded</text>
                
                {/* Building 1 - Small startup */}
                <rect x="60" y="240" width="40" height="50" fill="#3B82F6" opacity="0.7"/>
                <rect x="65" y="248" width="10" height="10" fill="#DBEAFE"/>
                <rect x="80" y="248" width="10" height="10" fill="#DBEAFE"/>
                <rect x="65" y="263" width="10" height="10" fill="#DBEAFE"/>
                <rect x="80" y="263" width="10" height="10" fill="#DBEAFE"/>
                <rect x="65" y="278" width="10" height="10" fill="#DBEAFE"/>
                <rect x="80" y="278" width="10" height="10" fill="#DBEAFE"/>
                
                {/* Team icon 2018 */}
                <circle cx="80" cy="220" r="15" fill="#DBEAFE"/>
                <text x="80" y="228" textAnchor="middle" fontSize="16">👥</text>
                <text x="80" y="210" textAnchor="middle" fill="#3B82F6" fontSize="11" fontWeight="bold">3 people</text>
                
                {/* 2020 - Growth */}
                <circle cx="180" cy="300" r="8" fill="#8B5CF6"/>
                <text x="180" y="330" textAnchor="middle" fill="#6B7280" fontSize="12" fontWeight="bold">2020</text>
                <text x="180" y="345" textAnchor="middle" fill="#9CA3AF" fontSize="10">Expansion</text>
                
                {/* Building 2 - Medium size */}
                <rect x="150" y="210" width="60" height="80" fill="#8B5CF6" opacity="0.7"/>
                <rect x="157" y="220" width="12" height="12" fill="#EDE9FE"/>
                <rect x="175" y="220" width="12" height="12" fill="#EDE9FE"/>
                <rect x="193" y="220" width="12" height="12" fill="#EDE9FE"/>
                <rect x="157" y="238" width="12" height="12" fill="#EDE9FE"/>
                <rect x="175" y="238" width="12" height="12" fill="#EDE9FE"/>
                <rect x="193" y="238" width="12" height="12" fill="#EDE9FE"/>
                <rect x="157" y="256" width="12" height="12" fill="#EDE9FE"/>
                <rect x="175" y="256" width="12" height="12" fill="#EDE9FE"/>
                <rect x="193" y="256" width="12" height="12" fill="#EDE9FE"/>
                <rect x="157" y="274" width="12" height="12" fill="#EDE9FE"/>
                <rect x="175" y="274" width="12" height="12" fill="#EDE9FE"/>
                <rect x="193" y="274" width="12" height="12" fill="#EDE9FE"/>
                
                {/* Clients icon 2020 */}
                <circle cx="180" cy="185" r="18" fill="#EDE9FE"/>
                <text x="180" y="194" textAnchor="middle" fontSize="18">📊</text>
                <text x="180" y="172" textAnchor="middle" fill="#8B5CF6" fontSize="11" fontWeight="bold">50+ Clients</text>
                
                {/* 2024 - Now (Largest) */}
                <circle cx="310" cy="300" r="8" fill="#10B981"/>
                <text x="310" y="330" textAnchor="middle" fill="#6B7280" fontSize="12" fontWeight="bold">2024</text>
                <text x="310" y="345" textAnchor="middle" fill="#9CA3AF" fontSize="10">Leading</text>
                
                {/* Building 3 - Large successful company */}
                <rect x="270" y="170" width="80" height="120" fill="#10B981" opacity="0.7"/>
                <rect x="278" y="180" width="14" height="14" fill="#D1FAE5"/>
                <rect x="298" y="180" width="14" height="14" fill="#D1FAE5"/>
                <rect x="318" y="180" width="14" height="14" fill="#D1FAE5"/>
                <rect x="338" y="180" width="14" height="14" fill="#D1FAE5"/>
                <rect x="278" y="200" width="14" height="14" fill="#D1FAE5"/>
                <rect x="298" y="200" width="14" height="14" fill="#D1FAE5"/>
                <rect x="318" y="200" width="14" height="14" fill="#D1FAE5"/>
                <rect x="338" y="200" width="14" height="14" fill="#D1FAE5"/>
                <rect x="278" y="220" width="14" height="14" fill="#D1FAE5"/>
                <rect x="298" y="220" width="14" height="14" fill="#D1FAE5"/>
                <rect x="318" y="220" width="14" height="14" fill="#D1FAE5"/>
                <rect x="338" y="220" width="14" height="14" fill="#D1FAE5"/>
                <rect x="278" y="240" width="14" height="14" fill="#D1FAE5"/>
                <rect x="298" y="240" width="14" height="14" fill="#D1FAE5"/>
                <rect x="318" y="240" width="14" height="14" fill="#D1FAE5"/>
                <rect x="338" y="240" width="14" height="14" fill="#D1FAE5"/>
                <rect x="278" y="260" width="14" height="14" fill="#D1FAE5"/>
                <rect x="298" y="260" width="14" height="14" fill="#D1FAE5"/>
                <rect x="318" y="260" width="14" height="14" fill="#D1FAE5"/>
                <rect x="338" y="260" width="14" height="14" fill="#D1FAE5"/>
                <rect x="278" y="280" width="14" height="14" fill="#D1FAE5"/>
                <rect x="298" y="280" width="14" height="14" fill="#D1FAE5"/>
                <rect x="318" y="280" width="14" height="14" fill="#D1FAE5"/>
                <rect x="338" y="280" width="14" height="14" fill="#D1FAE5"/>
                
                {/* Success stats 2024 */}
                <circle cx="310" cy="140" r="22" fill="#D1FAE5"/>
                <text x="310" y="150" textAnchor="middle" fontSize="20">🏆</text>
                <text x="310" y="122" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="bold">200+ Clients</text>
                
                {/* Growth arrow connecting all */}
                <path d="M 100 260 Q 180 200 260 180" stroke="#F59E0B" strokeWidth="3" 
                      fill="none" strokeLinecap="round" strokeDasharray="5,5"/>
                <path d="M 260 180 L 252 183 M 260 180 L 257 188" 
                      stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
                
                {/* Title at top */}
                <text x="200" y="35" textAnchor="middle" fill="#3B82F6" fontSize="20" fontWeight="bold">Our Journey</text>
                <text x="200" y="55" textAnchor="middle" fill="#6B7280" fontSize="13">From Startup to Leading Agency</text>
                
                {/* Achievement badges */}
                <rect x="20" y="80" width="90" height="40" rx="8" fill="white" opacity="0.95" 
                      stroke="#3B82F6" strokeWidth="2"/>
                <text x="65" y="97" textAnchor="middle" fill="#3B82F6" fontSize="14" fontWeight="bold">500+</text>
                <text x="65" y="113" textAnchor="middle" fill="#6B7280" fontSize="10">Projects</text>
                
                <rect x="290" y="60" width="90" height="40" rx="8" fill="white" opacity="0.95" 
                      stroke="#10B981" strokeWidth="2"/>
                <text x="335" y="77" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="bold">98%</text>
                <text x="335" y="93" textAnchor="middle" fill="#6B7280" fontSize="10">Satisfaction</text>
                
                {/* Decorative stars */}
                <circle cx="140" cy="170" r="3" fill="#F59E0B"/>
                <circle cx="240" cy="150" r="3" fill="#8B5CF6"/>
                <circle cx="350" cy="140" r="4" fill="#10B981"/>
                <circle cx="40" cy="250" r="2" fill="#3B82F6"/>
              </svg>
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
