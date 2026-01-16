'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = '971523949010' // Your WhatsApp number
  const message = 'Hi! I want to discuss digital marketing services for my business.'
  
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-4 sm:bottom-32 sm:right-6 z-[9999] bg-green-500 hover:bg-green-600 active:bg-green-700 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all hover:scale-110 group touch-manipulation"
      style={{ position: 'fixed' }}
      aria-label="Contact us on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
      
      {/* Tooltip - hidden on mobile (touch devices don't have hover) */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium"
        >
          Chat with us on WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-white"></div>
        </motion.div>
      )}
      
      {/* Pulse animation - slightly reduced on mobile */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-70 sm:opacity-75"></span>
    </motion.a>
  )
}
