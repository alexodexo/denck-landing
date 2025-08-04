// src/components/home/ProblemSolutionSection.js
import { X, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function ProblemSolutionSection() {
  const problems = [
    'Viele Unternehmen sind mit langsamen, veralteten Prozessen gefangen',
    'Manuelle Aufgaben verschlingen Zeit und Ressourcen',
    'Kundenbeschwerden häufen sich durch fehlende Automatisierung',
    'Die Konkurrenz zieht mit digitalen Lösungen davon',
    'Veraltete Systeme blockieren den Fortschritt'
  ]

  const solutions = [
    'Mit KI transformieren Sie Ihr Unternehmen grundlegend',
    'Automatisierte Routineaufgaben sparen Zeit und minimieren Fehler',
    'Datenbasierte Entscheidungen verschaffen Wettbewerbsvorteile',
    'Personalisierte Kundenerlebnisse steigern die Zufriedenheit',
    'Die richtige KI-Lösung macht Ihr Unternehmen zukunftssicher'
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container-width relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gold-100 border border-gold-200 rounded-full shadow-lg">
              <Lightbulb className="w-6 h-6 text-gold-600" />
              <span className="font-medium text-gold-700">
                Problem & Lösung
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-marine-900">
            Von{' '}
            <span className="text-red-600">
              Herausforderungen
            </span>{' '}
            zu{' '}
            <span className="gradient-text">
              Chancen
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Erkennen Sie die Probleme und entdecken Sie die Lösungen
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Problem Card */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl" />
              
              <div className="card h-full hover:border-red-300 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-red-200 transition-all duration-300">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-marine-900">Das Problem</h3>
                </div>
                
                <div className="space-y-4">
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-start space-x-3 group/item">
                      <div className="flex-shrink-0 mt-1">
                        <X className="h-5 w-5 text-red-400 group-hover/item:scale-110 transition-transform duration-200" />
                      </div>
                      <p className="text-text-secondary leading-relaxed group-hover/item:text-marine-800 transition-colors duration-200">
                        {problem}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Problem Stats */}
                <div className="mt-6 pt-6 border-t border-marine-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-600">78%</div>
                      <div className="text-xs text-text-muted">Ineffiziente Prozesse</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">-25%</div>
                      <div className="text-xs text-text-muted">Produktivitätsverlust</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Card */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-gold-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl" />
              
              <div className="card h-full hover:border-gold-300 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-gold-200 transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-marine-900">Die Lösung</h3>
                </div>
                
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3 group/item">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-gold-600 group-hover/item:scale-110 transition-transform duration-200" />
                      </div>
                      <p className="text-text-secondary leading-relaxed group-hover/item:text-marine-800 transition-colors duration-200">
                        {solution}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Solution Stats */}
                <div className="mt-6 pt-6 border-t border-marine-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gold-600">+40%</div>
                      <div className="text-xs text-text-muted">Effizienzsteigerung</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-marine-600">-30%</div>
                      <div className="text-xs text-text-muted">Kostensenkung</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Arrow */}
          <div className="flex justify-center my-8">
            <div className="bg-white border border-marine-200 rounded-full p-4 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-block mb-8 px-8 py-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-marine-200 shadow-sm">
              <p className="text-lg text-marine-700">
                Verwandeln Sie Ihre Herausforderungen in Wettbewerbsvorteile
              </p>
            </div>
            
            <Link
              href="/kontakt"
              className="btn-primary group"
            >
              <span className="flex items-center">
                Jetzt Transformation starten
                <CheckCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}