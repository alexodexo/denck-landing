// src/pages/impressum.js
import Link from 'next/link'
import { ArrowLeft, Mail, MapPin, FileText } from 'lucide-react'

export default function Impressum() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="container-width section-padding relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="hero-text mb-6">Impressum</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Angaben gemäß § 5 TMG
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            
            {/* Back Navigation */}
            <div className="mb-12">
              <Link 
                href="/"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </div>

            {/* Verantwortlich */}
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Verantwortlich</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Anschrift</h3>
                    <div className="text-gray-700 space-y-1">
                      <p><strong>ALD Beratungs und Beteiligungsgesellschaft UG</strong></p>
                      <p>(haftungsbeschränkt)</p>
                      <p>Hannah-Arendt-Str 40</p>
                      <p>60438 Frankfurt am Main</p>
                      <p>Deutschland</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">E-Mail</h3>
                    <a 
                      href="mailto:info@denck-consulting.de"
                      className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
                    >
                      info@denck-consulting.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Registereintrag */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Registereintrag</h2>
              <div className="text-gray-700 space-y-2">
                <p><strong>Eintragung im Handelsregister</strong></p>
                <p>Registergericht: Amtsgericht Frankfurt am Main</p>
                <p>Registernummer: [Ihre HRB-Nummer]</p>
              </div>
            </div>

            {/* Haftungsbeschränkung */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">1. Haftungsbeschränkung</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">Inhalte dieser Website</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">Verfügbarkeit der Website</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Der Anbieter wird sich bemühen, den Dienst möglichst unterbrechungsfrei zum Abruf anzubieten. Auch bei aller Sorgfalt können aber Ausfallzeiten nicht ausgeschlossen werden. Der Anbieter behält sich das Recht vor, sein Angebot jederzeit zu ändern oder einzustellen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">Externe Links</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Eine ständige Kontrolle dieser externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">2. Urheber- und Leistungsschutzrechte</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
                  </p>
                  
                  <p>
                    Links zur Website des Anbieters sind jederzeit willkommen und bedürfen keiner Zustimmung durch den Anbieter der Website. Die Darstellung dieser Website in fremden Frames ist nur mit Erlaubnis zulässig.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">3. Anwendbares Recht</h2>
                <p className="text-gray-700 leading-relaxed">
                  Es gilt ausschließlich das maßgebliche Recht der Bundesrepublik Deutschland.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">4. Besondere Nutzungsbedingungen</h2>
                <p className="text-gray-700 leading-relaxed">
                  Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Nummern 1. bis 3. abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links zu anderen rechtlichen Seiten */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
              Weitere rechtliche Informationen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/datenschutz"
                className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  Datenschutzerklärung
                </h3>
                <p className="text-gray-600 text-sm">
                  Informationen zum Umgang mit Ihren personenbezogenen Daten
                </p>
              </Link>
              
              <Link
                href="/agb"
                className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  Allgemeine Geschäftsbedingungen
                </h3>
                <p className="text-gray-600 text-sm">
                  Bedingungen für unsere Dienstleistungen
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Impressum - DENCK Consulting',
      description: 'Impressum und rechtliche Angaben der ALD Beratungs und Beteiligungsgesellschaft UG - DENCK Consulting.'
    }
  }
}