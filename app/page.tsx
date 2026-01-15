import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import About from '@/components/home/About'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Founder from '@/components/home/Founder'
import CaseStudies from '@/components/home/CaseStudies'
import Testimonials from '@/components/home/Testimonials'
import ClientLogos from '@/components/home/ClientLogos'
import CTA from '@/components/home/CTA'
import FAQ from '@/components/ui/FAQ'
import { organizationSchema, localBusinessSchema, websiteSchema } from '@/lib/schema'
import { homepageFAQs } from '@/lib/faqData'

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
