'use client'

import { useState } from 'react'
import { FiSend } from 'react-icons/fi'

const countryCodes = [
  // Middle East (Priority)
  { code: '+971', country: '🇦🇪 UAE', flag: '🇦🇪' },
  { code: '+966', country: '🇸🇦 Saudi Arabia', flag: '🇸🇦' },
  { code: '+965', country: '🇰🇼 Kuwait', flag: '🇰🇼' },
  { code: '+974', country: '🇶🇦 Qatar', flag: '🇶🇦' },
  { code: '+973', country: '🇧🇭 Bahrain', flag: '🇧🇭' },
  { code: '+968', country: '🇴🇲 Oman', flag: '🇴🇲' },
  { code: '+20', country: '🇪🇬 Egypt', flag: '🇪🇬' },
  { code: '+962', country: '🇯🇴 Jordan', flag: '🇯🇴' },
  { code: '+961', country: '🇱🇧 Lebanon', flag: '🇱🇧' },
  { code: '+964', country: '🇮🇶 Iraq', flag: '🇮🇶' },
  { code: '+963', country: '🇸🇾 Syria', flag: '🇸🇾' },
  { code: '+967', country: '🇾🇪 Yemen', flag: '🇾🇪' },
  { code: '+970', country: '🇵🇸 Palestine', flag: '🇵🇸' },
  
  // North America
  { code: '+1', country: '🇺🇸 USA', flag: '🇺🇸' },
  { code: '+1', country: '🇨🇦 Canada', flag: '🇨🇦' },
  { code: '+52', country: '🇲🇽 Mexico', flag: '🇲🇽' },
  
  // Europe
  { code: '+44', country: '🇬🇧 UK', flag: '🇬🇧' },
  { code: '+49', country: '🇩🇪 Germany', flag: '🇩🇪' },
  { code: '+33', country: '🇫🇷 France', flag: '🇫🇷' },
  { code: '+39', country: '🇮🇹 Italy', flag: '🇮🇹' },
  { code: '+34', country: '🇪🇸 Spain', flag: '🇪🇸' },
  { code: '+31', country: '🇳🇱 Netherlands', flag: '🇳🇱' },
  { code: '+32', country: '🇧🇪 Belgium', flag: '🇧🇪' },
  { code: '+41', country: '🇨🇭 Switzerland', flag: '🇨🇭' },
  { code: '+43', country: '🇦🇹 Austria', flag: '🇦🇹' },
  { code: '+46', country: '🇸🇪 Sweden', flag: '🇸🇪' },
  { code: '+47', country: '🇳🇴 Norway', flag: '🇳🇴' },
  { code: '+45', country: '🇩🇰 Denmark', flag: '🇩🇰' },
  { code: '+358', country: '🇫🇮 Finland', flag: '🇫🇮' },
  { code: '+48', country: '🇵🇱 Poland', flag: '🇵🇱' },
  { code: '+351', country: '🇵🇹 Portugal', flag: '🇵🇹' },
  { code: '+30', country: '🇬🇷 Greece', flag: '🇬🇷' },
  { code: '+353', country: '🇮🇪 Ireland', flag: '🇮🇪' },
  { code: '+420', country: '🇨🇿 Czech Republic', flag: '🇨🇿' },
  { code: '+7', country: '🇷🇺 Russia', flag: '🇷🇺' },
  { code: '+380', country: '🇺🇦 Ukraine', flag: '🇺🇦' },
  { code: '+90', country: '🇹🇷 Turkey', flag: '🇹🇷' },
  
  // Asia
  { code: '+91', country: '🇮🇳 India', flag: '🇮🇳' },
  { code: '+92', country: '🇵🇰 Pakistan', flag: '🇵🇰' },
  { code: '+880', country: '🇧🇩 Bangladesh', flag: '🇧🇩' },
  { code: '+86', country: '🇨🇳 China', flag: '🇨🇳' },
  { code: '+81', country: '🇯🇵 Japan', flag: '🇯🇵' },
  { code: '+82', country: '🇰🇷 South Korea', flag: '🇰🇷' },
  { code: '+65', country: '🇸🇬 Singapore', flag: '🇸🇬' },
  { code: '+60', country: '🇲🇾 Malaysia', flag: '🇲🇾' },
  { code: '+66', country: '🇹🇭 Thailand', flag: '🇹🇭' },
  { code: '+62', country: '🇮🇩 Indonesia', flag: '🇮🇩' },
  { code: '+63', country: '🇵🇭 Philippines', flag: '🇵🇭' },
  { code: '+84', country: '🇻🇳 Vietnam', flag: '🇻🇳' },
  { code: '+852', country: '🇭🇰 Hong Kong', flag: '🇭🇰' },
  { code: '+886', country: '🇹🇼 Taiwan', flag: '🇹🇼' },
  { code: '+977', country: '🇳🇵 Nepal', flag: '🇳🇵' },
  { code: '+94', country: '🇱🇰 Sri Lanka', flag: '🇱🇰' },
  { code: '+98', country: '🇮🇷 Iran', flag: '🇮🇷' },
  { code: '+93', country: '🇦🇫 Afghanistan', flag: '🇦🇫' },
  
  // Oceania
  { code: '+61', country: '🇦🇺 Australia', flag: '🇦🇺' },
  { code: '+64', country: '🇳🇿 New Zealand', flag: '🇳🇿' },
  
  // Africa
  { code: '+27', country: '🇿🇦 South Africa', flag: '🇿🇦' },
  { code: '+234', country: '🇳🇬 Nigeria', flag: '🇳🇬' },
  { code: '+254', country: '🇰🇪 Kenya', flag: '🇰🇪' },
  { code: '+233', country: '🇬🇭 Ghana', flag: '🇬🇭' },
  { code: '+212', country: '🇲🇦 Morocco', flag: '🇲🇦' },
  { code: '+213', country: '🇩🇿 Algeria', flag: '🇩🇿' },
  { code: '+216', country: '🇹🇳 Tunisia', flag: '🇹🇳' },
  { code: '+218', country: '🇱🇾 Libya', flag: '🇱🇾' },
  { code: '+249', country: '🇸🇩 Sudan', flag: '🇸🇩' },
  { code: '+251', country: '🇪🇹 Ethiopia', flag: '🇪🇹' },
  { code: '+256', country: '🇺🇬 Uganda', flag: '🇺🇬' },
  
  // South America
  { code: '+55', country: '🇧🇷 Brazil', flag: '🇧🇷' },
  { code: '+54', country: '🇦🇷 Argentina', flag: '🇦🇷' },
  { code: '+56', country: '🇨🇱 Chile', flag: '🇨🇱' },
  { code: '+57', country: '🇨🇴 Colombia', flag: '🇨🇴' },
  { code: '+51', country: '🇵🇪 Peru', flag: '🇵🇪' },
  { code: '+58', country: '🇻🇪 Venezuela', flag: '🇻🇪' },
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+971',
    phone: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    
    try {
      // Combine country code and phone number
      const fullPhone = formData.phone ? `${formData.countryCode} ${formData.phone}` : ''
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: fullPhone,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ 
          name: '', 
          email: '', 
          countryCode: '+971',
          phone: '', 
          company: '', 
          message: '' 
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <div className="flex gap-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition bg-white"
            style={{ minWidth: '140px' }}
          >
            {countryCodes.map((item) => (
              <option key={item.code} value={item.code}>
                {item.flag} {item.code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
            placeholder="50 123 4567"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Select country code and enter your phone number
        </p>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
          placeholder="Your Company"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-start">
          <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <div>
            <strong>Success!</strong> Thank you for contacting us. We'll get back to you within 24 hours.
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-start">
          <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <div>
            <strong>Error!</strong> {errorMessage || 'Something went wrong. Please try again or email us directly at osama@innovatedigital.ae'}
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending Message...
          </>
        ) : (
          <>
            Send Message
            <FiSend className="ml-2" />
          </>
        )}
      </button>

      <p className="text-sm text-gray-500 text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  )
}
