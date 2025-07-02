// src/components/home/HeroSection.js
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const stats = [
    { value: '40%', label: 'Effizienzsteigerung', desc: 'durch intelligente Automatisierung' },
    { value: '30-50%', label: 'Kostensenkung', desc: 'durch optimierte Ressourcennutzung' },
    { value: '5x', label: 'Schnellere Entscheidungen', desc: 'durch datengestützte Insights' },
    { value: '+35%', label: 'Kundenzufriedenheit', desc: 'durch personalisierte Erlebnisse' }
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container-width relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium mb-6">
              🚀 KI macht Ihr Unternehmen profitabler
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-slate-900">
              Steigern Sie Ihre Effizienz,
              <span className="text-slate-700"> senken Sie Kosten</span> und
              <span className="text-slate-600"> gewinnen Sie Kunden</span> mit KI
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Wir machen Künstliche Intelligenz für Ihr Unternehmen nutzbar. 
              Praxisnah, messbar und nachhaltig erfolgreich.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up animation-delay-200">
            <Link href="/kontakt" className="btn-primary">
              Kostenlose Analyse sichern
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="#services" className="btn-secondary">
              Mehr erfahren
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in animation-delay-400">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-slate-700 font-semibold">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}