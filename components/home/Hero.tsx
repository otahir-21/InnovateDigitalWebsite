'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay, FiUser, FiMail, FiPhone, FiMessageSquare, FiCheck } from 'react-icons/fi'
import { countryCodes, popularCountries, otherCountries } from '@/lib/countryCodes'
import Marquee from '@/components/ui/Marquee'

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+971', // Default to UAE
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

  // Handle phone number input - only allow numbers
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Remove all non-digit characters
    const numbersOnly = value.replace(/\D/g, '')
    
    // Get max length for selected country
    const selectedCountry = countryCodes.find(c => c.code === formData.countryCode)
    const maxLength = selectedCountry?.maxLength || 10
    
    // Limit to max length
    const limitedValue = numbersOnly.slice(0, maxLength)
    
    setFormData({
      ...formData,
      phone: limitedValue
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Combine country code and phone number
    const fullPhoneNumber = `${formData.countryCode} ${formData.phone}`

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: fullPhoneNumber,
          message: `Service Interested: ${formData.service}\n\nMessage: ${formData.message}`,
          subject: '🎯 New Lead - Hero Form Submission',
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: '', email: '', countryCode: '+971', phone: '', service: '', message: '' })
        
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
    <section className="relative min-h-screen flex flex-col bg-white pt-20">
      <div className="container mx-auto max-w-7xl relative z-10 w-full flex-1 flex items-center px-5 py-10 lg:py-16">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 text-center md:text-left mx-auto md:mx-0 max-w-xl md:max-w-none space-y-4">

            <motion.p
            className="title-kicker justify-center md:justify-start"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Google Partner · Since 2020
            </motion.p>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[3.75rem] xl:text-7xl leading-[0.95] mt-2">
              <span className="block uppercase tracking-tight">Dubai&apos;s Leading</span>
              <span className="block font-light italic normal-case tracking-normal text-black/70 mt-1">
                Digital Marketing Agency
              </span>
            </h1>

            <motion.p
              className="text-base text-gray-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              SEO, Google Ads, social media, web development & branding — helping UAE businesses grow online since 2020.
            </motion.p>

            {/* Trust Signals - New */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FiCheck className="text-black flex-shrink-0" />
                <span>50+ 5-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheck className="text-black flex-shrink-0" />
                <span>3x Average ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheck className="text-black flex-shrink-0" />
                <span>Free Marketing Audit</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center group">
                <span>Get Your Free Marketing Audit 🎯</span>
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/portfolio"
                className="btn-secondary inline-flex items-center justify-center group"
                aria-label="View our portfolio and case studies"
              >
                <FiPlay className="mr-2" />
                See Success Stories
              </Link>
            </div>

          </div>

          {/* Right Column - Contact Form - Hidden on Mobile */}
          <div className="order-1 lg:order-2 hidden md:block">
            <div className="bg-white rounded-4xl p-6 lg:p-7 border border-black/10 max-w-lg mx-auto lg:mx-0">
              {/* Form Header */}
              <div className="text-center mb-5">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-black rounded-full mb-3">
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
                  <FiCheck className="w-3 h-3 text-black mr-1 flex-shrink-0" />
                  <span>Free Strategy</span>
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <FiCheck className="w-3 h-3 text-black mr-1 flex-shrink-0" />
                  <span>No Commitment</span>
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <FiCheck className="w-3 h-3 text-black mr-1 flex-shrink-0" />
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
                    className="text-black hover:text-black/70 font-medium text-sm underline underline-offset-2"
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
                          className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/20 focus:border-black transition-all outline-none text-sm"
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
                          className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/20 focus:border-black transition-all outline-none text-sm"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Service in Grid */}
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {/* Phone Number - Unified Modern Input */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      
                      {/* Unified Phone Input Container */}
                      <div className="relative flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all bg-white">
                        {/* Country Code Selector - Compact */}
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="px-2 py-2.5 border-r border-gray-300 bg-transparent focus:outline-none text-xs font-medium cursor-pointer flex-shrink-0 appearance-none bg-white"
                          title="Select country"
                          style={{ width: '80px', maxWidth: '80px', minWidth: '80px' }}
                        >
                          {/* Popular countries first */}
                          {popularCountries.map((country, index) => (
                            <option key={`popular-${country.code}-${index}`} value={country.code}>
                              {country.flag} {country.code}
                            </option>
                          ))}
                          {/* Separator */}
                          <option disabled>──────────</option>
                          {/* Other countries */}
                          {otherCountries.map((country, index) => (
                            <option key={`other-${country.code}-${index}`} value={country.code}>
                              {country.flag} {country.code}
                            </option>
                          ))}
                        </select>
                        
                        {/* Phone Number Input - Takes Full Space */}
                        <div className="relative flex-1">
                          <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            pattern="[0-9]*"
                            inputMode="numeric"
                            maxLength={countryCodes.find(c => c.code === formData.countryCode)?.maxLength || 10}
                            className="w-full pl-9 pr-3 py-2.5 border-0 focus:outline-none text-sm bg-transparent"
                            placeholder={formData.countryCode === '+971' ? '50 123 4567' : 'Enter phone number'}
                          />
                        </div>
                      </div>
                      
                      {/* Helper Text */}
                      <p className="text-xs text-gray-500 mt-1">
                        Numbers only • Max {countryCodes.find(c => c.code === formData.countryCode)?.maxLength} digits
                      </p>
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
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/20 focus:border-black transition-all outline-none text-sm"
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
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/20 focus:border-black transition-all outline-none resize-none text-sm"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white py-3 rounded-full font-semibold uppercase tracking-[0.08em] text-sm hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
      <Marquee />
    </section>
  )
}
