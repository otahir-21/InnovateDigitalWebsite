import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy - Innovate Digital',
  description: 'Privacy Policy for Innovate Digital. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Innovate Digital ("we," "our," or "us"). We are committed to protecting your personal 
              information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website <strong>innovatedigital.ae</strong> and 
              use our services.
            </p>
            <p className="text-gray-700 mb-4">
              By using our website and services, you agree to the collection and use of information in accordance 
              with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Fill out our contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a consultation or quote</li>
              <li>Engage with us on social media</li>
              <li>Sign up for our services</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Name and contact details (email, phone number, address)</li>
              <li>Company name and business information</li>
              <li>Job title and professional information</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Clickstream data and browsing behavior</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our digital marketing services</li>
              <li><strong>Communication:</strong> To respond to inquiries, send updates, and provide customer support</li>
              <li><strong>Marketing:</strong> To send promotional materials, newsletters, and service updates (with your consent)</li>
              <li><strong>Analytics:</strong> To analyze website usage and improve user experience</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations in the UAE</li>
              <li><strong>Security:</strong> To protect against fraud, unauthorized access, and security threats</li>
              <li><strong>Business Operations:</strong> To manage client relationships and deliver contracted services</li>
            </ul>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. 
              Cookies are small data files stored on your device.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Types of Cookies We Use:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site (Google Analytics)</li>
              <li><strong>Marketing Cookies:</strong> Track visitors across websites to display relevant ads</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Microsoft Clarity Analytics</h3>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
              <p className="text-gray-700 mb-4">
                We partner with <strong>Microsoft Clarity</strong> and <strong>Microsoft Advertising</strong> to capture how you use and 
                interact with our website through behavioral metrics, heatmaps, and session replay to improve and market our 
                products/services.
              </p>
              <p className="text-gray-700 mb-4">
                Website usage data is captured using first and third-party cookies and other tracking technologies to determine 
                the popularity of products/services and online activity. Additionally, we use this information for site 
                optimization, fraud/security purposes, and advertising.
              </p>
              <p className="text-gray-700">
                For more information about how Microsoft collects and uses your data, visit the{' '}
                <a 
                  href="https://privacy.microsoft.com/en-us/privacystatement" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Microsoft Privacy Statement
                </a>.
              </p>
            </div>
            
            <p className="text-gray-700 mb-4">
              You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, 
              if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. How We Share Your Information</h2>
            <p className="text-gray-700 mb-4">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf 
              (hosting, analytics, email delivery, payment processing)</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>With Your Consent:</strong> When you explicitly agree to share your information</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>We do not sell your personal information to third parties.</strong>
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure server infrastructure</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-gray-700 mb-4">
              However, no method of transmission over the internet is 100% secure. While we strive to protect 
              your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined 
              in this Privacy Policy, unless a longer retention period is required by law. When your information 
              is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Your Privacy Rights</h2>
            <p className="text-gray-700 mb-4">
              Under UAE data protection laws and GDPR (if applicable), you have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications at any time</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise these rights, please contact us at <a href="mailto:privacy@innovatedigital.ae" className="text-blue-600 hover:underline">privacy@innovatedigital.ae</a>
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Third-Party Websites</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy 
              practices of these external sites. We encourage you to read the privacy policies of any 
              third-party sites you visit.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not directed to children under the age of 18. We do not knowingly collect 
              personal information from children. If you believe we have collected information from a child, 
              please contact us immediately.
            </p>
          </section>

          {/* International Transfers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in countries outside the UAE. We ensure 
              appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review 
              this Privacy Policy periodically for any changes.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-2"><strong>Innovate Digital</strong></p>
              <p className="text-gray-700 mb-2">Meydan Free Zone, Dubai, UAE</p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@innovatedigital.ae" className="text-blue-600 hover:underline">privacy@innovatedigital.ae</a></p>
              <p className="text-gray-700 mb-2">Phone: <a href="tel:+971523949010" className="text-blue-600 hover:underline">+971 52 394 9010</a></p>
              <p className="text-gray-700">Website: <a href="https://innovatedigital.ae" className="text-blue-600 hover:underline">innovatedigital.ae</a></p>
            </div>
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
