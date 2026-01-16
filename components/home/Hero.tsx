'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium">
                🚀 #1 Digital Marketing Agency in UAE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Transform Your Business with{' '}
              <span className="gradient-text">Digital Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              We are a leading digital marketing agency in UAE, specializing in SEO, social media marketing, and web development. Drive measurable results with data-driven strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center group">
                Get Free Consultation
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="btn-secondary inline-flex items-center justify-center group">
                <FiPlay className="mr-2" />
                Watch Our Work
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200"
            >
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
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
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
                  <circle cx="80" cy="150" r="35" fill="#3B82F6" opacity="0.9"/>
                  <text x="80" y="158" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">SEO</text>
                  
                  {/* Social Media Icon */}
                  <circle cx="420" cy="200" r="30" fill="#8B5CF6" opacity="0.9"/>
                  <path d="M 410 195 L 415 200 L 410 205 M 415 200 L 430 200" 
                        stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  
                  {/* Analytics Icon */}
                  <circle cx="440" cy="300" r="28" fill="#10B981" opacity="0.9"/>
                  <rect x="428" y="305" width="6" height="10" fill="white"/>
                  <rect x="436" y="300" width="6" height="15" fill="white"/>
                  <rect x="444" y="295" width="6" height="20" fill="white"/>
                  
                  {/* PPC/Ads Icon */}
                  <circle cx="70" cy="280" r="32" fill="#F59E0B" opacity="0.9"/>
                  <text x="70" y="288" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">PPC</text>
                  
                  {/* Growth Arrow */}
                  <path d="M 380 380 L 450 310" stroke="#EF4444" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M 450 310 L 440 315 M 450 310 L 445 320" 
                        stroke="#EF4444" strokeWidth="4" strokeLinecap="round"/>
                  
                  {/* Stars/Sparkles */}
                  <circle cx="150" cy="120" r="3" fill="#F59E0B"/>
                  <circle cx="380" cy="140" r="4" fill="#8B5CF6"/>
                  <circle cx="100" cy="380" r="3" fill="#10B981"/>
                  <circle cx="450" cy="400" r="4" fill="#3B82F6"/>
                  
                  {/* Results/Stats Cards */}
                  <rect x="350" y="380" width="120" height="60" rx="8" fill="white" opacity="0.95" 
                        stroke="#3B82F6" strokeWidth="2"/>
                  <text x="410" y="405" textAnchor="middle" fill="#3B82F6" fontSize="20" fontWeight="bold">+300%</text>
                  <text x="410" y="425" textAnchor="middle" fill="#6B7280" fontSize="12">ROI Growth</text>
                </svg>
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                ✓ Verified Agency
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
