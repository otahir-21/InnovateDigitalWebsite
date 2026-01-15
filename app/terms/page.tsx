import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Terms and Conditions - Innovate Digital',
  description: 'Terms and Conditions for using Innovate Digital services. Read our terms of service, usage policies, and legal agreements.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl text-white/90">
            Last Updated: January 15, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Innovate Digital. These Terms and Conditions ("Terms") govern your use of our website 
              <strong> innovatedigital.ae</strong> and our digital marketing services. By accessing or using our 
              services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 mb-4">
              If you do not agree with any part of these Terms, you must not use our website or services. 
              These Terms constitute a legally binding agreement between you and Innovate Digital.
            </p>
          </section>

          {/* Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Our Services</h2>
            <p className="text-gray-700 mb-4">
              Innovate Digital provides digital marketing services including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Search Engine Optimization (SEO)</li>
              <li>Social Media Marketing</li>
              <li>Pay-Per-Click (PPC) Advertising</li>
              <li>Content Marketing</li>
              <li>Web Development and Design</li>
              <li>Branding and Strategy</li>
              <li>Digital Consulting</li>
            </ul>
            <p className="text-gray-700 mb-4">
              The specific services, deliverables, timelines, and fees will be outlined in individual service 
              agreements or proposals provided to clients.
            </p>
          </section>

          {/* User Obligations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. User Obligations</h2>
            <p className="text-gray-700 mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Comply with all applicable laws and regulations in the UAE</li>
              <li>Not use our services for any unlawful or prohibited purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Provide timely feedback and necessary materials for project completion</li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">4.1 Fees and Billing</h3>
            <p className="text-gray-700 mb-4">
              Service fees will be specified in your service agreement. Unless otherwise stated:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Initial payment or deposit may be required before work commences</li>
              <li>Monthly retainer services are billed in advance</li>
              <li>Project-based work may require milestone payments</li>
              <li>All fees are in UAE Dirhams (AED) unless otherwise specified</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">4.2 Late Payments</h3>
            <p className="text-gray-700 mb-4">
              Invoices are due within 7 days of issue unless otherwise agreed. Late payments may result in:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Suspension of services until payment is received</li>
              <li>Late payment fees as permitted by UAE law</li>
              <li>Termination of services for repeated late payments</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">4.3 Refund Policy</h3>
            <p className="text-gray-700 mb-4">
              Refunds are evaluated on a case-by-case basis. Generally:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Deposits and retainer fees are non-refundable</li>
              <li>Work already completed is not refundable</li>
              <li>Third-party expenses (ads, tools, subscriptions) are non-refundable</li>
              <li>Refund requests must be made in writing within 14 days</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">5.1 Client Ownership</h3>
            <p className="text-gray-700 mb-4">
              Upon full payment, you own the final deliverables created specifically for you (website design, 
              content, graphics). However, we retain ownership of:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Our proprietary tools, methodologies, and processes</li>
              <li>Pre-existing materials and templates</li>
              <li>Analytics and reporting frameworks</li>
              <li>Source code and development frameworks</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">5.2 Portfolio Rights</h3>
            <p className="text-gray-700 mb-4">
              We reserve the right to showcase our work in our portfolio, case studies, and marketing materials 
              unless otherwise agreed in writing.
            </p>
          </section>

          {/* Confidentiality */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
            <p className="text-gray-700 mb-4">
              We treat all client information as confidential and will not disclose it to third parties except:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>With your explicit consent</li>
              <li>When required by law</li>
              <li>To service providers under confidentiality agreements</li>
              <li>In anonymized form for case studies (with permission)</li>
            </ul>
          </section>

          {/* Service Guarantees */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Service Guarantees and Disclaimers</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">7.1 Performance</h3>
            <p className="text-gray-700 mb-4">
              While we strive for excellence and measurable results:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>We do not guarantee specific search engine rankings</li>
              <li>We do not guarantee specific traffic or conversion numbers</li>
              <li>Digital marketing results depend on multiple factors beyond our control</li>
              <li>Past performance does not guarantee future results</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">7.2 Third-Party Platforms</h3>
            <p className="text-gray-700 mb-4">
              We are not responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Changes to algorithms by Google, Facebook, Instagram, or other platforms</li>
              <li>Account suspensions or penalties by third-party platforms</li>
              <li>Platform downtime or technical issues</li>
              <li>Policy changes by advertising platforms</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by UAE law:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Our total liability shall not exceed the amount paid by you for the services in question</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>We are not liable for loss of profits, data, or business opportunities</li>
              <li>We are not liable for delays or failures due to circumstances beyond our control</li>
            </ul>
          </section>

          {/* Term and Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Term and Termination</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">9.1 Service Period</h3>
            <p className="text-gray-700 mb-4">
              Services continue for the period specified in your agreement. Monthly services typically require 
              30 days written notice for cancellation.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">9.2 Termination by Client</h3>
            <p className="text-gray-700 mb-4">
              You may terminate services with written notice. However:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>You remain liable for payment of work completed</li>
              <li>Prepaid fees for unused services may not be refunded</li>
              <li>Early termination fees may apply as specified in your agreement</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">9.3 Termination by Us</h3>
            <p className="text-gray-700 mb-4">
              We may terminate services immediately if:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>You breach these Terms</li>
              <li>Payment is not received</li>
              <li>You engage in abusive or inappropriate behavior</li>
              <li>Continuing services would violate applicable laws</li>
            </ul>
          </section>

          {/* Indemnification */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless Innovate Digital from any claims, damages, or expenses 
              arising from:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Your use of our services</li>
              <li>Your violation of these Terms</li>
              <li>Content you provide to us</li>
              <li>Your violation of any third-party rights</li>
            </ul>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Governing Law and Jurisdiction</h2>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of the United Arab Emirates. Any disputes arising from 
              these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of any material 
              changes by posting the updated Terms on our website. Continued use of our services after 
              changes constitutes acceptance of the new Terms.
            </p>
          </section>

          {/* Miscellaneous */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Miscellaneous</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">13.1 Entire Agreement</h3>
            <p className="text-gray-700 mb-4">
              These Terms, together with any service agreements, constitute the entire agreement between you and 
              Innovate Digital.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">13.2 Severability</h3>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall 
              remain in full force.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">13.3 Waiver</h3>
            <p className="text-gray-700 mb-4">
              Our failure to enforce any right or provision shall not constitute a waiver of that right or provision.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">13.4 Assignment</h3>
            <p className="text-gray-700 mb-4">
              You may not assign or transfer these Terms without our written consent. We may assign our rights 
              and obligations under these Terms.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-2"><strong>Innovate Digital</strong></p>
              <p className="text-gray-700 mb-2">Meydan Free Zone, Dubai, UAE</p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:legal@innovatedigital.ae" className="text-blue-600 hover:underline">legal@innovatedigital.ae</a></p>
              <p className="text-gray-700 mb-2">Phone: <a href="tel:+971523949010" className="text-blue-600 hover:underline">+971 52 394 9010</a></p>
              <p className="text-gray-700">Website: <a href="https://innovatedigital.ae" className="text-blue-600 hover:underline">innovatedigital.ae</a></p>
            </div>
          </section>

          {/* Acceptance */}
          <section className="mb-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Acceptance of Terms</h3>
            <p className="text-gray-700">
              By using our website and services, you acknowledge that you have read, understood, and agree to 
              be bound by these Terms and Conditions.
            </p>
          </section>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
