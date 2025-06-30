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
              "name": "C5 Business Partner",
              "alternateName": "Frankfurt Business Coach",
              "url": "https://www.c5-business-partner.de",
              "logo": "https://www.c5-business-partner.de/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+49-69-9753-4441",
                "contactType": "customer service",
                "areaServed": "DE",
                "availableLanguage": "German"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Günthersburgallee 82",
                "addressLocality": "Frankfurt am Main",
                "postalCode": "60389",
                "addressCountry": "DE"
              },
              "sameAs": [
                "https://www.linkedin.com/in/mario-egartner",
                "https://www.xing.com/profile/Mario_Egartner"
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