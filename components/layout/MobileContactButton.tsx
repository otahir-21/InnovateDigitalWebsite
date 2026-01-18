'use client'

import { FiMessageSquare } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const ContactFormModal = dynamic(() => import('@/components/ui/ContactFormModal'), {
  ssr: false,
})

export default function MobileContactButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {/* Mobile Contact Button - Stacked above WhatsApp button */}
      <motion.button
        onClick={() => setIsModalOpen(true)}
        className="md:hidden fixed bottom-28 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl touch-manipulation will-change-transform"
        aria-label="Open contact form"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: 'spring', 
          stiffness: 200, 
          damping: 15, 
          delay: 0.5,
          duration: 0.6
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiMessageSquare className="w-7 h-7 relative z-10 pointer-events-none" />
        
        {/* Tooltip */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-xs font-medium"
          >
            Get Free Quote
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-white"></div>
          </motion.div>
        )}
      </motion.button>

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
