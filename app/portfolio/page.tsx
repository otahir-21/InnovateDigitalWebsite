'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

const portfolioItems = [
  {
    id: 1,
    slug: 'ecommerce-fashion-brand',
    title: 'E-Commerce Fashion Brand',
    category: 'E-Commerce',
    services: ['SEO', 'PPC', 'Social Media'],
    description: 'Increased online sales by 300% and achieved 450% growth in organic traffic for a leading fashion retailer in Dubai.',
    results: {
      revenue: '+300%',
      traffic: '+450%',
      conversion: '+120%',
    },
    image: '🛍️',
  },
  {
    id: 2,
    slug: 'tech-startup-launch',
    title: 'Tech Startup Launch',
    category: 'Technology',
    services: ['Branding', 'Web Development', 'Social Media'],
    description: 'Built brand identity and digital presence from scratch, generating 5M+ impressions and 3,500 quality leads.',
    results: {
      impressions: '5M+',
      leads: '3,500+',
      engagement: '+280%',
    },
    image: '💻',
  },
  {
    id: 3,
    slug: 'restaurant-chain-expansion',
    title: 'Restaurant Chain Expansion',
    category: 'Food & Beverage',
    services: ['Local SEO', 'Google Ads', 'Content'],
    description: 'Dominated local search results across multiple UAE locations, driving 250% increase in store visits.',
    results: {
      rankings: '50+',
      traffic: '+400%',
      visits: '+250%',
    },
    image: '🍽️',
  },
  {
    id: 4,
    slug: 'real-estate-portal',
    title: 'Real Estate Portal',
    category: 'Real Estate',
    services: ['SEO', 'Content Marketing', 'Web Dev'],
    description: 'Transformed online presence with SEO-optimized website, achieving top rankings for competitive keywords.',
    results: {
      rankings: 'Top 3',
      traffic: '+350%',
      inquiries: '+200%',
    },
    image: '🏢',
  },
  {
    id: 5,
    slug: 'healthcare-clinic-growth',
    title: 'Healthcare Clinic',
    category: 'Healthcare',
    services: ['Local SEO', 'Social Media', 'Branding'],
    description: 'Increased patient inquiries by 180% through strategic local SEO and social media campaigns.',
    results: {
      inquiries: '+180%',
      bookings: '+150%',
      reviews: '4.9/5',
    },
    image: '🏥',
  },
  {
    id: 6,
    slug: 'fitness-studio-transformation',
    title: 'Fitness Studio',
    category: 'Fitness',
    services: ['Social Media', 'Influencer Marketing', 'PPC'],
    description: 'Built strong social presence and achieved 300% increase in membership signups through targeted campaigns.',
    results: {
      members: '+300%',
      engagement: '+400%',
      reach: '2M+',
    },
    image: '💪',
  },
]

const categories = ['All', 'E-Commerce', 'Technology', 'Food & Beverage', 'Real Estate', 'Healthcare', 'Fitness']

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real results for real businesses. See how we've helped companies across UAE achieve their digital marketing goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border-2 transition-all font-medium text-sm ${
                  selectedCategory === category
                    ? 'border-primary-600 bg-primary-600 text-white'
                    : 'border-gray-200 hover:border-primary-600 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="card group hover:-translate-y-2 cursor-pointer">
                {/* Image Placeholder */}
                <div className="mb-6 h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center text-6xl">
                  {item.image}
                </div>

                {/* Category */}
                <div className="text-sm text-primary-600 font-semibold mb-2">
                  {item.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.services.map((service) => (
                    <span
                      key={service}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-gray-100">
                  {Object.entries(item.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-xl font-bold text-primary-600 mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-gray-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* View Case Study Link */}
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="text-primary-600 font-medium inline-flex items-center group-hover:gap-2 transition-all"
                >
                  View Case Study
                  <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Results That Speak</h2>
            <p className="text-xl text-gray-600">Across all our projects</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">200+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">300%</div>
              <div className="text-gray-600">Avg ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can achieve similar results for your business
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center"
          >
            Start Your Project
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
