'use client'

import Link from 'next/link'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Animated background elements - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content - NO ANIMATIONS ON MOBILE */}
          <div className="animate-on-desktop">
            <div className="inline-block mb-4 animate-on-desktop-delay-1">
              <span className="bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium">
                🚀 #1 Digital Marketing Agency in UAE
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-on-desktop-delay-2">
              Transform Your Business with{' '}
              <span className="gradient-text">Digital Excellence</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-on-desktop-delay-3">
              We are a leading digital marketing agency in UAE, specializing in SEO, social media marketing, and web development. Drive measurable results with data-driven strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-on-desktop-delay-4">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center group">
                Get Free Consultation
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                className="btn-secondary inline-flex items-center justify-center group"
                aria-label="Watch our portfolio video showcasing successful digital marketing projects"
              >
                <FiPlay className="mr-2" />
                Watch Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200 animate-on-desktop-delay-5">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Team Experts</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative hidden lg:block animate-on-desktop-scale">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300"></div>
              
              {/* Main illustration */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-12 flex items-center justify-center">
                <svg viewBox="0 0 500 500" className="w-full h-full">
                  {/* Digital Marketing Illustration */}
                  
                  {/* Laptop/Screen */}
                  <rect x="100" y="180" width="300" height="180" rx="8" fill="#3B82F6" opacity="0.1"/>
                  <rect x="110" y="190" width="280" height="140" rx="4" fill="#3B82F6"/>
                  <rect x="120" y="200" width="260" height="110" fill="#1E3A8A"/>
                  
                  {/* Charts on screen */}
                  <rect x="140" y="220" width="40" height="60" fill="#10B981" opacity="0.8"/>
                  <rect x="190" y="240" width="40" height="40" fill="#8B5CF6" opacity="0.8"/>
                  <rect x="240" y="230" width="40" height="50" fill="#F59E0B" opacity="0.8"/>
                  <rect x="290" y="210" width="40" height="70" fill="#EF4444" opacity="0.8"/>
                  
                  {/* Line graph */}
                  <path d="M 140 280 L 180 260 L 220 270 L 260 240 L 300 220 L 340 230" 
                        stroke="#60A5FA" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  
                  {/* Keyboard */}
                  <rect x="110" y="330" width="280" height="15" rx="2" fill="#E5E7EB"/>
                  
                  {/* Floating elements around laptop */}
                  
                  {/* SEO Badge */}
                  <circle cx="80" cy="120" r="35" fill="#10B981" opacity="0.9"/>
                  <text x="80" y="120" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" dy=".3em">SEO</text>
                  
                  {/* Social Media Icon */}
                  <circle cx="420" cy="140" r="35" fill="#3B82F6" opacity="0.9"/>
                  <text x="420" y="140" textAnchor="middle" fontSize="30" dy=".3em">📱</text>
                  
                  {/* Analytics Badge */}
                  <circle cx="70" cy="280" r="30" fill="#8B5CF6" opacity="0.9"/>
                  <text x="70" y="280" textAnchor="middle" fontSize="24" dy=".3em">📊</text>
                  
                  {/* Growth Arrow */}
                  <circle cx="430" cy="280" r="30" fill="#F59E0B" opacity="0.9"/>
                  <text x="430" y="280" textAnchor="middle" fontSize="24" dy=".3em">📈</text>
                  
                  {/* Target Icon */}
                  <circle cx="250" cy="80" r="30" fill="#EF4444" opacity="0.9"/>
                  <text x="250" y="80" textAnchor="middle" fontSize="24" dy=".3em">🎯</text>
                  
                  {/* Decorative elements */}
                  <circle cx="50" cy="450" r="15" fill="#60A5FA" opacity="0.6"/>
                  <circle cx="450" cy="420" r="20" fill="#F472B6" opacity="0.6"/>
                  <circle cx="250" cy="420" r="10" fill="#34D399" opacity="0.6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
