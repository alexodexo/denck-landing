import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeft, Home, Building2, User, Phone, Mail, Search, MapPin } from 'lucide-react'

export default function Custom404() {
  const router = useRouter()

  const quickLinks = [
    {
      title: 'C5 Business Partner',
      description: 'Unternehmensberatung & Organisationsentwicklung',
      href: '/transformationskontinuum',
      icon: Building2,
      color: 'primary'
    },
    {
      title: 'Frankfurt Business Coach', 
      description: 'Individuelles Coaching & Beratung',
      href: '/frankfurt-business-coach',
      icon: User,
      color: 'navy'
    }
  ]

  const popularPages = [
    { name: 'Über uns', href: '/transformationskontinuum/ueber-uns' },
    { name: 'Leistungen', href: '/transformationskontinuum/leistungen' },
    { name: 'Coaching Services', href: '/frankfurt-business-coach/leistungen' },
    { name: 'Preise', href: '/frankfurt-business-coach/preise' },
    { name: 'Kontakt', href: '/transformationskontinuum/kontakt' },
    { name: 'Mario Egartner', href: '/frankfurt-business-coach/coach' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="container-width section-padding relative min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              {/* 404 Number */}
              <div className="text-8xl sm:text-9xl font-bold text-white/20 mb-4 animate-fade-in">
                404
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-up animation-delay-200">
                Seite nicht gefunden
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
                Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben. 
                Aber keine Sorge - wir helfen Ihnen gerne weiter!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up animation-delay-600">
              <button
                onClick={() => router.back()}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-navy-900 bg-white border border-transparent rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Zurück zur vorherigen Seite
              </button>
              
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
              >
                <Home className="mr-2 h-5 w-5" />
                Zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title">Wohin möchten Sie?</h2>
            <p className="section-subtitle">
              Wählen Sie den passenden Bereich oder nutzen Sie die Navigation unten
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`group block p-8 bg-gradient-to-br ${
                    link.color === 'primary' 
                      ? 'from-primary-600 to-navy-700 hover:from-primary-700 hover:to-navy-800' 
                      : 'from-navy-700 to-primary-600 hover:from-navy-800 hover:to-primary-700'
                  } rounded-xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{link.title}</h3>
                      <p className="text-white/80">{link.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white/90 group-hover:text-white transition-colors duration-200">
                    <span className="text-sm font-medium">Bereich erkunden</span>
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
              Beliebte Seiten
            </h2>
            <p className="text-gray-600">
              Vielleicht finden Sie hier, was Sie suchen
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-primary-50 transition-all duration-200 text-center group"
              >
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors duration-200">
                  {page.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <Search className="h-16 w-16 text-primary-600 mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                Haben Sie nicht gefunden, was Sie suchen?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Kein Problem! Kontaktieren Sie mich direkt - ich helfe Ihnen gerne weiter.
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Phone className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-navy-900 mb-2">Anrufen</h3>
                <a 
                  href="tel:069-97534441"
                  className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                >
                  069 - 9753 4441
                </a>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Mail className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-navy-900 mb-2">E-Mail schreiben</h3>
                <a 
                  href="mailto:egartner@frankfurt-business-coach.de"
                  className="text-primary-600 hover:text-primary-700 transition-colors duration-200 text-sm"
                >
                  egartner@frankfurt-business-coach.de
                </a>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-navy-900 mb-2">Besuchen</h3>
                <p className="text-gray-600 text-sm">
                  Günthersburgallee 82<br />
                  60389 Frankfurt am Main
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/transformationskontinuum/kontakt"
                className="btn-primary text-lg px-8 py-4"
              >
                Kontaktformular nutzen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Error Details (for development) */}
      {process.env.NODE_ENV === 'development' && (
        <section className="section-padding bg-gray-100">
          <div className="container-width">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Entwicklungsinfo (nur im Dev-Modus sichtbar)
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Gesuchte URL:</strong> {router.asPath}
                </p>
                <p className="text-gray-600 text-sm">
                  Diese Seite wurde nicht gefunden. Überprüfen Sie die URL oder die Routing-Konfiguration.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Seite nicht gefunden - 404',
      description: 'Die gesuchte Seite wurde nicht gefunden. Nutzen Sie unsere Navigation oder kontaktieren Sie Mario Egartner direkt.'
    }
  }
}