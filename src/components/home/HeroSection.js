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
    <section className="relative min-h-screen flex items-center pt-20 bg-bg-primary">
      <div className="container-width relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-white shadow-lg border border-marine-200 rounded-full">
                <Bot className="w-6 h-6 text-marine-600" />
                <span className="font-medium text-marine-800">
                  🚀 KI macht Ihr Unternehmen profitabler
                </span>
                <Zap className="w-6 h-6 text-gold-600" />
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-text-primary">
              Steigern Sie Ihre{' '}
              <span className="text-marine-600">
                Effizienz
              </span>,<br />
              <span className="text-gold-600">
                senken Sie Kosten
              </span>{' '}und<br />
              <span className="relative">
                <span className="text-marine-700">
                  gewinnen Sie Kunden
                </span>
                <Zap className="absolute -top-8 -right-8 w-6 h-6 text-gold-500 animate-float" />
              </span>{' '}mit KI
            </h1>
            
            <p className="text-xl sm:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Wir machen Künstliche Intelligenz für Ihr Unternehmen nutzbar. 
              Praxisnah, messbar und nachhaltig erfolgreich.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up animation-delay-200">
            <Link href="/kontakt" className="btn-primary group">
              <span className="relative z-10">
                Kostenlose Analyse sichern
              </span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link href="#services" className="btn-secondary group">
              Mehr erfahren
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in animation-delay-400">
            {stats.map((stat, index) => (
              <div key={index} className="group bg-white shadow-lg border border-marine-100 rounded-xl p-6 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-marine-800 font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-text-secondary">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}