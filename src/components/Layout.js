// src/components/Layout.js - SEO-optimiert
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import DenckHeader from './headers/DenckHeader'
import DenckFooter from './footers/DenckFooter'
import CookieBanner from './common/CookieBanner'

export default function Layout({ 
  children, 
  title, 
  description, 
  keywords, 
  openGraph,
  schema,
  canonical 
}) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <>
        <Head>
          <title>Loading...</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-bg-primary">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-marine-400 mx-auto mb-4"></div>
            <p className="text-text-secondary">Loading...</p>
          </div>
        </div>
      </>
    )
  }
  
  const defaultTitle = 'DENCK Solutions - KI-Beratung für den Mittelstand'
  const defaultDescription = 'DENCK Solutions: Ihr Experte für KI-Beratung von Alex Denck. Professionelle Automatisierung und digitale Transformation für nachhaltigen Unternehmenserfolg.'

  const pageTitle = title ? `${title}` : defaultTitle
  const pageDescription = description || defaultDescription
  const currentUrl = `https://www.denck.com${router.asPath}`
  const canonicalUrl = canonical || currentUrl

  // Default Schema.org data
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": currentUrl,
    "mainEntity": {
      "@type": "Organization",
      "name": "DENCK Solutions",
      "founder": {
        "@type": "Person",
        "name": "Alex Denck"
      }
    }
  }

  const schemaData = schema || defaultSchema

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="DENCK Solutions - Alex Denck" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={openGraph?.type || "website"} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={openGraph?.title || pageTitle} />
        <meta property="og:description" content={openGraph?.description || pageDescription} />
        <meta property="og:site_name" content={openGraph?.siteName || "DENCK Solutions"} />
        <meta property="og:locale" content={openGraph?.locale || "de_DE"} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={openGraph?.title || pageTitle} />
        <meta name="twitter:description" content={openGraph?.description || pageDescription} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="DE-HE" />
        <meta name="geo.placename" content="Frankfurt am Main" />
        <meta name="geo.position" content="50.1109;8.6821" />
        <meta name="ICBM" content="50.1109, 8.6821" />
        
        {/* Business/Organization specific */}
        <meta name="rating" content="5" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="business professionals, entrepreneurs, SMEs" />
        
        {/* Language and Region */}
        <meta httpEquiv="content-language" content="de" />
        <link rel="alternate" hrefLang="de" href={currentUrl} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#193559" />
        
        {/* Structured Data - Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <div className="min-h-screen flex flex-col bg-bg-primary relative overflow-hidden">
        {/* Professional Global Background */}
        <div className="fixed inset-0 z-0">
          {/* Subtle Professional Grid Pattern with Squares */}
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-[0.025]">
              <defs>
                <pattern id="professional-squares" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="60" height="60" fill="none" stroke="#193559" strokeWidth="0.5" opacity="0.4" />
                  <rect x="15" y="15" width="30" height="30" fill="none" stroke="#C99412" strokeWidth="0.3" opacity="0.2" />
                  <circle cx="30" cy="30" r="1" fill="#193559" opacity="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#professional-squares)" />
            </svg>
          </div>
          
          {/* Very Subtle Brand Color Accents */}
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-marine-200 rounded-full filter blur-[150px] opacity-[0.04] animate-breathe" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gold-200 rounded-full filter blur-[160px] opacity-[0.03] animate-breathe" style={{ animationDelay: '4s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-marine-100 rounded-full filter blur-[180px] opacity-[0.02] animate-breathe" style={{ animationDelay: '8s' }} />
          
          {/* Subtle floating elements */}  
          <div className="absolute top-16 left-16 w-1.5 h-1.5 bg-marine-300 rounded-full opacity-20 animate-float" />
          <div className="absolute top-32 right-24 w-2 h-2 bg-gold-300 rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-24 left-1/3 w-1 h-1 bg-marine-400 rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }} />
          <div className="absolute bottom-16 right-1/4 w-2.5 h-2.5 bg-gold-400 rounded-full opacity-12 animate-float" style={{ animationDelay: '6s' }} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <DenckHeader />
          
          <main className="flex-grow">
            {children}
          </main>
          
          <DenckFooter />
          <CookieBanner />
        </div>
      </div>
    </>
  )
}