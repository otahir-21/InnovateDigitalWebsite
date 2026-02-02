'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

// Sample case studies displayed on homepage - full data is in caseStudiesData.ts
const caseStudies = [
  {
    slug: 'ecommerce-seo-success',
    title: 'E-commerce SEO Success',
    client: 'Dubai Fashion Retailer',
    industry: 'Retail',
    challenge: 'Low organic traffic and poor search rankings',
    solution: 'Comprehensive SEO strategy with technical optimization, content marketing, and link building',
    results: [
      '250% increase in organic traffic',
      '180% boost in online sales',
      'Ranked #1 for 15+ target keywords',
      '40% reduction in bounce rate',
    ],
    image: '📈',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    slug: 'social-media-transformation',
    title: 'Social Media Transformation',
    client: 'UAE Hospitality Brand',
    industry: 'Hospitality',
    challenge: 'Limited social media presence and engagement',
    solution: 'Strategic social media management across Instagram, Facebook, and TikTok with influencer partnerships',
    results: [
      '500% increase in followers',
      '300% boost in engagement',
      '150% increase in bookings',
      'Generated 2M+ impressions monthly',
    ],
    image: '🚀',
    color: 'from-purple-500 to-pink-500',
  },
  {
    slug: 'web-development-redesign',
    title: 'Website Redesign & Optimization',
    client: 'Tech Startup UAE',
    industry: 'Technology',
    challenge: 'Outdated website with poor performance',
    solution: 'Modern, responsive web development with Next.js, optimized UX/UI',
    results: [
      '70% faster page load times',
      '45% reduction in bounce rate',
      '200% increase in conversions',
      '85+ Google PageSpeed score',
    ],
    image: '💻',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function CaseStudies() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Digital Marketing Success Stories from <strong>Dubai & UAE</strong> Businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 text-white overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer bg-gradient-to-br ${study.color}`}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-6">{study.image}</div>

                {/* Industry badge */}
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                  {study.industry}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2">
                  {study.title}
                </h3>

                {/* Client */}
                <p className="text-white/90 mb-4 font-medium">
                  {study.client}
                </p>

                {/* Challenge */}
                <div className="mb-4 pb-4 border-b border-white/20">
                  <p className="text-sm text-white/80 mb-2 font-semibold">Challenge:</p>
                  <p className="text-white/90 text-sm">{study.challenge}</p>
                </div>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FiCheckCircle className="flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{result}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/portfolio/${study.slug}`}
                  className="inline-flex items-center gap-2 font-semibold hover:gap-4 transition-all"
                >
                  View Full Case Study
                  <FiArrowRight />
                </Link>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow"
          >
            View All Case Studies
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
