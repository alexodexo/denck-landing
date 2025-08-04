// src/components/home/CTASection.js
import Link from 'next/link'
import { ArrowRight, Rocket, Calendar, Clock } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container-width text-center relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gold-100 border border-gold-200 rounded-full shadow-lg">
              <Rocket className="w-6 h-6 text-gold-600" />
              <span className="font-medium text-gold-700">
                Bereit für die KI-Revolution?
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-marine-900 leading-tight">
            Bereit für die{' '}
            <span className="gradient-text">
              KI-Revolution
            </span>?
          </h2>
          
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam herausfinden, wie KI Ihr Unternehmen voranbringen kann.
          </p>
        </div>

        {/* Main CTA */}
        <div className="mb-12">
          <Link 
            href="/kontakt" 
            className="btn-primary group text-lg"
          >
            <span className="flex items-center">
              Jetzt kostenlose Analyse sichern
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="group">
            <div className="card group-hover:scale-105">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-gold-200 transition-all duration-300">
                <Calendar className="h-6 w-6 text-gold-600" />
              </div>
              <h3 className="text-lg font-semibold text-marine-800 mb-2">Kostenlos & unverbindlich</h3>
              <p className="text-text-secondary text-sm">
                Keine versteckten Kosten, keine Verpflichtungen
              </p>
            </div>
          </div>

          <div className="group">
            <div className="card group-hover:scale-105">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-gold-200 transition-all duration-300">
                <Clock className="h-6 w-6 text-gold-600" />
              </div>
              <h3 className="text-lg font-semibold text-marine-800 mb-2">30 Minuten</h3>
              <p className="text-text-secondary text-sm">
                Kompakte Analyse mit konkreten Handlungsempfehlungen
              </p>
            </div>
          </div>

          <div className="group">
            <div className="card group-hover:scale-105">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-gold-200 transition-all duration-300">
                <Rocket className="h-6 w-6 text-gold-600" />
              </div>
              <h3 className="text-lg font-semibold text-marine-800 mb-2">Online oder vor Ort</h3>
              <p className="text-text-secondary text-sm">
                Flexible Beratung nach Ihren Wünschen
              </p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="card max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-marine-900 mb-4">
              Ihr Weg in die KI-Zukunft beginnt heute
            </h3>
            <p className="text-text-secondary mb-6">
              Verpassen Sie nicht die Chance, Ihr Unternehmen mit KI zu transformieren. 
              Unsere Experten stehen bereit, um Ihnen den optimalen Weg zu zeigen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/kontakt"
                className="btn-primary group"
              >
                Termin vereinbaren
                <Calendar className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </Link>
              
              <Link
                href="/leistungen"
                className="btn-secondary group"
              >
                Alle Leistungen
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}