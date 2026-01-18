'use client'

import { useState, useEffect } from 'react'
import { FiX, FiMail } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    // Check if popup was already shown/dismissed
    const popupShown = localStorage.getItem('exitPopupShown')
    const popupDismissed = localStorage.getItem('exitPopupDismissed')
    
    if (popupShown || popupDismissed) {
      return // Don't show if already shown or dismissed
    }

    let hasShownPopup = false

    // Desktop: Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Detect when mouse moves to top of screen (user about to leave)
      if (e.clientY <= 10 && !hasShownPopup) {
        hasShownPopup = true
        setIsVisible(true)
      }
    }

    // Mobile: Time-based trigger (after 30 seconds)
    let mobileTimer: NodeJS.Timeout
    if (window.innerWidth < 768) {
      mobileTimer = setTimeout(() => {
        if (!hasShownPopup) {
          hasShownPopup = true
          setIsVisible(true)
        }
      }, 30000) // 30 seconds
    }

    // Desktop exit intent
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (mobileTimer) clearTimeout(mobileTimer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('exitPopupDismissed', 'true')
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
          name: 'Exit Intent Lead',
          email: email,
          message: 'Requested FREE Digital Marketing Audit via Exit Intent Popup',
          subject: '🎯 FREE Audit Request - Exit Intent',
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        localStorage.setItem('exitPopupShown', 'true')
        
        // Close popup after 3 seconds
        setTimeout(() => {
          setIsVisible(false)
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

  if (!isVisible) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 animate-in zoom-in duration-300">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Close popup"
          >
            <FiX className="w-6 h-6" />
          </button>

          {!isSuccess ? (
            <>
              {/* Header with Gradient */}
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <HiSparkles className="w-12 h-12 animate-pulse" />
                  </div>
                  <h2 className="text-3xl font-bold text-center mb-2">
                    Wait! Don't Leave Yet 👋
                  </h2>
                  <p className="text-center text-white/90 text-lg">
                    Get Your <span className="font-bold underline">FREE</span> Digital Marketing Audit
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What You'll Get:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Complete website SEO analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Social media performance review</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Custom growth recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Competitor analysis insights</span>
                    </li>
                  </ul>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Get My FREE Audit Now! 🚀'
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    No credit card required. We respect your privacy. 🔒
                  </p>
                </form>
              </div>
            </>
          ) : (
            // Success State
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                You're All Set! 🎉
              </h3>
              <p className="text-gray-600 mb-2">
                Check your inbox for your FREE audit details.
              </p>
              <p className="text-sm text-gray-500">
                We'll get back to you within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
