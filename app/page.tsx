import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import About from '@/components/home/About'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import CaseStudies from '@/components/home/CaseStudies'
import Testimonials from '@/components/home/Testimonials'
import ClientLogos from '@/components/home/ClientLogos'
import CTA from '@/components/home/CTA'
import FAQ from '@/components/ui/FAQ'
import { organizationSchema, localBusinessSchema, websiteSchema } from '@/lib/schema'
import { homepageFAQs } from '@/lib/faqData'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Dubai | 200+ UAE Clients | Free Audit',
  description: 'Leading digital marketing agency in Dubai & UAE since 2020. Google Partner certified. Expert SEO, PPC, social media & web development. 3x average ROI. Serving Dubai, Abu Dhabi & Sharjah. Get your free marketing audit today.',
  keywords: [
    'Digital Marketing Agency Dubai',
    'Digital Marketing Company UAE',
    'SEO Services Dubai',
    'PPC Agency Dubai',
    'Social Media Marketing UAE',
    'Web Development Dubai',
    'Google Partner Dubai',
    'Marketing Agency Abu Dhabi',
    'Digital Marketing Sharjah',
    'Best Marketing Agency UAE',
    'ROI-Focused Marketing Dubai',
    'Growth Marketing UAE'
  ],
  openGraph: {
    title: 'Dubai\'s Leading Digital Marketing Agency | 200+ UAE Clients',
    description: 'Google Partner certified agency delivering 3x average ROI. Expert SEO, PPC, social media & web development in Dubai, Abu Dhabi & Sharjah.',
  },
}

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      
      <Hero />
      <ClientLogos />
      <Services />
      <About />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <FAQ faqs={homepageFAQs} />
      <CTA />
    </>
  )
}
