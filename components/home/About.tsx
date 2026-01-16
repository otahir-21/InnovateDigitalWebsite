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
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-8">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Team collaboration and growth illustration */}
                
                {/* Background circles */}
                <circle cx="200" cy="200" r="150" fill="#3B82F6" opacity="0.05"/>
                <circle cx="200" cy="200" r="100" fill="#8B5CF6" opacity="0.05"/>
                
                {/* Central target/goal */}
                <circle cx="200" cy="180" r="60" fill="none" stroke="#3B82F6" strokeWidth="3"/>
                <circle cx="200" cy="180" r="45" fill="none" stroke="#8B5CF6" strokeWidth="3"/>
                <circle cx="200" cy="180" r="30" fill="none" stroke="#10B981" strokeWidth="3"/>
                <circle cx="200" cy="180" r="15" fill="#F59E0B"/>
                
                {/* Achievement star */}
                <path d="M 200 155 L 208 172 L 226 175 L 213 187 L 216 205 L 200 196 L 184 205 L 187 187 L 174 175 L 192 172 Z" 
                      fill="#F59E0B" stroke="#F59E0B" strokeWidth="2"/>
                
                {/* Team members (circles with icons) */}
                {/* Person 1 - Left */}
                <circle cx="100" cy="200" r="25" fill="#3B82F6" opacity="0.9"/>
                <circle cx="100" cy="195" r="8" fill="white"/>
                <path d="M 85 215 Q 100 205 115 215" fill="white"/>
                
                {/* Person 2 - Right */}
                <circle cx="300" cy="200" r="25" fill="#8B5CF6" opacity="0.9"/>
                <circle cx="300" cy="195" r="8" fill="white"/>
                <path d="M 285 215 Q 300 205 315 215" fill="white"/>
                
                {/* Person 3 - Bottom Left */}
                <circle cx="140" cy="310" r="22" fill="#10B981" opacity="0.9"/>
                <circle cx="140" cy="306" r="7" fill="white"/>
                <path d="M 127 323 Q 140 315 153 323" fill="white"/>
                
                {/* Person 4 - Bottom Right */}
                <circle cx="260" cy="310" r="22" fill="#EF4444" opacity="0.9"/>
                <circle cx="260" cy="306" r="7" fill="white"/>
                <path d="M 247 323 Q 260 315 273 323" fill="white"/>
                
                {/* Connecting lines to target */}
                <line x1="125" y1="200" x2="140" y2="180" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5"/>
                <line x1="275" y1="200" x2="260" y2="180" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5"/>
                <line x1="155" y1="295" x2="180" y2="220" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5"/>
                <line x1="245" y1="295" x2="220" y2="220" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5"/>
                
                {/* Growth metrics */}
                <rect x="50" y="80" width="80" height="50" rx="8" fill="white" opacity="0.95" 
                      stroke="#3B82F6" strokeWidth="2"/>
                <text x="90" y="100" textAnchor="middle" fill="#3B82F6" fontSize="16" fontWeight="bold">+500</text>
                <text x="90" y="118" textAnchor="middle" fill="#6B7280" fontSize="11">Projects</text>
                
                <rect x="270" y="80" width="80" height="50" rx="8" fill="white" opacity="0.95" 
                      stroke="#10B981" strokeWidth="2"/>
                <text x="310" y="100" textAnchor="middle" fill="#10B981" fontSize="16" fontWeight="bold">98%</text>
                <text x="310" y="118" textAnchor="middle" fill="#6B7280" fontSize="11">Success</text>
                
                {/* Growth arrow */}
                <path d="M 320 340 L 370 290" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round"/>
                <path d="M 370 290 L 362 295 M 370 290 L 365 298" 
                      stroke="#F59E0B" strokeWidth="4" strokeLinecap="round"/>
                
                {/* Decorative elements */}
                <circle cx="60" cy="50" r="4" fill="#8B5CF6"/>
                <circle cx="340" cy="60" r="3" fill="#F59E0B"/>
                <circle cx="80" cy="350" r="3" fill="#10B981"/>
                <circle cx="320" cy="360" r="4" fill="#3B82F6"/>
                
                {/* Partnership handshake icon */}
                <circle cx="200" cy="350" r="30" fill="#3B82F6" opacity="0.1"/>
                <text x="200" y="365" textAnchor="middle" fontSize="32">🤝</text>
              </svg>
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
