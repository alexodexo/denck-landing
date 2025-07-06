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
      gradient: 'from-blue-400 to-cyan-400'
    },
    { 
      step: '02', 
      title: 'Datenstrategie', 
      description: 'Entwicklung einer umfassenden Datenstrategie für qualitativ hochwertige KI-Ergebnisse',
      icon: Brain,
      gradient: 'from-purple-400 to-pink-400'
    },
    { 
      step: '03', 
      title: 'Infrastruktur', 
      description: 'Aufbau einer robusten technologischen Basis für KI-Implementierung',
      icon: Zap,
      gradient: 'from-green-400 to-emerald-400'
    },
    { 
      step: '04', 
      title: 'Pilotierung', 
      description: 'Start mit kleineren Pilotprojekten zur Erfahrungssammlung',
      icon: Target,
      gradient: 'from-yellow-400 to-orange-400'
    },
    { 
      step: '05', 
      title: 'Skalierung', 
      description: 'Integration erfolgreicher KI-Lösungen in tägliche Geschäftsprozesse',
      icon: CheckCircle,
      gradient: 'from-red-400 to-rose-400'
    },
    { 
      step: '06', 
      title: 'Optimierung', 
      description: 'Kontinuierliches Monitoring und Anpassung der KI-Strategie',
      icon: Brain,
      gradient: 'from-indigo-400 to-purple-400'
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
                <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:bg-slate-700/60 transition-all duration-300 hover:scale-105">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl rounded-xl`} />
                  
                  <div className="relative z-10">
                    {/* Header with Icon and Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className={`text-4xl font-bold bg-gradient-to-br ${item.gradient} text-transparent bg-clip-text`}>
                        {item.step}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="w-full bg-slate-700 rounded-full h-1">
                        <div 
                          className={`h-1 bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-1000 group-hover:w-full`}
                          style={{ width: `${((index + 1) / processSteps.length) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-slate-800/80 backdrop-blur-xl border border-slate-600/50 rounded-full flex items-center justify-center">
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block mb-8 px-8 py-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50">
            <p className="text-lg text-slate-300">
              Bereit für den ersten Schritt in Ihre KI-Zukunft?
            </p>
          </div>
          
          <a
            href="/kontakt"
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10 flex items-center">
              Prozess starten
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </a>
        </div>
      </div>
    </section>
  )
}