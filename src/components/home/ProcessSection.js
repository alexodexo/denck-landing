// src/components/home/ProcessSection.js
import { ChevronRight } from 'lucide-react'

export default function ProcessSection() {
  const processSteps = [
    { 
      step: '01', 
      title: 'Zieldefinition', 
      description: 'Klare Definition von Zielen und Identifikation konkreter KI-Anwendungsfälle' 
    },
    { 
      step: '02', 
      title: 'Datenstrategie', 
      description: 'Entwicklung einer umfassenden Datenstrategie für qualitativ hochwertige KI-Ergebnisse' 
    },
    { 
      step: '03', 
      title: 'Infrastruktur', 
      description: 'Aufbau einer robusten technologischen Basis für KI-Implementierung' 
    },
    { 
      step: '04', 
      title: 'Pilotierung', 
      description: 'Start mit kleineren Pilotprojekten zur Erfahrungssammlung' 
    },
    { 
      step: '05', 
      title: 'Skalierung', 
      description: 'Integration erfolgreicher KI-Lösungen in tägliche Geschäftsprozesse' 
    },
    { 
      step: '06', 
      title: 'Optimierung', 
      description: 'Kontinuierliches Monitoring und Anpassung der KI-Strategie' 
    }
  ]

  return (
    <section id="process" className="section-padding bg-slate-900 text-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Ihr Weg zur erfolgreichen KI-Integration
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Unser bewährter Prozess führt Sie Schritt für Schritt zum Erfolg
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300">
                <div className="text-5xl font-bold text-slate-500 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="h-8 w-8 text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}