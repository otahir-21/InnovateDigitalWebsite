import { Metadata } from 'next'
import Link from 'next/link'
import { FiCheck, FiArrowRight, FiSmartphone } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'

export const metadata: Metadata = {
  title: 'Mobile App Development Services in UAE | iOS & Android Dubai',
  description: 'Professional mobile app development in Dubai & UAE. Custom iOS and Android apps. Expert app developers delivering user-friendly, high-performance mobile solutions.',
  keywords: ['Mobile App Development Dubai', 'iOS App Development UAE', 'Android App Dubai', 'App Developer UAE', 'Mobile App Company Dubai'],
}

const services = [
  { title: 'iOS App Development', description: 'Native iOS apps for iPhone and iPad.', features: ['Swift/SwiftUI', 'App Store optimization', 'Apple guidelines compliance', 'iOS updates'] },
  { title: 'Android App Development', description: 'Native Android apps for all devices.', features: ['Kotlin/Java', 'Play Store optimization', 'Material Design', 'Multi-device support'] },
  { title: 'Cross-Platform Apps', description: 'Build once, deploy to iOS and Android.', features: ['React Native', 'Flutter', 'Cost-effective', 'Faster development'] },
  { title: 'App Maintenance', description: 'Ongoing support and updates for your app.', features: ['Bug fixes', 'OS updates', 'Feature enhancements', 'Performance monitoring'] },
]

const benefits = [
  { icon: FiSmartphone, title: 'Mobile-First UAE', description: '85% of UAE internet users access via mobile. Reach your audience where they are with a professional app.' },
  { icon: FiCheck, title: 'Native Performance', description: 'Fast, smooth user experience with native iOS and Android development optimized for performance.' },
  { icon: FiArrowRight, title: 'Offline Functionality', description: 'Apps work offline and sync when online, providing better UX than mobile websites.' },
  { icon: FiSmartphone, title: 'Push Notifications', description: 'Re-engage users with targeted push notifications, increasing retention by 3-10x.' },
]

const process = [
  { step: '01', title: 'Discovery & Design', description: 'Understand requirements, create wireframes, and design beautiful user interfaces.' },
  { step: '02', title: 'Development', description: 'Build your app with clean code, integrate backend, and implement all features.' },
  { step: '03', title: 'Testing & QA', description: 'Rigorous testing on real devices to ensure bug-free, smooth performance.' },
  { step: '04', title: 'Launch & Support', description: 'App Store submission, launch, and ongoing maintenance and updates.' },
]

const faqs = [
  { question: 'How much does mobile app development cost in UAE?', answer: 'App development costs vary: Simple app: AED 30,000-60,000, Medium complexity: AED 60,000-150,000, Complex app: AED 150,000-500,000+. Cross-platform apps typically cost 30-40% less than native. Final cost depends on features, design, backend, and platform choice.' },
  { question: 'Should I build for iOS, Android, or both?', answer: 'In UAE, iOS has 60% market share (higher than global average). We recommend: Start with iOS if targeting premium segment, Start with Android for mass market, Build both for maximum reach. Cross-platform development lets you launch on both platforms cost-effectively.' },
  { question: 'How long does app development take?', answer: 'Timeline varies: Simple app: 2-3 months, Medium complexity: 3-6 months, Complex app: 6-12 months. Includes design, development, testing, and App Store submission. We provide detailed timelines and milestone-based delivery.' },
  { question: 'Do you handle App Store and Play Store submissions?', answer: 'Yes! We handle complete App Store and Play Store submissions including account setup, app listing optimization, screenshots, descriptions, and submission process. We also manage updates and ensure compliance with all guidelines.' },
  { question: 'Can you add features to my existing app?', answer: 'Absolutely! We provide app enhancement services including new features, redesigns, performance optimization, and technology upgrades. We can work with apps built by other developers. Services start from AED 10,000 based on complexity.' },
  { question: 'Do you provide ongoing app maintenance?', answer: 'Yes! We offer monthly maintenance packages from AED 3,000/month including bug fixes, OS compatibility updates, security patches, performance monitoring, and minor feature updates. Essential for keeping your app running smoothly.' },
]

export default function MobileAppPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4"><Breadcrumbs /></div>
      <section className="section-padding bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6"><span className="gradient-text">Mobile App Development</span> in UAE</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">Custom mobile apps that users love. Expert iOS and Android development for businesses in UAE.</p>
            <Link href="/contact" className="btn-primary inline-flex items-center">Get Free App Quote<FiArrowRight className="ml-2" /></Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our App Development Services</h2>
            <p className="text-xl text-gray-600">Complete mobile solutions from concept to launch</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Build a Mobile App?</h2>
            <p className="text-xl text-gray-600">The power of mobile apps for your business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-cyan-600" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our App Development Process</h2>
            <p className="text-xl text-gray-600">From idea to App Store</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-cyan-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <p className="text-cyan-100">Apps launched</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1M+</div>
              <p className="text-cyan-100">Total downloads</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.8/5</div>
              <p className="text-cyan-100">Average app rating</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99%</div>
              <p className="text-cyan-100">Client satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Mobile App Development FAQ" />
      
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-xl mb-8 text-blue-100">Get a free consultation and custom quote for your app project</p>
          <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center">Get Free Consultation<FiArrowRight className="ml-2" /></Link>
        </div>
      </section>
    </div>
  )
}
