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
      { name: 'Newsletter', href: '/newsletter' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Bot className="h-8 w-8 text-blue-400 mr-2" />
              <div className="text-2xl font-bold">
                <span>DENCK</span>
                <span className="text-blue-400"> Consulting</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Ihr Partner für erfolgreiche KI-Integration im Mittelstand. 
              Wir machen Künstliche Intelligenz praktisch nutzbar.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              {footerLinks.leistungen.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressourcen */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ressourcen</h3>
            <ul className="space-y-2">
              {footerLinks.ressourcen.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Telefon</p>
                <a href="tel:+49123456789" className="text-white hover:text-blue-400">
                  +49 123 456789
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">E-Mail</p>
                <a href="mailto:info@denck-consulting.de" className="text-white hover:text-blue-400">
                  info@denck-consulting.de
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Standort</p>
                <p className="text-white">Frankfurt am Main</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 DENCK Consulting. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-gray-400 hover:text-white transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
