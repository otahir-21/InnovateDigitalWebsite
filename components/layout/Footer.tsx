import Link from 'next/link'
import { siteConfig, navigationLinks } from '@/lib/config'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 gradient-text">
              Innovate Digital
            </h3>
            <p className="text-sm mb-6">
              Leading digital marketing agency in UAE. We help businesses grow through innovative digital strategies.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="hover:text-primary-400 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="hover:text-primary-400 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="hover:text-primary-400 transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="hover:text-primary-400 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/seo" className="text-sm hover:text-primary-400 transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="text-sm hover:text-primary-400 transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/ppc" className="text-sm hover:text-primary-400 transition-colors">
                  PPC Management
                </Link>
              </li>
              <li>
                <Link href="/services/content-marketing" className="text-sm hover:text-primary-400 transition-colors">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-sm hover:text-primary-400 transition-colors">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-sm">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          {/* Microsoft Clarity Disclosure */}
          <div className="text-center text-xs text-gray-400 mb-4 max-w-3xl mx-auto">
            <p>
              We improve our products and services by using Microsoft Clarity to see how you use our website. 
              By using our site, you agree that we and Microsoft can collect and use this data. 
              Our <Link href="/privacy" className="hover:text-primary-400 underline">privacy policy</Link> has more details.
            </p>
          </div>
          
          <div className="text-center text-sm">
            <p>
              © {currentYear} Innovate Digital. All rights reserved. | 
              <Link href="/privacy" className="hover:text-primary-400 ml-2">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-primary-400 ml-2">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
