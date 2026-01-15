'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiMail, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '@/lib/config'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-blue-100">
              Get a free consultation and discover how we can help you achieve your digital marketing goals
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                Get Free Consultation
                <FiArrowRight className="ml-2" />
              </Link>
              
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2 w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-6 justify-center items-center text-blue-100"
            >
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <FiPhone className="w-5 h-5" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              
              <span className="hidden md:inline">|</span>
              
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <FiMail className="w-5 h-5" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
