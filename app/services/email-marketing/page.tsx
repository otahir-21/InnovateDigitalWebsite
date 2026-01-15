import { Metadata } from 'next'
import Link from 'next/link'
import { FiCheck, FiArrowRight, FiMail, FiUsers, FiTrendingUp, FiZap } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'

export const metadata: Metadata = {
  title: 'Email Marketing Services in UAE | Drive Sales with Email Campaigns',
  description: 'Professional email marketing services in Dubai & UAE. Build relationships, drive sales, and increase ROI with strategic email campaigns. Expert email automation & design.',
  keywords: ['Email Marketing Dubai', 'Email Campaigns UAE', 'Email Automation Dubai', 'Newsletter Marketing UAE', 'Email Marketing Agency Dubai'],
  openGraph: {
    title: 'Email Marketing Services UAE - Innovate Digital',
    description: 'Professional email marketing campaigns that drive sales and build customer relationships in UAE.',
  },
}

const emailServices = [
  {
    title: 'Email Campaign Strategy',
    description: 'Data-driven email marketing strategies tailored to your business goals and target audience.',
    features: [
      'Audience segmentation',
      'Campaign planning',
      'Content strategy',
      'Send time optimization',
    ],
  },
  {
    title: 'Email Design & Templates',
    description: 'Beautiful, responsive email templates that look great on all devices.',
    features: [
      'Custom email design',
      'Mobile-responsive templates',
      'Brand-aligned layouts',
      'A/B testing designs',
    ],
  },
  {
    title: 'List Management',
    description: 'Grow and maintain a healthy, engaged email subscriber list.',
    features: [
      'List building strategies',
      'Subscriber segmentation',
      'List cleaning & hygiene',
      'GDPR compliance',
    ],
  },
  {
    title: 'Marketing Automation',
    description: 'Automated email sequences that nurture leads and drive conversions.',
    features: [
      'Welcome sequences',
      'Abandoned cart emails',
      'Drip campaigns',
      'Behavioral triggers',
    ],
  },
]

const process = [
  {
    step: '01',
    title: 'Strategy & Planning',
    description: 'Understand your goals, audience, and create a comprehensive email marketing strategy.',
  },
  {
    step: '02',
    title: 'Design & Setup',
    description: 'Create beautiful email templates and set up your email marketing infrastructure.',
  },
  {
    step: '03',
    title: 'Campaign Launch',
    description: 'Execute campaigns with perfect timing, segmentation, and personalization.',
  },
  {
    step: '04',
    title: 'Optimize & Scale',
    description: 'Analyze performance, A/B test, and continuously improve results.',
  },
]

const benefits = [
  {
    icon: FiMail,
    title: 'High ROI',
    description: 'Email marketing delivers $42 for every $1 spent - the highest ROI of any marketing channel.',
  },
  {
    icon: FiUsers,
    title: 'Build Relationships',
    description: 'Stay connected with your audience and build long-term customer relationships.',
  },
  {
    icon: FiTrendingUp,
    title: 'Drive Sales',
    description: 'Convert subscribers into customers with targeted, personalized email campaigns.',
  },
  {
    icon: FiZap,
    title: 'Automation',
    description: 'Save time with automated email sequences that work 24/7 to nurture leads.',
  },
]

const faqs = [
  {
    question: 'How much do email marketing services cost in UAE?',
    answer: 'Email marketing services in UAE typically range from AED 3,000 to AED 15,000 per month depending on list size, campaign frequency, and automation complexity. We offer customized packages based on your needs and budget. Contact us for a personalized quote.',
  },
  {
    question: 'What email marketing platforms do you work with?',
    answer: 'We work with all major email marketing platforms including Mailchimp, Constant Contact, SendinBlue, ActiveCampaign, HubSpot, and Klaviyo. We can also recommend the best platform based on your business needs, budget, and technical requirements.',
  },
  {
    question: 'How do you grow email subscriber lists?',
    answer: 'We use multiple strategies including website opt-in forms, lead magnets (free resources), content upgrades, social media campaigns, landing pages, and partnerships. All methods are GDPR and CAN-SPAM compliant with proper consent mechanisms.',
  },
  {
    question: 'What is a good email open rate in UAE?',
    answer: 'In UAE, average email open rates range from 15-25% depending on industry. We consistently achieve open rates of 25-40% through strategic segmentation, compelling subject lines, optimal send times, and regular list cleaning. Our focus is on engagement, not just opens.',
  },
  {
    question: 'Do you provide email copywriting services?',
    answer: 'Yes! Our team includes experienced email copywriters who create compelling subject lines, engaging body content, and persuasive CTAs. We write in both English and Arabic, understanding the cultural nuances of the UAE market.',
  },
  {
    question: 'Can you integrate email marketing with our CRM?',
    answer: 'Absolutely! We can integrate your email marketing platform with most CRMs including Salesforce, HubSpot, Zoho, and custom systems. This ensures seamless data flow, better segmentation, and more effective lead nurturing.',
  },
  {
    question: 'How do you ensure emails don\'t go to spam?',
    answer: 'We follow email best practices including proper authentication (SPF, DKIM, DMARC), maintaining clean lists, avoiding spam trigger words, using reputable ESPs, warming up new domains, and monitoring sender reputation. We maintain 98%+ inbox placement rates.',
  },
  {
    question: 'Do you provide email analytics and reporting?',
    answer: 'Yes! We provide detailed monthly reports including open rates, click-through rates, conversion rates, revenue generated, list growth, engagement metrics, and actionable insights for improvement. All reports are easy to understand with clear ROI tracking.',
  },
]

export default function EmailMarketingPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Email Marketing</span> Services in UAE
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Drive sales and build lasting relationships with strategic email campaigns that deliver $42 for every $1 spent.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Get Free Email Strategy
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Email Marketing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Email Marketing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Email marketing remains the highest ROI marketing channel, delivering measurable results for businesses in UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Email Marketing Services</h2>
            <p className="text-xl text-gray-600">Comprehensive email solutions for every stage of the customer journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {emailServices.map((service) => (
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

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional email marketing results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-red-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">$42</div>
              <p className="text-red-100">ROI for every $1 spent</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.2B+</div>
              <p className="text-red-100">Email users worldwide</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">40%</div>
              <p className="text-red-100">Average open rate we achieve</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-red-100">Inbox placement rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="Email Marketing FAQ" />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Boost Your Sales with Email Marketing?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free email marketing strategy session and discover how we can help you achieve $42 ROI for every $1 spent
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center"
          >
            Get Free Strategy Session
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
