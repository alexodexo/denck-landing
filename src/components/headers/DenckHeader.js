// src/components/headers/DenckHeader.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X, Bot, ChevronDown, Zap, Sparkles, Calendar, Network, Workflow, Phone, MessageSquare, Mail, FileText } from 'lucide-react'

export default function DenckHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const router = useRouter()

  const navigation = [
    { 
      name: 'Leistungen', 
      href: '/leistungen',
      dropdown: [
        { 
          name: 'KI-Agenten Netzwerke', 
          href: '/leistungen#agents',
          icon: Network,
          desc: 'Intelligente Agenten-Systeme die autonom zusammenarbeiten'
        },
        { 
          name: 'Prozess-Automatisierung', 
          href: '/leistungen#automation',
          icon: Workflow,
          desc: 'End-to-End Automatisierung Ihrer Geschäftsprozesse'
        },
        { 
          name: 'KI-Telefon Agenten', 
          href: '/leistungen#phone',
          icon: Phone,
          desc: 'Sprachgesteuerte KI für perfekten Kundenservice'
        },
        { 
          name: 'Omnichannel Chatbots', 
          href: '/leistungen#chat',
          icon: MessageSquare,
          desc: 'Ein Bot, alle Plattformen - WhatsApp, Slack, Teams & mehr'
        },
        { 
          name: 'E-Mail Intelligence', 
          href: '/leistungen#email',
          icon: Mail,
          desc: 'Intelligente E-Mail Verarbeitung für Outlook & Gmail'
        },
        { 
          name: 'KI-Report Generator', 
          href: '/leistungen#reports',
          icon: FileText,
          desc: 'Automatische Berichte mit tiefgreifenden Insights'
        }
      ]
    },
    { name: 'Kontakt', href: '/kontakt' }
  ]

  const isActiveLink = (href) => {
    return router.pathname === href || router.pathname.startsWith(href + '/')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-marine-600/95 backdrop-blur-xl border-b border-marine-500/30 shadow-xl">
      <nav className="container-width py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo - Cleaner Design */}
          <Link href="/" className="flex items-center group">
            <div className="relative flex items-center space-x-3">
              {/* Clean text logo */}
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white group-hover:text-gold-400 transition-all duration-300">
                  Denck Solutions
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
                      className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-marine-500/30 backdrop-blur-sm ${
                        isActiveLink(item.href) 
                          ? 'text-white bg-marine-500/40' 
                          : 'text-marine-100 hover:text-white'
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
                        className="absolute left-0 mt-2 w-96 bg-white/95 backdrop-blur-xl border border-marine-100 rounded-2xl shadow-xl py-4 overflow-hidden"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <div className="relative z-10">
                          <div className="grid grid-cols-2 gap-1">
                            {item.dropdown.map((subItem, index) => {
                              const Icon = subItem.icon
                              return (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="group/item block px-4 py-3 hover:bg-marine-50 transition-all duration-300"
                                  style={{ animationDelay: `${index * 50}ms` }}
                                >
                                  <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0">
                                      <div className="w-8 h-8 bg-marine-100 rounded-lg flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-marine-200 transition-all duration-300">
                                        <Icon className="h-4 w-4 text-marine-600 group-hover/item:text-marine-800 transition-colors duration-300" />
                                      </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="font-semibold text-marine-800 group-hover/item:text-marine-900 transition-all duration-300 text-sm">
                                        {subItem.name}
                                      </div>
                                      <div className="text-xs text-text-secondary group-hover/item:text-marine-600 transition-colors duration-300 mt-1">
                                        {subItem.desc}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                          
                          {/* Footer in Dropdown */}
                          <div className="px-4 py-3 border-t border-marine-200 mt-2">
                            <Link
                              href="/leistungen"
                              className="group/all flex items-center text-sm font-medium text-text-secondary hover:text-marine-700 transition-colors duration-300"
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
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-marine-500/30 backdrop-blur-sm ${
                      isActiveLink(item.href) 
                        ? 'text-white bg-marine-500/40' 
                        : 'text-marine-100 hover:text-white'
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
              className="btn-primary group"
            >
              <Calendar className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Kostenlose Beratung</span>
              <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden relative p-3 rounded-xl text-marine-100 hover:text-white hover:bg-marine-500/30 backdrop-blur-sm transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="relative z-10 h-6 w-6 transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="relative z-10 h-6 w-6 transform rotate-0 group-hover:rotate-12 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-marine-500/30 bg-marine-700/90 backdrop-blur-xl rounded-2xl">
            <div className="flex flex-col space-y-2">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative" style={{ animationDelay: `${index * 100}ms` }}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      isActiveLink(item.href) 
                        ? 'text-white bg-marine-500/50' 
                        : 'text-marine-100 hover:text-white hover:bg-marine-500/30'
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
                            className="group flex items-center px-4 py-2 text-sm text-marine-200 hover:text-white hover:bg-marine-500/30 rounded-lg transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                            style={{ animationDelay: `${(index * 100) + (subIndex * 50)}ms` }}
                          >
                            <Icon className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                            <div>
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-xs text-marine-300 group-hover:text-marine-200">{subItem.desc}</div>
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
                className="btn-primary group mt-4 mx-4 w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                <span>Kostenlose Beratung anfragen</span>
                <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 animate-float" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}