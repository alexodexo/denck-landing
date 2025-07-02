// src/components/home/ProblemSolutionSection.js
import { X, CheckCircle } from 'lucide-react'

export default function ProblemSolutionSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Problem */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <X className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Das Problem</h3>
              </div>
              <div className="space-y-4 text-slate-700">
                <p>❌ Viele Unternehmen sind mit langsamen, veralteten Prozessen gefangen</p>
                <p>❌ Manuelle Aufgaben verschlingen Zeit und Ressourcen</p>
                <p>❌ Kundenbeschwerden häufen sich durch fehlende Automatisierung</p>
                <p>❌ Die Konkurrenz zieht mit digitalen Lösungen davon</p>
                <p>❌ Veraltete Systeme blockieren den Fortschritt</p>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Die Lösung</h3>
              </div>
              <div className="space-y-4 text-slate-700">
                <p>✅ Mit KI transformieren Sie Ihr Unternehmen grundlegend</p>
                <p>✅ Automatisierte Routineaufgaben sparen Zeit und minimieren Fehler</p>
                <p>✅ Datenbasierte Entscheidungen verschaffen Wettbewerbsvorteile</p>
                <p>✅ Personalisierte Kundenerlebnisse steigern die Zufriedenheit</p>
                <p>✅ Die richtige KI-Lösung macht Ihr Unternehmen zukunftssicher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}