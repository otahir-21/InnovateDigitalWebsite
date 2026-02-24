import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiShare2, FiTwitter, FiFacebook, FiLinkedin, FiBookOpen } from 'react-icons/fi'
import { getBlogPostBySlug, getAllBlogPostSlugs, getRelatedBlogPosts } from '@/lib/blogPostsData'
import { generateBlogPostingSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/config'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export async function generateStaticParams() {
  return getAllBlogPostSlugs()
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  const canonicalPath = `/blog/${post.slug}`

  return {
    title: `${post.title} | Innovate Digital Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      url: `${siteConfig.url}${canonicalPath}`,
      images: [
        typeof post.image === 'string' && post.image.startsWith('/')
          ? `${siteConfig.url}${post.image}`
          : siteConfig.ogImage,
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [
        typeof post.image === 'string' && post.image.startsWith('/')
          ? `${siteConfig.url}${post.image}`
          : siteConfig.ogImage,
      ],
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  const relatedPosts = getRelatedBlogPosts(params.slug, 3)

  if (!post) {
    notFound()
  }

  // Generate BlogPosting schema
  const blogSchema = generateBlogPostingSchema({
    title: post.title,
    description: post.excerpt,
    author: post.author,
    authorRole: post.authorRole,
    date: post.date,
    url: `${siteConfig.url}/blog/${post.slug}`,
    image: typeof post.image === 'string' && post.image.startsWith('/') ? `${siteConfig.url}${post.image}` : undefined,
    keywords: post.keywords,
    category: post.category,
  })

  return (
    <div className="min-h-screen bg-white">
      {/* BlogPosting Schema */}
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-24 pb-4">
        <Breadcrumbs />
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 pb-8">
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
                <FiUser className="w-5 h-5" />
                <div>
                  <span className="font-medium text-white">{post.author}</span>
                  <span className="text-sm text-white/70 ml-2">{post.authorRole}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-medium">Share:</span>
              <div className="flex gap-3">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors" aria-label="Share on Twitter">
                  <FiTwitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors" aria-label="Share on Facebook">
                  <FiFacebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors" aria-label="Share on LinkedIn">
                  <FiLinkedin className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors" aria-label="Copy link">
                  <FiShare2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" aria-label="Article content">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured image for SEO and visual hierarchy */}
            <img
              src={post.image.startsWith('/') || post.image.startsWith('http') ? post.image : '/blog-placeholder.svg'}
              alt={`${post.title} - Featured image`}
              className="w-full rounded-xl shadow-lg mb-12 object-cover max-h-[400px]"
              width={800}
              height={450}
            />
            {/* Article Content */}
            <div 
              className="blog-article-content prose prose-lg max-w-none
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
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                <span>Get Free Consultation</span>
                <FiArrowLeft className="rotate-180" />
              </Link>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-4">TAGS</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <FiBookOpen className="w-8 h-8 text-primary-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Related Articles
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                      <img
                        src={relatedPost.image.startsWith('/') || relatedPost.image.startsWith('http') ? relatedPost.image : '/blog-placeholder.svg'}
                        alt={`${relatedPost.title} - Innovate Digital Blog`}
                        className="w-full h-full object-cover"
                        width={800}
                        height={450}
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-semibold text-primary-600 mb-2 uppercase tracking-wide">
                        {relatedPost.category}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <FiClock className="w-4 h-4" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiCalendar className="w-4 h-4" />
                          <span>{new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
