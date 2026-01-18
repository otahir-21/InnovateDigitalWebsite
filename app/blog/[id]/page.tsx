import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiShare2, FiTwitter, FiFacebook, FiLinkedin, FiBookOpen } from 'react-icons/fi'

// Blog posts data (keeping only 2 posts for brevity - add the rest similarly)
const blogPosts = [
  {
    id: '1',
    title: 'The Ultimate Guide to SEO in UAE for 2026',
    content: `
      <p>Search Engine Optimization (SEO) in the UAE market requires a unique approach tailored to the region's diverse demographics, multilingual landscape, and competitive business environment. This comprehensive guide will help you master SEO strategies specifically designed for success in the UAE market.</p>

      <h2>Understanding the UAE Search Landscape</h2>
      <p>The UAE has one of the highest internet penetration rates globally, with over 99% of the population online. This digital-savvy market presents both opportunities and challenges for businesses looking to improve their search engine visibility.</p>

      <h3>Key UAE SEO Statistics:</h3>
      <ul>
        <li>99% internet penetration rate</li>
        <li>85% of searches happen on mobile devices</li>
        <li>Arabic and English are primary search languages</li>
        <li>Dubai and Abu Dhabi dominate search volumes</li>
        <li>Voice search is growing 40% year-over-year</li>
      </ul>

      <h2>Essential SEO Strategies for UAE Market</h2>

      <h3>1. Mobile-First Optimization</h3>
      <p>With 85% of UAE users searching on mobile, your website MUST be mobile-optimized. Google uses mobile-first indexing, meaning it primarily uses the mobile version of your site for ranking.</p>
      <ul>
        <li><strong>Page Speed:</strong> Aim for under 2 seconds load time</li>
        <li><strong>Responsive Design:</strong> Perfect display on all devices</li>
        <li><strong>Touch-Friendly:</strong> Large, easy-to-tap buttons</li>
        <li><strong>Readable Fonts:</strong> Minimum 16px font size</li>
      </ul>

      <h3>2. Bilingual SEO (Arabic + English)</h3>
      <p>The UAE market is multilingual. Optimizing for both Arabic and English can dramatically increase your reach and reduce competition.</p>
      <ul>
        <li><strong>Arabic Keywords:</strong> Research Arabic search terms specific to your industry</li>
        <li><strong>RTL Support:</strong> Ensure proper right-to-left text rendering</li>
        <li><strong>Separate Pages:</strong> Create dedicated Arabic and English pages</li>
        <li><strong>Hreflang Tags:</strong> Implement proper language tags for Google</li>
      </ul>

      <h2>Conclusion</h2>
      <p>SEO success in the UAE requires a strategic approach that combines technical excellence, quality content, local optimization, and cultural awareness. By implementing these strategies consistently, you can achieve sustainable growth in organic search visibility and attract more qualified leads to your business.</p>

      <p>Ready to dominate UAE search results? <a href="/contact">Contact our SEO experts</a> for a customized strategy tailored to your business goals.</p>
    `,
    excerpt: 'Discover the latest SEO strategies specifically tailored for the UAE market in 2026.',
    author: 'Sarah Ahmed',
    date: '2026-01-15',
    category: 'SEO',
    readTime: '8 min read',
    image: '🔍',
  },
  {
    id: '2',
    title: 'Social Media Trends Middle East 2026',
    content: `
      <p>The Middle East social media landscape is evolving rapidly, driven by high smartphone penetration, young demographics, and increasing digital adoption. Understanding these trends is crucial for brands looking to engage with audiences across the GCC region.</p>

      <h2>Key Social Media Statistics Middle East 2026</h2>
      <ul>
        <li>99% smartphone penetration in UAE</li>
        <li>95% of population active on social media</li>
        <li>Average 3.2 hours daily social media usage</li>
        <li>Instagram and TikTok lead in engagement</li>
        <li>Arabic content gets 2x more engagement</li>
      </ul>

      <h2>Top Social Media Trends for 2026</h2>

      <h3>1. Short-Form Video Dominance</h3>
      <p>Short-form video content continues to dominate social media in the Middle East, with TikTok, Instagram Reels, and YouTube Shorts leading the way.</p>
      
      <h2>Conclusion</h2>
      <p>Social media in the Middle East is dynamic and culturally unique. Success requires understanding local preferences, investing in Arabic content, leveraging short-form video, and building authentic connections with your audience.</p>
    `,
    excerpt: 'Stay ahead of the curve with the latest social media trends dominating the Middle East digital landscape.',
    author: 'Michael Chen',
    date: '2026-01-12',
    category: 'Social Media',
    readTime: '6 min read',
    image: '📱',
  },
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.id === params.id)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${post.title} | Innovate Digital Blog`,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
        >
          <FiArrowLeft />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <FiUser />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-8 bg-gray-50 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FiBookOpen className="text-primary-600 text-2xl" />
                <span className="font-semibold text-gray-900">Share this article:</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors" aria-label="Share on Twitter">
                  <FiTwitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors" aria-label="Share on Facebook">
                  <FiFacebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors" aria-label="Share on LinkedIn">
                  <FiLinkedin className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors" aria-label="Copy link">
                  <FiShare2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:flex prose-h2:items-center prose-h2:gap-3 prose-h2:before:content-[''] prose-h2:before:w-1 prose-h2:before:h-8 prose-h2:before:bg-gradient-to-b prose-h2:before:from-primary-600 prose-h2:before:to-secondary-600 prose-h2:before:rounded-full
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-primary-700 prose-h3:font-bold
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                prose-a:text-primary-600 prose-a:font-semibold prose-a:underline hover:prose-a:text-primary-700
                prose-ul:my-6 prose-ul:space-y-2
                prose-ol:my-6 prose-ol:space-y-2
                prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-lg
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-code:text-primary-600 prose-code:bg-primary-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-normal"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Implement These Strategies?
              </h2>
              <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Get a free consultation and let our experts help you achieve your digital marketing goals.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all hover:scale-105"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <span className="text-6xl">{relatedPost.image}</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-semibold mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-primary-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <FiClock className="w-4 h-4 mr-1" />
                        {relatedPost.readTime}
                      </div>
                      <span className="text-primary-600">Read more →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
