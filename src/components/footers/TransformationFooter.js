import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function TransformationFooter() {
  const footerSections = [
    {
      title: 'Unternehmen',
      links: [
        { name: 'Über uns', href: '/transformationskontinuum/ueber-uns' },
        { name: 'Team', href: '/transformationskontinuum/ueber-uns#team' },
        { name: 'Karriere', href: '/transformationskontinuum/karriere' },
        { name: 'Partner', href: '/transformationskontinuum/partner' }
      ]
    },
    {
      title: 'Leistungen',
      links: [
        { name: 'Kulturanalyse', href: '/transformationskontinuum/leistungen#kulturanalyse' },
        { name: 'Strategische Beratung', href: '/transformationskontinuum/leistungen#strategische-beratung' },
        { name: 'Teamworkshops', href: '/transformationskontinuum/leistungen#teamworkshops' },
        { name: 'Führungskräfte-Training', href: '/transformationskontinuum/leistungen#fuehrungskraefte-training' },
        { name: 'Coaching', href: '/transformationskontinuum/leistungen#coaching' }
      ]
    },
    {
      title: 'Branchen',
      links: [
        { name: 'Finanzdienstleistungen', href: '/transformationskontinuum/branchen/finanzdienstleistungen' },
        { name: 'Versicherungen', href: '/transformationskontinuum/branchen/versicherungen' },
        { name: 'Automobil', href: '/transformationskontinuum/branchen/automobil' },
        { name: 'Technologie', href: '/transformationskontinuum/branchen/technologie' }
      ]
    },
    {
      title: 'Kontakt',
      isContact: true,
      content: {
        address: 'Günthersburgallee 82\nBeraterhaus / Hinterhaus\n60389 Frankfurt am Main',
        phone: '069 - 9753 4440',
        email: 'berater@c5-business-partner.de'
      }
    }
  ]

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6 text-white">{section.title}</h3>
              
              {section.isContact ? (
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 mt-1 text-primary-400" />
                    <p className="text-gray-300 text-sm whitespace-pre-line">
                      {section.content.address}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-400" />
                    <a 
                      href={`tel:${section.content.phone.replace(/\s|-/g, '')}`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {section.content.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary-400" />
                    <a 
                      href={`mailto:${section.content.email}`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {section.content.email}
                    </a>
                  </div>
                </div>
              ) : (
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Social Media & Company Logo */}
        <div className="border-t border-navy-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center mb-4 lg:mb-0">
              <div className="text-2xl font-bold text-white mr-8">
                C5 <span className="text-primary-400">Business Partner</span>
              </div>
     
            </div>
            
            {/* Quick CTA */}
            <div className="text-center lg:text-right">
              <p className="text-gray-300 text-sm mb-2">
                Transformation beginnt mit einem Gespräch
              </p>
              <Link
                href="/transformationskontinuum/kontakt"
                className="btn-primary"
              >
                Jetzt Beratung anfragen
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 C5 Business Partner. Alle Rechte vorbehalten.</p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/impressum"
                className="hover:text-white transition-colors duration-200"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="hover:text-white transition-colors duration-200"
              >
                Datenschutz
              </Link>
              <Link
                href="/agb"
                className="hover:text-white transition-colors duration-200"
              >
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}