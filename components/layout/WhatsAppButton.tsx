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
      className="fixed bottom-6 right-6 z-[9999] bg-green-500 hover:bg-green-600 active:bg-green-700 text-white p-4 rounded-full shadow-2xl group touch-manipulation will-change-transform"
      aria-label="Contact us on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 200, 
        damping: 15, 
        delay: 0.3,
        duration: 0.6
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="w-7 h-7 relative z-10 pointer-events-none" />
      
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
      
    </motion.a>
  )
}
