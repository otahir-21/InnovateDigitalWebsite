'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiCalendar, FiUser, FiArrowRight, FiClock } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

// Sample blog posts - Replace with your actual blog data/CMS
const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to SEO in UAE for 2026',
    excerpt: 'Discover the latest SEO strategies specifically tailored for the UAE market. Learn how to dominate local search results.',
    author: 'Sarah Ahmed',
    date: '2026-01-15',
    category: 'SEO',
    readTime: '8 min read',
    image: '🔍',
  },
  {
    id: 2,
    title: 'Social Media Trends in Middle East for 2026',
    excerpt: 'Stay ahead of the curve with the latest social media trends dominating the Middle East digital landscape.',
    author: 'Michael Chen',
    date: '2026-01-12',
    category: 'Social Media',
    readTime: '6 min read',
    image: '📱',
  },
  {
    id: 3,
    title: 'How to Maximize ROI with Google Ads in Dubai',
    excerpt: 'Learn proven strategies to get the most out of your Google Ads budget in the competitive Dubai market.',
    author: 'John Smith',
    date: '2026-01-10',
    category: 'PPC',
    readTime: '10 min read',
    image: '💰',
  },
  {
    id: 4,
    title: 'Content Marketing Strategies for UAE Businesses',
    excerpt: 'Create compelling content that resonates with UAE audiences and drives real business results.',
    author: 'Fatima Ali',
    date: '2026-01-08',
    category: 'Content Marketing',
    readTime: '7 min read',
    image: '✍️',
  },
  {
    id: 5,
    title: 'Website Speed Optimization: A Complete Guide',
    excerpt: 'Improve your website loading speed and boost your Google rankings with these proven techniques.',
    author: 'Michael Chen',
    date: '2026-01-05',
    category: 'Web Development',
    readTime: '12 min read',
    image: '⚡',
  },
  {
    id: 6,
    title: 'Building a Strong Brand Identity in UAE',
    excerpt: 'Learn how to create a memorable brand that stands out in the competitive UAE market.',
    author: 'Sarah Ahmed',
    date: '2026-01-03',
    category: 'Branding',
    readTime: '9 min read',
    image: '🎨',
  },
]

const categories = ['All', 'SEO', 'Social Media', 'PPC', 'Content Marketing', 'Web Development', 'Branding']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

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
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Latest insights, tips, and strategies from digital marketing experts in UAE
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

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="card group hover:-translate-y-2 cursor-pointer">
                {/* Image Placeholder */}
                <div className="mb-6 h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center text-6xl">
                  {post.image}
                </div>

                {/* Category Badge */}
                <div className="text-sm text-primary-600 font-semibold mb-2">
                  {post.category}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <FiCalendar className="mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <FiUser className="text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{post.author}</div>
                    <div className="text-xs text-gray-500">Author</div>
                  </div>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.id}`}
                  className="mt-4 text-primary-600 font-medium inline-flex items-center group-hover:gap-2 transition-all"
                >
                  Read Full Article
                  <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated with Latest Marketing Insights
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Subscribe to our newsletter and get expert tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
