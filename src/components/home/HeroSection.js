// src/components/home/HeroSection.js
import Link from 'next/link'
import { ArrowRight, Bot, Zap } from 'lucide-react'

export default function HeroSection() {
  const stats = [
    { value: '40%', label: 'Effizienzsteigerung', desc: 'durch intelligente Automatisierung' },
    { value: '30-50%', label: 'Kostensenkung', desc: 'durch optimierte Ressourcennutzung' },
    { value: '5x', label: 'Schnellere Entscheidungen', desc: 'durch datengestützte Insights' },
    { value: '+35%', label: 'Kundenzufriedenheit', desc: 'durch personalisierte Erlebnisse' }
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container-width relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-2xl">
                <Bot className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" />
                <span className="font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text animate-gradient bg-300%">
                  🚀 KI macht Ihr Unternehmen profitabler
                </span>
                <Zap className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400" />
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Steigern Sie Ihre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 animate-gradient bg-300%">
                Effizienz
              </span>,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                senken Sie Kosten
              </span>{' '}und<br />
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  gewinnen Sie Kunden
                </span>
                <Zap className="absolute -top-8 -right-8 w-6 h-6 text-yellow-400 animate-pulse" />
              </span>{' '}mit KI
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Wir machen Künstliche Intelligenz für Ihr Unternehmen nutzbar. 
              Praxisnah, messbar und nachhaltig erfolgreich.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up animation-delay-200">
            <Link href="/kontakt" className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10">
                Kostenlose Analyse sichern
              </span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </Link>
            
            <Link href="#services" className="group inline-flex items-center px-8 py-4 text-white bg-slate-800/80 backdrop-blur-xl border-2 border-slate-600 rounded-lg font-semibold hover:bg-slate-700/80 hover:border-slate-500 transition-all duration-300 shadow-xl">
              Mehr erfahren
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in animation-delay-400">
            {stats.map((stat, index) => (
              <div key={index} className="group relative transition-all duration-700 transform hover:scale-105">
                <div className="relative h-full bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" />
                  
                  <div className="relative z-10 text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-slate-400">{stat.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}