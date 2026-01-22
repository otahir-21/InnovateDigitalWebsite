'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

const reasons = [
  {
    title: 'Google Partner Certified Agency',
    description: 'Official Google Partner since 2020. Only 3% of agencies worldwide achieve this certification.',
  },
  {
    title: 'Proven Track Record',
    description: '200+ successful projects in Dubai & UAE with 4.9/5 Google rating and 98% client satisfaction.',
  },
  {
    title: 'Expert Certified Team',
    description: '50+ professionals with Google Ads, Analytics, and Meta Blueprint certifications.',
  },
  {
    title: 'UAE Market Specialists',
    description: 'Deep expertise in Dubai, Abu Dhabi & UAE market. Bilingual Arabic & English services.',
  },
  {
    title: 'Transparent ROI Reporting',
    description: 'Monthly performance dashboards showing exact metrics, conversions, and 3x average ROI.',
  },
  {
    title: 'Dedicated Account Manager',
    description: 'Single point of contact responding within 2 hours during business hours.',
  },
]

export default function WhyChooseUs() {
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
            Why Choose <span className="gradient-text">Innovate Digital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Certified by Google, trusted by 200+ UAE businesses, delivering 3x average ROI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0">
                <FiCheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
        >
          <div className="text-center">
            <div className="text-5xl font-bold gradient-text mb-2">500+</div>
            <div className="text-gray-600">Successful Projects</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold gradient-text mb-2">200+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold gradient-text mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
