'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaQuoteLeft, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Founder() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Founder</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The visionary behind Innovate Digital's success story
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder - You'll replace this with your image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-48 h-48 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-6xl font-bold">AI</span>
                    </div>
                    <p className="text-lg font-medium">Add Your Photo Here</p>
                    <p className="text-sm opacity-90 mt-2">Replace this placeholder in the code</p>
                  </div>
                </div>
                {/* 
                  TO ADD YOUR IMAGE:
                  1. Add your photo to /public/founder.jpg
                  2. Uncomment the code below and remove the placeholder div above
                  
                  <Image
                    src="/founder.jpg"
                    alt="Founder & CEO"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                */}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-30"></div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Osama Tahir
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-4">
                  Founder & CEO
                </p>
                <div className="flex gap-4 mb-6">
                  <a
                    href="https://www.linkedin.com/in/otahir21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <FaQuoteLeft className="text-4xl text-blue-200 mb-4" />
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    My journey in digital marketing began over a decade ago, fueled by a simple belief: 
                    <strong className="text-gray-900"> every business deserves to thrive in the digital age</strong>.
                  </p>
                  
                  <p>
                    Starting from a small office in Dubai, I witnessed firsthand how the UAE market was rapidly 
                    evolving. Local businesses were struggling to adapt to digital transformation, and I saw an 
                    opportunity to make a real difference.
                  </p>

                  <p>
                    What started as a passion project quickly grew into Innovate Digital – a full-service agency 
                    dedicated to empowering UAE businesses with cutting-edge digital marketing strategies. We've 
                    helped over 200+ businesses across the Emirates achieve remarkable growth through SEO, social 
                    media, content marketing, and web development.
                  </p>

                  <p className="text-lg font-semibold text-gray-900 italic">
                    "Success isn't just about rankings and metrics – it's about creating meaningful connections 
                    between brands and their audiences. That's what drives us every single day."
                  </p>

                  <p>
                    Today, I'm proud to lead a team of passionate digital experts who share my vision of making 
                    digital excellence accessible to every business in the UAE. Our mission is simple: transform 
                    your digital presence into your most powerful business asset.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
