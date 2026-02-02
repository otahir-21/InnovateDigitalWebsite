'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

const reasons = [
  {
    title: 'Google Partner Certified Agency',
    description: 'Official Google Partner certified digital marketing agency in Dubai since 2020, delivering expert SEO, paid ads and performance marketing services.',
  },
  {
    title: 'Proven Track Record',
    description: '200+ successful digital marketing campaigns in Dubai and across the UAE with 4.9/5 Google rating and 98% client satisfaction.',
  },
  {
    title: 'Expert Certified Team',
    description: '50+ certified digital marketing professionals specializing in SEO, Google Ads, Analytics and Meta advertising solutions.',
  },
  {
    title: 'UAE Market Specialists',
    description: 'Deep expertise in Dubai, Abu Dhabi and UAE markets, offering bilingual digital marketing services in Arabic and English.',
  },
  {
    title: 'Transparent ROI Reporting',
    description: 'Monthly performance reports showing SEO rankings, campaign metrics, conversions and measurable ROI growth',
  },
  {
    title: 'Dedicated Account Manager',
    description: 'A dedicated digital marketing expert managing your campaigns with fast response times and ongoing optimization.',
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
            Why Choose  Our Digital Marketing<br/><span className="gradient-text">Agency in Dubai And UAE</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Google-certified digital marketing experts trusted by 200+ businesses in Dubai & UAE, delivering up to 3x average ROI.
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
