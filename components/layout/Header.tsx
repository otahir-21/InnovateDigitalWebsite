'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigationLinks } from '@/lib/config'
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setMobileSubmenuOpen(null)
      }
    }
    
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent body scroll when menu is open
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent event bubbling
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setMobileSubmenuOpen(null) // Reset submenu when closing
  }

  const toggleMobileSubmenu = (linkName: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setMobileSubmenuOpen(mobileSubmenuOpen === linkName ? null : linkName)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-text">
              Innovate Digital
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.submenu && <FiChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {link.submenu && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  >
                    {link.submenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 touch-manipulation"
            onClick={toggleMobileMenu}
            onTouchStart={(e) => e.stopPropagation()}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 py-4 bg-white"
            >
              {navigationLinks.map((link) => (
                <div key={link.name} className="py-1">
                  {/* Main Link with Toggle for Submenu */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className={`flex-1 block px-4 py-3 text-sm font-medium ${
                        pathname === link.href
                          ? 'text-primary-600'
                          : 'text-gray-700'
                      }`}
                      onClick={() => {
                        if (!link.submenu) {
                          setIsMobileMenuOpen(false)
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                    
                    {/* Submenu Toggle Button */}
                    {link.submenu && (
                      <button
                        onClick={(e) => toggleMobileSubmenu(link.name, e)}
                        className="px-4 py-3 text-gray-600 touch-manipulation"
                        aria-label={`Toggle ${link.name} submenu`}
                        aria-expanded={mobileSubmenuOpen === link.name}
                      >
                        <motion.div
                          animate={{ rotate: mobileSubmenuOpen === link.name ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiChevronRight className="w-5 h-5" />
                        </motion.div>
                      </button>
                    )}
                  </div>
                  
                  {/* Collapsible Submenu */}
                  <AnimatePresence>
                    {link.submenu && mobileSubmenuOpen === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gray-50 overflow-hidden"
                      >
                        {link.submenu.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-8 py-3 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setMobileSubmenuOpen(null)
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="px-4 pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center btn-primary touch-manipulation"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setMobileSubmenuOpen(null)
                  }}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
