// src/pages/agb.js
import Link from 'next/link'
import { ArrowLeft, FileText, Shield, Briefcase } from 'lucide-react'

export default function AGB() {
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
            <h1 className="hero-text mb-6">Allgemeine Geschäftsbedingungen</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              AGB für KI-Beratungsleistungen von DENCK Consulting
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

            {/* Präambel */}
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 mb-12">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">Geltungsbereich und Grundsätze</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-3">1. Geltungsbereich</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über KI-Beratungsleistungen zwischen der ALD Beratungs und Beteiligungsgesellschaft UG (haftungsbeschränkt), handelnd unter DENCK Consulting (nachfolgend "Auftragnehmer"), und ihren Kunden (nachfolgend "Auftraggeber"). Abweichende Bedingungen des Auftraggebers gelten nur, wenn sie vom Auftragnehmer ausdrücklich schriftlich anerkannt wurden.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-3">2. Vertraulichkeit</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Der Auftragnehmer verpflichtet sich, alle im Rahmen der Zusammenarbeit erhaltenen vertraulichen Informationen streng vertraulich zu behandeln und nur für die vereinbarten Zwecke zu verwenden. Diese Verpflichtung besteht auch nach Beendigung des Vertragsverhältnisses fort.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hauptinhalt */}
            <div className="space-y-12">
              {/* Leistungsumfang */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6 pb-4 border-b-2 border-primary-200 flex items-center">
                  <Briefcase className="h-8 w-8 mr-3 text-primary-600" />
                  Leistungsumfang und Durchführung
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">3. Art und Umfang der Leistungen</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        <strong>3.1.</strong> Der Auftragnehmer erbringt Beratungsleistungen im Bereich Künstliche Intelligenz, insbesondere:
                      </p>
                      <ul className="ml-8 space-y-2">
                        <li>• KI-Strategieentwicklung und Roadmap-Erstellung</li>
                        <li>• Prozessanalyse und Automatisierungsberatung</li>
                        <li>• Datenanalyse und Analytics-Konzepte</li>
                        <li>• KI-Governance und Compliance-Beratung</li>
                        <li>• Schulungen und Workshops</li>
                      </ul>
                      <p>
                        <strong>3.2.</strong> Der konkrete Leistungsumfang wird in Einzelverträgen oder Projektvereinbarungen festgelegt.
                      </p>
                      <p>
                        <strong>3.3.</strong> Der Auftragnehmer ist berechtigt, zur Leistungserbringung qualifizierte Dritte hinzuzuziehen. Die Verantwortung gegenüber dem Auftraggeber verbleibt beim Auftragnehmer.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">4. Mitwirkungspflichten des Auftraggebers</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        <strong>4.1.</strong> Der Auftraggeber stellt alle für die Leistungserbringung erforderlichen Informationen, Daten und Zugänge rechtzeitig zur Verfügung.
                      </p>
                      <p>
                        <strong>4.2.</strong> Der Auftraggeber benennt einen fachkundigen Ansprechpartner, der befugt ist, verbindliche Entscheidungen zu treffen.
                      </p>
                      <p>
                        <strong>4.3.</strong> Verzögerungen aufgrund mangelnder Mitwirkung gehen zu Lasten des Auftraggebers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vergütung */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6 pb-4 border-b-2 border-primary-200">
                  Vergütung und Zahlungsbedingungen
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">5. Vergütung</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        <strong>5.1.</strong> Die Vergütung erfolgt nach den im Einzelvertrag vereinbarten Sätzen. Sofern nichts anderes vereinbart ist, gelten die aktuellen Tagessätze des Auftragnehmers.
                      </p>
                      <p>
                        <strong>5.2.</strong> Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
                      </p>
                      <p>
                        <strong>5.3.</strong> Reisekosten und Spesen werden nach Aufwand und gegen Nachweis berechnet.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">6. Zahlungsbedingungen</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        <strong>6.1.</strong> Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar.
                      </p>
                      <p>
                        <strong>6.2.</strong> Bei Zahlungsverzug werden Verzugszinsen in gesetzlicher Höhe berechnet.
                      </p>
                      <p>
                        <strong>6.3.</strong> Die Aufrechnung ist nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen zulässig.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Haftung */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6 pb-4 border-b-2 border-primary-200">
                  Haftung und Gewährleistung
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">7. Haftungsbeschränkung</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        <strong>7.1.</strong> Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.
                      </p>
                      <p>
                        <strong>7.2.</strong> Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vorhersehbaren, typischerweise eintretenden Schaden begrenzt.
                      </p>
                      <p>
                        <strong>7.3.</strong> Im Übrigen ist die Haftung ausgeschlossen.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">8. Gewährleistung</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        <strong>8.1.</strong> Der Auftragnehmer erbringt seine Leistungen nach bestem Wissen und Gewissen auf Basis des aktuellen Stands der Technik.
                      </p>
                      <p>
                        <strong>8.2.</strong> Eine Gewähr für bestimmte Ergebnisse oder wirtschaftliche Erfolge wird nicht übernommen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sonstiges */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6 pb-4 border-b-2 border-primary-200">
                  Sonstige Bestimmungen
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">9. Laufzeit und Kündigung</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        <strong>9.1.</strong> Die Laufzeit richtet sich nach der jeweiligen Einzelvereinbarung.
                      </p>
                      <p>
                        <strong>9.2.</strong> Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">10. Schlussbestimmungen</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        <strong>10.1.</strong> Änderungen und Ergänzungen bedürfen der Schriftform.
                      </p>
                      <p>
                        <strong>10.2.</strong> Erfüllungsort und Gerichtsstand ist Frankfurt am Main.
                      </p>
                      <p>
                        <strong>10.3.</strong> Es gilt das Recht der Bundesrepublik Deutschland.
                      </p>
                      <p>
                        <strong>10.4.</strong> Sollten einzelne Bestimmungen unwirksam sein, wird die Wirksamkeit der übrigen Bestimmungen nicht berührt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stand */}
              <div className="bg-gray-50 border border-gray-300 rounded-xl p-6">
                <p className="text-gray-700 text-center">
                  <strong>Stand: Dezember 2024</strong><br />
                  ALD Beratungs und Beteiligungsgesellschaft UG (haftungsbeschränkt)
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
                href="/impressum"
                className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  Impressum
                </h3>
                <p className="text-gray-600 text-sm">
                  Angaben gemäß § 5 TMG und Kontaktinformationen
                </p>
              </Link>
              
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
      title: 'Allgemeine Geschäftsbedingungen - DENCK Consulting',
      description: 'AGB für KI-Beratungsleistungen der ALD Beratungs und Beteiligungsgesellschaft UG - DENCK Consulting.'
    }
  }
}