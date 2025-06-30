import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import CookieBanner from './common/CookieBanner'

// Import headers and footers with error handling
let TransformationHeader, CoachHeader, TransformationFooter, CoachFooter

try {
  TransformationHeader = require('./headers/TransformationHeader').default
} catch (error) {
  console.warn('TransformationHeader not found, using fallback')
  TransformationHeader = () => <div>Header Loading...</div>
}

try {
  CoachHeader = require('./headers/CoachHeader').default
} catch (error) {
  console.warn('CoachHeader not found, using fallback')
  CoachHeader = () => <div>Header Loading...</div>
}

try {
  TransformationFooter = require('./footers/TransformationFooter').default
} catch (error) {
  console.warn('TransformationFooter not found, using fallback')
  TransformationFooter = () => <div>Footer Loading...</div>
}

try {
  CoachFooter = require('./footers/CoachFooter').default
} catch (error) {
  console.warn('CoachFooter not found, using fallback')
  CoachFooter = () => <div>Footer Loading...</div>
}

export default function Layout({ children, title, description, siteType = 'transformation' }) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <>
        <Head>
          <title>Loading...</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </>
    )
  }
  
  // Determine which site we're on based on the route
  const isCoachingSite = router.pathname.startsWith('/frankfurt-business-coach')
  const isLegalPage = ['/impressum', '/datenschutz', '/agb'].includes(router.pathname)
  
  // For legal pages, use transformation theme by default unless explicitly coaching
  const currentSiteType = isCoachingSite ? 'coaching' : 'transformation'
  
  // Default titles and descriptions
  const defaultTitle = currentSiteType === 'coaching' 
    ? 'Frankfurt Business Coach - Mario Egartner'
    : 'Transformationskontinuum - Excellence in Transformation'
    
  const defaultDescription = currentSiteType === 'coaching'
    ? 'Professionelles Business Coaching in Frankfurt. Mario Egartner begleitet Sie bei beruflichen und privaten Herausforderungen.'
    : 'C5 Business Partner - Ihr Spezialist für Organisationsentwicklung, Teamdynamik und strategische Transformation.'

  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const pageDescription = description || defaultDescription

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mario Egartner" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="Mario Egartner - Excellence in Transformation" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" />
        
        {/* Additional SEO */}
        <meta name="language" content="de" />
        <meta name="geo.region" content="DE-HE" />
        <meta name="geo.placename" content="Frankfurt am Main" />
        <meta name="geo.position" content="50.1109;8.6821" />
        <meta name="ICBM" content="50.1109, 8.6821" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Dynamic Header based on site type */}
        {(currentSiteType === 'coaching' && !isLegalPage) ? (
          <CoachHeader />
        ) : (
          <TransformationHeader />
        )}
        
        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Dynamic Footer based on site type */}
        {(currentSiteType === 'coaching' && !isLegalPage) ? (
          <CoachFooter />
        ) : (
          <TransformationFooter />
        )}
        
        {/* Cookie Banner - appears on all pages */}
        <CookieBanner />
      </div>
    </>
  )
}