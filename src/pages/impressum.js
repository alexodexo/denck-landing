// src/pages/impressum.js
import Link from 'next/link'
import { ArrowLeft, Mail, MapPin, FileText, Building, Scale, Globe } from 'lucide-react'

export default function Impressum() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="container-width relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Back Navigation */}
            <div className="mb-12">
              <Link 
                href="/"
                className="inline-flex items-center text-slate-400 hover:text-white transition-colors duration-200 group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Zurück zur Startseite
              </Link>
            </div>

            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-2xl">
                  <FileText className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400" />
                  <span className="font-medium bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text animate-gradient bg-300%">
                    Rechtliche Angaben
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Impressum
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Angaben gemäß § 5 TMG
              </p>
            </div>

            {/* Verantwortlich */}
            <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Building className="h-6 w-6 mr-3 text-blue-400" />
                Verantwortlich
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Anschrift</h3>
                      <div className="text-slate-300 space-y-1 leading-relaxed">
                        <p><strong className="text-white">ALD Beratungs und Beteiligungsgesellschaft UG</strong></p>
                        <p>(haftungsbeschränkt)</p>
                        <p>Hannah-Arendt-Str 40</p>
                        <p>60438 Frankfurt am Main</p>
                        <p>Deutschland</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex-shrink-0">
                      <Mail className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">E-Mail</h3>
                      <a 
                        href="mailto:info@denck.com"
                        className="text-green-400 hover:text-green-300 transition-colors duration-200"
                      >
                        info@denck.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Registereintrag */}
                <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Scale className="h-5 w-5 mr-2 text-yellow-400" />
                    Registereintrag
                  </h3>
                  <div className="text-slate-300 space-y-2 text-sm">
                    <p><strong className="text-white">Eintragung im Handelsregister</strong></p>
                    <p>Registergericht: Amtsgericht Frankfurt am Main</p>
                    <p>Registernummer: HRB 138616</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Haftungsbeschränkung */}
            <div className="space-y-12">
              
              {/* Haftungsbeschränkung */}
              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <Scale className="h-6 w-6 mr-3 text-yellow-400" />
                  1. Haftungsbeschränkung
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Inhalte dieser Website</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Verfügbarkeit der Website</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Der Anbieter wird sich bemühen, den Dienst möglichst unterbrechungsfrei zum Abruf anzubieten. Auch bei aller Sorgfalt können aber Ausfallzeiten nicht ausgeschlossen werden. Der Anbieter behält sich das Recht vor, sein Angebot jederzeit zu ändern oder einzustellen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Externe Links</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Eine ständige Kontrolle dieser externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
                    </p>
                  </div>
                </div>
              </div>

              {/* Urheber- und Leistungsschutzrechte */}
              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <FileText className="h-6 w-6 mr-3 text-purple-400" />
                  2. Urheber- und Leistungsschutzrechte
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
                  </p>
                  
                  <p>
                    Links zur Website des Anbieters sind jederzeit willkommen und bedürfen keiner Zustimmung durch den Anbieter der Website. Die Darstellung dieser Website in fremden Frames ist nur mit Erlaubnis zulässig.
                  </p>
                </div>
              </div>

              {/* Anwendbares Recht */}
              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Globe className="h-6 w-6 mr-3 text-green-400" />
                  3. Anwendbares Recht
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Es gilt ausschließlich das maßgebliche Recht der Bundesrepublik Deutschland.
                </p>
              </div>

              {/* Besondere Nutzungsbedingungen */}
              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FileText className="h-6 w-6 mr-3 text-orange-400" />
                  4. Besondere Nutzungsbedingungen
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Nummern 1. bis 3. abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links zu anderen rechtlichen Seiten */}
      <section className="py-20 relative overflow-hidden">
        <div className="container-width relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Weitere{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  rechtliche Informationen
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/datenschutz"
                className="group relative block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-xl" />
                
                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                    Datenschutzerklärung
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Informationen zum Umgang mit Ihren personenbezogenen Daten
                  </p>
                </div>
              </Link>
              
              <Link
                href="/agb"
                className="group relative block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-xl" />
                
                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-200">
                    Allgemeine Geschäftsbedingungen
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Bedingungen für unsere Dienstleistungen
                  </p>
                </div>
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