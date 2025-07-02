// src/components/headers/DenckHeader.js
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X, Bot, ChevronDown } from 'lucide-react'

export default function DenckHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const router = useRouter()

  const navigation = [
    { 
      name: 'Leistungen', 
      href: '/leistungen',
      dropdown: [
        { name: 'KI-Strategieberatung', href: '/leistungen#ki-strategie' },
        { name: 'Prozessautomatisierung', href: '/leistungen#automatisierung' },
        { name: 'Daten & Analytics', href: '/leistungen#analytics' },
        { name: 'KI-Governance', href: '/leistungen#governance' }
      ]
    },
    { name: 'Kontakt', href: '/kontakt' }
  ]

  const isActiveLink = (href) => {
    return router.pathname === href || router.pathname.startsWith(href + '/')
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container-width py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            
            <span className="text-2xl font-bold text-slate-900">DENCK Consulting</span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActiveLink(item.href) ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isServicesOpen && (
                      <div 
                        className="absolute left-0 mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-lg py-2"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
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
                      isActiveLink(item.href) ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <Link href="/kontakt" className="btn-primary">
              Kostenlose Beratung
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium ${
                      isActiveLink(item.href) ? 'text-slate-900' : 'text-slate-600'
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
                          className="block px-3 py-2 text-sm text-slate-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                href="/kontakt"
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Kostenlose Beratung anfragen
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}