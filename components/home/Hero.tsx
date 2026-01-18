'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiArrowRight, FiPlay, FiUser, FiMail, FiPhone, FiMessageSquare, FiCheck } from 'react-icons/fi'

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Service Interested: ${formData.service}\n\nMessage: ${formData.message}`,
          subject: '🎯 New Lead - Hero Form Submission',
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false)
        }, 5000)
      } else {
        alert('Something went wrong. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      {/* Animated background elements - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 text-center md:text-left mx-auto md:mx-0 max-w-2xl md:max-w-none">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="bg-primary-100 text-primary-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                🚀 #1 Digital Marketing Agency in UAE
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Transform Your Business with{' '}
              <span className="gradient-text">Digital Excellence</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              We are a leading digital marketing agency in UAE, specializing in SEO, social media marketing, and web development. Drive measurable results with data-driven strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0 justify-center md:justify-start">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center group">
                <span>Get Free Consultation</span>
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                className="btn-secondary inline-flex items-center justify-center group"
                aria-label="Watch our portfolio video"
              >
                <FiPlay className="mr-2" />
                Watch Our Work
              </button>
            </div>

            {/* Stats - Only on larger screens */}
            <div className="hidden lg:grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
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

          {/* Right Column - Contact Form - Hidden on Mobile */}
          <div className="order-1 lg:order-2 hidden md:block">
            <div className="bg-white rounded-xl shadow-xl p-6 lg:p-7 border border-gray-100 max-w-lg mx-auto lg:mx-0">
              {/* Form Header */}
              <div className="text-center mb-5">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-3">
                  <FiMessageSquare className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1.5">
                  Get Free Consultation
                </h2>
                <p className="text-sm text-gray-600">
                  Take the first step towards digital success
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-2.5 mb-5 pb-5 border-b border-gray-100">
                <div className="flex items-center text-xs text-gray-600">
                  <FiCheck className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                  <span>Free Strategy</span>
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <FiCheck className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                  <span>No Commitment</span>
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <FiCheck className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                  <span>24h Response</span>
                </div>
              </div>

              {isSuccess ? (
                // Success Message
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FiCheck className="w-7 h-7 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Thank You! 🎉
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                // Contact Form
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Name & Email in Grid on Desktop */}
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1.5">
                        Name *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-sm"
                          placeholder="John Smith"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5">
                        Email *
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-sm"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Service in Grid */}
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1.5">
                        Phone *
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-sm"
                          placeholder="+971 50 123 4567"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-medium text-gray-700 mb-1.5">
                        Service *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-sm"
                      >
                        <option value="">Select service</option>
                        <option value="Increase Website Traffic (SEO)">Increase Website Traffic (SEO)</option>
                        <option value="Manage My Social Media">Manage My Social Media</option>
                        <option value="Run Google/Facebook Ads">Run Google/Facebook Ads</option>
                        <option value="Create Content & Blogs">Create Content & Blogs</option>
                        <option value="Build/Redesign My Website">Build/Redesign My Website</option>
                        <option value="Design My Logo & Branding">Design My Logo & Branding</option>
                        <option value="Setup My Online Store">Setup My Online Store</option>
                        <option value="Email Marketing Campaigns">Email Marketing Campaigns</option>
                        <option value="Video Production & Marketing">Video Production & Marketing</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Track & Analyze My Results">Track & Analyze My Results</option>
                        <option value="Automate My Marketing">Automate My Marketing</option>
                        <option value="Complete Digital Marketing">Complete Digital Marketing</option>
                        <option value="Not Sure - Need Advice">Not Sure - Need Advice</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none text-sm"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold text-sm hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Started Now
                        <FiArrowRight className="ml-2" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-500 mt-2">
                    🔒 Secure & private
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
