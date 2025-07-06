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
            <div className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-2xl">
              <Rocket className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" />
              <span className="font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text animate-gradient bg-300%">
                Bereit für die KI-Revolution?
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Bereit für die{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 animate-gradient bg-300%">
              KI-Revolution
            </span>?
          </h2>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam herausfinden, wie KI Ihr Unternehmen voranbringen kann.
          </p>
        </div>

        {/* Main CTA */}
        <div className="mb-12">
          <Link 
            href="/kontakt" 
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/25 text-lg"
          >
            <span className="relative z-10 flex items-center">
              Jetzt kostenlose Analyse sichern
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </Link>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="group">
            <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Kostenlos & unverbindlich</h3>
              <p className="text-slate-400 text-sm">
                Keine versteckten Kosten, keine Verpflichtungen
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">30 Minuten</h3>
              <p className="text-slate-400 text-sm">
                Kompakte Analyse mit konkreten Handlungsempfehlungen
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Online oder vor Ort</h3>
              <p className="text-slate-400 text-sm">
                Flexible Beratung nach Ihren Wünschen
              </p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ihr Weg in die KI-Zukunft beginnt heute
            </h3>
            <p className="text-slate-300 mb-6">
              Verpassen Sie nicht die Chance, Ihr Unternehmen mit KI zu transformieren. 
              Unsere Experten stehen bereit, um Ihnen den optimalen Weg zu zeigen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/kontakt"
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-400 hover:to-pink-400 transition-all duration-200 transform hover:scale-105"
              >
                Termin vereinbaren
                <Calendar className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </Link>
              
              <Link
                href="/leistungen"
                className="group inline-flex items-center px-6 py-3 text-white bg-slate-700/80 backdrop-blur-xl border border-slate-600 rounded-lg font-semibold hover:bg-slate-600/80 hover:border-slate-500 transition-all duration-200"
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