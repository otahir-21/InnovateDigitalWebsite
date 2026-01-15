import { Metadata } from 'next'
import Link from 'next/link'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'

export const metadata: Metadata = {
  title: 'Marketing Automation Services in UAE | CRM Integration Dubai',
  description: 'Professional marketing automation services in Dubai & UAE. Streamline your marketing with lead nurturing, workflow automation, and CRM integration.',
  keywords: ['Marketing Automation Dubai', 'CRM Integration UAE', 'Lead Nurturing Dubai', 'Marketing Software UAE', 'Automation Dubai'],
}

const services = [
  { title: 'Lead Nurturing', description: 'Automated email sequences that convert leads into customers.', features: ['Drip campaigns', 'Behavioral triggers', 'Lead scoring', 'Personalization'] },
  { title: 'Workflow Automation', description: 'Streamline repetitive marketing tasks and save time.', features: ['Email automation', 'Social posting', 'Task management', 'Follow-up sequences'] },
  { title: 'CRM Integration', description: 'Connect your marketing tools with your CRM system.', features: ['Salesforce', 'HubSpot', 'Zoho', 'Custom integrations'] },
  { title: 'Performance Tracking', description: 'Monitor automation performance and ROI.', features: ['Campaign analytics', 'Conversion tracking', 'A/B testing', 'ROI reports'] },
]

const benefits = [
  { icon: FiCheck, title: 'Save Time', description: 'Automate repetitive tasks and save 20+ hours per week for strategic work.' },
  { icon: FiArrowRight, title: 'Nurture Leads 24/7', description: 'Automated sequences nurture leads around the clock, even while you sleep.' },
  { icon: FiCheck, title: 'Increase Conversions', description: 'Timely, personalized automation increases conversion rates by 30-50%.' },
  { icon: FiArrowRight, title: 'Scale Effortlessly', description: 'Handle 10x more leads without hiring more staff or sacrificing quality.' },
]

const process = [
  { step: '01', title: 'Strategy & Platform', description: 'Assess needs, choose the right platform, and create automation strategy.' },
  { step: '02', title: 'Setup & Integration', description: 'Set up platform, integrate with CRM, and configure tracking and settings.' },
  { step: '03', title: 'Workflow Creation', description: 'Build automated workflows for lead nurturing, follow-ups, and engagement.' },
  { step: '04', title: 'Test & Optimize', description: 'Test all workflows, track performance, and continuously optimize for better results.' },
]

const faqs = [
  { question: 'How much does marketing automation cost in UAE?', answer: 'Marketing automation services range from AED 5,000-20,000/month depending on platform, complexity, and number of contacts. Platform costs: HubSpot from AED 1,800/month, ActiveCampaign from AED 500/month, Marketo from AED 5,000/month. We help choose the best platform for your budget and needs.' },
  { question: 'Which marketing automation platform is best?', answer: 'Best platform depends on your needs: HubSpot for all-in-one solution, ActiveCampaign for email-focused automation, Marketo for enterprise, Mailchimp for small businesses, Salesforce Pardot for B2B. We assess your requirements and recommend the optimal platform.' },
  { question: 'How long does implementation take?', answer: 'Implementation timeline: Basic setup: 2-3 weeks, Standard automation: 4-6 weeks, Complex workflows: 8-12 weeks. Includes platform setup, CRM integration, workflow creation, testing, and team training. We provide milestone-based delivery.' },
  { question: 'Can you migrate from our current automation platform?', answer: 'Yes! We handle complete migrations including contacts, campaigns, workflows, and templates. We migrate from any platform (Marketo, Pardot, Eloqua, etc.) with zero data loss. Migration services start from AED 5,000 based on complexity.' },
  { question: 'Do you provide ongoing automation management?', answer: 'Yes! We offer monthly management packages including workflow optimization, new campaign creation, performance monitoring, A/B testing, and monthly strategy sessions. Ensures your automation delivers optimal results continuously.' },
  { question: 'What ROI can we expect from marketing automation?', answer: 'Typical results: 50% time savings on manual tasks, 30-50% increase in qualified leads, 20-30% increase in sales productivity, 15-25% revenue growth. ROI varies by industry and implementation quality. We track all metrics and optimize for maximum ROI.' },
]

export default function MarketingAutomationPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4"><Breadcrumbs /></div>
      <section className="section-padding bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6"><span className="gradient-text">Marketing Automation</span> Services in UAE</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">Streamline your marketing with intelligent automation. Save time, nurture leads automatically, and scale your marketing efforts.</p>
            <Link href="/contact" className="btn-primary inline-flex items-center">Get Free Automation Consultation<FiArrowRight className="ml-2" /></Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Automation Services</h2>
            <p className="text-xl text-gray-600">Complete automation solutions that work 24/7</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Marketing Automation?</h2>
            <p className="text-xl text-gray-600">Work smarter, not harder</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-violet-600" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Automation Process</h2>
            <p className="text-xl text-gray-600">From setup to scaling</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-violet-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-violet-600 to-purple-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50%</div>
              <p className="text-violet-100">Time savings</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">40%</div>
              <p className="text-violet-100">More qualified leads</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30%</div>
              <p className="text-violet-100">Higher conversion rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-violet-100">Always working</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Marketing Automation FAQ" />
      
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate Your Marketing?</h2>
          <p className="text-xl mb-8 text-blue-100">Get a free consultation and discover how automation can save you time and increase revenue</p>
          <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center">Get Free Consultation<FiArrowRight className="ml-2" /></Link>
        </div>
      </section>
    </div>
  )
}
