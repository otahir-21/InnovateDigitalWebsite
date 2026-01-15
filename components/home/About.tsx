'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiAward, FiUsers, FiTrendingUp, FiTarget } from 'react-icons/fi'

const features = [
  {
    icon: FiAward,
    title: 'Award-Winning Agency',
    description: 'Recognized for excellence in digital marketing',
  },
  {
    icon: FiUsers,
    title: 'Expert Team',
    description: 'Certified professionals with 10+ years experience',
  },
  {
    icon: FiTrendingUp,
    title: 'Proven Results',
    description: '300% average ROI increase for our clients',
  },
  {
    icon: FiTarget,
    title: 'Data-Driven',
    description: 'Strategic approach backed by analytics',
  },
]

export default function About() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <p className="text-lg">About Image</p>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-2xl p-6"
            >
              <div className="text-4xl font-bold text-primary-600 mb-1">5+ Years</div>
              <div className="text-sm text-gray-600">In UAE Market</div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Growth Partner in the <span className="gradient-text">Digital World</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a full-service digital marketing agency based in UAE, dedicated to helping businesses achieve their online goals. Our team of experts combines creativity with data-driven strategies to deliver exceptional results.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From startups to established enterprises, we have helped hundreds of businesses in UAE and across the Middle East grow their digital presence and drive real business outcomes.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/about" className="btn-primary inline-flex items-center">
              Learn More About Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
