// src/components/footers/DenckFooter.js
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Bot, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react'

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
      { name: 'KI-Ratgeber', href: '/ressourcen/ratgeber' },
      { name: 'Newsletter', href: '/newsletter' }
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Support', href: '/support' },
      { name: 'Schulungen', href: '/schulungen' },
      { name: 'Dokumentation', href: '/docs' }
    ]
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Bleiben Sie auf dem Laufenden
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Erhalten Sie die neuesten Insights und Trends aus der Welt der Künstlichen Intelligenz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button
                type="button"
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Anmelden
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Bot className="h-8 w-8 text-blue-400 mr-2" />
              <div className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">DENCK</span>
                <span> Consulting</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Ihr Partner für erfolgreiche KI-Integration im Mittelstand. 
              Wir machen Künstliche Intelligenz praktisch nutzbar und schaffen messbare Mehrwerte.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
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

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
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
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Telefon</p>
                <a href="tel:+49123456789" className="text-white hover:text-blue-400 font-medium">
                  +49 123 456789
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-900 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">E-Mail</p>
                <a href="mailto:info@denck-consulting.de" className="text-white hover:text-blue-400 font-medium">
                  info@denck-consulting.de
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-pink-900 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-pink-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Standort</p>
                <p className="text-white font-medium">Frankfurt am Main</p>
              </div>
            </div>
          </div>

          {/* Awards and Certifications */}
          <div className="flex flex-wrap justify-center items-center gap-8 py-8 border-t border-gray-700">
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-2">Zertifiziert durch</p>
              <div className="flex space-x-4">
                <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-400">ISO 27001</span>
                </div>
                <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-400">TÜV</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-2">Partner von</p>
              <div className="flex space-x-4">
                <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-400">Microsoft</span>
                </div>
                <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-400">Google</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 DENCK Consulting GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-gray-400 hover:text-white transition-colors">
                AGB
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie-Einstellungen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}