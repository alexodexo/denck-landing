// src/pages/leistungen.js
import Link from 'next/link'
import { Bot, Brain, Database, Shield, ArrowRight, CheckCircle, Zap, Target } from 'lucide-react'

export default function Leistungen() {
  const services = [
    {
      icon: Bot,
      title: 'KI-Strategieberatung',
      slug: 'ki-strategie',
      description: 'Entwicklung einer maßgeschneiderten KI-Strategie für Ihr Unternehmen',
      longDescription: 'Wir analysieren Ihre Geschäftsprozesse, identifizieren KI-Potenziale und entwickeln eine Roadmap für die erfolgreiche Implementierung von Künstlicher Intelligenz in Ihrem Unternehmen.',
      benefits: [
        'Umfassende Ist-Analyse Ihrer Prozesse',
        'Identifikation von KI-Use Cases',
        'ROI-Berechnung und Business Cases',
        'Detaillierte Implementierungs-Roadmap',
        'Change Management Strategie'
      ],
      process: [
        'Status Quo Analyse',
        'Potenzialidentifikation',
        'Strategieentwicklung',
        'Roadmap-Erstellung'
      ]
    },
    {
      icon: Brain,
      title: 'Prozessautomatisierung',
      slug: 'automatisierung',
      description: 'Intelligente Automatisierung Ihrer Geschäftsprozesse mit KI',
      longDescription: 'Steigern Sie Ihre Effizienz durch intelligente Prozessautomatisierung. Wir implementieren KI-gestützte Lösungen, die repetitive Aufgaben übernehmen und Ihre Mitarbeiter für wertschöpfende Tätigkeiten freistellen.',
      benefits: [
        'Bis zu 80% Zeitersparnis bei Routineaufgaben',
        'Fehlerreduktion durch Automatisierung',
        'Skalierbare Lösungen',
        'Integration in bestehende Systeme',
        '24/7 Verfügbarkeit'
      ],
      process: [
        'Prozessanalyse',
        'Automatisierungspotenziale',
        'Pilotprojekt',
        'Rollout & Skalierung'
      ]
    },
    {
      icon: Database,
      title: 'Daten & Analytics',
      slug: 'analytics',
      description: 'KI-gestützte Datenanalyse für bessere Geschäftsentscheidungen',
      longDescription: 'Verwandeln Sie Ihre Daten in wertvolle Erkenntnisse. Mit modernsten KI-Algorithmen helfen wir Ihnen, Muster zu erkennen, Prognosen zu erstellen und datengetriebene Entscheidungen zu treffen.',
      benefits: [
        'Predictive Analytics für Vorhersagen',
        'Echtzeit-Dashboards und Reporting',
        'Anomalieerkennung',
        'Customer Analytics',
        'Optimierung von Geschäftsprozessen'
      ],
      process: [
        'Datenaudit',
        'Analytics-Strategie',
        'Implementierung',
        'Insights & Optimierung'
      ]
    },
    {
      icon: Shield,
      title: 'KI-Governance',
      slug: 'governance',
      description: 'Sichere und ethische KI-Implementierung in Ihrem Unternehmen',
      longDescription: 'Stellen Sie sicher, dass Ihre KI-Systeme sicher, ethisch und compliant sind. Wir entwickeln Governance-Strukturen, die Innovation fördern und gleichzeitig Risiken minimieren.',
      benefits: [
        'Compliance mit EU AI Act',
        'Ethische KI-Richtlinien',
        'Risikomanagement-Framework',
        'Transparenz und Erklärbarkeit',
        'Datenschutz und Sicherheit'
      ],
      process: [
        'Risk Assessment',
        'Policy-Entwicklung',
        'Implementierung',
        'Monitoring & Audit'
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Unsere KI-Beratungsleistungen
            </h1>
            <p className="text-xl text-gray-300">
              Maßgeschneiderte Lösungen für Ihren Erfolg mit Künstlicher Intelligenz
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.longDescription}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Ihre Vorteile:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/leistungen/${service.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group"
                  >
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unser Beratungsprozess
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strukturiert, transparent und ergebnisorientiert
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Target, title: 'Analyse', desc: 'Verstehen Ihrer Ausgangslage' },
                { icon: Brain, title: 'Konzeption', desc: 'Entwicklung der Lösung' },
                { icon: Zap, title: 'Umsetzung', desc: 'Agile Implementierung' },
                { icon: CheckCircle, title: 'Optimierung', desc: 'Kontinuierliche Verbesserung' }
              ].map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam herausfinden, welche KI-Lösung am besten zu Ihrem Unternehmen passt.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Kostenlose Beratung anfordern
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Leistungen',
      description: 'Unsere KI-Beratungsleistungen: KI-Strategie, Prozessautomatisierung, Datenanalyse und KI-Governance für Ihren Unternehmenserfolg.'
    }
  }
}