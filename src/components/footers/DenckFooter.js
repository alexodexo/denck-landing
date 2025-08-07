// src/components/footers/DenckFooter.js
import Link from 'next/link'
import { Mail, MapPin, Linkedin, Twitter, Bot, Network, Workflow, Phone, MessageSquare, FileText } from 'lucide-react'

export default function DenckFooter() {
  const footerLinks = {
    leistungen: [
      { name: 'KI-Agenten Netzwerke', href: '/leistungen?service=agents', icon: Network },
      { name: 'Prozess-Automatisierung', href: '/leistungen?service=automation', icon: Workflow },
      { name: 'KI-Telefon Agenten', href: '/leistungen?service=phone', icon: Phone },
      { name: 'Omnichannel Chatbots', href: '/leistungen?service=chat', icon: MessageSquare },
      { name: 'E-Mail Intelligence', href: '/leistungen?service=email', icon: Mail },
      { name: 'KI-Report Generator', href: '/leistungen?service=reports', icon: FileText }
    ],
    unternehmen: [
      { name: 'Kontakt', href: '/kontakt' },
      { name: 'Leistungen', href: '/leistungen' },
    ],
    rechtliches: [
      { name: 'Impressum', href: '/impressum' },
      { name: 'Datenschutz', href: '/datenschutz' },
      { name: 'AGB', href: '/agb' }
    ]
  }

  return (
    <footer className="relative text-marine-800 pt-16 pb-8 border-t border-marine-200 bg-marine-50">
      {/* Semi-transparent overlay to ensure readability */}
      <div className="absolute inset-0 bg-marine-50/95 backdrop-blur-sm" />
      
      <div className="container-width relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-marine-800">Denck Solutions</span>
            </div>
            <p className="text-text-secondary mb-6">
              Ihr Partner für erfolgreiche KI-Integration im Mittelstand. 
              Wir machen Künstliche Intelligenz praktisch nutzbar und schaffen messbare Mehrwerte.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/denck" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-secondary hover:text-marine-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
         
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              {footerLinks.leistungen.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="group flex items-center text-text-secondary hover:text-marine-700 transition-colors text-sm"
                    >
                      <Icon className="h-3 w-3 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-secondary hover:text-marine-700 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-start text-text-secondary">
                <Mail className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@denck.com" className="hover:text-marine-700 transition-colors">
                  info@denck.com
                </a>
              </p>
              <p className="flex items-start text-text-secondary">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  Hannah-Arendt-Str 40<br />
                  60438 Frankfurt am Main
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-marine-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-text-secondary mb-4 md:mb-0">
              © 2025 ALD Beratungs und Beteiligungsgesellschaft UG. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              {footerLinks.rechtliches.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-text-secondary hover:text-marine-700 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}