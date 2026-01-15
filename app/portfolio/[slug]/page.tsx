import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft, FiCalendar, FiMapPin, FiBriefcase, FiCheckCircle, FiTrendingUp } from 'react-icons/fi'
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/lib/caseStudiesData'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.title} - Case Study | Innovate Digital`,
    description: caseStudy.challenge,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.challenge,
      images: [caseStudy.image],
    },
  }
}

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <FiArrowLeft />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-r ${caseStudy.color} text-white overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-4 mb-6">
              {caseStudy.services.map((service) => (
                <span
                  key={service}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {caseStudy.client} - {caseStudy.industry}
            </p>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <FiMapPin />
                <span>{caseStudy.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar />
                <span>{caseStudy.projectDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiBriefcase />
                <span>{caseStudy.industry}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-gray-50 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {caseStudy.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center mb-2">
                  <FiTrendingUp className="text-blue-600 mr-2" />
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}>
                    {metric.value}
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Background */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className={`w-2 h-8 bg-gradient-to-b ${caseStudy.color} rounded-full`}></span>
                Background
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {caseStudy.detailedDescription.background}
              </p>
            </div>

            {/* Challenge */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
              <p className="text-gray-700">{caseStudy.challenge}</p>
            </div>

            {/* Approach */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className={`w-2 h-8 bg-gradient-to-b ${caseStudy.color} rounded-full`}></span>
                Our Approach
              </h2>
              <ul className="space-y-4">
                {caseStudy.detailedDescription.approach.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Implementation */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className={`w-2 h-8 bg-gradient-to-b ${caseStudy.color} rounded-full`}></span>
                Implementation
              </h2>
              <ul className="space-y-4">
                {caseStudy.detailedDescription.implementation.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${caseStudy.color} text-white flex items-center justify-center font-bold flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <span className="text-gray-700 pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Solution</h3>
              <p className="text-gray-700">{caseStudy.solution}</p>
            </div>

            {/* Outcomes */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className={`w-2 h-8 bg-gradient-to-b ${caseStudy.color} rounded-full`}></span>
                Outcomes & Results
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.detailedDescription.outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <div className={`bg-gradient-to-r ${caseStudy.color} text-white p-8 md:p-12 rounded-2xl relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-9xl opacity-10 font-serif">"</div>
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl mb-6 italic leading-relaxed">
                    "{caseStudy.testimonial.quote}"
                  </p>
                  <div className="border-t border-white/30 pt-4">
                    <div className="font-bold text-lg">{caseStudy.testimonial.author}</div>
                    <div className="text-white/90">{caseStudy.testimonial.role}</div>
                    <div className="text-white/80 text-sm">{caseStudy.client}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Results Summary */}
            <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Final Results</h3>
              <ul className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FiCheckCircle className="text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${caseStudy.color} text-white`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can transform your digital presence and drive real business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/portfolio"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
