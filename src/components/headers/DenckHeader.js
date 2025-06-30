// src/components/headers/DenckHeader.js
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X, Bot, ChevronDown, Phone, Mail } from 'lucide-react'

export default function DenckHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const router = useRouter()

  const navigation = [
    { 
      name: 'Leistungen', 
      href: '/leistungen',
      dropdown: [
        { name: 'KI-Strategieberatung', href: '/leistungen/ki-strategie' },
        { name: 'Prozessautomatisierung', href: '/leistungen/automatisierung' },
        { name: 'Daten & Analytics', href: '/leistungen/analytics' },
        { name: 'KI-Governance', href: '/leistungen/governance' }
      ]
    },
    { 
      name: 'Über uns', 
      href: '/ueber-uns' 
    },
    { 
      name: 'Referenzen', 
      href: '/referenzen' 
    },
    { 
      name: 'Blog', 
      href: '/blog' 
    },
    { 
      name: 'Kontakt', 
      href: '/kontakt' 
    }
  ]

  const isActiveLink = (href) => {
    return router.pathname === href || router.pathname.startsWith(href + '/')
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg shadow-sm z-50">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+49 123 456789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@denck-consulting.de</span>
              </div>
            </div>
            <div className="text-sm">
              🚀 KI macht Ihr Unternehmen profitabler
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4" aria-label="Top">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Bot className="h-8 w-8 text-blue-600 mr-2" />
              <div className="text-xl lg:text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">DENCK</span>
                <span className="text-gray-900"> Consulting</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActiveLink(item.href)
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isServicesOpen && (
                      <div 
                        className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActiveLink(item.href)
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/kontakt"
              className="ml-4 inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Kostenlose Beratung
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Menü öffnen</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden transition-all duration-300 ease-in-out">
            <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      isActiveLink(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Link
                  href="/kontakt"
                  className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kostenlose Beratung anfragen
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}