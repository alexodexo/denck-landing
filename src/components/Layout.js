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
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-400 mx-auto mb-4"></div>
            <p className="text-slate-300">Loading...</p>
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
        <meta name="theme-color" content="#1e293b" />
      </Head>

      <div className="min-h-screen flex flex-col bg-slate-900 relative overflow-hidden">
        {/* Global Animated Background */}
        <div className="fixed inset-0 z-0">
          {/* Gradient Background Layers */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#3b82f640_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#8b5cf640_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,#ec489940_0%,transparent_50%)]" />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px] opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
          
          {/* Additional floating elements for more depth */}
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-green-500 rounded-full filter blur-[80px] opacity-10 animate-pulse" style={{ animationDelay: '3s' }} />
          <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-pink-500 rounded-full filter blur-[90px] opacity-15 animate-pulse" style={{ animationDelay: '5s' }} />
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