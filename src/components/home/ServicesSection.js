// src/components/home/ServicesSection.js
import { Brain, Zap, Database, Shield, CheckCircle } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: 'KI-Strategieberatung',
      description: 'Entwicklung maßgeschneiderter KI-Strategien für Ihr Unternehmen.',
      features: ['KI-Readiness Assessment', 'Use Case Identifikation', 'ROI-Analyse', 'Roadmap-Entwicklung'],
      color: 'bg-slate-700'
    },
    {
      icon: Zap,
      title: 'Prozessautomatisierung',
      description: 'Intelligente Automatisierung Ihrer Geschäftsprozesse mit KI.',
      features: ['RPA & KI-Integration', 'Workflow-Optimierung', 'Chatbots & Assistenten', 'Document Intelligence'],
      color: 'bg-slate-800'
    },
    {
      icon: Database,
      title: 'Daten & Analytics',
      description: 'Verwandeln Sie Ihre Daten in wertvolle Geschäftseinblicke.',
      features: ['Predictive Analytics', 'Business Intelligence', 'Data Mining', 'KI-Dashboards'],
      color: 'bg-slate-900'
    },
    {
      icon: Shield,
      title: 'KI-Governance',
      description: 'Sichere und ethische KI-Implementierung mit robusten Strukturen.',
      features: ['Compliance & Regulatorik', 'Ethik-Guidelines', 'Risk Management', 'Quality Assurance'],
      color: 'bg-slate-700'
    }
  ]

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Unsere KI-Beratungsleistungen
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Von der Strategie bis zur Implementierung - wir begleiten Sie auf Ihrem Weg in die KI-Zukunft
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}