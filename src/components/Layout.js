// src/components/Layout.js
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
        <meta name="author" content="DENCK Solutions" />
        
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="DENCK Solutions - KI-Beratung" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#193559" />
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