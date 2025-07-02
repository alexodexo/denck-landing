// src/components/footers/DenckFooter.js
import Link from 'next/link'
import { Mail, MapPin, Linkedin, Twitter, Bot } from 'lucide-react'

export default function DenckFooter() {
  const footerLinks = {
    leistungen: [
      { name: 'KI-Strategieberatung', href: '/leistungen#ki-strategie' },
      { name: 'Prozessautomatisierung', href: '/leistungen#automatisierung' },
      { name: 'Daten & Analytics', href: '/leistungen#analytics' },
      { name: 'KI-Governance', href: '/leistungen#governance' }
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
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Bot className="h-8 w-8 text-white mr-2" />
              <span className="text-2xl font-bold">DENCK Consulting</span>
            </div>
            <p className="text-slate-400 mb-6">
              Ihr Partner für erfolgreiche KI-Integration im Mittelstand. 
              Wir machen Künstliche Intelligenz praktisch nutzbar und schaffen messbare Mehrwerte.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              {footerLinks.leistungen.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-start text-slate-400">
                <Mail className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@denck-consulting.de" className="hover:text-white transition-colors">
                  info@denck-consulting.de
                </a>
              </p>
              <p className="flex items-start text-slate-400">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  Hannah-Arendt-Str 40<br />
                  60438 Frankfurt am Main
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400 mb-4 md:mb-0">
              © 2024 ALD Beratungs und Beteiligungsgesellschaft UG. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              {footerLinks.rechtliches.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-slate-400 hover:text-white transition-colors"
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