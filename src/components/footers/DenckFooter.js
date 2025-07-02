// src/components/footers/DenckFooter.js
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Bot } from 'lucide-react'

export default function DenckFooter() {
  const footerLinks = {
    leistungen: [
      { name: 'KI-Strategieberatung', href: '/leistungen/ki-strategie' },
      { name: 'Prozessautomatisierung', href: '/leistungen/automatisierung' },
      { name: 'Daten & Analytics', href: '/leistungen/analytics' },
      { name: 'KI-Governance', href: '/leistungen/governance' }
    ],
    unternehmen: [
      { name: 'Über uns', href: '/ueber-uns' },
      { name: 'Team', href: '/team' },
      { name: 'Karriere', href: '/karriere' },
      { name: 'Partner', href: '/partner' }
    ],
    ressourcen: [
      { name: 'Blog', href: '/blog' },
      { name: 'Whitepaper', href: '/ressourcen/whitepaper' },
      { name: 'Webinare', href: '/ressourcen/webinare' },
      { name: 'KI-Ratgeber', href: '/ressourcen/ratgeber' }
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
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
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
              <p className="flex items-center text-slate-400">
                <Phone className="h-4 w-4 mr-2" />
                +49 123 456789
              </p>
              <p className="flex items-center text-slate-400">
                <Mail className="h-4 w-4 mr-2" />
                info@denck-consulting.de
              </p>
              <p className="flex items-center text-slate-400">
                <MapPin className="h-4 w-4 mr-2" />
                Frankfurt am Main
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400 mb-4 md:mb-0">
              © 2024 DENCK Consulting GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/impressum" className="text-slate-400 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-slate-400 hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-slate-400 hover:text-white transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}