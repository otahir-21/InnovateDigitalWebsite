'use client'

import { motion } from 'framer-motion'
import { FaGoogle, FaFacebook, FaStar, FaAward, FaCertificate } from 'react-icons/fa'

const platforms = [
  {
    name: 'Google',
    icon: FaGoogle,
    color: 'text-[#4285F4]',
    link: 'https://www.google.com/partners',
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    color: 'text-[#1877F2]',
    link: 'https://www.facebook.com/business',
  },
  {
    name: 'Clutch',
    icon: FaCertificate,
    color: 'text-[#FF3D2E]',
    link: 'https://clutch.co',
  },
  {
    name: 'GoodFirms',
    icon: FaAward,
    color: 'text-[#FF6B00]',
    link: 'https://www.goodfirms.co',
  },
  {
    name: 'Trustpilot',
    icon: FaStar,
    color: 'text-[#00B67A]',
    link: 'https://www.trustpilot.com',
  },
]

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Trusted by Leading Brands in UAE
          </h2>
          <p className="text-gray-600">
            Certified partners and recognized by top platforms
          </p>
        </motion.div>

        {/* Platform Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
            >
              <platform.icon className={`w-16 h-16 ${platform.color} mb-3 group-hover:scale-110 transition-transform`} />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
                {platform.name}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-12 border-t border-gray-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">4.9★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Client Testimonial Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                M
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                S
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                A
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                +
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Join <strong className="text-blue-600">200+ satisfied clients</strong> across UAE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
