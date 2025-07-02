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
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-700 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading...</p>
          </div>
        </div>
      </>
    )
  }
  
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
        
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="DENCK Consulting - KI-Beratung" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1e293b" />
      </Head>

      <div className="min-h-screen flex flex-col bg-white">
        <DenckHeader />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <DenckFooter />
        <CookieBanner />
      </div>
    </>
  )
}