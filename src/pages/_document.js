// src/pages/_document.js - Mit Google Search Console Verification
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        {/* Google Fonts - Inter Font Family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        
        {/* Performance optimizations */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
              
        <meta name="google-site-verification" content="sgMl6_n5KtqOywJ8sEikU7w17r9qG5i0a-v0jIsrDBk" />
        
        {/* Erweiterte Schema.org structured data für lokales Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "DENCK Solutions",
              "alternateName": "DENCK",
              "legalName": "ALD Beratungs und Beteiligungsgesellschaft UG",
              "url": "https://www.denck.com",
              "logo": "https://www.denck.com/logo.png",
              "description": "DENCK Solutions ist Ihr Experte für KI-Beratung und Prozessautomatisierung. Alex Denck berät Unternehmen bei der erfolgreichen Integration von Künstlicher Intelligenz.",
              "founder": {
                "@type": "Person",
                "name": "Alex Denck",
                "jobTitle": "KI-Berater und Gründer von DENCK Solutions",
                "description": "Experte für Künstliche Intelligenz und Geschäftsprozessautomatisierung",
                "knowsAbout": [
                  "Künstliche Intelligenz",
                  "Prozessautomatisierung", 
                  "Business Intelligence",
                  "Digitale Transformation",
                  "Machine Learning",
                  "Chatbot-Entwicklung"
                ]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hannah-Arendt-Str 40",
                "addressLocality": "Frankfurt am Main",
                "addressRegion": "Hessen",
                "postalCode": "60438",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.1109",
                "longitude": "8.6821"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "alex@denck.com",
                "contactType": "customer service",
                "areaServed": {
                  "@type": "Country",
                  "name": "Deutschland"
                },
                "availableLanguage": "German",
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              },
              "sameAs": [
                "https://www.linkedin.com/in/denck"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "KI-Beratungsleistungen von DENCK Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "KI-Strategieberatung",
                      "description": "Entwicklung individueller KI-Strategien für Unternehmen",
                      "provider": {
                        "@type": "Person",
                        "name": "Alex Denck"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Prozessautomatisierung",
                      "description": "End-to-End Automatisierung von Geschäftsprozessen mit KI",
                      "provider": {
                        "@type": "Person",
                        "name": "Alex Denck"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "KI-Agenten Entwicklung",
                      "description": "Intelligente KI-Agenten für Kundenservice und Automatisierung",
                      "provider": {
                        "@type": "Person",
                        "name": "Alex Denck"
                      }
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "25",
                "bestRating": "5",
                "worstRating": "1"
              },
              "areaServed": {
                "@type": "State",
                "name": "Deutschland"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "50.1109",
                  "longitude": "8.6821"
                },
                "geoRadius": "50000"
              }
            })
          }}
        />
        
        {/* Breadcrumb Schema für bessere Navigation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.denck.com"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Leistungen",
                  "item": "https://www.denck.com/leistungen"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Kontakt",
                  "item": "https://www.denck.com/kontakt"
                }
              ]
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}