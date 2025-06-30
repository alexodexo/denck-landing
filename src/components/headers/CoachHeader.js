import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function CoachHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const navigation = [
    { 
      name: 'Coach', 
      href: '/frankfurt-business-coach/coach' 
    },
    { 
      name: 'Leistungen', 
      href: '/frankfurt-business-coach/leistungen' 
    },
    { 
      name: 'Preise', 
      href: '/frankfurt-business-coach/preise' 
    },
    { 
      name: 'Kontakt', 
      href: '/frankfurt-business-coach/kontakt' 
    }
  ]

  const isActiveLink = (href) => {
    if (href === '/frankfurt-business-coach') {
      return router.pathname === '/frankfurt-business-coach'
    }
    return router.pathname.startsWith(href)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-navy-900 text-white py-2 px-4 hidden md:block">
        <div className="container-width">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>069 - 9753 4440</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>egartner@frankfurt-business-coach.de</span>
              </div>
            </div>
            <div className="text-sm">
              Abend- und Samstagstermine nach Absprache
            </div>
          </div>
        </div>
      </div>

      <nav className="container-width" aria-label="Top">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/frankfurt-business-coach" className="flex items-center">
              <div className="text-xl lg:text-2xl font-bold text-navy-900">
                Frankfurt <span className="text-primary-600">Business Coach</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActiveLink(item.href)
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/frankfurt-business-coach/kontakt"
              className="btn-primary ml-4"
            >
              Termin vereinbaren
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
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
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-gray-200">
            {/* Mobile Contact Info */}
            <div className="px-3 py-4 border-b border-gray-200 md:hidden">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>069 - 9753 4440</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>egartner@frankfurt-business-coach.de</span>
                </div>
              </div>
            </div>
            
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  isActiveLink(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-4">
              <Link
                href="/frankfurt-business-coach/kontakt"
                className="btn-primary w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Termin vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}