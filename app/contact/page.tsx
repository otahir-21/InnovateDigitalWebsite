import { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { siteConfig } from '@/lib/config'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Contact Us | Free Marketing Audit | Dubai Digital Agency | 2hr Response',
  description: 'Contact Innovate Digital Dubai. Get your free marketing audit today. 2-hour response time, no long-term contracts, free strategy session. Office in Dubai. Call +971 52 394 9010 or email contact@innovatedigital.ae.',
  keywords: ['Contact Digital Agency Dubai', 'Marketing Consultation Dubai', 'Free Marketing Audit UAE', 'Dubai Marketing Agency Contact', 'Get Quote Dubai'],
  openGraph: {
    title: 'Contact Us | Free Marketing Audit | 2hr Response',
    description: 'Get in touch for your free marketing audit. 2-hour response guaranteed. Dubai office.',
  },
}

const contactInfo = [
  {
    icon: FiPhone,
    title: 'Phone',
    details: siteConfig.contact.phone,
    link: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: FiMail,
    title: 'Email',
    details: siteConfig.contact.email,
    link: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: FiMapPin,
    title: 'Office',
    details: siteConfig.contact.address,
    link: '#',
  },
  {
    icon: FiClock,
    title: 'Working Hours',
    details: 'Monday - Saturday: 9AM - 6PM',
    link: '#',
  },
]

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to take your digital presence to the next level? Get in touch with our team for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href={siteConfig.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="card">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Hidden for now (will add later) */}
      {/* 
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <div className="text-center">
            <FiMapPin className="w-16 h-16 mx-auto mb-4" />
            <p>Google Maps Embed Here</p>
            <p className="text-sm">Add your Google Maps embed code</p>
          </div>
        </div>
      </section>
      */}
    </div>
  )
}
