// src/pages/datenschutz.js
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, UserCheck, Database, Globe, Cookie, Settings } from 'lucide-react'

export default function Datenschutz() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-bg-primary">
        <div className="container-width relative z-10">
          <div className="max-w-4xl mx-auto">

            {/* Back Navigation */}
            <div className="mb-12">
              <Link
                href="/"
                className="inline-flex items-center text-text-secondary hover:text-marine-600 transition-colors duration-200 group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Zurück zur Startseite
              </Link>
            </div>

            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-white shadow-lg border border-marine-200 rounded-full">
                  <Shield className="w-6 h-6 text-marine-600" />
                  <span className="font-medium text-marine-800">
                    Datenschutz & Privatsphäre
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-text-primary">
                <span className="text-marine-600">
                  Datenschutzerklärung
                </span>
              </h1>

              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Ihre Privatsphäre ist uns wichtig. Hier erfahren Sie, wie wir mit Ihren Daten umgehen.
              </p>
            </div>

            {/* Überblick */}
            <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8 mb-12">
              <div className="flex items-start space-x-4">
                <UserCheck className="h-8 w-8 text-marine-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-marine-800 mb-4">Datenschutz auf einen Blick</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf unserer Website auf. Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                </div>
              </div>
            </div>

            {/* Verantwortlicher */}
            <div className="space-y-12">
              <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Database className="h-6 w-6 text-marine-600" />
                  <h2 className="text-2xl font-bold text-marine-800">1. Verantwortlicher</h2>
                </div>
                <div className="bg-marine-50 border border-marine-200 rounded-lg p-6">
                  <div className="space-y-2 text-text-secondary">
                    <p><strong className="text-marine-800">ALD Beratungs und Beteiligungsgesellschaft UG</strong></p>
                    <p>(haftungsbeschränkt)</p>
                    <p>Hannah-Arendt-Str 40</p>
                    <p>60438 Frankfurt am Main</p>
                    <p>Deutschland</p>
                    <p className="mt-4">
                      <strong className="text-marine-800">E-Mail:</strong> <a href="mailto:info@denck.com" className="text-gold-600 hover:text-gold-700 transition-colors">info@denck.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="h-6 w-6 text-marine-600" />
                  <h2 className="text-2xl font-bold text-marine-800">2. Arten der verarbeiteten Daten</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-marine-50 border border-marine-200 rounded-lg p-6">
                    <h3 className="font-semibold text-marine-800 mb-3">Kontaktdaten</h3>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li>• Namen und Firmennamen</li>
                      <li>• E-Mail-Adressen</li>
                      <li>• Telefonnummern</li>
                      <li>• Geschäftsadressen</li>
                    </ul>
                  </div>
                  <div className="bg-marine-50 border border-marine-200 rounded-lg p-6">
                    <h3 className="font-semibold text-marine-800 mb-3">Technische Daten</h3>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li>• IP-Adressen</li>
                      <li>• Browser-Informationen</li>
                      <li>• Betriebssystem</li>
                      <li>• Zugriffszeiten</li>
                    </ul>
                  </div>
                  <div className="bg-marine-50 border border-marine-200 rounded-lg p-6">
                    <h3 className="font-semibold text-marine-800 mb-3">Nutzungsdaten</h3>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li>• Besuchte Seiten</li>
                      <li>• Verweildauer</li>
                      <li>• Referrer-URLs</li>
                      <li>• Klicks und Downloads</li>
                    </ul>
                  </div>
                  <div className="bg-marine-50 border border-marine-200 rounded-lg p-6">
                    <h3 className="font-semibold text-marine-800 mb-3">Beratungsdaten</h3>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li>• Projektinformationen</li>
                      <li>• Beratungsinhalte</li>
                      <li>• Vertragsdetails</li>
                      <li>• Feedback und Bewertungen</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Lock className="h-6 w-6 text-gold-600" />
                  <h2 className="text-2xl font-bold text-marine-800">3. Zwecke der Datenverarbeitung</h2>
                </div>
                <div className="space-y-4 text-text-secondary">
                  <p><strong className="text-marine-800">3.1.</strong> Wir verarbeiten Ihre personenbezogenen Daten zu folgenden Zwecken:</p>
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

              <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <UserCheck className="h-6 w-6 text-marine-600" />
                  <h2 className="text-2xl font-bold text-marine-800">4. Rechtsgrundlagen</h2>
                </div>
                <div className="space-y-4 text-text-secondary">
                  <p>Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf folgenden Rechtsgrundlagen:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-marine-50 border border-marine-200 rounded-lg p-4">
                      <h4 className="font-semibold text-marine-800 mb-2">Art. 6 Abs. 1 lit. a DSGVO</h4>
                      <p className="text-sm">Einwilligung (z.B. Newsletter, Cookies)</p>
                    </div>
                    <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
                      <h4 className="font-semibold text-marine-800 mb-2">Art. 6 Abs. 1 lit. b DSGVO</h4>
                      <p className="text-sm">Vertragserfüllung (z.B. Beratungsleistungen)</p>
                    </div>
                    <div className="bg-marine-50 border border-marine-200 rounded-lg p-4">
                      <h4 className="font-semibold text-marine-800 mb-2">Art. 6 Abs. 1 lit. c DSGVO</h4>
                      <p className="text-sm">Rechtliche Verpflichtung (z.B. Steuerrecht)</p>
                    </div>
                    <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
                      <h4 className="font-semibold text-marine-800 mb-2">Art. 6 Abs. 1 lit. f DSGVO</h4>
                      <p className="text-sm">Berechtigte Interessen (z.B. Website-Sicherheit)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="h-6 w-6 text-gold-600" />
                  <h2 className="text-2xl font-bold text-marine-800">5. Website-Hosting und technische Umsetzung</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-marine-50 border border-marine-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-marine-800 mb-4">5.1. Hosting durch Vercel</h3>
                    <p className="text-text-secondary mb-4">
                      Diese Website wird auf der Plattform von Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Vercel verarbeitet in unserem Auftrag Daten, die beim Besuch unserer Website automatisch übertragen werden.
                    </p>
                    <div className="space-y-2 text-text-secondary text-sm">
                      <p><strong className="text-marine-800">Verarbeitete Daten:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• IP-Adresse (anonymisiert nach 24 Stunden)</li>
                        <li>• Browser-Typ und -Version</li>
                        <li>• Betriebssystem</li>
                        <li>• Referrer-URL</li>
                        <li>• Datum und Uhrzeit des Zugriffs</li>
                        <li>• Übertragene Datenmenge</li>
                      </ul>
                      <p className="mt-4"><strong className="text-marine-800">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)</p>
                      <p><strong className="text-marine-800">Zweck:</strong> Sicherstellung der Funktionsfähigkeit und Sicherheit der Website</p>
                      <p><strong className="text-marine-800">Aufbewahrungsdauer:</strong> Logdateien werden nach 30 Tagen gelöscht</p>
                    </div>
                  </div>

                  <div className="bg-marine-50 border border-marine-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-marine-800 mb-4">5.2. Google Fonts</h3>
                    <p className="text-text-secondary mb-4">
                      Diese Website verwendet Google Fonts zur einheitlichen Darstellung von Schriftarten. Google Fonts wird lokal geladen, sodass keine Verbindung zu Google-Servern hergestellt wird.
                    </p>
                    <p className="text-text-secondary text-sm">
                      <strong className="text-marine-800">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen an einheitlicher Darstellung)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Cookie className="h-6 w-6 text-gold-600" />
                  <h2 className="text-2xl font-bold text-marine-800">6. Cookies und lokale Speicherung</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-gold-50 border border-gold-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-marine-800 mb-4">Was sind Cookies?</h3>
                    <p className="text-text-secondary text-sm">
                      Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden und die Funktionalität der Website verbessern. Wir verwenden nur technisch notwendige Cookies und solche, denen Sie ausdrücklich zugestimmt haben.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-marine-50 border border-marine-200 rounded-lg p-4">
                      <h4 className="font-semibold text-marine-800 mb-2">Technisch notwendige Cookies</h4>
                      <p className="text-sm text-text-secondary mb-2">Diese Cookies sind erforderlich für den Betrieb der Website:</p>
                      <ul className="text-xs text-text-secondary space-y-1">
                        <li>• Session-Management</li>
                        <li>• Sicherheitsfeatures</li>
                        <li>• Cookie-Einstellungen</li>
                      </ul>
                      <p className="text-xs text-text-muted mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO</p>
                    </div>

                    <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
                      <h4 className="font-semibold text-marine-800 mb-2">Funktionale Cookies</h4>
                      <p className="text-sm text-text-secondary mb-2">Diese Cookies verbessern die Nutzererfahrung:</p>
                      <ul className="text-xs text-text-secondary space-y-1">
                        <li>• Spracheinstellungen</li>
                        <li>• Theme-Präferenzen</li>
                        <li>• Formulardaten (temporär)</li>
                      </ul>
                      <p className="text-xs text-text-muted mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
                    </div>
                  </div>

                  <div className="bg-marine-50 border border-marine-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-marine-800 mb-4">Cookie-Verwaltung</h3>
                    <p className="text-text-secondary mb-4">
                      Sie können Ihre Cookie-Einstellungen jederzeit über unseren Cookie-Banner verwalten oder in Ihrem Browser anpassen. Bei der Deaktivierung von Cookies kann die Funktionalität der Website eingeschränkt sein.
                    </p>
                    <div className="bg-white border border-marine-200 rounded-lg p-4">
                      <button className="inline-flex items-center px-4 py-2 bg-marine-600 text-white rounded-lg text-sm font-medium hover:bg-marine-700 transition-all duration-200">
                        <Settings className="h-4 w-4 mr-2" />
                        Cookie-Einstellungen verwalten
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Lock className="h-6 w-6 text-marine-600" />
                  <h2 className="text-2xl font-bold text-marine-800">7. Kontaktaufnahme</h2>
                </div>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Bei der Kontaktaufnahme mit uns (per Kontaktformular, E-Mail oder Telefon) werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                  <div className="bg-marine-50 border border-marine-200 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong className="text-marine-800">Verarbeitete Daten:</strong></p>
                        <ul className="mt-1 space-y-1">
                          <li>• Name und Kontaktdaten</li>
                          <li>• Nachrichteninhalt</li>
                          <li>• Zeitpunkt der Anfrage</li>
                        </ul>
                      </div>
                      <div>
                        <p><strong className="text-marine-800">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO</p>
                        <p><strong className="text-marine-800">Aufbewahrung:</strong> Bis zur vollständigen Bearbeitung</p>
                        <p><strong className="text-marine-800">Löschung:</strong> Nach 3 Jahren oder auf Wunsch</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-6 w-6 text-gold-600" />
                  <h2 className="text-2xl font-bold text-marine-800">8. KI-Beratungsleistungen</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-gold-50 border border-gold-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-marine-800 mb-4">Besondere Vertraulichkeit</h3>
                    <p className="text-text-secondary text-sm">
                      Beratungsinhalte unterliegen einer besonderen Vertraulichkeit. Unternehmensinformationen und Projektdetails werden nur zur Leistungserbringung verarbeitet. Eine Weitergabe an Dritte erfolgt nur mit Ihrer ausdrücklichen Einwilligung oder bei gesetzlicher Verpflichtung.
                    </p>
                  </div>

                  <div className="space-y-4 text-text-secondary">
                    <p><strong className="text-marine-800">8.1. Verarbeitete Daten bei KI-Beratung:</strong></p>
                    <ul className="ml-6 space-y-1 text-sm">
                      <li>• Kontakt- und Unternehmensdaten</li>
                      <li>• Projektinformationen und -anforderungen</li>
                      <li>• Technische Dokumentationen</li>
                      <li>• Geschäftsprozesse und Datenflüsse</li>
                      <li>• Feedback und Bewertungen</li>
                    </ul>

                    <p><strong className="text-marine-800">8.2. Besondere Kategorien von Daten:</strong></p>
                    <p className="text-sm">
                      Soweit im Rahmen der Beratung besondere Kategorien personenbezogener Daten (Art. 9 DSGVO) verarbeitet werden, erfolgt dies nur mit Ihrer ausdrücklichen Einwilligung (Art. 9 Abs. 2 lit. a DSGVO).
                    </p>

                    <p><strong className="text-marine-800">8.3. Aufbewahrung und Löschung:</strong></p>
                    <p className="text-sm">
                      Beratungsunterlagen werden für die Dauer der Zusammenarbeit und darüber hinaus für 3 Jahre aufbewahrt, sofern keine längeren Aufbewahrungsfristen bestehen. Auf Ihren Wunsch werden personenbezogene Aufzeichnungen jederzeit gelöscht.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <UserCheck className="h-6 w-6 text-marine-600" />
                  <h2 className="text-2xl font-bold text-marine-800">9. Ihre Rechte</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-marine-50 border border-marine-200 rounded-lg p-4">
                      <h4 className="font-semibold text-marine-800 mb-2">Auskunftsrecht (Art. 15 DSGVO)</h4>
                      <p className="text-sm text-text-secondary">Sie haben das Recht auf Auskunft über die von uns verarbeiteten personenbezogenen Daten.</p>
                    </div>

                    <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
                      <h4 className="font-semibold text-marine-800 mb-2">Berichtigungsrecht (Art. 16 DSGVO)</h4>
                      <p className="text-sm text-text-secondary">Sie haben das Recht auf Berichtigung unrichtiger Daten.</p>
                    </div>

                    <div className="bg-marine-50 border border-marine-200 rounded-lg p-4">
                      <h4 className="font-semibold text-marine-800 mb-2">Löschungsrecht (Art. 17 DSGVO)</h4>
                      <p className="text-sm text-text-secondary">Sie haben das Recht auf Löschung Ihrer Daten unter bestimmten Voraussetzungen.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
                      <h4 className="font-semibold text-marine-800 mb-2">Einschränkungsrecht (Art. 18 DSGVO)</h4>
                      <p className="text-sm text-text-secondary">Sie haben das Recht auf Einschränkung der Verarbeitung Ihrer Daten.</p>
                    </div>

                    <div className="bg-marine-50 border border-marine-200 rounded-lg p-4">
                      <h4 className="font-semibold text-marine-800 mb-2">Datenübertragbarkeit (Art. 20 DSGVO)</h4>
                      <p className="text-sm text-text-secondary">Sie haben das Recht auf Übertragung Ihrer Daten in einem maschinenlesbaren Format.</p>
                    </div>

                    <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
                      <h4 className="font-semibold text-marine-800 mb-2">Widerspruchsrecht (Art. 21 DSGVO)</h4>
                      <p className="text-sm text-text-secondary">Sie haben das Recht, der Verarbeitung Ihrer Daten zu widersprechen.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-marine-50 border border-marine-200 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold text-marine-800 mb-4">Wie können Sie Ihre Rechte ausüben?</h3>
                  <p className="text-text-secondary mb-4">
                    Für die Ausübung Ihrer Rechte oder bei Fragen zum Datenschutz wenden Sie sich bitte an:
                  </p>
                  <div className="bg-white border border-marine-200 rounded-lg p-4">
                    <p className="text-sm">
                      <strong className="text-marine-800">E-Mail:</strong> <a href="mailto:info@denck.com" className="text-gold-600 hover:text-gold-700 transition-colors">info@denck.com</a><br />
                      <strong className="text-marine-800">Betreff:</strong> Datenschutz - [Ihr Anliegen]
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-6 w-6 text-marine-600" />
                  <h2 className="text-2xl font-bold text-marine-800">10. Datensicherheit</h2>
                </div>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre durch uns verwalteten Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-marine-50 border border-marine-200 rounded-lg p-4 text-center">
                      <Lock className="h-8 w-8 text-marine-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-marine-800 mb-1">SSL-Verschlüsselung</h4>
                      <p className="text-xs text-text-secondary">Sichere Datenübertragung</p>
                    </div>
                    <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 text-center">
                      <Shield className="h-8 w-8 text-gold-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-marine-800 mb-1">Zugriffskontrolle</h4>
                      <p className="text-xs text-text-secondary">Beschränkter Datenzugang</p>
                    </div>
                    <div className="bg-marine-50 border border-marine-200 rounded-lg p-4 text-center">
                      <Database className="h-8 w-8 text-marine-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-marine-800 mb-1">Regelmäßige Backups</h4>
                      <p className="text-xs text-text-secondary">Datensicherung</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="h-6 w-6 text-gold-600" />
                  <h2 className="text-2xl font-bold text-marine-800">11. Aufbewahrung und Löschung</h2>
                </div>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
                  </p>
                  <div className="bg-marine-50 border border-marine-200 rounded-lg p-6">
                    <h3 className="font-semibold text-marine-800 mb-4">Aufbewahrungsfristen im Überblick:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong className="text-marine-800">Kontaktanfragen:</strong> 3 Jahre nach Bearbeitung</p>
                        <p><strong className="text-marine-800">Beratungsunterlagen:</strong> 3 Jahre nach Vertragsende</p>
                        <p><strong className="text-marine-800">Rechnungsunterlagen:</strong> 10 Jahre (§ 147 AO)</p>
                      </div>
                      <div>
                        <p><strong className="text-marine-800">Website-Logs:</strong> 30 Tage</p>
                        <p><strong className="text-marine-800">Cookie-Einstellungen:</strong> 12 Monate</p>
                        <p><strong className="text-marine-800">Newsletter-Daten:</strong> Bis zum Widerruf</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <UserCheck className="h-6 w-6 text-gold-600" />
                  <h2 className="text-2xl font-bold text-marine-800">12. Beschwerderecht</h2>
                </div>
                <div className="bg-gold-50 border border-gold-200 rounded-lg p-6">
                  <p className="text-text-secondary mb-4">
                    Sie haben das Recht, sich bei einer Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
                  </p>
                  <div className="bg-white border border-gold-200 rounded-lg p-4">
                    <p className="text-sm text-text-secondary">
                      <strong className="text-marine-800">Zuständige Aufsichtsbehörde:</strong><br />
                      Der Hessische Beauftragte für Datenschutz und Informationsfreiheit<br />
                      Postfach 3163<br />
                      65021 Wiesbaden<br />
                      <a href="https://datenschutz.hessen.de" className="text-gold-600 hover:text-gold-700 transition-colors">datenschutz.hessen.de</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg border border-marine-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Database className="h-6 w-6 text-marine-600" />
                  <h2 className="text-2xl font-bold text-marine-800">13. Änderungen der Datenschutzerklärung</h2>
                </div>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
                  </p>
                  <div className="bg-marine-50 border border-marine-200 rounded-lg p-4">
                    <p className="text-sm">
                      <strong className="text-marine-800">Letzte Aktualisierung:</strong> Dezember 2024<br />
                      <strong className="text-marine-800">Version:</strong> 1.0<br />
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
      <section className="py-20 bg-bg-primary relative">
        <div className="container-width relative z-10">
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Weitere{' '}
                <span className="text-marine-600">
                  rechtliche Informationen
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/impressum"
                className="group relative block"
              >
                <div className="bg-white shadow-lg border border-marine-100 rounded-xl p-6 hover:border-marine-300 transition-all duration-300 hover:scale-105">
                  <h3 className="text-lg font-semibold text-marine-800 mb-2 group-hover:text-marine-600 transition-colors duration-200">
                    Impressum
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Angaben gemäß § 5 TMG und Kontaktinformationen
                  </p>
                </div>
              </Link>

              <Link
                href="/agb"
                className="group relative block"
              >
                <div className="bg-white shadow-lg border border-marine-100 rounded-xl p-6 hover:border-marine-300 transition-all duration-300 hover:scale-105">
                  <h3 className="text-lg font-semibold text-marine-800 mb-2 group-hover:text-marine-600 transition-colors duration-200">
                    Allgemeine Geschäftsbedingungen
                  </h3>
                  <p className="text-text-secondary text-sm">
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
      title: 'Datenschutzerklärung - Denck Solutions',
      description: 'Datenschutzerklärung der ALD Beratungs und Beteiligungsgesellschaft UG - Denck Solutions. Informationen zum Schutz Ihrer personenbezogenen Daten.'
    }
  }
}