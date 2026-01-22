import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { FiCheck, FiArrowRight, FiVideo } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'
import { generateServiceSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Video Production Dubai | Corporate Videos UAE | 95% Satisfaction',
  description: 'Professional video production in Dubai. Corporate videos, commercials, social content & animations. 80% engagement increase, 95% client satisfaction. 2-4 week delivery. From AED 5,000/video. Serving all UAE.',
  keywords: ['Video Production Dubai', 'Corporate Video Dubai', 'Video Marketing UAE', 'Commercial Production Dubai', 'Social Media Videos UAE', 'Animation Dubai', 'Videographer Dubai', 'Video Editing UAE'],
  openGraph: {
    title: 'Video Production Dubai | 95% Client Satisfaction | 2-4 Week Delivery',
    description: 'Cinematic quality video production in Dubai. Corporate videos, commercials & social content.',
  },
}

const services = [
  { title: 'Corporate Videos', description: 'Professional company profiles and presentations.', features: ['Company profiles', 'Training videos', 'Internal communications', 'Event coverage'] },
  { title: 'Social Media Videos', description: 'Engaging content optimized for social platforms.', features: ['Instagram Reels', 'TikTok videos', 'YouTube content', 'Stories & shorts'] },
  { title: 'Commercial Production', description: 'High-impact TV and digital commercials.', features: ['Concept development', 'Professional crew', 'Location scouting', 'Post-production'] },
  { title: 'Animation & Motion Graphics', description: 'Eye-catching animated explainer and promotional videos.', features: ['2D/3D animation', 'Motion graphics', 'Explainer videos', 'Logo animation'] },
]

const benefits = [
  {
    icon: FiVideo,
    title: 'High Engagement',
    description: 'Video content gets 1200% more shares than text and images combined. Capture attention and drive engagement.',
  },
  {
    icon: FiCheck,
    title: 'Professional Quality',
    description: '4K resolution, professional equipment, and experienced crew ensure broadcast-quality results.',
  },
  {
    icon: FiArrowRight,
    title: 'Fast Turnaround',
    description: 'Efficient production process with quick delivery without compromising on quality.',
  },
  {
    icon: FiVideo,
    title: 'Complete Service',
    description: 'From concept to final edit, we handle everything including scriptwriting, filming, and post-production.',
  },
]

const process = [
  {
    step: '01',
    title: 'Concept & Planning',
    description: 'Understand your goals, develop creative concepts, and plan the production in detail.',
  },
  {
    step: '02',
    title: 'Pre-Production',
    description: 'Scriptwriting, storyboarding, location scouting, and crew assembly.',
  },
  {
    step: '03',
    title: 'Production',
    description: 'Professional filming with 4K cameras, lighting, and audio equipment.',
  },
  {
    step: '04',
    title: 'Post-Production',
    description: 'Editing, color grading, sound design, motion graphics, and final delivery.',
  },
]

const faqs = [
  { question: 'How much does video production cost in UAE?', answer: 'Video production costs vary: Simple social media video: AED 2,000-5,000, Corporate video: AED 10,000-30,000, TV commercial: AED 50,000-200,000+, Animation: AED 5,000-50,000. Final cost depends on length, complexity, crew size, and production requirements.' },
  { question: 'How long does video production take?', answer: 'Timeline varies by project: Simple social video: 3-5 days, Corporate video: 2-3 weeks, Commercial: 4-8 weeks, Animation: 3-6 weeks. This includes pre-production, filming, and post-production. Rush delivery available for additional fee.' },
  { question: 'Do you provide scriptwriting?', answer: 'Yes! Our team includes experienced scriptwriters who create compelling scripts for all video types. We develop scripts in both English and Arabic, ensuring your message resonates with UAE audiences. Scriptwriting is included in most packages.' },
  { question: 'Can you film at our office or location?', answer: 'Absolutely! We film on-location throughout UAE including Dubai, Abu Dhabi, and all emirates. We handle all permits, equipment, and logistics. We can also arrange studio filming if preferred. Location scouting services available.' },
  { question: 'What about Arabic voiceover and subtitles?', answer: 'Yes! We provide professional Arabic voiceover services with native speakers, as well as English-Arabic subtitles. Essential for reaching local UAE audiences. We also offer multilingual voiceovers for diverse audiences.' },
  { question: 'Do you offer video editing services only?', answer: 'Yes! We provide standalone video editing services starting from AED 1,500. This includes color grading, audio mixing, motion graphics, and final output in any format. Perfect if you have existing footage that needs professional editing.' },
]

export default function VideoProductionPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Video Production Dubai',
    description: 'Professional video production services in Dubai. Corporate videos, commercials, social media content, and promotional videos to engage your audience.',
    url: `${siteConfig.url}/services/video-production`,
    serviceType: 'Video Production',
    areaServed: 'United Arab Emirates',
    priceRange: '$$$',
  })

  return (
    <div className="pt-20">
      <Script id="video-production-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="container mx-auto px-4"><Breadcrumbs /></div>
      <section className="section-padding bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6"><span className="gradient-text">Video Production</span> Services in UAE</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">Professional video content that captures attention and drives engagement. From concept to final cut.</p>
            <Link href="/contact" className="btn-primary inline-flex items-center">Get Free Video Quote<FiArrowRight className="ml-2" /></Link>
          </div>
        </div>
      </section>

      {/* Quick Facts - AI & Voice Search Optimized */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Video Production Quick Facts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <div className="text-sm font-semibold text-red-900 mb-2">Service Type</div>
                <div className="text-lg font-bold text-gray-900">Professional Video Content Creation</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                <div className="text-sm font-semibold text-orange-900 mb-2">Best For</div>
                <div className="text-lg font-bold text-gray-900">Businesses needing visual storytelling</div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
                <div className="text-sm font-semibold text-yellow-900 mb-2">Timeline</div>
                <div className="text-lg font-bold text-gray-900">2-4 weeks per project</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <div className="text-sm font-semibold text-green-900 mb-2">Investment</div>
                <div className="text-lg font-bold text-gray-900">From AED 5,000/video</div>
              </div>
            </div>
            <div className="mt-6 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-1">80%</div>
                  <div className="text-sm text-gray-600">Engagement increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Client satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-1">4K</div>
                  <div className="text-sm text-gray-600">Quality output</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Video Production Services</h2>
            <p className="text-xl text-gray-600">Complete video solutions for every need</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <FiCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our Video Production?</h2>
            <p className="text-xl text-gray-600">Professional video content that delivers results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Production Process</h2>
            <p className="text-xl text-gray-600">From concept to final delivery</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-yellow-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-yellow-100">Videos produced</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4K</div>
              <p className="text-yellow-100">Ultra HD quality</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10M+</div>
              <p className="text-yellow-100">Total video views</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-yellow-100">Client satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Video Production FAQ" />
      
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Stunning Videos?</h2>
          <p className="text-xl mb-8 text-blue-100">Get a free consultation and custom quote for your video project</p>
          <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center">Get Free Consultation<FiArrowRight className="ml-2" /></Link>
        </div>
      </section>
    </div>
  )
}
