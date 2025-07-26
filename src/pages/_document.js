// src/pages/_document.js
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
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DENCK Soltutions",
              "legalName": "ALD Beratungs und Beteiligungsgesellschaft UG",
              "url": "https://www.denck.com",
              "logo": "https://www.denck.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@denck.com",
                "contactType": "customer service",
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
                "https://www.linkedin.com/u/denck"
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