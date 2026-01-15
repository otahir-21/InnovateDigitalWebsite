import { Metadata } from 'next'
import Link from 'next/link'
import { FiCalendar, FiUser, FiArrowRight, FiClock } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Digital Marketing Blog | Latest Tips & Insights from UAE',
  description: 'Expert digital marketing insights, SEO tips, social media strategies, and industry news from leading UAE digital agency.',
  openGraph: {
    title: 'Digital Marketing Blog - Innovate Digital UAE',
    description: 'Latest digital marketing tips and insights from UAE experts.',
  },
}

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

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-gray-200 hover:border-primary-600 hover:text-primary-600 transition-colors font-medium text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card group hover:-translate-y-2 cursor-pointer">
                {/* Image Placeholder */}
                <div className="mb-6 h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center text-6xl">
                  {post.image}
                </div>

                {/* Category */}
                <div className="text-sm text-primary-600 font-semibold mb-2">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <FiUser className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <span className="flex items-center">
                    <FiClock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary-600 font-medium inline-flex items-center group-hover:gap-2 transition-all"
                >
                  Read More
                  <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-primary-600 text-white rounded-lg">1</button>
              <button className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
              <button className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get the latest digital marketing insights delivered to your inbox weekly
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
