import { Metadata } from 'next'
import Link from 'next/link'
import { FiAward, FiTarget, FiHeart, FiZap, FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FAQ from '@/components/ui/FAQ'
import { aboutFAQs } from '@/lib/faqData'
import { caseStudies } from '@/lib/caseStudiesData'
import { founderPersonSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Innovate Digital | Google Partner Agency Dubai Since 2020',
  description: 'Innovate Digital — Dubai digital marketing agency founded in 2020 by Osama Tahir. SEO, social media, branding and paid ads for UAE businesses in Dubai, Abu Dhabi and Sharjah.',
  keywords: ['Digital Agency Dubai', 'Marketing Team Dubai', 'Google Partner UAE', 'Best Digital Agency Dubai', 'About Innovate Digital', 'Digital Marketing Company UAE'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Innovate Digital | Google Partner Since 2020 | 200+ Clients',
    description: 'Meet the Dubai digital marketing team behind 200+ UAE client projects. Founded by Osama Tahir. Google Partner certified.',
  },
}

const values = [
  {
    icon: FiHeart,
    title: 'Client-Centric',
    description: 'Your success is our success. We prioritize your goals and work as an extension of your team.',
  },
  {
    icon: FiZap,
    title: 'Innovation',
    description: 'We stay ahead of digital trends to give you a competitive edge in the market.',
  },
  {
    icon: FiTarget,
    title: 'Results-Driven',
    description: 'Every strategy is designed to deliver measurable, meaningful results.',
  },
  {
    icon: FiAward,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do.',
  },
]

const proofStudies = caseStudies.slice(0, 3)

export default function AboutPage() {
  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderPersonSchema) }}
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We Are <span className="gradient-text">Innovate Digital</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A Dubai agency started in 2020 to replace vanity marketing reports with work you can
              trace in Search Console, ads, and sales.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Innovate Digital was founded in Meydan Free Zone, Dubai, in 2020. The brief was
                narrow on purpose: SEO, social, branding, and paid ads — done so a UAE business
                owner can see what changed, not just what was delivered.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                That still shapes how we take work. We do not spin up a landing page for every
                neighbourhood keyword. We pick the searches and offers that can actually produce
                customers in Dubai, Abu Dhabi, and Sharjah, then build campaigns and content around
                those.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each client gets a named account owner, monthly reporting against the numbers we
                agreed up front, and a strategy written for their market — not a reused deck with
                the city name swapped.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-black/10 p-6 bg-secondary-50">
                <div className="text-3xl font-bold text-gray-900 mb-1">2020</div>
                <div className="text-sm text-gray-600">Founded in Dubai</div>
              </div>
              <div className="rounded-2xl border border-black/10 p-6 bg-secondary-50">
                <div className="text-3xl font-bold text-gray-900 mb-1">200+</div>
                <div className="text-sm text-gray-600">UAE businesses served</div>
              </div>
              <div className="rounded-2xl border border-black/10 p-6 bg-secondary-50">
                <div className="text-3xl font-bold text-gray-900 mb-1">5.0</div>
                <div className="text-sm text-gray-600">Google rating (47 reviews)</div>
              </div>
              <div className="rounded-2xl border border-black/10 p-6 bg-secondary-50">
                <div className="text-3xl font-bold text-gray-900 mb-1">Google</div>
                <div className="text-sm text-gray-600">Partner certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Work we can point to</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selected UAE projects with the numbers we tracked — not a generic &ldquo;success
              stories&rdquo; collage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {proofStudies.map((study) => (
              <article
                key={study.slug}
                className="rounded-4xl p-8 bg-white border border-black/10"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-black/35 mb-4">
                  {study.location} · {study.projectDate}
                </p>
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-black/60 mb-4 font-medium">{study.client}</p>
                <p className="text-sm text-black/70 mb-6">{study.challenge}</p>
                <ul className="space-y-2 mb-6">
                  {study.results.slice(0, 3).map((result) => (
                    <li key={result} className="flex items-start gap-2 text-sm text-black/80">
                      <FiCheckCircle className="flex-shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/portfolio/${study.slug}`}
                  className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-sm hover:gap-3 transition-all"
                >
                  Full case study
                  <FiArrowRight />
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-primary inline-flex items-center gap-2">
              View all case studies
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={aboutFAQs} title="About Innovate Digital - FAQ" />

      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-white/70">Let&apos;s discuss how we can help grow your business</p>
          <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold uppercase tracking-[0.08em] text-sm hover:bg-gray-100 transition-all inline-flex items-center">
            Get in Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
