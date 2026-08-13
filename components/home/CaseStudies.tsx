'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations'
import ScrollRevealText from '@/components/ui/ScrollRevealText'
import { caseStudies as allCaseStudies } from '@/lib/caseStudiesData'

const featuredStudies = allCaseStudies.slice(0, 3)

export default function CaseStudies() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            <ScrollRevealText text="Success Stories" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Digital Marketing Success Stories from <strong>Dubai & UAE</strong> Businesses.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {featuredStudies.map((study) => (
            <motion.div
              key={study.slug}
              variants={staggerItem}
              className="relative rounded-4xl p-8 bg-white text-black overflow-hidden group border border-black/10 cursor-pointer"
            >
              <div className="relative z-10">
                <div className="text-sm uppercase tracking-[0.2em] text-black/35 mb-6">{study.location}</div>

                <div className="inline-block px-3 py-1 border border-black/10 rounded-full text-xs uppercase tracking-wider font-medium mb-4">
                  {study.industry}
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {study.title}
                </h3>

                <p className="text-black/60 mb-4 font-medium">
                  {study.client}
                </p>

                <div className="mb-4 pb-4 border-b border-black/10">
                  <p className="text-sm text-black/45 mb-2 uppercase tracking-wider">Challenge</p>
                  <p className="text-black/80 text-sm">{study.challenge}</p>
                </div>

                <div className="space-y-2 mb-6">
                  {study.results.slice(0, 3).map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FiCheckCircle className="flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-black/80">{result}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/portfolio/${study.slug}`}
                  className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-sm hover:gap-3 transition-all"
                >
                  View Full Case Study
                  <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Case Studies
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
