// src/components/home/ProblemSolutionSection.js
import { X, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

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
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Neural Network Animation */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10">
            <defs>
              <pattern id="neural-grid-problem" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#64748b" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-grid-problem)" />
          </svg>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-[150px] opacity-20" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-[150px] opacity-20" />
      </div>

      <div className="container-width relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-2xl">
              <Lightbulb className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" />
              <span className="font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text animate-gradient bg-300%">
                Problem & Lösung
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Von{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Herausforderungen
            </span>{' '}
            zu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Chancen
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Erkennen Sie die Probleme und entdecken Sie die Lösungen
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Problem Card */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl" />
              
              <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 h-full hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Das Problem</h3>
                </div>
                
                <div className="space-y-4">
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-start space-x-3 group/item">
                      <div className="flex-shrink-0 mt-1">
                        <X className="h-5 w-5 text-red-400 group-hover/item:scale-110 transition-transform duration-200" />
                      </div>
                      <p className="text-slate-300 leading-relaxed group-hover/item:text-white transition-colors duration-200">
                        {problem}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Problem Stats */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-400">78%</div>
                      <div className="text-xs text-slate-500">Ineffiziente Prozesse</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400">-25%</div>
                      <div className="text-xs text-slate-500">Produktivitätsverlust</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Card */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl" />
              
              <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 h-full hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Die Lösung</h3>
                </div>
                
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3 group/item">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-400 group-hover/item:scale-110 transition-transform duration-200" />
                      </div>
                      <p className="text-slate-300 leading-relaxed group-hover/item:text-white transition-colors duration-200">
                        {solution}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Solution Stats */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400">+40%</div>
                      <div className="text-xs text-slate-500">Effizienzsteigerung</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">-30%</div>
                      <div className="text-xs text-slate-500">Kostensenkung</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Arrow */}
          <div className="flex justify-center my-8">
            <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-600/50 rounded-full p-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-block mb-8 px-8 py-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50">
              <p className="text-lg text-slate-300">
                Verwandeln Sie Ihre Herausforderungen in Wettbewerbsvorteile
              </p>
            </div>
            
            <a
              href="/kontakt"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25"
            >
              <span className="relative z-10 flex items-center">
                Jetzt Transformation starten
                <CheckCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}