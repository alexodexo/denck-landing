// src/pages/datenschutz.js
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, UserCheck, Database, Globe, Cookie, Settings } from 'lucide-react'

export default function Datenschutz() {
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
                  <Shield className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400" />
                  <span className="font-medium bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text animate-gradient bg-300%">
                    Datenschutz & Privatsphäre
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Datenschutzerklärung
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Ihre Privatsphäre ist uns wichtig. Hier erfahren Sie, wie wir mit Ihren Daten umgehen.
              </p>
            </div>

            {/* Überblick */}
            <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-12">
              <div className="flex items-start space-x-4">
                <UserCheck className="h-8 w-8 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Datenschutz auf einen Blick</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf unserer Website auf. Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                </div>
              </div>
            </div>

            {/* Verantwortlicher */}
            <div className="space-y-12">
              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Database className="h-6 w-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">1. Verantwortlicher</h2>
                </div>
                <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg p-6">
                  <div className="space-y-2 text-slate-300">
                    <p><strong className="text-white">ALD Beratungs und Beteiligungsgesellschaft UG</strong></p>
                    <p>(haftungsbeschränkt)</p>
                    <p>Hannah-Arendt-Str 40</p>
                    <p>60438 Frankfurt am Main</p>
                    <p>Deutschland</p>
                    <p className="mt-4">
                      <strong className="text-white">E-Mail:</strong> <a href="mailto:datenschutz@denck-consulting.de" className="text-green-400 hover:text-green-300 transition-colors">datenschutz@denck-consulting.de</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="h-6 w-6 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">2. Arten der verarbeiteten Daten</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg p-6">
                    <h3 className="font-semibold text-white mb-3">Kontaktdaten</h3>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• Namen und Firmennamen</li>
                      <li>• E-Mail-Adressen</li>
                      <li>• Telefonnummern</li>
                      <li>• Geschäftsadressen</li>
                    </ul>
                  </div>
                  <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg p-6">
                    <h3 className="font-semibold text-white mb-3">Technische Daten</h3>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• IP-Adressen</li>
                      <li>• Browser-Informationen</li>
                      <li>• Betriebssystem</li>
                      <li>• Zugriffszeiten</li>
                    </ul>
                  </div>
                  <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg p-6">
                    <h3 className="font-semibold text-white mb-3">Nutzungsdaten</h3>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• Besuchte Seiten</li>
                      <li>• Verweildauer</li>
                      <li>• Referrer-URLs</li>
                      <li>• Klicks und Downloads</li>
                    </ul>
                  </div>
                  <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg p-6">
                    <h3 className="font-semibold text-white mb-3">Beratungsdaten</h3>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• Projektinformationen</li>
                      <li>• Beratungsinhalte</li>
                      <li>• Vertragsdetails</li>
                      <li>• Feedback und Bewertungen</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Lock className="h-6 w-6 text-yellow-400" />
                  <h2 className="text-2xl font-bold text-white">3. Zwecke der Datenverarbeitung</h2>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p><strong className="text-white">3.1.</strong> Wir verarbeiten Ihre personenbezogenen Daten zu folgenden Zwecken:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Bereitstellung und Betrieb unserer Website</li>
                    <li>• Bearbeitung von Kontaktanfragen und Kommunikation</li>
                    <li>• Durchführung von KI-Beratungsleistungen</li>
                    <li>• Vertragsabwicklung und Rechnungsstellung</li>
                    <li>• Verbesserung unserer Dienstleistungen</li>
                    <li>• Einhaltung gesetzlicher Verpflichtungen</li>
                    <li>• Sicherheitsmaßnahmen und Spam-Schutz</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <UserCheck className="h-6 w-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">4. Rechtsgrundlagen</h2>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf folgenden Rechtsgrundlagen:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 backdrop-blur-xl">
                      <h4 className="font-semibold text-white mb-2">Art. 6 Abs. 1 lit. a DSGVO</h4>
                      <p className="text-sm">Einwilligung (z.B. Newsletter, Cookies)</p>
                    </div>
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 backdrop-blur-xl">
                      <h4 className="font-semibold text-white mb-2">Art. 6 Abs. 1 lit. b DSGVO</h4>
                      <p className="text-sm">Vertragserfüllung (z.B. Beratungsleistungen)</p>
                    </div>
                    <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 backdrop-blur-xl">
                      <h4 className="font-semibold text-white mb-2">Art. 6 Abs. 1 lit. c DSGVO</h4>
                      <p className="text-sm">Rechtliche Verpflichtung (z.B. Steuerrecht)</p>
                    </div>
                    <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 backdrop-blur-xl">
                      <h4 className="font-semibold text-white mb-2">Art. 6 Abs. 1 lit. f DSGVO</h4>
                      <p className="text-sm">Berechtigte Interessen (z.B. Website-Sicherheit)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="h-6 w-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">5. Website-Hosting und technische Umsetzung</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">5.1. Hosting durch Vercel</h3>
                    <p className="text-slate-300 mb-4">
                      Diese Website wird auf der Plattform von Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Vercel verarbeitet in unserem Auftrag Daten, die beim Besuch unserer Website automatisch übertragen werden.
                    </p>
                    <div className="space-y-2 text-slate-300 text-sm">
                      <p><strong className="text-white">Verarbeitete Daten:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• IP-Adresse (anonymisiert nach 24 Stunden)</li>
                        <li>• Browser-Typ und -Version</li>
                        <li>• Betriebssystem</li>
                        <li>• Referrer-URL</li>
                        <li>• Datum und Uhrzeit des Zugriffs</li>
                        <li>• Übertragene Datenmenge</li>
                      </ul>
                      <p className="mt-4"><strong className="text-white">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)</p>
                      <p><strong className="text-white">Zweck:</strong> Sicherstellung der Funktionsfähigkeit und Sicherheit der Website</p>
                      <p><strong className="text-white">Aufbewahrungsdauer:</strong> Logdateien werden nach 30 Tagen gelöscht</p>
                    </div>
                  </div>

                  <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">5.2. Google Fonts</h3>
                    <p className="text-slate-300 mb-4">
                      Diese Website verwendet Google Fonts zur einheitlichen Darstellung von Schriftarten. Google Fonts wird lokal geladen, sodass keine Verbindung zu Google-Servern hergestellt wird.
                    </p>
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen an einheitlicher Darstellung)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Cookie className="h-6 w-6 text-amber-400" />
                  <h2 className="text-2xl font-bold text-white">6. Cookies und lokale Speicherung</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-6 backdrop-blur-xl">
                    <h3 className="text-lg font-semibold text-white mb-4">Was sind Cookies?</h3>
                    <p className="text-slate-300 text-sm">
                      Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden und die Funktionalität der Website verbessern. Wir verwenden nur technisch notwendige Cookies und solche, denen Sie ausdrücklich zugestimmt haben.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 backdrop-blur-xl">
                      <h4 className="font-semibold text-white mb-2">Technisch notwendige Cookies</h4>
                      <p className="text-sm text-slate-300 mb-2">Diese Cookies sind erforderlich für den Betrieb der Website:</p>
                      <ul className="text-xs text-slate-400 space-y-1">
                        <li>• Session-Management</li>
                        <li>• Sicherheitsfeatures</li>
                        <li>• Cookie-Einstellungen</li>
                      </ul>
                      <p className="text-xs text-slate-500 mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO</p>
                    </div>
                    
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 backdrop-blur-xl">
                      <h4 className="font-semibold text-white mb-2">Funktionale Cookies</h4>
                      <p className="text-sm text-slate-300 mb-2">Diese Cookies verbessern die Nutzererfahrung:</p>
                      <ul className="text-xs text-slate-400 space-y-1">
                        <li>• Spracheinstellungen</li>
                        <li>• Theme-Präferenzen</li>
                        <li>• Formulardaten (temporär)</li>
                      </ul>
                      <p className="text-xs text-slate-500 mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
                    </div>
                  </div>

                  <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Cookie-Verwaltung</h3>
                    <p className="text-slate-300 mb-4">
                      Sie können Ihre Cookie-Einstellungen jederzeit über unseren Cookie-Banner verwalten oder in Ihrem Browser anpassen. Bei der Deaktivierung von Cookies kann die Funktionalität der Website eingeschränkt sein.
                    </p>
                    <div className="bg-slate-600/40 border border-slate-500/30 rounded-lg p-4">
                      <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:from-blue-400 hover:to-cyan-400 transition-all duration-200">
                        <Settings className="h-4 w-4 mr-2" />
                        Cookie-Einstellungen verwalten
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Lock className="h-6 w-6 text-teal-400" />
                  <h2 className="text-2xl font-bold text-white">7. Kontaktaufnahme</h2>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Bei der Kontaktaufnahme mit uns (per Kontaktformular, E-Mail oder Telefon) werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                  <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong className="text-white">Verarbeitete Daten:</strong></p>
                        <ul className="mt-1 space-y-1">
                          <li>• Name und Kontaktdaten</li>
                          <li>• Nachrichteninhalt</li>
                          <li>• Zeitpunkt der Anfrage</li>
                        </ul>
                      </div>
                      <div>
                        <p><strong className="text-white">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO</p>
                        <p><strong className="text-white">Aufbewahrung:</strong> Bis zur vollständigen Bearbeitung</p>
                        <p><strong className="text-white">Löschung:</strong> Nach 3 Jahren oder auf Wunsch</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-6 w-6 text-red-400" />
                  <h2 className="text-2xl font-bold text-white">8. KI-Beratungsleistungen</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-6 backdrop-blur-xl">
                    <h3 className="text-lg font-semibold text-white mb-4">Besondere Vertraulichkeit</h3>
                    <p className="text-slate-300 text-sm">
                      Beratungsinhalte unterliegen einer besonderen Vertraulichkeit. Unternehmensinformationen und Projektdetails werden nur zur Leistungserbringung verarbeitet. Eine Weitergabe an Dritte erfolgt nur mit Ihrer ausdrücklichen Einwilligung oder bei gesetzlicher Verpflichtung.
                    </p>
                  </div>

                  <div className="space-y-4 text-slate-300">
                    <p><strong className="text-white">8.1. Verarbeitete Daten bei KI-Beratung:</strong></p>
                    <ul className="ml-6 space-y-1 text-sm">
                      <li>• Kontakt- und Unternehmensdaten</li>
                      <li>• Projektinformationen und -anforderungen</li>
                      <li>• Technische Dokumentationen</li>
                      <li>• Geschäftsprozesse und Datenflüsse</li>
                      <li>• Feedback und Bewertungen</li>
                    </ul>

                    <p><strong className="text-white">8.2. Besondere Kategorien von Daten:</strong></p>
                    <p className="text-sm">
                      Soweit im Rahmen der Beratung besondere Kategorien personenbezogener Daten (Art. 9 DSGVO) verarbeitet werden, erfolgt dies nur mit Ihrer ausdrücklichen Einwilligung (Art. 9 Abs. 2 lit. a DSGVO).
                    </p>

                    <p><strong className="text-white">8.3. Aufbewahrung und Löschung:</strong></p>
                    <p className="text-sm">
                      Beratungsunterlagen werden für die Dauer der Zusammenarbeit und darüber hinaus für 3 Jahre aufbewahrt, sofern keine längeren Aufbewahrungsfristen bestehen. Auf Ihren Wunsch werden personenbezogene Aufzeichnungen jederzeit gelöscht.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <UserCheck className="h-6 w-6 text-indigo-400" />
                  <h2 className="text-2xl font-bold text-white">9. Ihre Rechte</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 backdrop-blur-xl">
                      <h4 className="font-semibold text-white mb-2">Auskunftsrecht (Art. 15 DSGVO)</h4>
                      <p className="text-sm text-slate-300">Sie haben das Recht auf Auskunft über die von uns verarbeiteten personenbezogenen Daten.</p>
                    </div>
                    
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 backdrop-blur-xl">
                      <h4 className="font-semibold text-white mb-2">Berichtigungsrecht (Art. 16 DSGVO)</h4>
                      <p className="text-sm text-slate-300">Sie haben das Recht auf Berichtigung unrichtiger Daten.</p>
                    </div>
                    
                    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 backdrop-blur-xl">
                      <h4 className="font-semibold text-white mb-2">Löschungsrecht (Art. 17 DSGVO)</h4>
                      <p className="text-sm text-slate-300">Sie haben das Recht auf Löschung Ihrer Daten unter bestimmten Voraussetzungen.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 backdrop-blur-xl">
                      <h4 className="font-semibold text-white mb-2">Einschränkungsrecht (Art. 18 DSGVO)</h4>
                      <p className="text-sm text-slate-300">Sie haben das Recht auf Einschränkung der Verarbeitung Ihrer Daten.</p>
                    </div>
                    
                    <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 backdrop-blur-xl">
                      <h4 className="font-semibold text-white mb-2">Datenübertragbarkeit (Art. 20 DSGVO)</h4>
                      <p className="text-sm text-slate-300">Sie haben das Recht auf Übertragung Ihrer Daten in einem maschinenlesbaren Format.</p>
                    </div>
                    
                    <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 backdrop-blur-xl">
                      <h4 className="font-semibold text-white mb-2">Widerspruchsrecht (Art. 21 DSGVO)</h4>
                      <p className="text-sm text-slate-300">Sie haben das Recht, der Verarbeitung Ihrer Daten zu widersprechen.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Wie können Sie Ihre Rechte ausüben?</h3>
                  <p className="text-slate-300 mb-4">
                    Für die Ausübung Ihrer Rechte oder bei Fragen zum Datenschutz wenden Sie sich bitte an:
                  </p>
                  <div className="bg-slate-600/40 border border-slate-500/30 rounded-lg p-4">
                    <p className="text-sm">
                      <strong className="text-white">E-Mail:</strong> <a href="mailto:datenschutz@denck-consulting.de" className="text-green-400 hover:text-green-300 transition-colors">datenschutz@denck-consulting.de</a><br />
                      <strong className="text-white">Betreff:</strong> Datenschutz - [Ihr Anliegen]
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-6 w-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">10. Datensicherheit</h2>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre durch uns verwalteten Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center backdrop-blur-xl">
                      <Lock className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">SSL-Verschlüsselung</h4>
                      <p className="text-xs text-slate-400">Sichere Datenübertragung</p>
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 text-center backdrop-blur-xl">
                      <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">Zugriffskontrolle</h4>
                      <p className="text-xs text-slate-400">Beschränkter Datenzugang</p>
                    </div>
                    <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 text-center backdrop-blur-xl">
                      <Database className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">Regelmäßige Backups</h4>
                      <p className="text-xs text-slate-400">Datensicherung</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="h-6 w-6 text-pink-400" />
                  <h2 className="text-2xl font-bold text-white">11. Aufbewahrung und Löschung</h2>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
                  </p>
                  <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-lg p-6">
                    <h3 className="font-semibold text-white mb-4">Aufbewahrungsfristen im Überblick:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong className="text-white">Kontaktanfragen:</strong> 3 Jahre nach Bearbeitung</p>
                        <p><strong className="text-white">Beratungsunterlagen:</strong> 3 Jahre nach Vertragsende</p>
                        <p><strong className="text-white">Rechnungsunterlagen:</strong> 10 Jahre (§ 147 AO)</p>
                      </div>
                      <div>
                        <p><strong className="text-white">Website-Logs:</strong> 30 Tage</p>
                        <p><strong className="text-white">Cookie-Einstellungen:</strong> 12 Monate</p>
                        <p><strong className="text-white">Newsletter-Daten:</strong> Bis zum Widerruf</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <UserCheck className="h-6 w-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">12. Beschwerderecht</h2>
                </div>
                <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-6 backdrop-blur-xl">
                  <p className="text-slate-300 mb-4">
                    Sie haben das Recht, sich bei einer Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
                  </p>
                  <div className="bg-slate-600/40 border border-slate-500/30 rounded-lg p-4">
                    <p className="text-sm text-slate-300">
                      <strong className="text-white">Zuständige Aufsichtsbehörde:</strong><br />
                      Der Hessische Beauftragte für Datenschutz und Informationsfreiheit<br />
                      Postfach 3163<br />
                      65021 Wiesbaden<br />
                      <a href="https://datenschutz.hessen.de" className="text-orange-400 hover:text-orange-300 transition-colors">datenschutz.hessen.de</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Database className="h-6 w-6 text-teal-400" />
                  <h2 className="text-2xl font-bold text-white">13. Änderungen der Datenschutzerklärung</h2>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
                  </p>
                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 backdrop-blur-xl">
                    <p className="text-sm">
                      <strong className="text-white">Letzte Aktualisierung:</strong> Dezember 2024<br />
                      <strong className="text-white">Version:</strong> 1.0<br />
                      Bei Ihrem nächsten Besuch gilt dann die neue Datenschutzerklärung.
                    </p>
                  </div>
                </div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  rechtliche Informationen
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/impressum"
                className="group relative block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-xl" />
                
                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                    Impressum
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Angaben gemäß § 5 TMG und Kontaktinformationen
                  </p>
                </div>
              </Link>
              
              <Link
                href="/agb"
                className="group relative block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-xl" />
                
                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-200">
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
      title: 'Datenschutzerklärung - DENCK Consulting',
      description: 'Datenschutzerklärung der ALD Beratungs und Beteiligungsgesellschaft UG - DENCK Consulting. Informationen zum Schutz Ihrer personenbezogenen Daten.'
    }
  }
}