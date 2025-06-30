import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import DenckHeader from './headers/DenckHeader'
import DenckFooter from './footers/DenckFooter'
import CookieBanner from './common/CookieBanner'

export default function Layout({ children, title, description }) {
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
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </>
    )
  }
  
  // Default titles and descriptions
  const defaultTitle = 'DENCK Consulting - KI-Beratung für den Mittelstand'
  const defaultDescription = 'Wir machen Künstliche Intelligenz für Ihr Unternehmen nutzbar. KI-Strategieberatung, Prozessautomatisierung und Datenanalyse für nachhaltigen Erfolg.'

  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const pageDescription = description || defaultDescription

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DENCK Consulting" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="DENCK Consulting - KI-Beratung" />
        
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
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Additional SEO */}
        <meta name="language" content="de" />
        <meta name="geo.region" content="DE-HE" />
        <meta name="geo.placename" content="Frankfurt am Main" />
        <meta name="geo.position" content="50.1109;8.6821" />
        <meta name="ICBM" content="50.1109, 8.6821" />
      </Head>

      <div className="min-h-screen flex flex-col bg-white">
        <DenckHeader />
        
        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>
        
        <DenckFooter />
        
        {/* Cookie Banner */}
        <CookieBanner />
      </div>
    </>
  )
}