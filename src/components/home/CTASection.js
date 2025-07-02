// src/components/home/CTASection.js
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding bg-slate-900 text-white">
      <div className="container-width text-center">
        <h2 className="text-4xl font-bold mb-4">
          Bereit für die KI-Revolution?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-300">
          Lassen Sie uns gemeinsam herausfinden, wie KI Ihr Unternehmen voranbringen kann.
        </p>
        <Link href="/kontakt" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
          Jetzt kostenlose Analyse sichern
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <p className="mt-4 text-sm text-slate-400">
          Kostenlos & unverbindlich • 30 Minuten • Online oder vor Ort
        </p>
      </div>
    </section>
  )
}