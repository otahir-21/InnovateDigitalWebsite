'use client'

import { useState } from 'react'
import { FiX, FiUser, FiMail, FiPhone, FiMessageSquare, FiCheck, FiArrowRight } from 'react-icons/fi'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
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
          subject: '🎯 New Lead - Mobile Contact Form',
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        
        // Auto close after 3 seconds
        setTimeout(() => {
          setIsSuccess(false)
          onClose()
        }, 3000)
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

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[60] max-w-lg mx-auto animate-in zoom-in slide-in-from-bottom-4 duration-300">
        <div className="bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <FiMessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Get Free Consultation</h2>
                <p className="text-xs text-white/80">We'll respond within 24 hours</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {isSuccess ? (
              // Success State
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Thank You! 🎉
                </h3>
                <p className="text-gray-600">
                  We've received your request and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center text-xs text-gray-600">
                    <FiCheck className="w-3 h-3 text-green-500 mr-1" />
                    <span>Free Strategy</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <FiCheck className="w-3 h-3 text-green-500 mr-1" />
                    <span>No Commitment</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <FiCheck className="w-3 h-3 text-green-500 mr-1" />
                    <span>24h Response</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        id="modal-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        placeholder="John Smith"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="email"
                        id="modal-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="tel"
                        id="modal-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="modal-service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In *
                    </label>
                    <select
                      id="modal-service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    >
                      <option value="">Select a service</option>
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

                  {/* Message */}
                  <div>
                    <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-1">
                      Brief Message (Optional)
                    </label>
                    <textarea
                      id="modal-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-base hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiArrowRight className="ml-2" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    🔒 Your information is secure and will never be shared
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
