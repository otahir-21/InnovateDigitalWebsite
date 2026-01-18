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
  title: 'Best Digital Marketing Agency in Dubai | Innovate Digital',
  description: 'Top-rated digital marketing agency in Dubai & UAE. Expert SEO, social media marketing, web development, PPC, and branding services. Transform your business with proven strategies.',
  keywords: [
    'Digital Marketing Agency Dubai',
    'Best Digital Marketing Company UAE',
    'SEO Services Dubai',
    'Social Media Marketing Dubai',
    'Web Development Dubai',
    'PPC Agency Dubai',
    'Digital Agency UAE',
    'Marketing Company Dubai',
    'Branding Services Dubai',
    'Content Marketing Dubai'
  ],
  openGraph: {
    title: 'Best Digital Marketing Agency in Dubai | Innovate Digital',
    description: 'Top-rated digital marketing agency in Dubai & UAE. Expert SEO, social media, web development, and PPC services.',
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
