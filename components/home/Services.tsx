'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiSearch, FiTrendingUp, FiMonitor, FiEdit, FiVolume2, FiTarget } from 'react-icons/fi'

const services = [
  {
    icon: FiSearch,
    title: 'SEO Services',
    description: 'Improve Google rankings with SEO services in Dubai. Grow organic traffic, leads and visibility across the UAE market.',
    href: '/services/seo',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FiTrendingUp,
    title: 'Social Media Marketing',
    description: 'Build your brand on Instagram, Facebook, LinkedIn and TikTok. Engage your audience and grow across the UAE.',
    href: '/services/social-media',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FiTarget,
    title: 'PPC Management',
    description: 'Drive immediate results with Google Ads & Meta Ads. Target the right audience and maximize ROI across UAE markets.',
    href: '/services/ppc',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FiEdit,
    title: 'Content Marketing',
    description: 'Content marketing and blog writing that attracts, engages and converts your ideal audience across the UAE.',
    href: '/services/content-marketing',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: FiMonitor,
    title: 'Web Development',
    description: 'Professional web design & development in Dubai built to convert and support long-term growth across the UAE.',
    href: '/services/web-development',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: FiVolume2,
    title: 'Branding & Design',
    description: 'Branding and identity design that builds a memorable presence and resonates with customers across the UAE.',
    href: '/services/branding',
    color: 'from-indigo-500 to-indigo-600',
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Full-service digital marketing in Dubai and across the UAE — SEO, social media, PPC, content and web — plus email marketing, marketing automation and video production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <div className="card group hover:-translate-y-2 cursor-pointer h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <span className="text-primary-600 font-medium inline-flex items-center group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary inline-flex items-center">
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
