// src/pages/index.js - Optimiert für SEO
import HeroSection from '../components/home/HeroSection'
import ProblemSolutionSection from '../components/home/ProblemSolutionSection'
import UseCasesSection from '../components/home/UseCasesSection'
import StatisticsSection from '../components/home/StatisticsSection'
import ProcessSection from '../components/home/ProcessSection'
import CTASection from '../components/home/CTASection'
import AIServicesSection from '../components/home/AIServicesSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <UseCasesSection />
      <StatisticsSection />
      <AIServicesSection />
      <ProcessSection />
      <ProblemSolutionSection />
      <CTASection />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'DENCK Solutions - KI-Beratung & Automatisierung für Unternehmen',
      description: 'DENCK Solutions: Ihr Experte für KI-Beratung, Prozessautomatisierung und digitale Transformation. Alex Denck berät Unternehmen bei der erfolgreichen KI-Integration. Steigern Sie Effizienz um 40% und senken Kosten um 30%.',
      // Zusätzliche Meta-Tags
      keywords: 'DENCK Solutions, Alex Denck, KI-Beratung, Künstliche Intelligenz Beratung, Prozessautomatisierung, KI-Strategieberatung, Business Automation, Digital Transformation, Frankfurt KI-Berater',
      openGraph: {
        title: 'DENCK Solutions - Ihr KI-Berater Alex Denck',
        description: 'Steigern Sie Ihre Effizienz um 40% mit KI-Lösungen von DENCK Solutions. Persönliche Beratung von Alex Denck für nachhaltigen Unternehmenserfolg.',
        url: 'https://www.denck.com',
        siteName: 'DENCK Solutions',
        type: 'website',
        locale: 'de_DE'
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DENCK Solutions",
        "legalName": "ALD Beratungs und Beteiligungsgesellschaft UG",
        "founder": {
          "@type": "Person",
          "name": "Alex Denck",
          "jobTitle": "KI-Berater und Gründer"
        },
        "url": "https://www.denck.com",
        "logo": "https://www.denck.com/logo.png",
        "description": "DENCK Solutions bietet professionelle KI-Beratung und Automatisierungslösungen für Unternehmen. Spezialisiert auf Prozessoptimierung und digitale Transformation.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+49",
          "contactType": "customer service",
          "email": "alex@denck.com",
          "areaServed": "DE",
          "availableLanguage": "German"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hannah-Arendt-Str 40",
          "addressLocality": "Frankfurt am Main",
          "postalCode": "60438",
          "addressCountry": "DE"
        },
        "sameAs": [
          "https://www.linkedin.com/in/denck"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "KI-Beratungsleistungen",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "KI-Strategieberatung",
                "description": "Entwicklung individueller KI-Strategien für Unternehmen"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Prozessautomatisierung",
                "description": "Automatisierung von Geschäftsprozessen mit KI-Technologien"
              }
            }
          ]
        }
      }
    }
  }
}