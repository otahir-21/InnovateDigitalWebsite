'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations'
import ScrollRevealText from '@/components/ui/ScrollRevealText'

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
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <ScrollRevealText text="Why Choose Our Digital Marketing Agency in Dubai" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Google-certified digital marketing experts trusted by 200+ businesses in Dubai & UAE, delivering up to 3x average ROI.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={staggerItem}
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
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
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
