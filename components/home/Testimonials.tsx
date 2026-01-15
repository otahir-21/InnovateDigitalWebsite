'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Ahmed Al-Mansoori',
    position: 'CEO, Tech Solutions UAE',
    content: 'Innovate Digital transformed our online presence completely. Their SEO strategies helped us rank #1 for our target keywords, and our leads increased by 400% in just 6 months.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    name: 'Sarah Johnson',
    position: 'Marketing Director, Dubai Fashion',
    content: 'The team\'s expertise in social media marketing is outstanding. They created campaigns that truly resonated with our audience. Our engagement rates went through the roof!',
    rating: 5,
    image: '👩‍💼',
  },
  {
    name: 'Mohammed Hassan',
    position: 'Founder, FoodHub Dubai',
    content: 'Professional, responsive, and results-driven. They built us a lightning-fast website and managed our Google Ads campaigns with exceptional ROI. Highly recommended!',
    rating: 5,
    image: '👨‍💼',
  },
]

export default function Testimonials() {
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
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-gray-200 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">200+</div>
              <div className="text-sm text-gray-600">5-Star Reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
