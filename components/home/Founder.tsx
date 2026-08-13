import Image from 'next/image'
import { FaQuoteLeft, FaLinkedin } from 'react-icons/fa'

export default function Founder() {
  return (
    <section className="py-20 bg-secondary-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="font-light italic">Founder</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The person behind the work — not a template agency bio
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full aspect-square rounded-4xl overflow-hidden border border-black/10">
                <Image
                  src="/founder.png"
                  alt="Osama Tahir - Founder and CEO of Innovate Digital, Dubai"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Osama Tahir
                </h3>
                <p className="text-xl text-secondary-700 font-semibold mb-4">
                  Founder &amp; CEO
                </p>
                <div className="flex gap-4 mb-6">
                  <a
                    href="https://www.linkedin.com/in/otahir21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                    aria-label="Osama Tahir on LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <FaQuoteLeft className="text-4xl text-secondary-200 mb-4" />
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    I started Innovate Digital in Dubai in 2020 after watching UAE companies pay for
                    digital marketing that looked busy and did not move revenue.{' '}
                    <strong className="text-gray-900">The reports were pretty. The pipeline was not.</strong>
                  </p>

                  <p>
                    We built the agency around the work I actually knew how to do: SEO that ranks for
                    commercial searches in the UAE, paid media that can be tied to leads, and websites
                    fast enough that the traffic is worth sending. Google Partner certification followed
                    because we run Ads accounts to that standard — not as a badge for the homepage.
                  </p>

                  <p>
                    Since then we have worked with 200+ businesses across Dubai, Abu Dhabi, and Sharjah.
                    The pattern that still works is the same: pick a small set of offers, prove them with
                    search and creative, then scale what converts. We do not publish a page for every
                    keyword variation and call it strategy.
                  </p>

                  <p className="text-lg font-semibold text-gray-900 italic">
                    &ldquo;If a client cannot see what changed in Search Console, ads, or sales after 90
                    days, we have not done the job — regardless of how many deliverables we shipped.&rdquo;
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">2020</div>
                  <div className="text-sm text-gray-600">Founded in Dubai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">200+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">5.0</div>
                  <div className="text-sm text-gray-600">Google rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
