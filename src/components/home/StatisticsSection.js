// src/components/home/StatisticsSection.js
import { useEffect, useState, useRef } from 'react'
import { TrendingUp, Users, Building2, DollarSign, Phone, Megaphone, BarChart3 } from 'lucide-react'

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  
  const statistics = [
    {
      percentage: 90,
      icon: TrendingUp,
      title: 'der KI Nutzer sagen, dass KI ihre Arbeits-Abläufe verbessert',
      source: 'Juliety, 2024',
      gradient: 'from-blue-400 to-cyan-400',
      delay: 0
    },
    {
      percentage: 83,
      icon: Users,
      title: 'der IT-Führungskräfte sehen KI als strategische Priorität im Unternehmen',
      source: 'IBM, 2023',
      gradient: 'from-purple-400 to-pink-400',
      delay: 100
    },
    {
      percentage: 64,
      icon: Building2,
      title: 'der Arbeitnehmer wollen mehr KI-Tools in ihren Unternehmen',
      source: 'Forbes, 2024',
      gradient: 'from-green-400 to-emerald-400',
      delay: 200
    },
    {
      percentage: 50,
      icon: DollarSign,
      title: 'der Unternehmen, die KI nutzen, haben dadurch ihre Kosten gesenkt',
      source: 'McKinsey, 2023',
      gradient: 'from-yellow-400 to-orange-400',
      delay: 300
    },
    {
      percentage: 95,
      icon: Phone,
      title: 'der Telekommunikations-unternehmen nutzen KI zur Kundenzufriedenheit',
      source: 'Accenture, 2023',
      gradient: 'from-red-400 to-rose-400',
      delay: 400
    },
    {
      percentage: 81,
      icon: Megaphone,
      title: 'der Marketingleiter erwarten sehr große Veränderungen durch KI',
      source: 'Gartner, 2023',
      gradient: 'from-indigo-400 to-blue-400',
      delay: 500
    }
  ]

  // Intersection Observer für Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const AnimatedNumber = ({ value, isVisible }) => {
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2500
      const steps = 70
      const stepValue = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [value, isVisible])

    return <span className="tabular-nums">{displayValue}</span>
  }

  return (
    <section ref={sectionRef} className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#3b82f640_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#8b5cf640_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,#ec489940_0%,transparent_50%)]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-2xl">
              <BarChart3 className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-medium bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
                Beeindruckende Zahlen
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Den konkreten{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 animate-gradient bg-300% bg-gradient-x">
                Nutzen
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Aktuelle Studien zeigen: KI ist kein Hype, sondern ein echter Game-Changer für Unternehmen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {statistics.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                {/* Card Container */}
                <div className="relative h-full bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl`} 
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Percentage */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-baseline">
                        <span className={`text-6xl lg:text-7xl font-bold bg-gradient-to-br ${stat.gradient} text-transparent bg-clip-text transition-all duration-300 group-hover:scale-110`}>
                          <AnimatedNumber value={stat.percentage} isVisible={isVisible} />
                        </span>
                        <span className={`text-3xl lg:text-4xl font-bold bg-gradient-to-br ${stat.gradient} text-transparent bg-clip-text ml-1`}>
                          %
                        </span>
                      </div>
                      
                      <div className={`relative p-3 rounded-xl bg-gradient-to-br ${stat.gradient} bg-opacity-10 group-hover:scale-110 transition-all duration-300`}>
                        <Icon className="h-7 w-7 lg:h-8 lg:w-8 text-white" />
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stat.gradient} opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-300`} />
                      </div>
                    </div>

                    {/* Title */}
                    <p className="text-slate-200 mb-4 leading-relaxed text-sm lg:text-base">
                      {stat.title}
                    </p>

                    {/* Source with hover effect */}
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-500 font-medium group-hover:text-slate-400 transition-colors duration-300">
                        {stat.source}
                      </p>
                      <div className={`h-1 w-20 bg-gradient-to-r ${stat.gradient} rounded-full opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-500`} />
                    </div>
                  </div>

                  {/* Border Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} style={{ padding: '1px' }}>
                    <div className="bg-slate-800 w-full h-full rounded-2xl" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block mb-8">
            <p className="text-lg text-slate-300 bg-slate-800/50 backdrop-blur-xl px-8 py-4 rounded-full border border-slate-700/50">
              Überzeugt von den Zahlen? Lassen Sie uns über Ihre KI-Strategie sprechen.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/kontakt"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/25"
            >
              <span className="relative z-10 flex items-center">
                Kostenlose Beratung starten
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </a>
            
            <a
              href="/leistungen"
              className="group inline-flex items-center px-8 py-4 text-white bg-slate-800/80 backdrop-blur-xl border-2 border-slate-600 rounded-lg font-semibold hover:bg-slate-700/80 hover:border-slate-500 transition-all duration-300 shadow-xl"
            >
              Mehr über unsere Leistungen
              <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}