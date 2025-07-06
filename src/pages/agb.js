// src/pages/agb.js
import Link from 'next/link'
import { ArrowLeft, FileText, Shield, Briefcase, DollarSign, Scale, Clock } from 'lucide-react'

export default function AGB() {
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


              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Allgemeine{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 animate-gradient bg-300%">
                  Geschäftsbedingungen
                </span>
              </h1>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                AGB für KI-Beratungsleistungen von DENCK Consulting
              </p>
            </div>

            {/* Präambel */}
            <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-12">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Geltungsbereich und Grundsätze</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">1. Geltungsbereich</h3>
                      <p className="text-slate-300 leading-relaxed">
                        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über KI-Beratungsleistungen zwischen der ALD Beratungs und Beteiligungsgesellschaft UG (haftungsbeschränkt), handelnd unter DENCK Consulting (nachfolgend "Auftragnehmer"), und ihren Kunden (nachfolgend "Auftraggeber"). Abweichende Bedingungen des Auftraggebers gelten nur, wenn sie vom Auftragnehmer ausdrücklich schriftlich anerkannt wurden.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">2. Vertraulichkeit</h3>
                      <p className="text-slate-300 leading-relaxed">
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
              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-slate-600/50 flex items-center">
                  <Briefcase className="h-8 w-8 mr-3 text-green-400" />
                  Leistungsumfang und Durchführung
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">3. Art und Umfang der Leistungen</h3>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                      <p>
                        <strong className="text-white">3.1.</strong> Der Auftragnehmer erbringt Beratungsleistungen im Bereich Künstliche Intelligenz, insbesondere:
                      </p>
                      <ul className="ml-8 space-y-2">
                        <li>• KI-Strategieentwicklung und Roadmap-Erstellung</li>
                        <li>• Prozessanalyse und Automatisierungsberatung</li>
                        <li>• Datenanalyse und Analytics-Konzepte</li>
                        <li>• KI-Governance und Compliance-Beratung</li>
                        <li>• Schulungen und Workshops</li>
                      </ul>
                      <p>
                        <strong className="text-white">3.2.</strong> Der konkrete Leistungsumfang wird in Einzelverträgen oder Projektvereinbarungen festgelegt.
                      </p>
                      <p>
                        <strong className="text-white">3.3.</strong> Der Auftragnehmer ist berechtigt, zur Leistungserbringung qualifizierte Dritte hinzuzuziehen. Die Verantwortung gegenüber dem Auftraggeber verbleibt beim Auftragnehmer.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">4. Mitwirkungspflichten des Auftraggebers</h3>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                      <p>
                        <strong className="text-white">4.1.</strong> Der Auftraggeber stellt alle für die Leistungserbringung erforderlichen Informationen, Daten und Zugänge rechtzeitig zur Verfügung.
                      </p>
                      <p>
                        <strong className="text-white">4.2.</strong> Der Auftraggeber benennt einen fachkundigen Ansprechpartner, der befugt ist, verbindliche Entscheidungen zu treffen.
                      </p>
                      <p>
                        <strong className="text-white">4.3.</strong> Verzögerungen aufgrund mangelnder Mitwirkung gehen zu Lasten des Auftraggebers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vergütung */}
              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-slate-600/50 flex items-center">
                  <DollarSign className="h-8 w-8 mr-3 text-yellow-400" />
                  Vergütung und Zahlungsbedingungen
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">5. Vergütung</h3>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                      <p>
                        <strong className="text-white">5.1.</strong> Die Vergütung erfolgt nach den im Einzelvertrag vereinbarten Sätzen. Sofern nichts anderes vereinbart ist, gelten die aktuellen Tagessätze des Auftragnehmers.
                      </p>
                      <p>
                        <strong className="text-white">5.2.</strong> Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
                      </p>
                      <p>
                        <strong className="text-white">5.3.</strong> Reisekosten und Spesen werden nach Aufwand und gegen Nachweis berechnet.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">6. Zahlungsbedingungen</h3>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                      <p>
                        <strong className="text-white">6.1.</strong> Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar.
                      </p>
                      <p>
                        <strong className="text-white">6.2.</strong> Bei Zahlungsverzug werden Verzugszinsen in gesetzlicher Höhe berechnet.
                      </p>
                      <p>
                        <strong className="text-white">6.3.</strong> Die Aufrechnung ist nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen zulässig.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Haftung */}
              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-slate-600/50 flex items-center">
                  <Shield className="h-8 w-8 mr-3 text-red-400" />
                  Haftung und Gewährleistung
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">7. Haftungsbeschränkung</h3>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                      <p>
                        <strong className="text-white">7.1.</strong> Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.
                      </p>
                      <p>
                        <strong className="text-white">7.2.</strong> Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vorhersehbaren, typischerweise eintretenden Schaden begrenzt.
                      </p>
                      <p>
                        <strong className="text-white">7.3.</strong> Im Übrigen ist die Haftung ausgeschlossen.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">8. Gewährleistung</h3>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                      <p>
                        <strong className="text-white">8.1.</strong> Der Auftragnehmer erbringt seine Leistungen nach bestem Wissen und Gewissen auf Basis des aktuellen Stands der Technik.
                      </p>
                      <p>
                        <strong className="text-white">8.2.</strong> Eine Gewähr für bestimmte Ergebnisse oder wirtschaftliche Erfolge wird nicht übernommen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sonstiges */}
              <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-slate-600/50 flex items-center">
                  <Scale className="h-8 w-8 mr-3 text-purple-400" />
                  Sonstige Bestimmungen
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">9. Laufzeit und Kündigung</h3>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                      <p>
                        <strong className="text-white">9.1.</strong> Die Laufzeit richtet sich nach der jeweiligen Einzelvereinbarung.
                      </p>
                      <p>
                        <strong className="text-white">9.2.</strong> Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">10. Schlussbestimmungen</h3>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                      <p>
                        <strong className="text-white">10.1.</strong> Änderungen und Ergänzungen bedürfen der Schriftform.
                      </p>
                      <p>
                        <strong className="text-white">10.2.</strong> Erfüllungsort und Gerichtsstand ist Frankfurt am Main.
                      </p>
                      <p>
                        <strong className="text-white">10.3.</strong> Es gilt das Recht der Bundesrepublik Deutschland.
                      </p>
                      <p>
                        <strong className="text-white">10.4.</strong> Sollten einzelne Bestimmungen unwirksam sein, wird die Wirksamkeit der übrigen Bestimmungen nicht berührt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stand */}
              <div className="bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-xl p-6">
                <p className="text-slate-300 text-center">
                  <strong className="text-white">Stand: Dezember 2024</strong><br />
                  ALD Beratungs und Beteiligungsgesellschaft UG (haftungsbeschränkt)
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
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
                href="/datenschutz"
                className="group relative block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-xl" />

                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-200">
                    Datenschutzerklärung
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Informationen zum Umgang mit Ihren personenbezogenen Daten
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
      title: 'Allgemeine Geschäftsbedingungen - DENCK Consulting',
      description: 'AGB für KI-Beratungsleistungen der ALD Beratungs und Beteiligungsgesellschaft UG - DENCK Consulting.'
    }
  }
}