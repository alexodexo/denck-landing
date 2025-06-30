import Link from 'next/link'
import { ArrowLeft, FileText, Shield, Users, Briefcase } from 'lucide-react'

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
              AGB für Dienstleistungen von Trainer, Berater und Coaches von C5 Business Partner
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
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">Präambel: Ethische Grundsätze und Vertraulichkeit</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-3">0.1. Moralisch-ethische Grundhaltung</h3>
                      <p className="text-gray-700 leading-relaxed">
                        C5 Business Partner und alle für C5 Business Partner tätigen Trainer, Coaches und Berater verpflichten sich zu einer ethischen Grundhaltung, die von Respekt, Wertschätzung und Integrität geprägt ist. Die Beziehung zu Kunden und Teilnehmern basiert auf Vertrauen, Transparenz und Professionalität. Wir arbeiten ressourcenorientiert und lösungsfokussiert, mit dem Ziel, die Potenziale unserer Kunden zu fördern und ihre Entwicklung zu unterstützen.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-3">0.2. Verschwiegenheitspflicht</h3>
                      <p className="text-gray-700 leading-relaxed">
                        C5 Business Partner verpflichtet sich zur absoluten Vertraulichkeit bezüglich aller im Rahmen der Zusammenarbeit bekannt gewordenen Informationen und Daten. Sämtliche Inhalte aus Trainings, Workshops und Coachings werden streng vertraulich behandelt. Diese Verschwiegenheitspflicht gilt auch nach Beendigung der Geschäftsbeziehung unbegrenzt fort. Eine Weitergabe von Informationen an Dritte erfolgt nur mit ausdrücklicher schriftlicher Zustimmung des Auftraggebers/Teilnehmers oder wenn eine gesetzliche Verpflichtung dazu besteht.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-3">0.3. Datenschutz</h3>
                      <p className="text-gray-700 leading-relaxed">
                        C5 Business Partner verarbeitet personenbezogene Daten im Einklang mit den geltenden Datenschutzbestimmungen (DSGVO und BDSG). Die Erhebung, Speicherung und Verarbeitung personenbezogener Daten erfolgt ausschließlich zu Zwecken der Vertragserfüllung und zur Durchführung vorvertraglicher Maßnahmen. Eine detaillierte Datenschutzerklärung kann jederzeit angefordert oder auf unserer Website eingesehen werden. Der Auftraggeber/Teilnehmer hat jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung seiner Daten gemäß den geltenden Datenschutzbestimmungen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Teil A: Allgemeine Bestimmungen */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-8 pb-4 border-b-2 border-primary-200">
                  Teil A: Allgemeine Bestimmungen
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">1. Geltungsbereich</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        <strong>1.1.</strong> Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Veranstaltungen, Angebote und Dienstleistungen von C5 Business Partner, soweit nicht schriftlich etwas Abweichendes vereinbart wurde. Durch die Anmeldung zu einer Veranstaltung bzw. durch Beauftragung einer Leistung erkennt der Auftraggeber/Teilnehmer diese AGB als verbindlich an.
                      </p>
                      <p>
                        <strong>1.2.</strong> Alle Anmeldungen und Aufträge bedürfen der Bestätigung in schriftlicher Form. C5 Business Partner behält sich vor, Veranstaltungen aus wichtigem Grund, z.B. bei Erkrankung eines Trainers, abzusagen. Bei offenen Veranstaltungen behalten wir uns die Absage darüber hinaus auch bei einer zu geringen Teilnehmerzahl vor.
                      </p>
                      <p>
                        <strong>1.3.</strong> Änderungen, die den Gesamtcharakter der jeweiligen Veranstaltung nicht verändern, berechtigen den Auftraggeber/Teilnehmer nicht zum Rücktritt vom Vertrag oder zur Minderung des Rechnungsbetrages. Eine zumutbare Verlegung des Veranstaltungsortes bleibt vorbehalten.
                      </p>
                      <p>
                        <strong>1.4.</strong> Die Anmeldedaten werden ausschließlich für interne Zwecke elektronisch gespeichert und unterliegen den gesetzlichen Datenschutzbestimmungen. Details hierzu finden sich in unserer Datenschutzerklärung sowie in Abschnitt 0.3 dieser AGB.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">2. Auslagen und Nebenkosten</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-navy-900 mb-3">2.1. Auslagen und Nebenkosten bei Nutzung des Beraterhauses Frankfurt</h4>
                        <p className="text-gray-700 mb-4">
                          Für die Nutzung der Räumlichkeiten Beraterhaus / Hinterhaus, Günthersburgallee 82, 60389 Frankfurt am Main werden folgende Aufwendungen fällig:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="space-y-2 text-gray-700">
                            <p><strong>1 Stunde:</strong> 50 Euro</p>
                            <p><strong>2 – 4 Stunden:</strong> 200 Euro</p>
                            <p><strong>5 - 8 Stunden:</strong> 400 Euro</p>
                          </div>
                          <p className="text-sm text-gray-600 mt-3">
                            Alle Preise verstehen sich zuzüglich gesetzlicher Mehrwertsteuer.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-navy-900 mb-3">2.2. Auslagen und Nebenkosten des C5 Beraters/Trainers/Coachs</h4>
                        <p className="text-gray-700 mb-4">
                          Reisespesen werden nach Projektabschluss, spätestens jedoch zum jeweiligen Monatsende entsprechend der folgenden Sätze weiterberechnet:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="space-y-2 text-gray-700">
                            <p><strong>Tagesspesen:</strong> 50,00 € pro Tag</p>
                            <p><strong>Übernachtung:</strong> gegen Nachweis bis maximal 150,00 € pro Übernachtung</p>
                            <p><strong>Fahrtkosten:</strong> 0,65 € pro km oder Bahnfahrt erster Klasse, Flug Business Class</p>
                            <p><strong>Flugreisen:</strong> gegen Nachweis (günstigster Tarif)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teil B: Inhouse Trainings */}
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-8 pb-4 border-b-2 border-primary-200 flex items-center">
                  <Users className="h-8 w-8 mr-3 text-primary-600" />
                  Teil B: Inhouse Trainings und externe Workshops
                </h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Besondere Datenschutzbestimmungen für Trainings und Workshops</h3>
                  <div className="space-y-3 text-gray-700 text-sm">
                    <p><strong>B.0.1.</strong> Teilnehmerlisten und Anwesenheitsdokumentationen werden ausschließlich zur Durchführung der Veranstaltung und zur Ausstellung von Teilnahmebescheinigungen verwendet.</p>
                    <p><strong>B.0.2.</strong> Foto- und Videoaufnahmen während Veranstaltungen dürfen nur mit ausdrücklicher Zustimmung aller betroffenen Teilnehmer gemacht und verwendet werden.</p>
                    <p><strong>B.0.3.</strong> Trainingsmaterialien, die personenbezogene Fallbeispiele enthalten, werden anonymisiert oder pseudonymisiert bereitgestellt.</p>
                    <p><strong>B.0.4.</strong> Die im Rahmen von Gruppenprozessen ausgetauschten persönlichen Informationen unterliegen ebenfalls der Vertraulichkeit. Alle Teilnehmer werden zu Beginn jeder Veranstaltung auf diese Vertraulichkeitspflicht hingewiesen.</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">1. Vertragsabschluss</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>1.1.</strong> Die Angebotserstellung durch C5 Business Partner erfolgt schriftlich, per Fax oder E-Mail. Mit der Bestätigung des Auftrages durch den Auftraggeber kommt der Vertrag zwischen Auftraggeber und C5 Business Partner bindend zustande.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">2. Zahlungsbedingungen</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p><strong>2.1.</strong> Das vereinbarte Honorar wird in einer Rate abgerechnet und direkt nach Auftragszeichnung fällig.</p>
                      <p><strong>2.2.</strong> Zusätzliche Kosten (wie bspw. DISG Lizenzen, Einzelcoachings, Materialaufwand, Reise- und Verpflegungskosten) werden in einer Abschlussrechnung nach Veranstaltungstermin fällig und in Rechnung gestellt.</p>
                      <p><strong>2.3.</strong> Die Rechnungen sind jeweils innerhalb von 14 Tagen ohne Abzug fällig.</p>
                      <p><strong>2.4.</strong> Die in Rechnung gestellten Teilnahmegebühren oder Honorare beziehen sich ausschließlich auf die Veranstaltung, die Verpflegung während der Veranstaltungsdauer und eventuelle Veranstaltungsunterlagen. Hotel- und Reisekosten sind nicht darin enthalten, sofern dies in der Veranstaltungsausschreibung nicht ausdrücklich anders geregelt ist.</p>
                      <p><strong>2.5.</strong> Für die Unterkunft und Anreise im Rahmen einer Veranstaltung haben der Auftraggeber bzw. die Teilnehmer selbst Sorge zu tragen.</p>
                      <p><strong>2.6.</strong> Erfolgt die Durchführung der Veranstaltung an anderen Orten als dem Sitz des Kunden, sind die entstehenden Kosten in vollem Umfang durch den Auftraggeber zu tragen.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">3. Stornierung</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p><strong>3.1.</strong> Stornierungen haben stets schriftlich zu erfolgen.</p>
                      <p><strong>3.2.</strong> Bei der Stornierung von Trainings/Workshops gelten folgende Bedingungen:</p>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 ml-4">
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Bis vier Wochen vor Veranstaltungsbeginn:</strong> Erstattung zu 100%</li>
                          <li>• <strong>Bis zwei Wochen vor Veranstaltungsbeginn:</strong> Erstattung zu 50%</li>
                          <li>• <strong>Bei späterer Abmeldung oder Nichtteilnahme:</strong> Volle Teilnahmegebühr wird fällig</li>
                        </ul>
                      </div>
                      <p><strong>3.3.</strong> Raum- und Nebenkosten für die Nutzung des Beraterhauses werden in voller Höhe fällig, wenn die Veranstaltung nicht bis 2 Wochen vor Veranstaltungsbeginn storniert wird.</p>
                      <p><strong>3.4.</strong> Im Falle, dass der Auftraggeber bzw. ein oder mehrere Teilnehmer die Leistungen gar nicht oder nur teilweise in Anspruch nehmen, besteht für den nicht wahrgenommenen Anteil kein Anspruch auf Rückvergütung.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">4. Rücktritt durch C5 Business Partner</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p><strong>4.1.</strong> Ist die ordentliche Durchführung einer Veranstaltung aufgrund höherer Gewalt oder Erkrankung eines Trainers oder aus anderen triftigen Gründen nicht möglich, behält sich C5 Business Partner vor, den Veranstaltungstermin abzusagen.</p>
                      <p><strong>4.2.</strong> Muss eine Veranstaltung vom Veranstalter storniert werden, so werden dem Auftraggeber mehrere Ersatztermine angeboten.</p>
                      <p><strong>4.3.</strong> Weitergehende Ansprüche wegen eines abgesagten Termins sind ausgeschlossen, insbesondere jede Art von Schadenersatz und/oder die Inanspruchnahme für etwaige Drittschäden.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teil C: Offene Seminare */}
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-8 pb-4 border-b-2 border-primary-200">
                  Teil C: Offene Seminare und Seminarreihen
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">1. Anmeldung</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p><strong>1.1.</strong> Anmeldungen können schriftlich per Post oder per Fax erfolgen und werden in der Reihenfolge ihres Eingangs bearbeitet.</p>
                      <p><strong>1.2.</strong> C5 Business Partner bestätigt die Anmeldung mit der Rechnungsstellung.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">2. Zahlungsbedingungen</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p><strong>2.1.</strong> Bei Einzelanmeldungen ist die Teilnahmegebühr drei Wochen vor dem Veranstaltungstermin fällig.</p>
                      <p><strong>2.2.</strong> Bei verspäteter Anmeldung wird eine Bearbeitungsgebühr von 25 € fällig.</p>
                      <p><strong>2.3.</strong> Bei verspäteter Zahlung kann der vom Teilnehmer reservierte Veranstaltungsplatz anderweitig vergeben werden.</p>
                      <p><strong>2.4.</strong> Die in Rechnung gestellten Teilnahmegebühren beziehen sich ausschließlich auf die Veranstaltung, die Verpflegung während der Veranstaltungsdauer und eventuelle Veranstaltungsunterlagen. Hotel- und Reisekosten sind nicht darin enthalten, sofern dies in der Veranstaltungsausschreibung nicht ausdrücklich anders geregelt ist.</p>
                      <p><strong>2.5.</strong> Für die Unterkunft während einer Veranstaltung hat der Teilnehmer Sorge zu tragen. Auf ausdrücklichen Wunsch kann C5 Business Partner im Namen der Teilnehmer Unterkünfte reservieren. Im Falle eines Stornos sind die Kosten hierfür vom Teilnehmer zu tragen.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">3. Stornierung</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p><strong>3.1.</strong> Stornierungen haben stets schriftlich zu erfolgen.</p>
                      <p><strong>3.2.</strong> Bei der Stornierung von offenen Seminaren gelten folgende Bedingungen:</p>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 ml-4">
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Bis vier Wochen vor Veranstaltungsbeginn:</strong> Erstattung zu 100%</li>
                          <li>• <strong>Bis zwei Wochen vor Veranstaltungsbeginn:</strong> Erstattung zu 50%</li>
                          <li>• <strong>Bei späterer Abmeldung oder Nichtteilnahme:</strong> Volle Teilnahmegebühr wird fällig</li>
                        </ul>
                      </div>
                      <p><strong>3.3.</strong> Nimmt ein Teilnehmer die Leistungen oder Teile davon nicht in Anspruch, so besteht für den nicht genutzten Teil kein Anspruch auf Rückvergütung.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teil D: Coaching-Leistungen */}
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-8 pb-4 border-b-2 border-primary-200 flex items-center">
                  <Briefcase className="h-8 w-8 mr-3 text-primary-600" />
                  Teil D: Coaching-Leistungen
                </h2>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Besondere Bestimmungen zu Vertraulichkeit und Ethik im Coaching</h3>
                  <div className="space-y-4 text-gray-700 text-sm">
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">D.0.1. Besondere Vertraulichkeit</h4>
                      <p>Coaching-Inhalte unterliegen einer besonderen Vertraulichkeit. Der Coach wahrt absolutes Stillschweigen über alle im Coaching besprochenen Themen und persönlichen Informationen. Dies gilt auch gegenüber dem zahlenden Auftraggeber, wenn dieser nicht der Coachee selbst ist (z.B. bei Firmenaufträgen).</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">D.0.2. Ethische Grundsätze im Coaching</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• Das Coaching basiert auf einer partnerschaftlichen Zusammenarbeit zwischen Coach und Coachee.</li>
                        <li>• Der Coach respektiert die Autonomie und Selbstverantwortung des Coachees.</li>
                        <li>• Der Coach verpflichtet sich, keine Abhängigkeiten zu schaffen und die professionelle Distanz zu wahren.</li>
                        <li>• Coaching ist kein Ersatz für psychotherapeutische Behandlung. Bei Anzeichen psychischer Erkrankungen wird der Coach auf entsprechende Fachpersonen verweisen.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">D.0.3. Dokumentation und Datenschutz</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• Aufzeichnungen zum Coaching-Prozess werden ausschließlich in anonymisierter Form und nur mit ausdrücklicher Zustimmung des Coachees erstellt.</li>
                        <li>• Diese Aufzeichnungen werden sicher aufbewahrt und nach Abschluss des Coaching-Prozesses gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht.</li>
                        <li>• Auf Wunsch des Coachees werden Aufzeichnungen jederzeit vollständig gelöscht.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">1. Vertragsabschluss</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>1.1.</strong> Die Angebotserstellung durch C5 Business Partner erfolgt schriftlich, per Fax oder E-Mail. Mit der Bestätigung des Auftrages durch den Auftraggeber kommt der Vertrag zwischen Auftraggeber und C5 Business Partner bindend zustande.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">2. Zahlungsbedingungen</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p><strong>2.1.</strong> Das vereinbarte Honorar wird nach Vertragszeichnung fällig und in Rechnung gestellt.</p>
                      <p><strong>2.2.</strong> Weitere Kosten nach Aufwand werden im Rahmen von Aufwandsabrechnungen (z.B. zusätzliche Coachings, Verpflegungskosten) zum Ende des jeweiligen Monats in Rechnung gestellt.</p>
                      <p><strong>2.3.</strong> Die Rechnungen sind jeweils innerhalb von 14 Tagen ohne Abzug fällig.</p>
                      <p><strong>2.4.</strong> Ein Coaching-Termin wird mindestens mit einer Zeitstunde veranschlagt.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">3. Stornierung</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p><strong>3.1.</strong> Stornierungen haben stets schriftlich zu erfolgen.</p>
                      <p><strong>3.2.</strong> Bei Stornierung von Coaching-Sitzungen gelten folgende Bedingungen:</p>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 ml-4">
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Bis 48 Stunden (gerechnet nur in Werktagen) vor Termin:</strong> Erstattung zu 100%</li>
                          <li>• <strong>Ab 48 Stunden (gerechnet nur in Werktagen) vor Termin, bei Abmeldung oder Nichtteilnahme:</strong> Volle Gebühr wird fällig</li>
                        </ul>
                      </div>
                      <p><strong>3.3.</strong> Raum- und Nebenkosten für die Nutzung des Beraterhauses werden in voller Höhe fällig, wenn die Coaching-Sitzung nicht bis 48 Stunden vor dem Termin storniert wird.</p>
                      <p><strong>3.4.</strong> Nimmt ein Teilnehmer die Leistungen oder Teile davon nicht in Anspruch, so besteht für den nicht genutzten Teil kein Anspruch auf Rückvergütung.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">4. Rücktritt durch C5 Business Partner</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p><strong>4.1.</strong> Ist die ordentliche Durchführung eines Coachings aufgrund höherer Gewalt oder Erkrankung des Coachs oder aus anderen triftigen Gründen nicht möglich, behält sich C5 Business Partner vor, den Termin abzusagen.</p>
                      <p><strong>4.2.</strong> Muss ein Coaching-Termin vom Veranstalter storniert werden, so werden dem Auftraggeber mehrere Ersatztermine angeboten.</p>
                      <p><strong>4.3.</strong> Weitergehende Ansprüche wegen eines abgesagten Termins sind ausgeschlossen, insbesondere jede Art von Schadenersatz und/oder die Inanspruchnahme für etwaige Drittschäden.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schlussbemerkung */}
              <div className="bg-gray-50 border border-gray-300 rounded-xl p-6">
                <p className="text-gray-700 text-center">
                  <strong>AGBs geltend 08. Februar 2008 der C5 Business Partner / Frankfurt Business Coach / Gründer Mario Egartner</strong>
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
      title: 'Allgemeine Geschäftsbedingungen',
      description: 'AGB für Dienstleistungen von Mario Egartner - C5 Business Partner: Trainings, Workshops, Coaching und Beratung.'
    }
  }
}