// src/pages/404.js
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeft, Home, Mail, Search, Bot } from 'lucide-react'

export default function Custom404() {
  const router = useRouter()

  const popularPages = [
    { name: 'Startseite', href: '/' },
    { name: 'Leistungen', href: '/leistungen' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' }
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
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
                Kein Problem! Kontaktieren Sie uns direkt - wir helfen Ihnen gerne weiter.
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Mail className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-navy-900 mb-2">E-Mail schreiben</h3>
                <a 
                  href="mailto:info@denck.com"
                  className="text-primary-600 hover:text-primary-700 transition-colors duration-200 text-sm"
                >
                  info@denck.com
                </a>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Bot className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-navy-900 mb-2">KI-Beratung</h3>
                <p className="text-gray-600 text-sm">
                  Lassen Sie uns über Ihre<br />
                  KI-Zukunft sprechen
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/kontakt"
                className="btn-primary text-lg px-8 py-4"
              >
                Kontaktformular nutzen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Seite nicht gefunden - 404',
      description: 'Die gesuchte Seite wurde nicht gefunden. Nutzen Sie unsere Navigation oder kontaktieren Sie Denck Solutions direkt.'
    }
  }
}