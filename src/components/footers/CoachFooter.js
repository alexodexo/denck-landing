import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Linkedin } from 'lucide-react'

export default function CoachFooter() {
  const serviceAreas = [
    'Frankfurt am Main',
    'Offenbach',
    'Darmstadt',
    'Wiesbaden',
    'Mainz',
    'Hanau'
  ]

  const coachingServices = [
    'Business Coaching',
    'Karriere Coaching',
    'Führungskräfte Coaching',
    'Systemische Beratung',
    'Paarberatung',
    'Outplacement'
  ]

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-primary-400" />
                <div className="text-gray-300 text-sm">
                  <p>Mario Egartner</p>
                  <p>Günthersburgallee 82</p>
                  <p>Beraterhaus / Hinterhaus</p>
                  <p>60389 Frankfurt am Main</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <a 
                  href="tel:069-97534441"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  069 - 9753 4441
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <a 
                  href="mailto:egartner@frankfurt-business-coach.de"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  egartner@frankfurt-business-coach.de
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-1 text-primary-400" />
                <div className="text-gray-300 text-sm">
                  <p>Mo-Fr: 9:00 - 18:00 Uhr</p>
                  <p>Abend- und Samstagstermine</p>
                  <p>nach Absprache</p>
                </div>
              </div>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Coaching-Leistungen</h3>
            <ul className="space-y-3">
              {coachingServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/frankfurt-business-coach/leistungen"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Einzugsgebiet */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Einzugsgebiet</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {area}
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-xs mt-4">
              Online-Coaching deutschlandweit
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/frankfurt-business-coach"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/frankfurt-business-coach/coach"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Über Mario Egartner
                </Link>
              </li>
              <li>
                <Link
                  href="/frankfurt-business-coach/leistungen"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href="/frankfurt-business-coach/preise"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Preise
                </Link>
              </li>
              <li>
                <Link
                  href="/frankfurt-business-coach/kontakt"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Brand */}
        <div className="border-t border-navy-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center mb-4 lg:mb-0">
              <div className="text-2xl font-bold text-white mr-8">
                Frankfurt <span className="text-primary-400">Business Coach</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/mario-egartner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn Profil von Mario Egartner"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                {/* Custom Xing SVG Icon */}
                <a
                  href="https://www.xing.com/profile/Mario_Egartner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Xing Profil von Mario Egartner"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536L14.421 13.7c-.193-.26-.193-.432 0-.66L19.825.874c.193-.9.193-.346.105-.534C19.852.078 19.688 0 19.477 0h-1.289zm-7.754 13.428c-.207 0-.37.093-.463.25-.09.151-.090.346.009.534l1.232 2.262c.193.26.193.432 0 .66l-2.395 4.364c-.193.26-.193.432 0 .66C8.912 19.93 9.075 20 9.286 20h3.454c.207 0 .37-.093.463-.25.090-.151.090-.346-.009-.534l-2.874-5.199c-.193-.26-.193-.432 0-.66l3.663-6.684c.207-.370.207-.61 0-.98L11.111.874c-.193-.26-.436-.660-.967-.66H6.69c-.211 0-.375.093-.463.25-.089.151-.089.346.009.534l2.463 4.516c.193.26.193.432 0 .66z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick CTA */}
            <div className="text-center lg:text-right">
              <p className="text-gray-300 text-sm mb-2">
                Bereit für Veränderung?
              </p>
              <Link
                href="/frankfurt-business-coach/kontakt"
                className="btn-primary"
              >
                Erstgespräch vereinbaren
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Mario Egartner - Frankfurt Business Coach. Alle Rechte vorbehalten.</p>
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