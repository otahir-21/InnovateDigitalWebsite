import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/lib/config'
import dynamic from 'next/dynamic'
import { SpeedInsights } from '@vercel/speed-insights/next'

const WhatsAppButton = dynamic(() => import('@/components/layout/WhatsAppButton'), {
  ssr: false,
})

const MobileContactButton = dynamic(() => import('@/components/layout/MobileContactButton'), {
  ssr: false,
})

const ExitIntentPopup = dynamic(() => import('@/components/ui/ExitIntentPopup'), {
  ssr: false,
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/logo.svg',
  },
  keywords: [
    'Digital Marketing UAE',
    'SEO Services Dubai',
    'Social Media Marketing UAE',
    'Web Development Dubai',
    'PPC Management UAE',
    'Content Marketing Dubai',
    'Digital Agency UAE',
    'Marketing Agency Dubai',
    'Branding Services UAE',
    'Online Marketing Dubai'
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpg`],
    creator: '@innovatedigital',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <meta property="og:site_name" content="Innovate Digital" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {/* Google Analytics - Deferred for better performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-63PVWT802B"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-63PVWT802B', {
              'page_path': window.location.pathname,
            });
          `}
        </Script>

        {/* Microsoft Clarity - User Behavior Analytics */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v3ggwzgd4g");
          `}
        </Script>

        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileContactButton />
        <ExitIntentPopup />
        <SpeedInsights />
      </body>
    </html>
  )
}
