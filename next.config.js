/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better error detection
  reactStrictMode: true,
  
  // Enable SWC minification for faster builds
  swcMinify: true,
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Compression
  compress: true,
  
  // Performance optimizations
  poweredByHeader: false,
  
  // Optimize bundle splitting
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },
  
  // Webpack configuration to reduce file watchers
  webpack: (config, { isServer }) => {
    // Ignore watching node_modules
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules', '**/.git', '**/.next'],
    }
    return config
  },
  
  // Redirects for old WordPress URLs to new Next.js pages
  async redirects() {
    return [
      // Old service pages
      {
        source: '/search-engine-optimization',
        destination: '/services/seo',
        permanent: true,
      },
      {
        source: '/search-engine-optimization/',
        destination: '/services/seo',
        permanent: true,
      },
      {
        source: '/social-media-marketing',
        destination: '/services/social-media',
        permanent: true,
      },
      {
        source: '/social-media-marketing/',
        destination: '/services/social-media',
        permanent: true,
      },
      {
        source: '/content-marketing',
        destination: '/services/content-marketing',
        permanent: true,
      },
      {
        source: '/content-marketing/',
        destination: '/services/content-marketing',
        permanent: true,
      },
      {
        source: '/website-design-and-development',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/website-design-and-development/',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/graphic-designing',
        destination: '/services/branding',
        permanent: true,
      },
      {
        source: '/graphic-designing/',
        destination: '/services/branding',
        permanent: true,
      },
      {
        source: '/leads-generation',
        destination: '/services/ppc',
        permanent: true,
      },
      {
        source: '/leads-generation/',
        destination: '/services/ppc',
        permanent: true,
      },
      // Old page URLs
      {
        source: '/our-team',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/our-team/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/team-outsourcing',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/team-outsourcing/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/',
        permanent: true,
      },
      {
        source: '/faqs/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/price-03',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/price-03/',
        destination: '/contact',
        permanent: true,
      },
      // Elementor pages (old WordPress builder pages)
      {
        source: '/elementor-1287',
        destination: '/',
        permanent: true,
      },
      {
        source: '/elementor-1287/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/elementor-15',
        destination: '/',
        permanent: true,
      },
      {
        source: '/elementor-15/',
        destination: '/',
        permanent: true,
      },
      // Trailing slash redirects (optional, but helps with consistency)
      {
        source: '/about/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact/',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/blog/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/services/',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/portfolio/',
        destination: '/portfolio',
        permanent: true,
      },
    ]
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
