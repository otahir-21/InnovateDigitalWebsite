import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Disclaimer - Innovate Digital',
  description: 'Legal disclaimer for Innovate Digital website and services. Important information about our digital marketing services and results.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-xl text-white/90">
            Last Updated: January 15, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          
          {/* General Disclaimer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. General Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The information provided by Innovate Digital on our website <strong>innovatedigital.ae</strong> is 
              for general informational purposes only. All information is provided in good faith, however, we make 
              no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, 
              validity, reliability, availability, or completeness of any information on the website.
            </p>
          </section>

          {/* No Guarantees */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. No Guaranteed Results</h2>
            <p className="text-gray-700 mb-4">
              <strong>Important:</strong> Digital marketing results vary significantly based on numerous factors. 
              We do not guarantee:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Specific search engine rankings or positions</li>
              <li>Specific amounts of traffic or visitors</li>
              <li>Specific conversion rates or sales figures</li>
              <li>Specific social media growth metrics</li>
              <li>Specific ROI or revenue increases</li>
              <li>Timeframes for achieving results</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Case studies and testimonials on our website represent individual results and do not guarantee that 
              you will achieve similar outcomes. Your results will depend on factors including but not limited to 
              your industry, competition, budget, market conditions, and active participation in the process.
            </p>
          </section>

          {/* External Links */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. External Links Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to external websites that are not provided or maintained by us. We do not:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Control the content of these external sites</li>
              <li>Guarantee their accuracy or reliability</li>
              <li>Endorse the views expressed within them</li>
              <li>Take responsibility for their content or practices</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We strongly advise you to read the terms and conditions and privacy policies of any third-party 
              websites you visit.
            </p>
          </section>

          {/* Professional Disclaimer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Professional Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The content on our website and blog is provided for informational purposes and does not constitute:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Legal, financial, or tax advice</li>
              <li>Professional consulting (unless explicitly engaged)</li>
              <li>Personalized recommendations for your specific situation</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Always consult with appropriate professionals before making business decisions based on information 
              from our website.
            </p>
          </section>

          {/* Platform Changes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Third-Party Platform Changes</h2>
            <p className="text-gray-700 mb-4">
              Digital platforms (Google, Facebook, Instagram, etc.) frequently update their algorithms, policies, 
              and features. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Changes to search engine algorithms affecting rankings</li>
              <li>Social media algorithm changes affecting reach</li>
              <li>Platform policy updates affecting your account</li>
              <li>Account suspensions or penalties by platforms</li>
              <li>Changes to advertising costs or policies</li>
              <li>Platform downtime or technical issues</li>
            </ul>
          </section>

          {/* Errors and Omissions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Errors and Omissions</h2>
            <p className="text-gray-700 mb-4">
              While we strive for accuracy, our website may contain technical inaccuracies or typographical errors. 
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Make changes to content at any time</li>
              <li>Correct errors or inaccuracies</li>
              <li>Update information without notice</li>
              <li>Remove content from the website</li>
            </ul>
          </section>

          {/* Testimonials */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Testimonials and Case Studies</h2>
            <p className="text-gray-700 mb-4">
              Testimonials and case studies on our website:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Represent individual experiences and results</li>
              <li>May not be typical of all clients</li>
              <li>Do not guarantee you will achieve similar results</li>
              <li>Are based on information accurate at the time</li>
              <li>May use pseudonyms or generalized descriptions</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Past performance is not indicative of future results. Every business and situation is unique.
            </p>
          </section>

          {/* Fair Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Fair Use Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              Our website may use copyrighted material that has not been specifically authorized by the copyright 
              owner. We believe this constitutes 'fair use' for purposes such as criticism, comment, news reporting, 
              teaching, scholarship, education, and research.
            </p>
            <p className="text-gray-700 mb-4">
              If you believe any content on our website violates your copyright, please contact us immediately at 
              <a href="mailto:legal@innovatedigital.ae" className="text-blue-600 hover:underline"> legal@innovatedigital.ae</a>
            </p>
          </section>

          {/* Service Availability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Service Availability</h2>
            <p className="text-gray-700 mb-4">
              We strive to keep our website available 24/7, but we do not guarantee:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Uninterrupted availability of our website</li>
              <li>Error-free website operation</li>
              <li>Virus or malware-free content</li>
              <li>Correction of all defects</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We may suspend, withdraw, or restrict availability of all or any part of our website for business 
              or operational reasons.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Under no circumstance shall Innovate Digital be liable for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Indirect or consequential loss or damage</li>
              <li>Loss of profits or revenue</li>
              <li>Loss of data or information</li>
              <li>Loss of business opportunity</li>
              <li>Actions taken based on website content</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This limitation applies to the fullest extent permitted by law in the United Arab Emirates.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Questions About This Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this disclaimer, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-2"><strong>Innovate Digital</strong></p>
              <p className="text-gray-700 mb-2">Meydan Free Zone, Dubai, UAE</p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:legal@innovatedigital.ae" className="text-blue-600 hover:underline">legal@innovatedigital.ae</a></p>
              <p className="text-gray-700 mb-2">Phone: <a href="tel:+971523949010" className="text-blue-600 hover:underline">+971 52 394 9010</a></p>
            </div>
          </section>

          {/* Notice */}
          <section className="mb-12 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">⚠️ Important Notice</h3>
            <p className="text-gray-700">
              By using our website and services, you acknowledge that you have read this disclaimer and agree to 
              all its terms and conditions. If you do not agree with any part of this disclaimer, you must not use 
              our website or services.
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
