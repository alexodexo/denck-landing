// src/components/home/ProcessSection.js
import { ChevronRight, Target, Brain, Zap, CheckCircle } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'

export default function ProcessSection() {
  const processSteps = [
    { 
      step: '01', 
      title: 'Zieldefinition', 
      description: 'Klare Definition von Zielen und Identifikation konkreter KI-Anwendungsfälle',
      icon: Target,
      color: 'marine'
    },
    { 
      step: '02', 
      title: 'Datenstrategie', 
      description: 'Entwicklung einer umfassenden Datenstrategie für qualitativ hochwertige KI-Ergebnisse',
      icon: Brain,
      color: 'gold'
    },
    { 
      step: '03', 
      title: 'Infrastruktur', 
      description: 'Aufbau einer robusten technologischen Basis für KI-Implementierung',
      icon: Zap,
      color: 'marine'
    },
    { 
      step: '04', 
      title: 'Pilotierung', 
      description: 'Start mit kleineren Pilotprojekten zur Erfahrungssammlung',
      icon: Target,
      color: 'gold'
    },
    { 
      step: '05', 
      title: 'Skalierung', 
      description: 'Integration erfolgreicher KI-Lösungen in tägliche Geschäftsprozesse',
      icon: CheckCircle,
      color: 'marine'
    },
    { 
      step: '06', 
      title: 'Optimierung', 
      description: 'Kontinuierliches Monitoring und Anpassung der KI-Strategie',
      icon: Brain,
      color: 'gold'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container-width relative z-10">
        <SectionHeader
          badge="Bewährter Prozess"
          badgeIcon={Target}
          title="Ihr Weg zur erfolgreichen KI-Integration"
          highlightedWords={['KI-Integration']}
          subtitle="Unser bewährter Prozess führt Sie Schritt für Schritt zum Erfolg"
          variant="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="relative group">
                <div className="card hover:scale-105">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color === 'gold' ? 'from-gold-500/10 to-gold-600/10' : 'from-marine-500/10 to-marine-600/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-xl`} />
                  
                  <div className="relative z-10">
                    {/* Header with Icon and Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${item.color === 'gold' ? 'bg-gold-100' : 'bg-marine-100'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-6 w-6 ${item.color === 'gold' ? 'text-gold-600' : 'text-marine-600'}`} />
                      </div>
                      <div className={`text-4xl font-bold ${item.color === 'gold' ? 'text-gold-600' : 'text-marine-600'}`}>
                        {item.step}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-marine-800 mb-2 group-hover:gradient-text transition-all duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed text-sm">
                      {item.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="w-full bg-marine-200 rounded-full h-1">
                        <div 
                          className={`h-1 ${item.color === 'gold' ? 'bg-gold-500' : 'bg-marine-500'} rounded-full transition-all duration-1000 group-hover:w-full`}
                          style={{ width: `${((index + 1) / processSteps.length) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-white border border-marine-200 rounded-full flex items-center justify-center shadow-sm">
                      <ChevronRight className="h-4 w-4 text-marine-500" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block mb-8 px-8 py-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-marine-200 shadow-sm">
            <p className="text-lg text-marine-700">
              Bereit für den ersten Schritt in Ihre KI-Zukunft?
            </p>
          </div>
          
          <a
            href="/kontakt"
            className="btn-primary group"
          >
            <span className="flex items-center">
              Prozess starten
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}