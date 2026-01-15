'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

const reasons = [
  {
    title: 'UAE Market Expertise',
    description: 'Deep understanding of the UAE market, culture, and consumer behavior.',
  },
  {
    title: 'Transparent Reporting',
    description: 'Regular detailed reports showing exactly how your campaigns are performing.',
  },
  {
    title: 'Dedicated Account Manager',
    description: 'A single point of contact who understands your business inside out.',
  },
  {
    title: 'Customized Strategies',
    description: 'No cookie-cutter solutions. Every strategy is tailored to your goals.',
  },
  {
    title: 'Fast Response Time',
    description: 'Average response time of under 2 hours during business hours.',
  },
  {
    title: 'ROI Focused',
    description: 'Every decision we make is driven by maximizing your return on investment.',
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
            We are more than just an agency - we are your growth partner
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
