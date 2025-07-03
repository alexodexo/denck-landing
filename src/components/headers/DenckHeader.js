// src/components/headers/DenckHeader.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X, Bot, ChevronDown, Zap, Sparkles, Calendar } from 'lucide-react'

export default function DenckHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  // Scroll detection for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { 
      name: 'Leistungen', 
      href: '/leistungen',
      dropdown: [
        { 
          name: 'KI-Strategieberatung', 
          href: '/leistungen#ki-strategie',
          icon: Bot,
          desc: 'Maßgeschneiderte KI-Roadmap für Ihr Unternehmen'
        },
        { 
          name: 'Prozessautomatisierung', 
          href: '/leistungen#automatisierung',
          icon: Zap,
          desc: 'Intelligente Automatisierung Ihrer Workflows'
        },
        { 
          name: 'Daten & Analytics', 
          href: '/leistungen#analytics',
          icon: Sparkles,
          desc: 'Datengetriebene Entscheidungen treffen'
        },
        { 
          name: 'KI-Governance', 
          href: '/leistungen#governance',
          icon: Bot,
          desc: 'Sichere und ethische KI-Implementierung'
        }
      ]
    },
    { name: 'Kontakt', href: '/kontakt' }
  ]

  const isActiveLink = (href) => {
    return router.pathname === href || router.pathname.startsWith(href + '/')
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Background Effects when scrolled */}
      {isScrolled && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full filter blur-3xl" />
          <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl" />
        </div>
      )}

      <nav className="container-width py-4 relative z-10">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              {/* Logo Background with Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              
              <div className="relative flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-600/30 rounded-xl group-hover:border-slate-500/50 transition-all duration-300">
                <div className="relative">
                  <Bot className="h-8 w-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                  <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-slate-200 to-white text-transparent bg-clip-text group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-yellow-400 transition-all duration-300">
                  DENCK Consulting
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-slate-800/50 backdrop-blur-sm ${
                        isActiveLink(item.href) 
                          ? 'text-white bg-slate-800/30' 
                          : 'text-slate-300 hover:text-white'
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mega Menu Dropdown */}
                    {isServicesOpen && (
                      <div 
                        className="absolute left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl py-4 overflow-hidden"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {/* Background Effects */}
                        <div className="absolute inset-0">
                          <div className="absolute top-0 left-0 w-20 h-20 bg-purple-500/10 rounded-full filter blur-xl" />
                          <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full filter blur-xl" />
                        </div>
                        
                        <div className="relative z-10">
                          {item.dropdown.map((subItem, index) => {
                            const Icon = subItem.icon
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="group/item block px-6 py-4 hover:bg-slate-800/50 transition-all duration-300"
                                style={{ animationDelay: `${index * 50}ms` }}
                              >
                                <div className="flex items-start space-x-4">
                                  <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                      <Icon className="h-5 w-5 text-slate-400 group-hover/item:text-white transition-colors duration-300" />
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-semibold text-white group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-purple-400 group-hover/item:to-pink-400 transition-all duration-300">
                                      {subItem.name}
                                    </div>
                                    <div className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors duration-300 mt-1">
                                      {subItem.desc}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                          
                          {/* Footer in Dropdown */}
                          <div className="px-6 py-4 border-t border-slate-700/50 mt-2">
                            <Link
                              href="/leistungen"
                              className="group/all flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300"
                            >
                              Alle Leistungen ansehen
                              <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg] group-hover/all:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-slate-800/50 backdrop-blur-sm ${
                      isActiveLink(item.href) 
                        ? 'text-white bg-slate-800/30' 
                        : 'text-slate-300 hover:text-white'
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
              className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 overflow-hidden"
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <Calendar className="relative z-10 mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10">Kostenlose Beratung</span>
              
              {/* Sparkle Effect */}
              <Sparkles className="relative z-10 ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden relative p-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 backdrop-blur-sm transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {isMenuOpen ? (
              <X className="relative z-10 h-6 w-6 transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="relative z-10 h-6 w-6 transform rotate-0 group-hover:rotate-12 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-xl rounded-2xl">
            <div className="flex flex-col space-y-2">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative" style={{ animationDelay: `${index * 100}ms` }}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      isActiveLink(item.href) 
                        ? 'text-white bg-slate-800/50' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem, subIndex) => {
                        const Icon = subItem.icon
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="group flex items-center px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                            style={{ animationDelay: `${(index * 100) + (subIndex * 50)}ms` }}
                          >
                            <Icon className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                            <div>
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-xs text-slate-500 group-hover:text-slate-400">{subItem.desc}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <Link
                href="/kontakt"
                className="group relative mt-4 mx-4 inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Calendar className="relative z-10 mr-2 h-5 w-5" />
                <span className="relative z-10">Kostenlose Beratung anfragen</span>
                <Sparkles className="relative z-10 ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 animate-pulse" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}