'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiMail, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '@/lib/config'
import { fadeUp } from '@/lib/animations'

export default function CTA() {
  return (
    <section className="section-padding bg-black text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="inline-flex items-center gap-3 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white/45 font-medium mb-6">
              <span className="w-8 h-px bg-white/30" aria-hidden="true" />
              Trusted by 200+ Dubai & UAE Businesses
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Ready to 3x Your <span className="font-light italic">Business Growth?</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 text-white/70">
              Get a <strong className="text-white">FREE Marketing Audit</strong> worth AED 2,000 — discover untapped opportunities
            </p>
            
            <p className="text-sm uppercase tracking-[0.14em] mb-12 text-white/45 flex items-center justify-center gap-4 flex-wrap">
              <span>No Commitment Required</span>
              <span className="hidden sm:inline text-secondary-400">—</span>
              <span>24h Response Time</span>
              <span className="hidden sm:inline text-secondary-400">—</span>
              <span>Google Partner Certified</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold uppercase tracking-[0.08em] text-sm hover:bg-secondary-100 transition-colors inline-flex items-center justify-center"
              >
                Get Your Free AED 2,000 Audit
                <FiArrowRight className="ml-2" />
              </Link>
              
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white border border-white/25 px-8 py-4 rounded-full font-semibold uppercase tracking-[0.08em] text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2 w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 justify-center items-center text-white/50"
            >
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <FiPhone className="w-5 h-5" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              
              <span className="hidden md:inline text-secondary-400">—</span>
              
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
